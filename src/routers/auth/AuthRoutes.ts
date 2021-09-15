import BaseRoutes from '../BaseRoutes';
import AuthController from '../../controllers/auth/AuthController';

class AuthRoutes extends BaseRoutes {

  public routes() {
    this.router.post('/register', AuthController.register);
    this.router.post('/login', AuthController.login);
  }

}

export default new AuthRoutes().router;