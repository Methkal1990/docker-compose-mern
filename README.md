# Docker development for MERN stack based applications

Before you run this environment, you need to have [Docker installed](https://docs.docker.com/get-docker/)

### To run
at the root of the project run:

`docker-compose up`

### How to install an npm package
1- add the package manually to the pakage.json
2- run `docker-compose down`
3- run `docker-compose up --build`

this seem not practical comparing to running just `npm install` in normal cases but think about; wouldn't you prefer adding the package manually and not going into setting up all this complicated environment (MongoDB + React + Nodejs). Also, this way you wouldn't need to deal with huge node_modules folders
