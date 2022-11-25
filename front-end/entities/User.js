import Feed from "./Feed";

export default class User {
  _username;

  constructor() {
    this._username = '';
  }

  signUp() {
    const username = document.querySelector('#username').value;
    const picture = document.querySelector('#picture').value;
  
    axios
      .post('http://localhost:5001/sign-up', {
        username,
        avatar: picture
      })
      .then(() => {
        this._username = username;
        new Feed().loadTweets();
      })
      .catch(err => {
        console.error(err);
        alert('Erro ao fazer cadastro! Consulte os logs.');
      });
  }

  postTweet() {
    const tweet = document.querySelector('#tweet').value;

    axios
      .post('http://localhost:5001/tweets', {
        username: this._username,
        tweet
      })
      .then(() => {
        document.querySelector('#tweet').value = '';
        new Feed().loadTweets();
      })
      .catch(err => {
        console.error(err);
        alert('Erro ao fazer tweet! Consulte os logs.');
      });
  }
}