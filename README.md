# phaser-docker-base

## Setup av miljön

Installera ( Docker )[https://www.docker.com/]

```bash
git clone https://github.com/jensnti/phaser-docker-base MAPPNAMN

cd MAPPNAMN

rm -rf .git
```
Skapa repo på github.com

```bash
git init
git add .
git commit -m "setup"
git branch -M main
git remote add origin URL
git push -u origin main
```

Se över Dockerfile och docker-compose.yml och se om något behöver ändras.

```bash
docker-compose up -d --build

docker ps
```

Fixa databasen, genom att köra bash och mysql på imagen.
```
docker-compose exec db bash

mysql -u root -p
```

SQL att köra.

```sql
CREATE USER 'gameuser'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON game.* TO 'gameuser'@'%';
ALTER USER 'gameuser'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;
```

## Phaser tutorial

Kör igenom följande tutorial.

https://phaser.io/tutorials/making-your-first-phaser-3-game/part1

## Databas

Databasmodellen kommer från tidigare projekt.
Databasen finns som dumpad som hiscore.sql, använd tableplus för att importera eller kör genom docker.





http://free-tex-packer.com/app/

https://rexrainbow.github.io/phaser3-rex-notes/docs/site/
