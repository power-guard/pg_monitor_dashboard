from datetime import datetime
import threading

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from pg_monitor_demo_srv.worker import dummy_worker


worker_thread = None
shmem_mutex =  threading.Lock()
monitoring_data = dict() # accesses to this should go through shmem_mutex

@csrf_exempt
def poll(request):
    global worker_thread

    # if currently downloading data, return the partial data
    if worker_thread and worker_thread.is_alive():
        with shmem_mutex:
            return JsonResponse(monitoring_data)

    # if the most recent download was completed less than 1 minute ago, return that
    elif worker_thread and monitoring_data['proc_end'] is not None:
        last_proc_end = datetime.fromisoformat(monitoring_data['proc_end'])
        delta = datetime.now() - last_proc_end
        if delta.total_seconds() < 60:
            with shmem_mutex:
                return JsonResponse(monitoring_data)

    # Latest data is stale. Start a new fetch.
    worker_thread = threading.Thread(target=dummy_worker, args=(shmem_mutex, monitoring_data))
    worker_thread.start()

    with shmem_mutex:
        return JsonResponse(monitoring_data)
