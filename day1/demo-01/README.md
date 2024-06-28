# Demo 01

測試透過 bind mounts 把 config 檔案掛載進容器內

1. 建立資料夾

```bash
mkdir config
```

2. 內部放入設定檔

3. docker 指令 + volume 掛載

```bash
docker container run --name <container-name> -dit -v $(pwd)/config:/app/config alpine
```

* container-name: 請使用 <username>-<random-string>

4. exec 進到容器內確認是否有成功掛載

```bash
docker container ls
docker container exec -it {container id} ash
```

5. 容器內修改檔案

```bash
apk udpate
apk add vim
```

6. 離開容器，並確認檔案是否成功修正
