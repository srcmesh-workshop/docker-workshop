# Demo - Graylog

- Start server

```bash
docker compose up -d
```

Graylog UI

http://{ip}:9000
admin/srcmesh-1234

- Create Inputs

- Run container to send logs to Graylog

```bash
docker container run --name <container-name> -d \
  --label "com.docker.compose.service=webserver" \
  --label "com.docker.compose.project=srcmesh" \
  --log-driver=gelf \
  --log-opt gelf-address=udp://127.0.0.1:12201 \
  --log-opt tag="myweb" \
  -p 5566:80 \
  nginx:alpine
```

實驗完成後，刪除容器

```bash
docker container stop <container-name>
docker container rm
```
