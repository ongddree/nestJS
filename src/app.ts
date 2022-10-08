import * as express from 'express';
import { Cat, CatType } from './app.model';

//express의 인스턴스. app이 서버 역할
const app: express.Express = express();

//전체 미들웨어
app.use((req, res, next) => {
  console.log('실행');
  //라우터 찾기
  next();
});

//특정 라우터의 미들웨어
app.get(
  '/cats/blue',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    next();
  }
);

app.get('/', (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.get(
  '/cats/blue',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send({ blue: Cat[0] });
  }
);

//에러 미들웨어
app.use((req, res, next) => {
  //라우터 찾기
  res.send({ error: '404 not found error' });
});

app.listen(8000, () => {
  console.log('server is on....');
});
