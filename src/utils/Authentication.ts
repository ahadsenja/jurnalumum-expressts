import { Request } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class Authentication {
  public static passwordHash = (password: string): Promise<string> => {
    return bcrypt.hash(password, 10);
  }

  public static passwordCompare = async (text: string, encryptedText: string): Promise<boolean> => {
    let result = await bcrypt.compare(text, encryptedText);
    return result;
  }

  public static generateToken = (id: number, username: string, password: string): string => {
    const secretKey: string = process.env.JWT_SECRET_KEY || 'rahasia';

    const token: string = jwt.sign({ id, username, password }, secretKey);
    console.log('This token from Authentication file: ' + token);
    return token;
  }
}

export default Authentication;