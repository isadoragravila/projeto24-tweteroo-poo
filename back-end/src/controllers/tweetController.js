import { TweetService } from "../services/tweetService.js";

export class TweetController {
  async createTweet(req, res) {
    try {
      const { tweet, username } = req.body;

      new TweetService().createTweet(tweet, username);

      res.status(201).send('OK, seu tweet foi criado');

    } catch (error) {
      if (error.code === "bad_request") {
        res.status(400).send(error.message);
      } else {
        res.status(500).send('Algo deu errado');
      }
    }
  }
}