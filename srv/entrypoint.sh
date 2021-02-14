#!/bin/sh

echo "Launching demo server"
python /code/pg_monitor_demo_srv/manage.py runserver 0.0.0.0:23500
