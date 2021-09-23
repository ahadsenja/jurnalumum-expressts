import { Request, Response } from 'express';

import IController from '../../interfaces/controller.interface';

class JurnalController implements IController {
  getAll(req: Request, res: Response): Response {
    return res.send('Get All')
  }

  getById(req: Request, res: Response): Response {
    return res.send('Get by id')
  }

  create(req: Request, res: Response): Response {
    return res.send('Create')
  }

  update(req: Request, res: Response): Response {
    return res.send('Update')
  }

  delete(req: Request, res: Response): Response {
    return res.send('Delete')
  }
}

export default new JurnalController();