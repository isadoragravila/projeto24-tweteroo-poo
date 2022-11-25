import User from "./User";

export default class Tweetero {
  constructor() {
    this.user = new User();
    this.signUpButton = document.querySelector('.btn-enviar');
    this.postTweetButton = document.querySelector('.btn-enviar-tweet');
  }

  activateButtons() {
    this.signUpButton.addEventListener("click", () => this.user.signUp());
    this.postTweetButton.addEventListener("click", () => this.user.postTweet());
  }
}