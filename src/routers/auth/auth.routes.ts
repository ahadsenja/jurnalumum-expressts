import BaseRoutes from '../base.routes';
import AuthController from '../../controllers/auth/auth.controller';

import validate from '../../middlewares/auth.validator';

class AuthRoutes extends BaseRoutes {

  public routes() {
    this.router.post('/register', validate, AuthController.register);
    this.router.post('/login', AuthController.login);
  }

}

export default new AuthRoutes().router;