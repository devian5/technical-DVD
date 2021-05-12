<p align="center">
  <a href="" rel="noopener">
 <img width=500px height=200px src="https://whatthefrance.org/wp-content/uploads/2021/01/Videoclub.png" alt="Project logo"></a>
</p>

<h3 align="center">Technical-DVD</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/devian5/technical-DVD.svg)](https://github.com/devian5/technical-DVD/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/devian5/technical-DVD.svg)](https://github.com/devian5/technical-DVD/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Backend with nodeJs, Express, mySQL and SequelizeORM.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Author](#author)

## 🧐 About <a name = "about"></a>
This is a project to prove our skills on SQL based backend.

## 🏁 Getting Started <a name = "getting_started"></a>
**We created  this project with every dependency in a docker container.**

To run our app you have two options:
Either run docker compose containers with this command.

```
docker-compose up 
```
After this,you get into the container and install every dependency described below this text.

```
docker exec -it <containerID> bash
```
```
npm install sequelize-cli -g
```
```
npm install
```

The second option is to install every dependency in local and for that you have to do the same proces but skipping the `docker-compose` part.


After installing every dependency, you can get a command list using

```
sequelize
```
Inside of this list you have to run the next three.
```
sequelize db:create
```
```
sequelize db:migrate
```
```
sequelize db:seed:all
```
To test our app, you hace a postman collection in this link.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/a03bc7bab16560534331?action=collection%2Fimport)

## 🎈 Usage <a name="usage"></a>

![alt text](./api/img/Diagram.png "Title")


## ⛏️ Built Using <a name = "built_using"></a>

- [mySQL](https://www.mysql.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [docker](https://docker.org/) - Container Manager
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Sequelize](https://sequelize.org) -SQL ORM 

## ✍️ Author <a name = "author"></a>

- [@devian5](https://github.com/devian5)
