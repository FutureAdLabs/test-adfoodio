import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Food } from "../entity/Food";

export const getFoods = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const foods = await getRepository(Food).find();
  return res.json(foods);
};


export const createFood = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newFood = await getRepository(Food).create(req.body);
  const results = await getRepository(Food).save(newFood);
  return res.json(results);
};


export const getFood = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Food).findOne(req.params.id);
  return res.json(results);
};

export const updateFood = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const food = await getRepository(Food).findOne(req.params.id);
  if (food) {
    getRepository(Food).merge(food, req.body);
    const results = await getRepository(Food).save(food);
    return res.json(results);
  }

  return res.json({ msg: 'Not Costumer found' });
};


export const deleteFood = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Food).delete(req.params.id);
  return res.json(results);
};


