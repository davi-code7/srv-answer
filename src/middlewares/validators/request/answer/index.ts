import { Request, Response, NextFunction } from 'express';

export function validateStoreQueueContact(
  req: Request,
  res: Response,
  next: NextFunction,
): NextFunction | Response {
  const { api_key } = req.body;

  const errors: string[] = [];

  if (!api_key) {
    errors.push('api_key is required');
  } else if (api_key.length === 0) {
    errors.push('api_key must be valid.');
  }

  if (errors.length > 0) {
    return res.status(400).send({
      status_code: 400,
      results: {},
      errors,
    });
  }

  next();
}
