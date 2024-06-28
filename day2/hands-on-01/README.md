# Hands on 01

- Step 1: 起兩個 ubuntu 的 container，一個有加 --cpus 限制、一個沒有

```bash
docker run -it --rm ubuntu bash
docker run -it --rm --cpus=0.1 ubuntu bash
```

- Step 2: 分別進入 container 內執行大量運算，並觀察執行時間差異

```bash
time (x=1; while [ $x -le 1000000 ]; do x=$(( $x + 1 )); done)
```
