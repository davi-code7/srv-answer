import { Request, Response, NextFunction } from 'express';

export function validateStoreQueueContact(
  req: Request,
  res: Response,
  next: NextFunction,
): NextFunction | Response {
  const {
    api_key,
    id_contact_data,
    id_load,
    id_flow,
    id_item,
    schedule,
  } = req.body;

  const errors: string[] = [];

  if (!api_key) {
    errors.push('api_key is required');
  } else if (api_key.length === 0) {
    errors.push('api_key must be valid.');
  }

  if (!id_contact_data) {
    errors.push('id_contact_data is required');
  } else if (id_contact_data.length === 0) {
    errors.push('id_contact_data must be valid.');
  }

  if (!id_load) {
    errors.push('id_load is required');
  } else if (id_load.length === 0) {
    errors.push('id_load must be valid.');
  }

  if (!id_flow) {
    errors.push('id_flow is required');
  } else if (id_flow.length === 0) {
    errors.push('id_flow must be valid.');
  }

  if (!id_item) {
    errors.push('id_item is required');
  } else if (id_item.length === 0) {
    errors.push('id_item must be valid.');
  }

  if (!schedule) {
    errors.push('schedule is required');
  } else if (schedule.length === 0) {
    errors.push('schedule must be valid.');
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
