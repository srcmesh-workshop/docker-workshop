# Demo 03

測試 mapping host 上同一個 port number

```bash
$ docker container run -d -p 80:80 nginx:alpine
75767cc2b5912762eca645437814adbf4a756c5f32fa1471acf59bc4961a58aa

$ docker container run -d -p 80:80 nginx:alpine
27bdd8545d43e639510760c7d5fe3e2b3f8dfc1d34217eec143c25e17a31f44f
docker: Error response from daemon: driver failed programming external connectivity on endpoint strange_dijkstra (1ba881b8ee65ca9f12a794db2567abf6b40bf2e31ff41846daf1d452e9398ffd): Bind for 0.0.0.0:80 failed: port is already allocated.
```
