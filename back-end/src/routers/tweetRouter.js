import { TweetController } from "../controllers/tweetController.js";
import { Router } from 'express';

export class TweetRouter {
  constructor() {
    this.router = Router();
    this.router.post("/tweets",  new TweetController().createTweet);
    this.router.get("/tweets/:username",  new TweetController().createTweet);
  }
}