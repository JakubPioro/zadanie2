Komenda inicjalizacji klastra
```
docker swarm init
```

Komenda uruchumienia usługi
```
docker stack deploy -c docker-stack.yml zadanie2
```

wynik:
```
Updating service zadanie2_postgres (id: jk9ehlf3mt19qnlzn9rrmk2zt)
Updating service zadanie2_redis (id: yd4h34wb6sibkb60uxqrgti90)
Updating service zadanie2_nginx (id: k6zvc27xcz23r5j46drzlly3x)
Updating service zadanie2_api (id: zchepzahjlpsu8jok5nonfq64)
Updating service zadanie2_client (id: n3niy1k20sw3llgl97n1kwxo6)
Updating service zadanie2_worker (id: nr11vvmbaql915yyvymoym0a1)
```

Komenda do wyświetlenia usługi
```
docker service ls 
```

wynik:
```
ID             NAME                MODE         REPLICAS   IMAGE                      PORTS
zchepzahjlps   zadanie2_api        replicated   0/1        jppollub/zadanie2:server   
n3niy1k20sw3   zadanie2_client     replicated   0/2        jppollub/zadanie2:client   
k6zvc27xcz23   zadanie2_nginx      replicated   0/2        jppollub/zadanie2:nginx    *:3050->80/tcp
jk9ehlf3mt19   zadanie2_postgres   replicated   0/1        postgres:latest            
yd4h34wb6sib   zadanie2_redis      replicated   0/1        redis:latest               
nr11vvmbaql9   zadanie2_worker     replicated   0/1        jppollub/zadanie2:worker   
```