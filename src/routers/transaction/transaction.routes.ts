import BaseRoutes from "../base.routes";

import { auth } from '../../middlewares/auth.middleware';
import validate from "../../middlewares/transaction.validator";
import transactionController from "../../controllers/transaction/transaction.controller";

class TransactionRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', auth, transactionController.getAll);
    this.router.get('/:id', auth, transactionController.getById);
    this.router.post('/', auth, validate, transactionController.create);
    this.router.put('/:id', auth, transactionController.update);
    this.router.delete('/:id', auth, transactionController.delete);
  }
}

export default new TransactionRoutes().router;