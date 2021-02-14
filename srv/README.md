# Demo server

## Getting started

1. From inside the `/srv` directory, build the docker image.

```shell
docker build -t pg_monitor_demo_srv .
```

2. Start an app container. Use the `-p` flag to configure port mapping. Use the `-v` flag to create a mapping between the current directory on your host machine and the `/code/` directory on the Docker container.

```shell
docker run -p 23500:23500 -v $(pwd):/code pg_monitor_demo_srv
```

3. Access the web server at `http://localhost:23500/`

## Modifying this test server

The main code for responding to requests lives in `pg_monitor_demo_srv/pg_monitor_demo_srv/views.py`.
The main code for generating a response lives in `pg_monitor_demo_srv/pg_monitor_demo_srv/worker.py`.