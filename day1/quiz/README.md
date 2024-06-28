# Quiz

- Q1. 以下關於 container 的觀念，哪些正確？ (複選)  
  (A) Container 是透過 Linux 的 namespace 與 cgroup 技術實現的  
  (B) Container 有自己的 Linux Kernel，不共享 Host 上的資源  
  (C) Container 是永久性的  
  (D) 建議每個 Container 中盡量只運行一個服務  
  (E) 應盡可能將 Container 設計成 stateful

Ans: A, D

- Q2. 以下哪個指令可以把 Container 內的 port 80 對應到 Host 的 port 8080？ (單選)  
  (A) docker container run -d -p 80:8080 websrv  
  (B) docker container run -d -p 8080:80 websrv  
  (C) docker container run -d --port 80:8080 websrv  
  (D) docker container run -d --port 8080:80 websrv

Ans: B

- Q3. 以下哪個指令可以將 Container 內的目錄 /var/log 映射到 Host 的 /tmp/logs 目錄？ (單選)  
  (A) docker container run -d --bind /var/log:/tmp/logs websrv  
  (B) docker container run -d --bind /tmp/logs:/var/log websrv  
  (C) docker container run -d -v /var/log:/tmp/logs websrv  
  (D) docker container run -d -v /tmp/logs:/var/log websrv

Ans: D

- Q4. 根據以下指令，哪些選項的描述是正確的？ (複選)

```bash
docker container run -d --name my-app \
 --health-cmd="curl -f http://localhost:8080/health || exit 1" \
 --health-interval=5s \
 --health-retries=3 \
 --health-timeout=2s \
 my-app
```

(A) curl 是 Host 中的指令，Container 中不需要有 curl 指令  
(B) 健康檢查將每 5 秒執行一次  
(C) 如果健康檢查連續失敗 3 次，容器將被標記為不健康  
(D) 健康檢查命令將訪問容器外部的 http://localhost:8080/health  
(E) 每次健康檢查的超時時間為 2 秒

Ans: B, C, E

- Q5. 關於 Docker image layer，以下哪個敘述是正確的？（單選）  
  (A) 每個 Docker image layer 都包含一個完整且獨立的操作系統  
  (B) Docker image layer 是不可變的，每個 layer 都只能讀取，不能修改  
  (C) 當建立一個新的 Docker image 時，所有的 layer 都會被重新構建  
  (D) Docker image layer 是可變的，可以在需要時進行修改

Ans: B

- Q6. 關於 Docker volume，以下哪個敘述是正確的？（單選）  
  (A) Docker volume 是存儲在容器內部的資料，當容器被刪除時資料會丟失  
  (B) 使用 Docker volume 可以在多個容器之間共享資料  
  (C) Docker Volume 只能存儲文字檔案，而 bind mounts 可以存儲任何類型的文件  
  (D) Docker Volume 和 bind mounts 不能在同一個容器中同時使用

Ans: B

- Q7. 根據以下描述:

  - Docker Image `websrv` 中有一個 /app/.env，包含一組設定 SECRET=AAAA
  - Host 中有一個 .env 檔案，包含一組設定 SECRET=BBBB
  - 用以下指令啟動 conatiner  
    docker container run -d -e SECRET=CCCC -v $(pwd)/.env:/app/.env websrv

請問 container 中的 SECRET 環境變數為:

(A) AAAA  
(B) BBBB  
(C) CCCC  
(D) undefined

Ans: C

Q8. 關於 Docker Compose，以下哪些敘述是正確的？（複選）

(A) Docker Compose 使用 YAML 文件來定義和運行多容器 Docker 應用程序  
(B) 使用 `docker compose up` 命令可以建立並啟動 Compose 文件中定義的所有服務  
(C) 在 Compose 文件中，可以使用 depends_on 來指定服務之間的依賴關係  
(D) Docker Compose 可以管理容器的 Network 和 Volume  
(E) 使用 `docker compose down` 命令可以停止並移除由 `docker compose up` 建立的容器、Network 和 Volume

Ans: A, B, C, D
解釋: E: Volume 不會被移除

Q9. 關於 Docker 容器的日誌管理，以下哪些敘述是正確的？（複選）  
(A) Docker 默認使用 json-file 日誌驅動程序  
(B) 使用 `docker container logs` 命令可以查看容器的日誌輸出  
(C) Docker 日誌驅動程序無法配置日誌旋轉 (rotation)和壓縮  
(D) 使用 --log-driver 選項可以在運行容器時指定不同的日誌驅動程序  
(E) 可以通過修改 Docker daemon 配置文件來更改日誌驅動程序

Ans: A, B, D, E

Q10. 關於 Prometheus，以下哪個敘述是錯誤的？（單選）  
(A) Prometheus 使用拉取（pull）模式收集指標資料  
(B) PromQL 是 Prometheus 的查詢語言，用於資料查詢和聚合  
(C) Prometheus 無法與 Grafana 整合來可視化收集到的資料  
(D) Prometheus 支持多種 Exporters 來收集各種系統和服務的指標

Ans: C

Q11. 設定警報的條件，有哪些建議是正確的？（複選）  
(A) 應理解應用系統的關鍵指標  
(B) 隨機設置警報閾值以確保靈活性  
(C) 根據歷史資料設置警報閾值(threshold)  
(D) 根據關鍵業務的影響設置優先級  
(E) 編寫清晰的警報訊息，提供有助於快速診斷的資訊

Ans: A, C, D, E
