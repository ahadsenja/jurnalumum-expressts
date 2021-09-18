import { auth } from "../../middlewares/auth.middleware";

import BaseRoutes from "../base.routes";
import UserController from "../../controllers/user/user.controller";

class UserRoutes extends BaseRoutes {

  public routes(): void {
    this.router.get('/', auth, UserController.getAll);
    this.router.get('/:id', UserController.getById);
    this.router.post('/', UserController.create);
    this.router.put('/:id', UserController.update);
    this.router.delete('/:id', UserController.delete);
  }

}

export default new UserRoutes().router;