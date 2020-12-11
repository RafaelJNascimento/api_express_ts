import express from 'express';

const app = express();

app.get('/', (resquest, response) => {
  return response.json({ message: 'Hello GoStack' });
});

app.listen(3333, () => {
  console.log(' Server started on port 33333');
});