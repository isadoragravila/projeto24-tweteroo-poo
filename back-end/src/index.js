import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';
import { AuthRouter } from './routers/authRouter.js';
import { TweetRouter } from './routers/tweetRouter.js';

const app = express();

app.use(cors());
app.use(json());

app.use(new AuthRouter().router);
app.use(new TweetRouter().router);

app.listen(5001, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});
