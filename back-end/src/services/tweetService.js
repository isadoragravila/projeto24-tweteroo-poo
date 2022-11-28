import { AuthRepository } from "../repositories/authRepository.js";
import { TweetRepository } from "../repositories/tweetRepository.js";

export class TweetService {
  createTweet(tweet, username) {
    if (!username || !tweet) {
      throw { code: "bad_request", message: "Todos os campos são obrigatórios!" }
    }

    const { avatar } = new AuthRepository().findUser(username);

    new TweetRepository().insertTweet(username, tweet, avatar);
  }

  getTweets(page) {
    if (page && page < 1) {
      throw { code: "bad_request", message: "Informe uma página válida!" }
    }

    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;

    const tweets = new TweetRepository().tweets;

    if (tweets.length <= 10) {
      return tweets.reverse();
    }
  
    return (tweets.reverse().slice(start, end));
  }
}

