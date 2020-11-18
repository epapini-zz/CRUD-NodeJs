const express = require("express");
const UserControler = require("./controller/controller");
const routes = express.Router();

const userControler = new UserControler();

//CRUD
//Requisiçao por paramentros

//Esse exemplo o projeto esta com 1 escopos. ou seja, a passagem das referencias precisa
//ser realizada para que encontre o escopo do vetor

//requisicao por filtros
routes.get("/users/:name?", (req, res) => {
  userControler.listarUser(req, res);
});

routes.post("/users", (req, res) => {
  userControler.createUser(req, res);
});

routes.put("/users/:id", (req, res) => {
  userControler.UpdateUser(req, res);
});

routes.delete("/users/:id", (req, res) => {
  userControler.RemoveUser(req, res);
});

//console.log(userControler.randIdUser());

module.exports = routes;
