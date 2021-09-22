import { Request, Response } from 'express';

class TransactionController {
  getAll(req: Request, res: Response): Response {
    return res.send('This is get all transaction method');
  }

  getById(req: Request, res: Response): Response {
    return res.send('This is get by id transaction method');
  }

  create(req: Request, res: Response): Response {
    return res.send('This is create transaction method');
  }

  update(req: Request, res: Response): Response {
    return res.send('This is update transaction method');
  }

  delete(req: Request, res: Response): Response {
    return res.send('This is delete transaction method');
  }
}

export default new TransactionController;