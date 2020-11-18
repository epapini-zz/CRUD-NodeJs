const User = require("../classes/User");

class UserController {
  constructor() {
    this.users = [];
  }

  randIdUser(min = 1, max = 100) {
    return parseInt(Math.random() * (max - min) + min);
  }

  randCode(min = 1, max = 200) {
    return parseInt(Math.random() * (max - min) + min);
  }

  /*
  randIdUser() {
    let randomNUm = parseInt(Math.random() * 100000);
    return randomNUm;
  }
*/

  //post
  createUser(request, response) {
    const { name, code } = request.body;
    const user = new User(name, this.randCode(), this.randIdUser());
    this.users.push(user);
    response.send(user);
  }

  listarUserAll(request, response) {
    const showList = this.users.map((obj) => obj);
    response.json(showList);
  }

  //listar por parametros
  listarUserNome(request, response) {
    const { name } = request.params;
    const showList = this.users.filter((obj) => obj.name == name);
    response.json(showList);
  }

  listarUserId(request, response) {
    const { id } = request.params;
    const showList = this.users.find((obj) => obj.id == id);
    response.json(showList);
  }

  //PUT - atualizar
  UpdateUser(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const findUpdate = this.users.find((item) => item.id == id);
    findUpdate.name = name;

    response.send(findUpdate);
  }

  //delete - remover
  RemoveUser(request, response) {
    const { id } = request.params;

    const findRemove = this.users.find((item) => item.id == id);

    const RemoveItem = this.users.indexOf(findRemove);
    if (RemoveItem > -1) this.users.splice(RemoveItem, 1);

    response.sendStatus(204);
  }
}

module.exports = UserController;
