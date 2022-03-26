import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { SensorEntity } from "../entities/SensorEntity";

interface ISensorPayload {
  data: string;
}

export class SensorController {
  public async createData(req: Request, res: Response) {
    const repository = getRepository(SensorEntity);

    const { data }: ISensorPayload = req.body;

    const sensorData = repository.create({ data });
    await repository.save(sensorData);

    return res.json(sensorData);
  }

  public async getAllData(_req: Request, res: Response) {
    const repository = getRepository(SensorEntity);
    const users = await repository.find();

    return res.json(users);
  }
}
