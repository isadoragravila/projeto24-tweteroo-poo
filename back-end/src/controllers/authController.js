import { AuthService } from "../services/authServices.js";

export class AuthController {
  async signUp(req, res) {
    try {
      const { username, avatar } = req.body;

      new AuthService().signUp(username, avatar);

      res.status(200).send('OK deu tudo certo');

    } catch (error) {
      if (error.code === "bad_request") {
        res.status(400).send(error.message);
      } else {
        res.status(500).send('Algo deu errado');
      }
    }
  }
}