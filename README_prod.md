Komenda
```
docker compose up --build
```

Wynik
```
(base) jakubpioro@MacBook-Pro-Jakub Zadanie2-2 % docker compose up --build
[+] Running 6/6
 ⠿ Container zadanie2-2-api-1       Created                                                                                                                                        0.0s
 ⠿ Container zadanie2-2-redis-1     Recreated                                                                                                                                      0.1s
 ⠿ Container zadanie2-2-worker-1    Created                                                                                                                                        0.0s
 ⠿ Container zadanie2-2-postgres-1  Recreated                                                                                                                                      0.1s
 ⠿ Container zadanie2-2-client-1    Created                                                                                                                                        0.0s
 ⠿ Container zadanie2-2-nginx-1     Created                                                                                                                                        0.0s
Attaching to zadanie2-2-api-1, zadanie2-2-client-1, zadanie2-2-nginx-1, zadanie2-2-postgres-1, zadanie2-2-redis-1, zadanie2-2-worker-1
```