import datetime
from time import sleep

from .models import DlStatus, Log

DELAY = 3 # seconds

def dummy_worker_sma(response_data):
    response_data.update('PGOM100001', DlStatus.RUNNING, None, None, None)
    response_data.update('PGOM100002', DlStatus.RUNNING, None, None, None)
    response_data.update('PGOM100003', DlStatus.RUNNING, None, None, None)

    sleep(DELAY)
    pgom1001('PGOM100001', response_data)

    sleep(DELAY)
    pgom1002('PGOM100002', response_data)

    sleep(DELAY)
    pgom1003('PGOM100003', response_data)


def dummy_worker_solar_edge(response_data):
    response_data.update('PGOM100004', DlStatus.RUNNING, None, None, None)
    response_data.update('PGOM100005', DlStatus.RUNNING, None, None, None)

    sleep(DELAY)
    pgom1004('PGOM100004', response_data)

    sleep(DELAY)
    pgom1005('PGOM100005', response_data)


def dummy_worker_ng(response_data):
    response_data.update('PGOM100006', DlStatus.RUNNING, None, None, None)
    sleep(DELAY)
    response_data.update('PGOM100006', DlStatus.ERROR, None, None, None)


def set_date_to_today(iso):
    if iso is None:
        return None
    dt = datetime.fromisoformat(iso)
    now = datetime.now()
    return dt.replace(year=now.year, month=now.month, day=now.day).isoformat()


def pgom1001(plant_id, poll_response):
    dl_status = DlStatus.DONE
    last_update = datetime.datetime.now() - datetime.timedelta(minutes=5)
    energy_series = [{
        "2021-02-14T00:15:00": 0.0,
        "2021-02-14T00:30:00": 0.0,
        "2021-02-14T00:45:00": 0.0,
        "2021-02-14T01:00:00": 0.0,
        "2021-02-14T01:15:00": 0.0,
        "2021-02-14T01:30:00": 0.0,
        "2021-02-14T01:45:00": 0.0,
        "2021-02-14T02:00:00": 0.0,
        "2021-02-14T02:15:00": 0.0,
        "2021-02-14T02:30:00": 0.0,
        "2021-02-14T02:45:00": 0.0,
        "2021-02-14T03:00:00": 0.0,
        "2021-02-14T03:15:00": 0.0,
        "2021-02-14T03:30:00": 0.0,
        "2021-02-14T03:45:00": 0.0,
        "2021-02-14T04:00:00": 0.0,
        "2021-02-14T04:15:00": 0.0,
        "2021-02-14T04:30:00": 0.0,
        "2021-02-14T04:45:00": 0.0,
        "2021-02-14T05:00:00": 0.0,
        "2021-02-14T05:15:00": 0.0,
        "2021-02-14T05:30:00": 0.0,
        "2021-02-14T05:45:00": 0.0,
        "2021-02-14T06:00:00": 0.0,
        "2021-02-14T06:15:00": 0.0,
        "2021-02-14T06:30:00": 0.0,
        "2021-02-14T06:45:00": 220.0,
        "2021-02-14T07:00:00": 688.0,
        "2021-02-14T07:15:00": 1504.0,
        "2021-02-14T07:30:00": 1996.0,
        "2021-02-14T07:45:00": 1280.0,
        "2021-02-14T08:00:00": 1400.0,
        "2021-02-14T08:15:00": 1820.0,
        "2021-02-14T08:30:00": 2888.0,
        "2021-02-14T08:45:00": 12024.0,
        "2021-02-14T09:00:00": 17704.0,
        "2021-02-14T09:15:00": 23372.0,
        "2021-02-14T09:30:00": 29528.0,
        "2021-02-14T09:45:00": 29572.0,
        "2021-02-14T10:00:00": 29268.0,
        "2021-02-14T10:15:00": 30012.0,
        "2021-02-14T10:30:00": 29872.0,
        "2021-02-14T10:45:00": 29984.0,
        "2021-02-14T11:00:00": 29976.0,
        "2021-02-14T11:15:00": 29984.0,
        "2021-02-14T11:30:00": 29976.0,
        "2021-02-14T11:45:00": 20016.0,
        }]
    logs = [
        Log(datetime.datetime.fromisoformat('2021-02-13 14:41:42'),
            'Info',
            'Time adjusted / new time'),
        Log(datetime.datetime.fromisoformat('2021-02-13 14:41:33'),
            'Info',
            'Time adjusted / old time'),
    ]
    poll_response.update(plant_id, dl_status, last_update, energy_series, logs)

def pgom1002(plant_id, poll_response):
    dl_status = DlStatus.DONE
    last_update = datetime.datetime.now() - datetime.timedelta(minutes=8)
    energy_series = [{
        "2021-02-14T00:15:00": 0.0,
        "2021-02-14T00:30:00": 0.0,
        "2021-02-14T00:45:00": 0.0,
        "2021-02-14T01:00:00": 0.0,
        "2021-02-14T01:15:00": 0.0,
        "2021-02-14T01:30:00": 0.0,
        "2021-02-14T01:45:00": 0.0,
        "2021-02-14T02:00:00": 0.0,
        "2021-02-14T02:15:00": 0.0,
        "2021-02-14T02:30:00": 0.0,
        "2021-02-14T02:45:00": 0.0,
        "2021-02-14T03:00:00": 0.0,
        "2021-02-14T03:15:00": 0.0,
        "2021-02-14T03:30:00": 0.0,
        "2021-02-14T03:45:00": 0.0,
        "2021-02-14T04:00:00": 0.0,
        "2021-02-14T04:15:00": 0.0,
        "2021-02-14T04:30:00": 0.0,
        "2021-02-14T04:45:00": 0.0,
        "2021-02-14T05:00:00": 0.0,
        "2021-02-14T05:15:00": 0.0,
        "2021-02-14T05:30:00": 0.0,
        "2021-02-14T05:45:00": 0.0,
        "2021-02-14T06:00:00": 0.0,
        "2021-02-14T06:15:00": 0.0,
        "2021-02-14T06:30:00": 0.0,
        "2021-02-14T06:45:00": 236.0,
        "2021-02-14T07:00:00": 1000.0,
        "2021-02-14T07:15:00": 2220.0,
        "2021-02-14T07:30:00": 2964.0,
        "2021-02-14T07:45:00": 1888.0,
        "2021-02-14T08:00:00": 2068.0,
        "2021-02-14T08:15:00": 2696.0,
        "2021-02-14T08:30:00": 4268.0,
        "2021-02-14T08:45:00": 17348.0,
        "2021-02-14T09:00:00": 26872.0,
        "2021-02-14T09:15:00": 36020.0,
        "2021-02-14T09:30:00": 48652.0,
        "2021-02-14T09:45:00": 48664.0,
        "2021-02-14T10:00:00": 47512.0,
        "2021-02-14T10:15:00": 49716.0,
        "2021-02-14T10:30:00": 49580.0,
        "2021-02-14T10:45:00": 48156.0,
        "2021-02-14T11:00:00": 48844.0,
        "2021-02-14T11:15:00": 49560.0,
        "2021-02-14T11:30:00": 49820.0,
        "2021-02-14T11:45:00": 33232.0,
        }]
    logs = [
        Log(datetime.datetime.fromisoformat("2021-02-14 10:42:10"), 'Info', 'Active power limited AC voltage'),
        Log(datetime.datetime.fromisoformat('2021-02-14 10:42:10'), 'Info', 'Active power limited AC voltage'),
        Log(datetime.datetime.fromisoformat('2021-02-14 10:39:20'), 'Info', 'Active power limited AC voltage'),
        Log(datetime.datetime.fromisoformat('2021-02-14 10:39:20'), 'Info', 'Active power limited AC voltage'),
        Log(datetime.datetime.fromisoformat('2021-02-14 09:40:25'), 'Info', 'Time adjusted / new time'),
        Log(datetime.datetime.fromisoformat('2021-02-14 09:40:16'), 'Info', 'Time adjusted / old time'),
        Log(datetime.datetime.fromisoformat('2021-02-13 11:14:35'), 'Info', 'Active power limited AC voltage'),
        Log(datetime.datetime.fromisoformat('2021-02-13 11:14:35'), 'Info', 'Active power limited AC voltage'),
        Log(datetime.datetime.fromisoformat('2021-02-13 11:06:09'), 'Info', 'Active power limited AC voltage'),
        Log(datetime.datetime.fromisoformat('2021-02-13 11:06:09'), 'Info', 'Active power limited AC voltage'),
    ]
    poll_response.update(plant_id, dl_status, last_update, energy_series, logs)

def pgom1003(plant_id, poll_response):
    dl_status = DlStatus.DONE
    last_update = datetime.datetime.now() - datetime.timedelta(minutes=7)
    energy_series = [
            {
                "2021-02-14 06:00:00": 0,
                "2021-02-14 07:00:00": 1213,
                "2021-02-14 08:00:00": 8844,
                "2021-02-14 09:00:00": 15481,
                "2021-02-14 10:00:00": 18447,
                "2021-02-14 11:00:00": 11743,
                "2021-02-14 12:00:00": 7060,
                "2021-02-14 13:00:00": 6622,
                "2021-02-14 14:00:00": 7300,
                "2021-02-14 15:00:00": 4646,
                "2021-02-14 16:00:00": 1312,
                "2021-02-14 17:00:00": 397,
                "2021-02-14 18:00:00": 0,
                "2021-02-14 19:00:00": 0,
                "2021-02-14 20:00:00": 0,
                },
                {
                "2021-02-14 06:00:00": 0,
                "2021-02-14 07:00:00": 1134,
                "2021-02-14 08:00:00": 8697,
                "2021-02-14 09:00:00": 15679,
                "2021-02-14 10:00:00": 18583,
                "2021-02-14 11:00:00": 11835,
                "2021-02-14 12:00:00": 7156,
                "2021-02-14 13:00:00": 6672,
                "2021-02-14 14:00:00": 7391,
                "2021-02-14 15:00:00": 4717,
                "2021-02-14 16:00:00": 1337,
                "2021-02-14 17:00:00": 403,
                "2021-02-14 18:00:00": 0,
                "2021-02-14 19:00:00": 0,
                "2021-02-14 20:00:00": 0,
                },
                {
                "2021-02-14 06:00:00": 0,
                "2021-02-14 07:00:00": 1426,
                "2021-02-14 08:00:00": 9896,
                "2021-02-14 09:00:00": 16567,
                "2021-02-14 10:00:00": 20103,
                "2021-02-14 11:00:00": 12443,
                "2021-02-14 12:00:00": 7156,
                "2021-02-14 13:00:00": 0,
                "2021-02-14 14:00:00": 0,
                "2021-02-14 15:00:00": 0,
                "2021-02-14 16:00:00": 0,
                "2021-02-14 17:00:00": 0,
                "2021-02-14 18:00:00": 0,
                "2021-02-14 19:00:00": 0,
                "2021-02-14 20:00:00": 0,
                },
                {
                "2021-02-14 06:00:00": 0,
                "2021-02-14 07:00:00": 1530,
                "2021-02-14 08:00:00": 9746,
                "2021-02-14 09:00:00": 16992,
                "2021-02-14 10:00:00": 19885,
                "2021-02-14 11:00:00": 12185,
                "2021-02-14 12:00:00": 7052,
                "2021-02-14 13:00:00": 6817,
                "2021-02-14 14:00:00": 7346,
                "2021-02-14 15:00:00": 4569,
                "2021-02-14 16:00:00": 1320,
                "2021-02-14 17:00:00": 399,
                "2021-02-14 18:00:00": 0,
                "2021-02-14 19:00:00": 0,
                "2021-02-14 20:00:00": 0,
                },
                {
                "2021-02-14 06:00:00": 0,
                "2021-02-14 07:00:00": 1230,
                "2021-02-14 08:00:00": 9323,
                "2021-02-14 09:00:00": 15883,
                "2021-02-14 10:00:00": 18512,
                "2021-02-14 11:00:00": 11620,
                "2021-02-14 12:00:00": 6848,
                "2021-02-14 13:00:00": 6377,
                "2021-02-14 14:00:00": 7046,
                "2021-02-14 15:00:00": 4436,
                "2021-02-14 16:00:00": 1260,
                "2021-02-14 17:00:00": 380,
                "2021-02-14 18:00:00": 0,
                "2021-02-14 19:00:00": 0,
                "2021-02-14 20:00:00": 0,
                },
        ]
    logs = []

    poll_response.update(plant_id, dl_status, last_update, energy_series, logs)


def pgom1004(plant_id, poll_response):
    """Mock response for a Solar Edge site"""
    dl_status = DlStatus.DONE
    last_update = datetime.datetime.now() - datetime.timedelta(minutes=75)
    energy_series = []

    vals = solar_edge_site1['energy']['values']
    series1 = dict()
    for val in vals:
        ts = val['date']
        series1[ts] = val['value']
    energy_series.append(series1)

    logs = [
        Log(datetime.datetime.now(), 'WARNING', '2 active alerts.')
    ]
    poll_response.update(plant_id, dl_status, last_update, energy_series, logs)


def pgom1005(plant_id, poll_response):
    """Mock response for a Solar Edge site with 2 series"""
    dl_status = DlStatus.DONE
    last_update = datetime.datetime.now() - datetime.timedelta(minutes=75)
    energy_series = []

    vals = solar_edge_site1['energy']['values']
    series1 = dict()
    for val in vals:
        ts = val['date']
        series1[ts] = val['value']
    energy_series.append(series1)

    vals = solar_edge_site2['energy']['values']
    series2 = dict()
    for val in vals:
        ts = val['date']
        series2[ts] = val['value']
    energy_series.append(series2)

    logs = [
        Log(datetime.datetime.now(), 'ERROR', '154 active alerts.')
    ]
    poll_response.update(plant_id, dl_status, last_update, energy_series, logs)



solar_edge_site1 = {
    'energy': {
        'timeUnit': 'QUARTER_OF_AN_HOUR',
        'unit': 'Wh',
        'measuredBy': 'INVERTER',
        'values': [
            {'date': '2021-02-20 00:00:00', 'value': None},
            {'date': '2021-02-20 00:15:00', 'value': None},
            {'date': '2021-02-20 00:30:00', 'value': None},
            {'date': '2021-02-20 00:45:00', 'value': None},
            {'date': '2021-02-20 01:00:00', 'value': None},
            {'date': '2021-02-20 01:15:00', 'value': None},
            {'date': '2021-02-20 01:30:00', 'value': None},
            {'date': '2021-02-20 01:45:00', 'value': None},
            {'date': '2021-02-20 02:00:00', 'value': None},
            {'date': '2021-02-20 02:15:00', 'value': None},
            {'date': '2021-02-20 02:30:00', 'value': None},
            {'date': '2021-02-20 02:45:00', 'value': None},
            {'date': '2021-02-20 03:00:00', 'value': None},
            {'date': '2021-02-20 03:15:00', 'value': None},
            {'date': '2021-02-20 03:30:00', 'value': None},
            {'date': '2021-02-20 03:45:00', 'value': None},
            {'date': '2021-02-20 04:00:00', 'value': None},
            {'date': '2021-02-20 04:15:00', 'value': None},
            {'date': '2021-02-20 04:30:00', 'value': None},
            {'date': '2021-02-20 04:45:00', 'value': None},
            {'date': '2021-02-20 05:00:00', 'value': None},
            {'date': '2021-02-20 05:15:00', 'value': None},
            {'date': '2021-02-20 05:30:00', 'value': None},
            {'date': '2021-02-20 05:45:00', 'value': None},
            {'date': '2021-02-20 06:00:00', 'value': 0.0},
            {'date': '2021-02-20 06:15:00', 'value': None},
            {'date': '2021-02-20 06:30:00', 'value': 0.0},
            {'date': '2021-02-20 06:45:00', 'value': 2.0},
            {'date': '2021-02-20 07:00:00', 'value': 114.0},
            {'date': '2021-02-20 07:15:00', 'value': 357.0},
            {'date': '2021-02-20 07:30:00', 'value': 493.0},
            {'date': '2021-02-20 07:45:00', 'value': 914.0},
            {'date': '2021-02-20 08:00:00', 'value': 1888.0},
            {'date': '2021-02-20 08:15:00', 'value': 3988.0},
            {'date': '2021-02-20 08:30:00', 'value': 5687.0},
            {'date': '2021-02-20 08:45:00', 'value': 6811.0},
            {'date': '2021-02-20 09:00:00', 'value': 7995.0},
            {'date': '2021-02-20 09:15:00', 'value': 8788.0},
            {'date': '2021-02-20 09:30:00', 'value': 8943.0},
            {'date': '2021-02-20 09:45:00', 'value': 10062.0},
            {'date': '2021-02-20 10:00:00', 'value': 11134.0},
            {'date': '2021-02-20 10:15:00', 'value': 12297.0},
            {'date': '2021-02-20 10:30:00', 'value': 12528.0},
            {'date': '2021-02-20 10:45:00', 'value': 12668.0},
            {'date': '2021-02-20 11:00:00', 'value': 10975.0},
            {'date': '2021-02-20 11:15:00', 'value': 11283.0},
            {'date': '2021-02-20 11:30:00', 'value': 11373.0},
            {'date': '2021-02-20 11:45:00', 'value': 12557.0},
            {'date': '2021-02-20 12:00:00', 'value': 12718.0},
            {'date': '2021-02-20 12:15:00', 'value': 12738.0},
            {'date': '2021-02-20 12:30:00', 'value': 12703.0},
            {'date': '2021-02-20 12:45:00', 'value': 12785.0},
            {'date': '2021-02-20 13:00:00', 'value': 12732.0},
            {'date': '2021-02-20 13:15:00', 'value': 12750.0},
            {'date': '2021-02-20 13:30:00', 'value': 12689.0},
            {'date': '2021-02-20 13:45:00', 'value': 12785.0},
            {'date': '2021-02-20 14:00:00', 'value': 12730.0},
            {'date': '2021-02-20 14:15:00', 'value': 12608.0},
            {'date': '2021-02-20 14:30:00', 'value': 12102.0},
            {'date': '2021-02-20 14:45:00', 'value': 11374.0},
            {'date': '2021-02-20 15:00:00', 'value': 10955.0},
            {'date': '2021-02-20 15:15:00', 'value': 10164.0},
            {'date': '2021-02-20 15:30:00', 'value': 9299.0},
            {'date': '2021-02-20 15:45:00', 'value': 8260.0},
            {'date': '2021-02-20 16:00:00', 'value': 7178.0},
            {'date': '2021-02-20 16:15:00', 'value': 6118.0},
            {'date': '2021-02-20 16:30:00', 'value': 4966.0},
            {'date': '2021-02-20 16:45:00', 'value': 3700.0},
            {'date': '2021-02-20 17:00:00', 'value': 2049.0},
            {'date': '2021-02-20 17:15:00', 'value': 751.0},
            {'date': '2021-02-20 17:30:00', 'value': 484.0},
            {'date': '2021-02-20 17:45:00', 'value': 174.0},
            {'date': '2021-02-20 18:00:00', 'value': 17.0},
            {'date': '2021-02-20 18:15:00', 'value': 0.0},
            {'date': '2021-02-20 18:30:00', 'value': None},
            {'date': '2021-02-20 18:45:00', 'value': None},
            {'date': '2021-02-20 19:00:00', 'value': None},
            {'date': '2021-02-20 19:15:00', 'value': None},
            {'date': '2021-02-20 19:30:00', 'value': None},
            {'date': '2021-02-20 19:45:00', 'value': None},
            {'date': '2021-02-20 20:00:00', 'value': None},
            {'date': '2021-02-20 20:15:00', 'value': 0.0},
            {'date': '2021-02-20 20:30:00', 'value': None},
            {'date': '2021-02-20 20:45:00', 'value': None},
            {'date': '2021-02-20 21:00:00', 'value': None},
            {'date': '2021-02-20 21:15:00', 'value': None},
            {'date': '2021-02-20 21:30:00', 'value': None},
            {'date': '2021-02-20 21:45:00', 'value': None},
            {'date': '2021-02-20 22:00:00', 'value': None},
            {'date': '2021-02-20 22:15:00', 'value': None},
            {'date': '2021-02-20 22:30:00', 'value': None},
            {'date': '2021-02-20 22:45:00', 'value': None},
            {'date': '2021-02-20 23:00:00', 'value': None},
            {'date': '2021-02-20 23:15:00', 'value': None},
            {'date': '2021-02-20 23:30:00', 'value': None},
            {'date': '2021-02-20 23:45:00', 'value': None}
        ]
    }
}


solar_edge_site2 = {
    'energy': {
        'timeUnit': 'QUARTER_OF_AN_HOUR',
        'unit': 'Wh',
        'measuredBy': 'INVERTER',
        'values': [
            {'date': '2021-02-20 00:00:00', 'value': None},
            {'date': '2021-02-20 00:15:00', 'value': None},
            {'date': '2021-02-20 00:30:00', 'value': None},
            {'date': '2021-02-20 00:45:00', 'value': None},
            {'date': '2021-02-20 01:00:00', 'value': None},
            {'date': '2021-02-20 01:15:00', 'value': None},
            {'date': '2021-02-20 01:30:00', 'value': None},
            {'date': '2021-02-20 01:45:00', 'value': None},
            {'date': '2021-02-20 02:00:00', 'value': None},
            {'date': '2021-02-20 02:15:00', 'value': None},
            {'date': '2021-02-20 02:30:00', 'value': None},
            {'date': '2021-02-20 02:45:00', 'value': None},
            {'date': '2021-02-20 03:00:00', 'value': 0.0},
            {'date': '2021-02-20 03:15:00', 'value': None},
            {'date': '2021-02-20 03:30:00', 'value': None},
            {'date': '2021-02-20 03:45:00', 'value': None},
            {'date': '2021-02-20 04:00:00', 'value': None},
            {'date': '2021-02-20 04:15:00', 'value': None},
            {'date': '2021-02-20 04:30:00', 'value': None},
            {'date': '2021-02-20 04:45:00', 'value': None},
            {'date': '2021-02-20 05:00:00', 'value': None},
            {'date': '2021-02-20 05:15:00', 'value': None},
            {'date': '2021-02-20 05:30:00', 'value': None},
            {'date': '2021-02-20 05:45:00', 'value': None},
            {'date': '2021-02-20 06:00:00', 'value': None},
            {'date': '2021-02-20 06:15:00', 'value': 0.0},
            {'date': '2021-02-20 06:30:00', 'value': None},
            {'date': '2021-02-20 06:45:00', 'value': 0.0},
            {'date': '2021-02-20 07:00:00', 'value': 80.0},
            {'date': '2021-02-20 07:15:00', 'value': 326.0},
            {'date': '2021-02-20 07:30:00', 'value': 600.0},
            {'date': '2021-02-20 07:45:00', 'value': 1057.0},
            {'date': '2021-02-20 08:00:00', 'value': 1297.0},
            {'date': '2021-02-20 08:15:00', 'value': 1795.0},
            {'date': '2021-02-20 08:30:00', 'value': 2236.0},
            {'date': '2021-02-20 08:45:00', 'value': 2843.0},
            {'date': '2021-02-20 09:00:00', 'value': 3871.0},
            {'date': '2021-02-20 09:15:00', 'value': 5378.0},
            {'date': '2021-02-20 09:30:00', 'value': 6945.0},
            {'date': '2021-02-20 09:45:00', 'value': 4746.0},
            {'date': '2021-02-20 10:00:00', 'value': 9633.0},
            {'date': '2021-02-20 10:15:00', 'value': 10011.0},
            {'date': '2021-02-20 10:30:00', 'value': 11712.0},
            {'date': '2021-02-20 10:45:00', 'value': 12196.0},
            {'date': '2021-02-20 11:00:00', 'value': 12465.0},
            {'date': '2021-02-20 11:15:00', 'value': 12407.0},
            {'date': '2021-02-20 11:30:00', 'value': 12722.0},
            {'date': '2021-02-20 11:45:00', 'value': 12574.0},
            {'date': '2021-02-20 12:00:00', 'value': 12715.0},
            {'date': '2021-02-20 12:15:00', 'value': 12649.0},
            {'date': '2021-02-20 12:30:00', 'value': 12672.0},
            {'date': '2021-02-20 12:45:00', 'value': 12620.0},
            {'date': '2021-02-20 13:00:00', 'value': 12564.0},
            {'date': '2021-02-20 13:15:00', 'value': 12070.0},
            {'date': '2021-02-20 13:30:00', 'value': 11042.0},
            {'date': '2021-02-20 13:45:00', 'value': 10086.0},
            {'date': '2021-02-20 14:00:00', 'value': 9518.0},
            {'date': '2021-02-20 14:15:00', 'value': 8914.0},
            {'date': '2021-02-20 14:30:00', 'value': 8557.0},
            {'date': '2021-02-20 14:45:00', 'value': 8782.0},
            {'date': '2021-02-20 15:00:00', 'value': 8571.0},
            {'date': '2021-02-20 15:15:00', 'value': 7823.0},
            {'date': '2021-02-20 15:30:00', 'value': 7531.0},
            {'date': '2021-02-20 15:45:00', 'value': 6866.0},
            {'date': '2021-02-20 16:00:00', 'value': 6071.0},
            {'date': '2021-02-20 16:15:00', 'value': 5263.0},
            {'date': '2021-02-20 16:30:00', 'value': 4386.0},
            {'date': '2021-02-20 16:45:00', 'value': 3212.0},
            {'date': '2021-02-20 17:00:00', 'value': 2641.0},
            {'date': '2021-02-20 17:15:00', 'value': 1490.0},
            {'date': '2021-02-20 17:30:00', 'value': 829.0},
            {'date': '2021-02-20 17:45:00', 'value': 362.0},
            {'date': '2021-02-20 18:00:00', 'value': 55.0},
            {'date': '2021-02-20 18:15:00', 'value': 0.0},
            {'date': '2021-02-20 18:30:00', 'value': None},
            {'date': '2021-02-20 18:45:00', 'value': None},
            {'date': '2021-02-20 19:00:00', 'value': None},
            {'date': '2021-02-20 19:15:00', 'value': None},
            {'date': '2021-02-20 19:30:00', 'value': None},
            {'date': '2021-02-20 19:45:00', 'value': None},
            {'date': '2021-02-20 20:00:00', 'value': None},
            {'date': '2021-02-20 20:15:00', 'value': 0.0},
            {'date': '2021-02-20 20:30:00', 'value': None},
            {'date': '2021-02-20 20:45:00', 'value': None},
            {'date': '2021-02-20 21:00:00', 'value': None},
            {'date': '2021-02-20 21:15:00', 'value': None},
            {'date': '2021-02-20 21:30:00', 'value': None},
            {'date': '2021-02-20 21:45:00', 'value': None},
            {'date': '2021-02-20 22:00:00', 'value': None},
            {'date': '2021-02-20 22:15:00', 'value': None},
            {'date': '2021-02-20 22:30:00', 'value': None},
            {'date': '2021-02-20 22:45:00', 'value': None},
            {'date': '2021-02-20 23:00:00', 'value': None},
            {'date': '2021-02-20 23:15:00', 'value': None},
            {'date': '2021-02-20 23:30:00', 'value': None},
            {'date': '2021-02-20 23:45:00', 'value': None}
            ]
        }
    }