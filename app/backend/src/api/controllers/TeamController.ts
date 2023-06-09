import { Request, Response } from 'express';
import IServiceTeam from '../interfaces/IServiceTeam';

export default class TeamController {
  private _service: IServiceTeam;

  constructor(service: IServiceTeam) {
    this._service = service;
  }

  async readAll(_req: Request, res: Response) {
    const result = await this._service.readAll();
    return res.status(200).json(result);
  }

  async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const result = await this._service.readById(parseInt(id, 10));
    return res.status(200).json(result);
  }
}
