import 'reflect-metadata';
import express from "express";
import cors from 'cors';
import { createConnection } from 'typeorm';

import costumerRoutes from './routes/costumer.routes';
import foodRoutes from './routes/food.routes';

const port = process.env.NODE_PORT || 4848;

export function run() {
  const app = express();
  createConnection()

  //middlewares
  app.use(cors());
  app.use(express.json());

  //routes
  app.get("/", function (_, res) {
    res.type('text/plain').send("Food can be served");
  });

  app.use(costumerRoutes);
  app.use(foodRoutes);

  return app.listen(port, function () {
    // Port is forwarded by docker to 80.
    console.log(`Listening on http://localhost:${port}`);
  })
}

if (process.env.NODE_ENV !== 'testing') {
  run();
}
