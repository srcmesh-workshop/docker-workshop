# 映像檔大小最佳化: ARG

Dockerfile:

```dockerfile
ARG BASE_IMAGE_NAME=openjdk
ARG BASE_IMAGE_TAG=23-jdk-slim

FROM ${BASE_IMAGE_NAME}:${BASE_IMAGE_TAG}

CMD ["java", "-version"]
```

- Step 1: 使用不同的 ARG 值建構 image

```bash
docker image build -t lab:5.1 .
docker image build -t lab:5.2 --build-arg BASE_IMAGE_VERSION=24-jdk-slim .
```

- Step 2: 測試結果

container-name: 請使用 `<username>-<random-string>`

```bash
docker container run --name <container-name>-1 -it --rm lab:5.1
docker container run --name <container-name>-2 -it --rm lab:5.2
```

實驗完成後，刪除容器

```bash
docker container stop <container-name>-1 <container-name>-2
docker container rm <container-name>-1 <container-name>-2
```
