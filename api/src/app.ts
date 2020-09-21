import  express  from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import menuRoutes from './routes/menu-routes';
import userRoutes from './routes/user-routes';

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(helmet());

app.use(menuRoutes);
app.use(userRoutes);


export default app;
