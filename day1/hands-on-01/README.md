## 說明

- nginx:alpine image 裡的 Nginx
  - 預設網頁會在 `/usr/share/nginx/html` 讀取 index.html
  - 設定檔在 `/etc/nginx/conf.d/default.conf`
- 請在 host 建立一個檔案夾裡面，存放自己編輯的 index.html
- 參考檔案
  - index.html
  - default.conf

## 實作 1

- 請用 nginx:alpine image 啟動一個 container，以下目標：
  - 利用 bind mounts 的方式將自己的首頁掛載進去
  - 利用 port mapping 的方式，讓 host 的 port 可以映射到 nginx 的 80 (Port 號以使用者 ID 數字作尾數 100xx)
  - 設定 health check，以確定服務運行正常
    - `--health-cmd`: 健康檢查命令，注意: 該命令須存在於 container 裡 (`curl -f http://localhost:80 || exit 1`)
    - `--health-start-period`: 啟動健康檢查的等待時間
    - `--health-interval`: 健康檢查命令的間隔時間
    - `--health-timeout`: 健康檢查命令的超時時間
    - `--health-retries`: 健康檢查命令失敗的重試次數
  - 進階: 建立自己的設定檔，將 Nginx 預設的 port 80 換成 8080

## 驗證方式

```bash
curl localhost:{mapping 到 host 的 port#}
docker container ls
# 檢查 STATUS 欄位是否為 healthy
```

## 實作 2

請將實作 1 的指令變成 compose.yaml

```
version: '3.8'

services:
  nginx:
    image: <image>
    ports:
      - '<port>:<container-port>'
    volumes:
      - <file>:<filepath in container>
    healthcheck:
      test: ['CMD-SHELL', 'test command']
      start_period: 1s
      interval: 1s
      timeout: 1s
      retries: 1
```
