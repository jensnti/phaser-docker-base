# phaser-docker-base

git clone https://github.com/jensnti/phaser-docker-base MAPPNAMN

cd MAPPNAMN

rm -rf .git

Skapa repo på github.com

git init
git add .
git commit -m "setup"
git branch -M main
git remote add origin URL
git push -u origin main

docker-compose up -d --build

docker ps

docker-compose exec db bash

mysql -u root -p

CREATE USER 'gameuser'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON game.* TO 'gameuser'@'%';
ALTER USER 'gameuser'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;

https://phaser.io/tutorials/making-your-first-phaser-3-game/part1

http://free-tex-packer.com/app/

https://rexrainbow.github.io/phaser3-rex-notes/docs/site/
