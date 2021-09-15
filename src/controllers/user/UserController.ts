import { Request, Response } from 'express';

import IController from '../../interfaces/ControllerInterface';

let data: any[] = [
  { id: 1, name: 'Adi' },
  { id: 2, name: 'Budi' },
  { id: 3, name: 'Cidi' },
  { id: 4, name: 'Didi' }
]

class UserController implements IController {
  getAll(req: Request, res: Response): Response {
    return res.send(data);
  }

  getById(req: Request, res: Response): Response {
    const { id } = req.params;

    let person = data.find(item => item.id == id);

    return res.send(person);
  }

  create(req: Request, res: Response): Response {
    const { id, name } = req.body;

    data.push({ id, name });

    return res.send('Data created successfully!');
  }

  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;

    let person = data.find(item => item.id == id);
    person.name = name;
    return res.send("Update data successfully!");
  }

  delete(req: Request, res: Response): Response {
    const { id } = req.params;

    let person = data.filter(item => item.id != id);

    return res.send(person);
  }
}

export default new UserController;