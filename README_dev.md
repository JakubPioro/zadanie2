Komenda do budowania obrazów
```
docker compose -f docker-compose.dev.yml build
```

Wynik:
```
[+] Building 1.9s (32/32) FINISHED                                                                                                                                                                                                 
 => [jppollub/zadanie2:server internal] load build definition from Dockerfile.dev                                                                                                                                             0.0s
 => => transferring dockerfile: 237B                                                                                                                                                                                          0.0s
 => [jppollub/zadanie2:nginx internal] load build definition from Dockerfile.dev                                                                                                                                              0.0s
 => => transferring dockerfile: 186B                                                                                                                                                                                          0.0s
 => [jppollub/zadanie2:worker internal] load build definition from Dockerfile.dev                                                                                                                                             0.0s
 => => transferring dockerfile: 274B                                                                                                                                                                                          0.0s
 => [jppollub/zadanie2:client internal] load build definition from Dockerfile.dev                                                                                                                                             0.0s
 => => transferring dockerfile: 276B                                                                                                                                                                                          0.0s
 => [jppollub/zadanie2:server internal] load .dockerignore                                                                                                                                                                    0.0s
 => => transferring context: 2B                                                                                                                                                                                               0.0s
 => [jppollub/zadanie2:nginx internal] load .dockerignore                                                                                                                                                                     0.0s
 => => transferring context: 2B                                                                                                                                                                                               0.0s
 => [jppollub/zadanie2:worker internal] load .dockerignore                                                                                                                                                                    0.0s
 => => transferring context: 2B                                                                                                                                                                                               0.0s
 => [jppollub/zadanie2:client internal] load .dockerignore                                                                                                                                                                    0.0s
 => => transferring context: 2B                                                                                                                                                                                               0.0s
 => [jppollub/zadanie2:server internal] load metadata for docker.io/library/node:14.14.0-alpine                                                                                                                               1.6s
 => [jppollub/zadanie2:nginx internal] load metadata for docker.io/library/nginx:latest                                                                                                                                       0.0s
 => [jppollub/zadanie2:nginx internal] load build context                                                                                                                                                                     0.0s
 => => transferring context: 536B                                                                                                                                                                                             0.0s
 => [jppollub/zadanie2:nginx 1/2] FROM docker.io/library/nginx                                                                                                                                                                0.0s
 => [jppollub/zadanie2:client internal] load metadata for docker.io/library/node:alpine                                                                                                                                       1.4s
 => CACHED [jppollub/zadanie2:nginx 2/2] COPY ./default.conf /etc/nginx/conf.d/default.conf                                                                                                                                   0.0s
 => [jppollub/zadanie2:server] exporting to image                                                                                                                                                                             0.0s
 => => exporting layers                                                                                                                                                                                                       0.0s
 => => writing image sha256:f5d7f784c618c0c89e9d9ea52d0dc7b4cdd2c0185966e9e77afda642f9304d4d                                                                                                                                  0.0s
 => => naming to docker.io/jppollub/zadanie2:nginx                                                                                                                                                                            0.0s
 => => writing image sha256:48bc08e7e165d5bb9cb589db28799bde5d6f71e6ec44c32629c7fa58152c3f63                                                                                                                                  0.0s
 => => naming to docker.io/jppollub/zadanie2:worker                                                                                                                                                                           0.0s
 => => writing image sha256:e86c411f610ff095154ebc490fbf12328eae94716ab95943425aa47286354d3c                                                                                                                                  0.0s
 => => naming to docker.io/jppollub/zadanie2:client                                                                                                                                                                           0.0s
 => => writing image sha256:125d343e6e42169cc3c5638a355b0f036cfd914c72ca75c5152f63f1fbe4a235                                                                                                                                  0.0s
 => => naming to docker.io/jppollub/zadanie2:server                                                                                                                                                                           0.0s
 => [auth] library/node:pull token for registry-1.docker.io                                                                                                                                                                   0.0s
 => [jppollub/zadanie2:worker 1/5] FROM docker.io/library/node:alpine@sha256:57b98f182ea7253f213f742f1f7bac3f881adc5e40d72f5eafbf2e70bf6f6647                                                                                 0.0s
 => [jppollub/zadanie2:worker internal] load build context                                                                                                                                                                    0.0s
 => => transferring context: 1.72kB                                                                                                                                                                                           0.0s
 => [jppollub/zadanie2:client internal] load build context                                                                                                                                                                    0.0s
 => => transferring context: 78.39kB                                                                                                                                                                                          0.0s
 => CACHED [jppollub/zadanie2:client 2/5] WORKDIR /app                                                                                                                                                                        0.0s
 => CACHED [jppollub/zadanie2:worker 3/5] COPY ./package.json ./                                                                                                                                                              0.0s
 => CACHED [jppollub/zadanie2:worker 4/5] RUN npm install                                                                                                                                                                     0.0s
 => CACHED [jppollub/zadanie2:worker 5/5] COPY . .                                                                                                                                                                            0.0s
 => CACHED [jppollub/zadanie2:client 3/5] COPY ./package.json ./                                                                                                                                                              0.0s
 => CACHED [jppollub/zadanie2:client 4/5] RUN npm install                                                                                                                                                                     0.0s
 => CACHED [jppollub/zadanie2:client 5/5] COPY . .                                                                                                                                                                            0.0s
 => [jppollub/zadanie2:server internal] load build context                                                                                                                                                                    0.0s
 => => transferring context: 3.05kB                                                                                                                                                                                           0.0s
 => [jppollub/zadanie2:server 1/5] FROM docker.io/library/node:14.14.0-alpine@sha256:97c4cddbbf97299f5eda09946ba31d424c84848d4f4c1b7adef40e2e0d478345                                                                         0.0s
 => CACHED [jppollub/zadanie2:server 2/5] WORKDIR /app                                                                                                                                                                        0.0s
 => CACHED [jppollub/zadanie2:server 3/5] COPY ./package.json ./                                                                                                                                                              0.0s
 => CACHED [jppollub/zadanie2:server 4/5] RUN npm install                                                                                                                                                                     0.0s
 => CACHED [jppollub/zadanie2:server 5/5] COPY . .                                                                                                                                                                            0.0s
```



komenda do wysłania na dockerhub
```
docker compose -f docker-compose.dev.yml push
```

wynik:
```
[+] Running 2/33
 ⠿ redis Skipped                                                                                                                                                                                                              0.0s
 ⠿ postgres Skipped                                                                                                                                                                                                           0.0s
 ⠼ Pushing nginx: c43da4791529 Layer already exists                                                                                                                                                                         263.4s
 ⠼ Pushing nginx: 3e2c81679349 Layer already exists                                                                                                                                                                         263.4s
 ⠼ Pushing nginx: 953628b3aa60 Layer already exists                                                                                                                                                                         263.4s
 ⠼ Pushing nginx: 4d7814b49c3f Layer already exists                                                                                                                                                                         263.4s
 ⠼ Pushing nginx: cafbc65e2c20 Pushed                                                                                                                                                                                       263.4s
 ⠼ Pushing nginx: ed782fe69a65 Pushed                                                                                                                                                                                       263.4s
 ⠼ Pushing nginx: f941f90e71a8 Pushed                                                                                                                                                                                       263.4s
 ⠼ Pushing api: 4292a7b2a009 Layer already exists                                                                                                                                                                           263.4s
 ⠼ Pushing api: 1a2726d4fa77 Layer already exists                                                                                                                                                                           263.4s
 ⠼ Pushing api: e4127f361f4d Layer already exists                                                                                                                                                                           263.4s
 ⠼ Pushing api: 79f0822a2e70 Layer already exists                                                                                                                                                                           263.4s
 ⠼ Pushing api: 404322659fb7 Layer already exists                                                                                                                                                                           263.4s
 ⠼ Pushing api: 016689594853 Layer already exists                                                                                                                                                                           263.4s
 ⠼ Pushing api: a4e513199651 Layer already exists                                                                                                                                                                           263.4s
 ⠼ Pushing api: 678a0785e7d2 Layer already exists                                                                                                                                                                           263.4s
 ⠼ Pushing worker: e7a88129b492 Layer already exists                                                                                                                                                                        263.4s
 ⠼ Pushing worker: 7a19c74775c1 Layer already exists                                                                                                                                                                        263.4s
 ⠼ Pushing worker: fe24ab13cb18 Layer already exists                                                                                                                                                                        263.4s
 ⠼ Pushing worker: c453c2aa6575 Layer already exists                                                                                                                                                                        263.4s
 ⠼ Pushing worker: 499acac037d7 Layer already exists                                                                                                                                                                        263.4s
 ⠼ Pushing worker: 45f47e2937ea Layer already exists                                                                                                                                                                        263.4s
 ⠼ Pushing worker: f944b3570829 Layer already exists                                                                                                                                                                        263.4s
 ⠼ Pushing worker: dd565ff850e7 Layer already exists                                                                                                                                                                        263.4s
 ⠼ Pushing client: fe680ca5eb9f Pushed                                                                                                                                                                                      263.4s
 ⠼ Pushing client: 37414d521497 Pushed                                                                                                                                                                                      263.4s
 ⠼ Pushing client: 15d2cd46b6a5 Pushed                                                                                                                                                                                      263.4s
 ⠼ Pushing client: c453c2aa6575 Layer already exists                                                                                                                                                                        263.4s
 ⠼ Pushing client: 499acac037d7 Layer already exists                                                                                                                                                                        263.4s
 ⠼ Pushing client: 45f47e2937ea Layer already exists                                                                                                                                                                        263.4s
 ⠼ Pushing client: f944b3570829 Layer already exists                                                                                                                                                                        263.4s
 ⠼ Pushing client: dd565ff850e7 Layer already exists                                                                                                                                                                        263.4s
 ```

 Komenda uruchamiająca usługę w wersji developerskiej
```
docker compose -f docker-compose.dev.yml up
```

Wynik:
```
[+] Running 20/20
 ⠿ redis Pulled                                                                                                                                                                                                             205.9s
   ⠿ 644966968c49 Pull complete                                                                                                                                                                                               1.8s
   ⠿ bac7fabd20a4 Pull complete                                                                                                                                                                                              30.9s
   ⠿ 5284b29ee373 Pull complete                                                                                                                                                                                             201.9s
   ⠿ e95ff12af584 Pull complete                                                                                                                                                                                             201.9s
   ⠿ 1c565682a7c3 Pull complete                                                                                                                                                                                             202.0s
 ⠿ postgres Pulled                                                                                                                                                                                                          394.5s
   ⠿ dc1f00a5d701 Already exists                                                                                                                                                                                              0.0s
   ⠿ 3bb4b34c334c Pull complete                                                                                                                                                                                              90.6s
   ⠿ 4739db3ff30d Pull complete                                                                                                                                                                                              90.7s
   ⠿ 67627067cf92 Pull complete                                                                                                                                                                                              90.7s
   ⠿ 8cb1fcaf0443 Pull complete                                                                                                                                                                                             164.5s
   ⠿ 4495f752b8b4 Pull complete                                                                                                                                                                                             164.6s
   ⠿ 54aaebaf7bd6 Pull complete                                                                                                                                                                                             164.6s
   ⠿ ca284527a779 Pull complete                                                                                                                                                                                             164.6s
   ⠿ d76cd5fc0d0f Pull complete                                                                                                                                                                                             390.4s
   ⠿ 876e0dd622f7 Pull complete                                                                                                                                                                                             390.4s
   ⠿ 60a727e37a24 Pull complete                                                                                                                                                                                             390.4s
   ⠿ 76964d12325b Pull complete                                                                                                                                                                                             390.5s
   ⠿ 1d42ad48e39c Pull complete                                                                                                                                                                                             390.5s
[+] Running 7/6
 ⠿ Network zadanie2-2_default       Created                                                                                                                                                                                   0.0s
 ⠿ Container zadanie2-2-redis-1     Created                                                                                                                                                                                   0.2s
 ⠿ Container zadanie2-2-api-1       Created                                                                                                                                                                                   0.7s
 ⠿ Container zadanie2-2-postgres-1  Created                                                                                                                                                                                   0.2s
 ⠿ Container zadanie2-2-worker-1    Created                                                                                                                                                                                   0.6s
 ⠿ Container zadanie2-2-client-1    Created                                                                                                                                                                                   5.8s
 ⠿ Container zadanie2-2-nginx-1     Created                                                                                                                                                                                   0.0s
Attaching to zadanie2-2-api-1, zadanie2-2-client-1, zadanie2-2-nginx-1, zadanie2-2-postgres-1, zadanie2-2-redis-1, zadanie2-2-worker-1
```