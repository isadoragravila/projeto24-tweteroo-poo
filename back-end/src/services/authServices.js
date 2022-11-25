import { AuthRepository } from "../repositories/authRepository.js";

export class AuthService {
  signUp(username, avatar) {
    if (!username || !avatar) {
      throw { code: "bad_request", message: "Todos os campos são obrigatórios!"}
    }

    new AuthRepository().insertUser(username, avatar);
  }
}