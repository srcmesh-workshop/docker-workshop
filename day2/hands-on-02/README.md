# Hands on 02

建立一個檔案夾，包含以下檔案:

```
.
├── Dockerfile
├── .dockerignore
├── MyApp.csproj
└── Program.cs
```

- 參考編譯步驟

```bash
dotnet restore
dotnet publish -c Release -o out
```

- 參考執行步驟

```bash
dotnet MyApp.dll
```

## 需求

- 請以 multi-stage 技巧開發 Dockerfile
  - mcr.microsoft.com/dotnet/sdk:8.0
  - mcr.microsoft.com/dotnet/runtime:8.0
- 善用講義中提及的其他開發技巧
- 請開發 .dockerignore 檔案

## 驗證

- 透過以下指令檢查自己開發的 Dockerfile

```bash
docker container run --rm -i hadolint/hadolint < Dockerfile
```

- 執行簡構出來的映像檔，執行成功後會看到 Hello, World!

container-name: 請使用 `<username>-<random-string>`

```bash
docker container run --name <container-name> --rm -it {image 名稱}
```
