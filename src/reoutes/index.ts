import { Router } from 'express';

const routes = Router();

routes.get('/', (resquest, response) => response.json({ message: 'Hello GoStack' }));

export default routes;
