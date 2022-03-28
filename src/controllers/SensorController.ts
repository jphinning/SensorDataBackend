import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { SensorEntity } from "../entities/SensorEntity";

interface ISensorPayload {
  data: string;
}

interface IReqProps {
  limit: string;
  order: "ASC" | "DESC";
}

export class SensorController {
  public async createData(req: Request, res: Response) {
    const repository = getRepository(SensorEntity);

    const { data }: ISensorPayload = req.body;

    const sensorData = repository.create({ data });
    await repository.save(sensorData);

    return res.json(sensorData);
  }

  public async getAllData(req: Request, res: Response) {
    const repository = getRepository(SensorEntity);

    const { limit, order } = req.query as unknown as IReqProps;

    const users = await repository.find({
      order: {
        id: order,
      },
      take: parseInt(limit),
    });

    return res.json(users);
  }
}
