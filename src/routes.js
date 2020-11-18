const express = require("express");
const UserControler = require("./controller/controller");
const routes = express.Router();

const userControler = new UserControler(); //meus items cadastrados aqui

//CRUD
//Requisiçao por paramentros
//Esse exemplo o projeto esta com 1 escopos. ou seja, a passagem das referencias precisa
//ser realizada para que encontre o escopo do vetor

//MIDDLEWARES
const validaId = (req, res, next) => {
  const { id } = req.params;
  const findId = userControler.users.find((item) => item.id == id);

  if (findId == undefined) return res.send("id não encontrado");

  next();
};

const listaVazia = (req, res, next) => {
  if (userControler.users > -1) return res.send("lista vazia.");
  next();
};

//get query: name
routes.all("/users/all", listaVazia, (req, res) => {
  userControler.listarUserAll(req, res);
});

//get params: nome
routes.get("/users/filter/:name", (req, res) => {
  userControler.listarUserNome(req, res);
});

//get params: id
routes.get("/users/:id", validaId, (req, res) => {
  userControler.listarUserId(req, res);
});

routes.post("/users", (req, res) => {
  userControler.createUser(req, res);
});

routes.put("/users/:id", validaId, (req, res) => {
  userControler.UpdateUser(req, res);
});

routes.delete("/users/:id", validaId, (req, res) => {
  userControler.RemoveUser(req, res);
});

//console.log(userControler.randIdUser());

module.exports = routes;
