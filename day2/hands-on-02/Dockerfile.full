# 定義 dotnet version
ARG DOTNET_VERSION=8.0
# 定義 non-root 使用者
ARG APP_USER=appuser

# 第一階段：建構階段
FROM mcr.microsoft.com/dotnet/sdk:${DOTNET_VERSION} AS build

WORKDIR /app

# 複製專案文件並還原依賴
COPY MyApp.csproj .
RUN dotnet restore

# 複製其他文件並且進行編譯
COPY . .
RUN dotnet publish -c Release -o out

# 第二階段：運行階段
FROM mcr.microsoft.com/dotnet/runtime:${DOTNET_VERSION} AS runtime
LABEL maintainer="srcmesh"

RUN ["useradd", "-r", "${APP_USER}"]

# 切换到 non-root 使用者
USER ${APP_USER}

WORKDIR /app
# 建構階段複製文件到運行階段
COPY --from=build /app/out .
ENTRYPOINT ["dotnet", "MyApp.dll"]