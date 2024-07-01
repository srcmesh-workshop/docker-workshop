# Demo - Prometheus + Grafana + cAdvisor

- Step 1: 啟動 Prometheus + Grafana + cAdvisor + Node Exporter

```bash
docker compose up -d
```

- Step 2: 登入 Grafana 管理介面
  http://{IP}:3000
  帳號/密碼: admin / admin

- Step 3: 新噌 Data source

Prometheus server URL: http://prometheus:9090

- Step 4: Import Dashboard

  - cAdvisor Dashboard 14282
  - node exporter Dashboard 1860
