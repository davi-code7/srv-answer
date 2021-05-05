import { Router } from 'express';

import { storeAnswer } from '../../controllers/answer/answer';

const router = Router();

router.post('', storeAnswer);

export default router;
