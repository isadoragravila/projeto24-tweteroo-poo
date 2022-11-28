import { tweets } from "../data/data.js";

export class TweetRepository {
  insertTweet(username, tweet, avatar) {
    tweets.push({ username, tweet, avatar });
  }

  getTweetByUser(username) {
    return tweets.filter(t => t.username === username);
  }

  getTweets() {
    return [...tweets];
  }
}