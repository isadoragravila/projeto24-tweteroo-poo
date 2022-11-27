import { tweets } from "../data/data.js";

export class TweetRepository {
  insertTweet(username, tweet, avatar) {
    tweets.push({ username, tweet, avatar });
  }
}