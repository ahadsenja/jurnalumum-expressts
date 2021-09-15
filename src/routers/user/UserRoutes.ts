import { Router } from "express";
import IRouter from "../../interfaces/RouterInterface";

import UserController from "../../controllers/user/UserController";

class UserRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.get('/', UserController.getAll);
    this.router.get('/:id', UserController.getById);
    this.router.post('/', UserController.create);
    this.router.put('/:id', UserController.update);
    this.router.delete('/:id', UserController.delete);
  }
}

export default new UserRoutes().router;