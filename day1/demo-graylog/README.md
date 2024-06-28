# Demo - Graylog

- Start server

```bash
docker compose up -d
```

Graylog UI

http://{ip}:9000
admin/admin

- Create Inputs

- Run container to send logs to Graylog

```bash
docker container run -d \
  --log-driver=gelf \
  --log-opt gelf-address=udp://127.0.0.1:12201 \
  --log-opt tag="myweb" \
  -p 5566:80 \
  nginx:alpine
```
