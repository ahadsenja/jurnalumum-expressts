import { Request, Response } from 'express';

import PasswordHash from '../../utils/PasswordHash';

const db = require('../../db/models');

class AuthController {

  register = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;
    const hashedPassword: string = await PasswordHash.hash(password);

    await db.user.create({
      username: username,
      password: hashedPassword
    });

    return res.send('Registration success!');
  }

  login(req: Request, res: Response): Response {
    return res.send('This is login endpoint');
  }

}

export default new AuthController;