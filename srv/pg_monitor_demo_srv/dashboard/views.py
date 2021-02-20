import logging
import datetime
import threading
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import PollResponse
from .worker import dummy_worker_sma, dummy_worker_solar_edge

logger = logging.getLogger('pg-dashboard')

plant_tuples = [
    ('PGOM100001', 'PV System 1'),
    ('PGOM100002', 'PV System 2'),
    ('PGOM100003', 'ミラクル福岡パワーフルな太陽光発電所３'),
    ('PGOM100004', 'PGOM100004'),
    ('PGOM100005', '鹿児島県日置市吹上町')
]
response_data = None

workers = dict()

# Create your views here.
@csrf_exempt
def poll(request):
    global response_data

    if not response_data:
        # first time the endpoint is hit after server boot
        logger.info('Launching workers for the first time.')
        response_data = PollResponse(plant_tuples)
        launch_workers()

    elif not response_data.proc_end:
        logger.info(f'Still processing. Request initiated at {response_data.proc_start}')
        # Workers are fetching data.
        # Return the response as it is right now.
        # Client will poll again in a few seconds
        pass

    else:
        # A response was completed at some point in the past.
        # If the response is stale, we need to start a new one.
        diff = datetime.datetime.now() - response_data.proc_end
        cutoff = datetime.timedelta(minutes=5)
        is_stale = diff > cutoff
        if is_stale:
            logger.info('Response is stale. Launching workers.')
            response_data = PollResponse(plant_tuples)
            launch_workers()
        else:
            logger.info(f'Response is less than {str(cutoff)} old. Returning it as-is.')

    return JsonResponse(response_data.serialize())


def launch_workers():
    global workers
    global response_data
    try:
        workers['sma'] = threading.Thread(target=dummy_worker_sma, args=(response_data,))
        workers['sma'].start()
    except:
        logger.exception('Failed to start SMA thread')
        raise

    try:
        workers['se'] = threading.Thread(target=dummy_worker_solar_edge, args=(response_data,))
        workers['se'].start()
    except:
        logger.exception('Failed to start SE thread')
        raise
