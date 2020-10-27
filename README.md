# phaser-docker-base

## Setup av miljön

Installera [Docker](https://www.docker.com/)

```bash
git clone https://github.com/jensnti/phaser-docker-base MAPPNAMN

cd MAPPNAMN

rm -rf .git
```
Skapa repo på [GitHub](https://github.com)

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

[Making your first phaser 3 game](https://phaser.io/tutorials/making-your-first-phaser-3-game/part1)

Koden från det sista steget finns i tutgame.js och laddas från game routern.

## Databas för hiscore

Databasmodellen kommer från tidigare projekt.
Databasen finns som dumpad som hiscore.sql, använd tableplus för att importera eller kör genom docker.

Tabellen hiscore sparar score och datum.

Vi använder Axios för att kunna göra en request från sidan utan att ladda om den.

hiscore.js innehåller koden som använder [Axios](https://github.com/axios/axios) för att posta score data till POST routen /game/score.
```javascript
const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

function postScore(score) {
  instance.post('/game/score', {
    score: score
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
      console.log(error);
  });
} 
```
Ändringen i tutgame.js sker i hitbomb metoden där spelet avslutas
```javascript
postScore(score);
```

http://free-tex-packer.com/app/

https://rexrainbow.github.io/phaser3-rex-notes/docs/site/
