# 映像檔大小最佳化: 技巧 3 合併 RUN 指令

- Step 1: 用以下指令建構 image

```bash
docker image build -t lab:2.1 -f Dockerfile.1 .
docker image build -t lab:2.2 -f Dockerfile.2 .
```

- Step 2: 比較 image 的 Size

```bash
docker image ls
```
