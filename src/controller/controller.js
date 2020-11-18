const User = require("../classes/User");

class UserController {
  constructor() {
    this.users = [];
  }

  /*
  randIdUser(min = 1, max = 100) {
    return parseInt(Math.random() * (max - min) + min);
  }
*/

  randIdUser() {
    let randomNUm = parseInt(Math.random() * 100000);
    return randomNUm;
  }

  getUserId(request, response) {
    const usuarioId = request.params;
  }

  //post
  createUser(request, response) {
    const { name, code } = request.body;
    const user = new User(name, code, this.randIdUser());
    this.users.push(user);
    response.send(user);
  }

  listarUser(request, response) {
    const { name } = request.query;
    const showList = this.users.filter((obj) => obj.name == name);
    response.send(showList);
  }

  UpdateUser(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const findUpdate = this.users.find((item) => item.id == id);
    findUpdate.name = name;

    response.send(findUpdate);
  }

  RemoveUser(request, response) {
    const { id } = request.params;

    const findRemove = this.users.find((item) => item.id == id);

    const RemoveItem = this.users.indexOf(findRemove);
    if (RemoveItem > -1) this.users.splice(RemoveItem, 1);

    response.sendStatus(204);
  }
}

module.exports = UserController;
