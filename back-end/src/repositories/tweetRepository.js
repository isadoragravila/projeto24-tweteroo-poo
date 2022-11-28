import { tweets } from "../data/data.js";

export class TweetRepository {
  constructor() {
    this.tweets = tweets;
  }

  insertTweet(username, tweet, avatar) {
    tweets.push({ username, tweet, avatar });
  }

  getTweetByUser(username) {
    return this.tweets.filter(t => t.username === username);
  }
}