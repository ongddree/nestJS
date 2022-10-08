import * as express from 'express';
import catsRouter from './cats/cats.route';

//express의 인스턴스. app이 서버 역할
const app: express.Express = express();

//* logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log('this is logging middleware');
  next();
});

//* json middleware
app.use(express.json());

app.use(catsRouter);

//* 404 middleware
app.use((req, res, next) => {
  console.log('this is error middleware');
  res.send({ error: '404 not found error' });
});

app.listen(8000, () => {
  console.log('server is on....');
});
