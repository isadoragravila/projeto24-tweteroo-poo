import { AuthRepository } from "../repositories/authRepository.js";
import { TweetRepository } from "../repositories/tweetRepository.js";

export class TweetService {
  createTweet(tweet, username) {
    if (!username || !tweet) {
      throw { code: "bad_request", message: "Todos os campos são obrigatórios!"}
    }

    const { avatar } = new AuthRepository().findUser(username);

    new TweetRepository().insertTweet(username, tweet, avatar);
  }
}


