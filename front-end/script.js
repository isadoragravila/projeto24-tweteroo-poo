class User {
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

class Feed {
  loadTweets() {
    axios.get('http://localhost:5001/tweets').then(res => {
      const tweets = res.data;
      let tweetsHtml = '';
  
      for (const tweet of tweets) {
        tweetsHtml += `
          <div class="tweet">
            <div class="avatar">
              <img src="${tweet.avatar}" />
            </div>
            <div class="content">
              <div class="user">
                @${tweet.username}
              </div>
              <div class="body">
                ${this.escapeHtml(tweet.tweet)}
              </div>
            </div>
          </div>
        `;
      }
  
      document.querySelector('.tweets').innerHTML = tweetsHtml;
      document.querySelector('.pagina-inicial').classList.add('hidden');
      document.querySelector('.tweets-page').classList.remove('hidden');
    });
  }

  escapeHtml(unsafe) {
    return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
  }
}

class Tweetero {
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

window.onload = () => {
  new Tweetero().activateButtons();
}