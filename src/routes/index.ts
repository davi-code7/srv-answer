import { Application } from 'express';

import answer from './answer/answer';

export default (app: Application): void => {
  app.use('/answer', answer);
};
