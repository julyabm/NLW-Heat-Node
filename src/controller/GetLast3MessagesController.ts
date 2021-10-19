import { Request, Response } from 'express';
import { GetLast3MessagesService } from '../services/GetLast3MessagesService';

class GetLast3MessagesController {
  async handle(req: Request, res: Response) {
    const services = new GetLast3MessagesService();

    const result = await services.execute();

    return res.json(result);
  }
}

export { GetLast3MessagesController };
