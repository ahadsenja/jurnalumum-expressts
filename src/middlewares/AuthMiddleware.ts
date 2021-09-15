import { Request, Response, NextFunction } from 'express';

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  let authentication = true;
  if (authentication) {
    next()
  }
  return res.send('Unauthenticated');
}