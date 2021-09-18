import { Request, Response } from 'express';

class AuthController {
  login(req: Request, res: Response): Response {
    return res.send('This is login endpoint');
  }

  register(req: Request, res: Response): Response {
    return res.send('This is register endpoint');
  }
}

export default new AuthController;