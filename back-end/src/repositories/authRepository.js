import { usuarios } from "../data/data.js";

export class AuthRepository {
  constructor() {
    this.users = usuarios;
  }
  
  insertUser(username, avatar) {
    usuarios.push({ username, avatar });
  }

  findUser(username) {
    return this.users.find(user => user.username === username);
  }
}