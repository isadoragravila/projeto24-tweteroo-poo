import { AuthController } from "../controllers/authController.js";
import { Router } from 'express';

export class AuthRouter {
  constructor() {
    this.router = Router();
    this.router.post("/sign-up",  new AuthController().signUp);
  }
}