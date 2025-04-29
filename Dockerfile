# Etapa 1: build del proyecto Angular
FROM --platform=$BUILDPLATFORM node:22.15 AS builder

RUN mkdir /docker-project
WORKDIR /docker-project

RUN npm install -g @angular/cli@17.2

COPY package*.json ./
RUN npm install 

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]

FROM builder AS dev-envs

RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF
# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /

CMD ["ng", "serve", "--host", "0.0.0.0"]