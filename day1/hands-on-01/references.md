```bash
docker container run -d \
  --name <container-name> \
  -p 8081:8080 \
  -v $(pwd)/index.html:/usr/share/nginx/html/index.html \
  -v $(pwd)/default.conf:/etc/nginx/conf.d/default.conf \
  --health-cmd "curl -f http://localhost:8080 || exit 1" \
  --health-start-period=10s \
  --health-interval=5s \
  --health-timeout=3s \
  --health-retries=3 \
   nginx:alpine
```

實驗完成後，刪除容器

```bash
docker container stop <container-name>
docker container rm
```
