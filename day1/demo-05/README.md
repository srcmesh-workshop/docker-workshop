# Demo 05

container 健康檢查的指令必須要存在於 container 中

- Prepare

沿用 demo4 的 image

- Step 1:

nginx 這個 image 中沒有 nc 指令:

```bash
docker container run -d --name <container-name> \
 --health-cmd "nc localhost || exit 1" \
 --health-start-period=10s \
 --health-interval=5s \
 --health-retries=2 \
 nginx

docker inspect -f "{{json .State}}" <container-name> | jq

# 實驗完成後，刪除容器
docker container stop <container-name>
docker container rm <container-name>
```

container-name: 請使用 `<username>-<random-string>`

- Step 2:

websrv:demo5 中有 curl 指令:

```bash
docker container run -d --name <container-name> \
 --health-cmd "curl -f http://localhost:3000/health || exit 1" \
 --health-start-period=10s \
 --health-interval=5s \
 --health-retries=2 \
 websrv:demo4

docker inspect -f "{{json .State}}" <container-name> | jq

docker container ls
CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES
f0fb107b5e5e websrv:demo5 "docker-entrypoint.s…" 46 seconds ago Up 45 seconds (healthy) 3000/tcp <container-name>
```

在 STATUS 這裡也會看到 healthy

實驗完成後，刪除容器

```bash
docker container stop <container-name>
docker container rm <container-name>
```

container-name: 請使用 `<username>-<random-string>`
