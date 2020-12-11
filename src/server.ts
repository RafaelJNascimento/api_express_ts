import express from 'express';
import routes from './reoutes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log(' Server started on port 33333');
});
