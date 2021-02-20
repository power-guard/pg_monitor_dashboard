from threading import Lock
import logging
from enum import Enum
from typing import Tuple, List
from datetime import datetime

from django.db import models

PlantTuple = Tuple[str, str]

logger = logging.getLogger('pg-dashboard')

class DlStatus(Enum):
    QUEUED = 0x00 # data download not yet started
    RUNNING = 0x01 # data download in progress
    DONE = 0x02 # data download complete
    ERROR = 0x04 # failed to download data


class LogLevel(Enum):
    INFO = 0x00
    WARNING = 0x01
    ERROR = 0x02


class Log(object):
    def __init__(self, timestamp: datetime, level: str, msg: str):
        self.timestamp = timestamp
        self.level = self.parse_level(level)
        self.msg = msg

    def parse_level(self, level: str) -> LogLevel:
        level = level.lower()
        if 'info' in level:
            return LogLevel.INFO
        if 'warn' in level:
            return LogLevel.WARNING
        if 'error' in level or 'fail' in level:
            return LogLevel.ERROR
        if 'エラー' in level or '故障' in level:
            return LogLevel.ERROR
        if '情報' in level:
            return LogLevel.INFO
        return LogLevel.INFO

    def serialize(self) -> dict:
        return dict({
            'date': self.timestamp,
            'level': self.level.name,
            'description': self.msg,
        })


class MonitoringData(object):
    def __init__(self, plant_id: str, plant_name: str):
        self.id = plant_id
        self.name = plant_name
        self.dl_status = DlStatus.QUEUED
        self.last_update = None
        self.energy_series = []
        self.logs = []

    def update(self, dl_status: DlStatus,
                     last_update: datetime,
                     energy_series: List[dict],
                     logs: List[Log]):
        if dl_status:
            self.dl_status = dl_status
        if last_update:
            self.last_update = last_update
        if energy_series:
            self.energy_series += energy_series
        if logs:
            self.logs += logs

    def serialize(self) -> dict:
        return dict({
            'id': self.id,
            'name': self.name,
            'dl_status': self.dl_status.value,
            'last_update': self.last_update,
            'energy_series': self.energy_series,
            'logs': [log.serialize() for log in self.logs],
        })

    def __repr__(self):
        return f'({self.id}|status={self.dl_status.name})'

    def __str__(self):
        return f'({self.id}, {self.name})'


class PollResponse(object):
    def __init__(self, plant_tuples: List[PlantTuple]):
        """
        Args:
            plant_tuples: iterable of (str, str). Each tuple contains
                          a plant id and a plant name.
                          Example:
                          [
                              ('PGOM1001', 'Big Power Plant'),
                              ('PGOM1002', 'Medium Power Plant'),
                          ]
        """
        self.mutex = Lock()
        self.done = False
        self.proc_start = datetime.now()
        self.proc_end = None

        plant_tuples = sorted(plant_tuples, key=lambda x: x[0]) # sort by ID
        self.plants = [MonitoringData(id, name) for id, name in plant_tuples]

    def update(self, plant_id: str,
                     dl_status: DlStatus,
                     last_update: datetime,
                     energy_series: List[dict],
                     logs: List[Log]):

        for plant in self.plants:
            if plant.id == plant_id:
                with self.mutex:
                    plant.update(dl_status, last_update, energy_series, logs)
                    done = all([plant.dl_status in (DlStatus.DONE, DlStatus.ERROR) for plant in self.plants])
                    if done:
                        self.done = True
                        self.proc_end = datetime.now()
                    logger.info(f'Updated {plant_id}. Done={done}')
                return
        logger.warn(f'Invalid plant ID: {plant_id}')


    def serialize(self):
        with self.mutex:
            res = dict({
                'done': self.done,
                'proc_start': self.proc_start,
                'proc_end': self.proc_end,
                'plants': [plant.serialize() for plant in self.plants]
            })
        return res

