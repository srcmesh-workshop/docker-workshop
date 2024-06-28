# Demo 06

測試訊號處理

- Prepare demo images

  - websrv:demo6.1 同 demo4，看是要 re-tag 或是直接啟動 demo4
  - websrv:demo6.2 需經過建立

```bash
cd /day1/images/demo6.2
docker image build -t websrv:demo6.2 .
```

- Step 1:

```bash
$ docker container run -d --name demo6.1 websrv:demo4
22ebca71fedc0abcff150723746dc317c898eb87d06adbc2d14c8c4f521a8ebf

$ time docker container stop demo6.1
demo6.1

real 0m0.193s
user 0m0.014s
sys 0m0.017s
```

- Step 3:

```bash
$ docker container run -d --name demo6.2 websrv:demo6.2
8c61ac126d7fb86804d02d9bcc236f0b9900ae376676a7269af4936e0d6270a9
$ time docker container stop demo6.2
demo6.2

real 0m10.204s
user 0m0.010s
sys 0m0.017s
```
