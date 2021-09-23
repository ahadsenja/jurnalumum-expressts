import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';

const validate = [
  check('jurnal_id').isInt(),
  check('date').isDate(),
  check('description').isString(),
  check('debit').isDecimal(),
  check('credit').isDecimal(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).send({ errors: errors.array() });
    }

    return next();
  }
]

export default validate;