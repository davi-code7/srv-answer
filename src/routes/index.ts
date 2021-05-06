import { Application } from 'express';

import answer from './answer/answer';
import status from './status/index';

export default (app: Application): void => {
  app.use('/answer', answer);
  app.use('/status', status);
};
