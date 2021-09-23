import BaseRoutes from "../base.routes";

import { auth } from '../../middlewares/auth.middleware';
import jurnalController from "../../controllers/jurnal/jurnal.controller";

class JurnalRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', auth, jurnalController.getAll);
    this.router.get('/:id', auth, jurnalController.getById);
    this.router.post('/', auth, jurnalController.create);
    this.router.put('/:id', auth, jurnalController.update);
    this.router.delete('/:id', auth, jurnalController.delete);
  }
}

export default new JurnalRoutes().router;