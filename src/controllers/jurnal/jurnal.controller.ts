import { Request, Response } from 'express';

import IController from '../../interfaces/controller.interface';

const db = require('../../db/models');


class JurnalController implements IController {
  getAll = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.app.locals.credential;

    const jurnals = await db.jurnal.findAll({
      where: { user_id: id },
      attributes: ['id', 'name', 'description', 'user_id'],
      order: [['id', 'ASC']]
    });

    return res.send({
      data: jurnals,
      message: 'List of jurnals'
    })
  }

  getById = async (req: Request, res: Response): Promise<Response> => {
    const { id: user_id } = req.app.locals.credential;
    const { id } = req.params;

    const jurnal = await db.jurnal.findOne({
      where: { id, user_id }
    });

    return res.send({
      data: jurnal,
      message: ''
    });
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

  update = async (req: Request, res: Response): Promise<Response> => {
    const { id: user_id } = req.app.locals.credential;
    const { id } = req.params;
    const { name, description } = req.body;

    await db.jurnal.update({
      name, description
    }, {
      where: { id, user_id }
    });

    return res.send({
      data: '',
      message: 'Successfully updated jurnal'
    })
  }

  delete = async (req: Request, res: Response): Promise<Response> => {
    const { id: user_id } = req.app.locals.credential;
    const { id } = req.params;

    await db.jurnal.destroy({
      where: { id, user_id }
    })

    return res.send({
      data: '',
      message: 'Data successfully deleted'
    })
  }
}

export default new JurnalController();