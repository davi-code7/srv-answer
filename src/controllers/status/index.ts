import { Request, Response } from 'express';

export async function status(req: Request, res: Response) {
  return res.sendStatus(200);
}
