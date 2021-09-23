import { Request, Response } from 'express';

import IController from '../../interfaces/controller.interface';

const db = require('../../db/models');


class JurnalController implements IController {
  getAll(req: Request, res: Response): Response {
    return res.send('Get All')
  }

  getById(req: Request, res: Response): Response {
    return res.send('Get by id')
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.app.locals.credential;
    const { name, description } = req.body;

    const jurnal = await db.jurnal.create({
      user_id: id,
      name: name,
      description: description
    })

    return res.send({
      data: jurnal,
      message: 'Data successfully created'
    })
  }

  update(req: Request, res: Response): Response {
    return res.send('Update')
  }

  delete(req: Request, res: Response): Response {
    return res.send('Delete')
  }
}

export default new JurnalController();