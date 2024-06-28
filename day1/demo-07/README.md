# Demo 07

- Prepare demo images

建立 docker images: websrv:demo7.1 和 websrv:demo7.2

```bash
cd /day1/images/demo7
docker image build -t websrv:demo7.1 -f Dockerfile.1 .
docker image build -t websrv:demo7.2 -f Dockerfile.2 .
```

- Step 1:

```bash
$ docker container run -d --rm websrv:demo7.1

$ docker container ls

$ docker container exec -it {container id} bash

> ps aux

# 可以發現 PID 1 的 process 是 sh

$ time docker container stop {container id}

# 需要等待 10 秒中
```

- Step 2:

```bash
$ docker container run -d --rm websrv:demo7.2

$ docker container ls

$ docker container exec -it {container id} bash

> ps aux

# 可以發現 PID 1 的 process 是 nginx

$ time docker container stop {container id}

# 不需要等待 10 秒中
```

補充: 這是因為 ubuntu 中的 sh 為 dash，且 Ubuntu 上的 dash 才會造成此問題。
