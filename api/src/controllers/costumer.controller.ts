import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Costumer } from "../entity/Costumer";

export const getCostumers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const costumers = await getRepository(Costumer).find();
  return res.json(costumers);
};


export const createCostumer = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCostumer = await getRepository(Costumer).create(req.body);
  const results = await getRepository(Costumer).save(newCostumer);
  return res.json(results);
};


export const getCostumer = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Costumer).findOne(req.params.id);
  return res.json(results);
};

export const updateCostumer = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const costumer = await getRepository(Costumer).findOne(req.params.id);
  if (costumer) {
    getRepository(Costumer).merge(costumer, req.body);
    const results = await getRepository(Costumer).save(costumer);
    return res.json(results);
  }

  return res.json({ msg: 'Not Costumer found' });
};


export const deleteCostumer = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Costumer).delete(req.params.id);
  return res.json(results);
};