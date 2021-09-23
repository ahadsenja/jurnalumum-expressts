import { Request, Response } from 'express';

const db = require('../../db/models');

class TransactionController {
  getAll = async (req: Request, res: Response): Promise<Response> => {
    const transactions = await db.transaction.findAll({
      attributes: ['id', 'date', 'description', 'debit', 'credit', 'jurnal_id']
    })

    return res.send({
      data: transactions,
      message: ''
    });
  }

  getById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const transaction = await db.transaction.findOne({
      where: { id },
      attributes: ['id', 'date', 'description', 'debit', 'credit', 'jurnal_id']
    });

    return res.send({
      data: transaction,
      message: ''
    });
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