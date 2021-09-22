import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  // Check authorization in headers
  if (!req.headers.authorization) {
    return res.status(401).send('Token not found');
  }
  let secretKey = process.env.JWT_SECRET_KEY || 'rahasia';
  const token: string = req.headers.authorization.split(' ')[1];

  try {
    const credential: string | object = jwt.verify(token, secretKey);

    if (credential) {
      req.app.locals.credential = credential;
      next()
    }

    return res.send('Invalid Token')
  } catch (error) {
    return res.send(error)
  }
}