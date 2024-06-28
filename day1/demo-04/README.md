# Demo 04

環境變數的注入

- Prepare demo4 image

```bash
cd /day1/images/demo4
docker image build -t websrv:demo4 .
```

- Step 1:

```bash
docker container run -d --rm -p 3000:3000 --name mysrv websrv:demo4

curl localhost:3000
{"message":"Hello Docker from xxxx and my secret is 123456789"}

docker container stop mysrv
```

- Step 2:

```bash
docker container run -d --rm -p 3000:3000 --name mysrv -e SECRET=SRCMESH websrv:demo4

curl localhost:3000
{"message":"Hello Docker from xxxx and my secret is SRCMESH"}

docker container stop mysrv
```

- Step 3:

```bash
# edit .env

SECRET="SREMESH-FILE"
```

```bash
docker container run -d --rm -p 3000:3000 --name mysrv -v $(pwd)/.env:/app/.env websrv:demo4

curl localhost:3000
{"message":"Hello Docker from xxxx and my secret is SREMESH-FILE"}

docker container stop mysrv
```
