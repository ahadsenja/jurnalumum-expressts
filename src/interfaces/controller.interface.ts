import { Request, Response } from 'express';

interface IController {
  getAll(req: Request, res: Response): Response;
  getById(req: Request, res: Response): Response;
  create(req: Request, res: Response): Response;
  update(req: Request, res: Response): Response;
  delete(req: Request, res: Response): Response;
}

export default IController;