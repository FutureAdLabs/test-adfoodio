import express from "express";
import morgan from 'morgan'
import cors from 'cors'

import baseRoutes from './routes/base.routes'
import APIRoutes from './routes/api.routes'

const port = process.env.NODE_PORT || 4849;

export function run () {
  const app = express();

  
  // ref: https://www.youtube.com/watch?v=4clEduk6OQM&t=2650s&ab_channel=Fazt
  // Middlewares
  app.use(cors())
  app.use(morgan('dev'))
  app.use(express.json())


  // Routes
  app.use('/', baseRoutes)
  // app.use('/api', APIRoutes)

  // App Listen
  return app.listen(port, function () {
    // Port is forwarded by docker to 80.
    console.log(`Listening on http://localhost:${port}`);
  })
}

if(process.env.NODE_ENV !== 'testing') {
  run();
}
