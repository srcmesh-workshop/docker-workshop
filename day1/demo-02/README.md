# Demo 02

透過 bind mounts /bin 會發生什麼事情

1. 建立資料夾

```bash
mkdir config
```

2. 內部放入設定檔

3. docker 指令 + volume 掛載

```bash
docker container run --name <container-name> -dit -v $(pwd)/config:/bin alpine

89eeeec3f80fc2d7116f7105574c9501c33ecfbf180c640ae100f966f4d3af80
docker: Error response from daemon: failed to create task for container: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: exec: "/bin/sh": stat /bin/sh: no such file or directory: unknown.
```

因為覆蓋掉 /bin 會找不到啟動指令 CMD -> 會無法啟動 container

- container-name: 請使用 `<username>-<random-string>`

4. 實驗完成後，刪除容器

```bash
docker container stop <container-name>
docker container rm <container-name>
```
