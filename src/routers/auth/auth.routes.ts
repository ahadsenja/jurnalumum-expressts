import BaseRoutes from '../base.routes';
import AuthController from '../../controllers/auth/auth.controller';

class AuthRoutes extends BaseRoutes {

  public routes() {
    this.router.post('/register', AuthController.register);
    this.router.post('/login', AuthController.login);
  }

}

export default new AuthRoutes().router;