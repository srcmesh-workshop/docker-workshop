# 映像檔大小最佳化: ARG

- Step 1: 使用不同的 ARG 值建構 image

```bash
docker image build -t lab:5.1 .
docker image build -t lab:5.2 --build-arg BASE_IMAGE_VERSION=24-jdk-slim .
```

- Step 2: 測試結果

```bash
docker container run -it --rm lab:5.1
docker container run -it --rm lab:5.2
```
