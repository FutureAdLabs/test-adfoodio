import express from "express";
import morgan from 'morgan'
import cors from 'cors'
const bodyParser = require('body-parser')
import {options} from './configs/cors.config'
import baseRoutes from './routes/base.routes'


const port = process.env.NODE_PORT || 4848;

export function run() {
  const app = express();

  // Middlewares
  app.use(cors(options))
  app.use(morgan('dev'))
  app.use(express.json())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  
  // Routes
  app.use('/', baseRoutes)

  // App Listen
  return app.listen(port, function () {
    // Port is forwarded by docker to 80.
    console.log(`Listening on http://localhost:${port}`);
  })
}

if (process.env.NODE_ENV !== 'testing') {
  run();
}
