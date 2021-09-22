import { Request, Response, NextFunction } from 'express';

import Authentication from '../../utils/Authentication';

const db = require('../../db/models');

class AuthController {

  register = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;
    const hashedPassword: string = await Authentication.passwordHash(password);

    await db.user.create({
      username: username,
      password: hashedPassword
    });

    return res.send('Registration success!');
  }

  login = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    // Check user if exist
    let { username, password } = req.body;

    const user = await db.user.findOne({
      where: { username }
    });

    // Check password
    let compare = await Authentication.passwordCompare(password, user.password);

    // Generate token
    if (compare) {
      let token = Authentication.generateToken(user.id, username, user.password);
      return res.send({
        token
      });
    }

    return res.send('Authentication Failed!');
  }

  profile = (req: Request, res: Response): Response => {
    return res.send(req.app.locals.credential);
  }

}

export default new AuthController;