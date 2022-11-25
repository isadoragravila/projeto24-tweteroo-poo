import { usuarios } from "../data/data.js";

export class AuthRepository {
  insertUser(username, avatar) {
    usuarios.push({ username, avatar });
  }
}