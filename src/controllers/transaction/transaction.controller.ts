import { Request, Response } from 'express';

const db = require('../../db/models');

class TransactionController {
  getAll(req: Request, res: Response): Response {
    return res.send('Get all transaction');
  }

  getById(req: Request, res: Response): Response {
    return res.send('Get by id transaction');
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    const { jurnal_id, date, description, debit, credit } = req.body;

    const transaction = await db.transaction.create({
      jurnal_id,
      date,
      description,
      debit,
      credit
    });

    return res.send({
      data: transaction,
      message: 'Transaction successfully created'
    });
  }

  update(req: Request, res: Response): Response {
    return res.send('Update transaction');
  }

  delete(req: Request, res: Response): Response {
    return res.send('Delete transaction');
  }
}

export default new TransactionController;