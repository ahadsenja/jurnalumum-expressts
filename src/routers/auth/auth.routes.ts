import BaseRoutes from '../base.routes';
import AuthController from '../../controllers/auth/auth.controller';
import { auth } from '../../middlewares/auth.middleware';

import validate from '../../middlewares/auth.validator';

class AuthRoutes extends BaseRoutes {

  public routes() {
    this.router.post('/register', validate, AuthController.register);
    this.router.post('/login', validate, AuthController.login);
    this.router.get('/profile', auth, AuthController.profile);
  }

}

export default new AuthRoutes().router;