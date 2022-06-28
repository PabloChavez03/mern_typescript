import express from 'express';
import routes from './routes/video.routes';
import morgan from 'morgan';
import cors from 'cors';

//definilly express app
const app = express();

//middleware
app.use(morgan('dev')); //per each request of route, morgan will take care of returning a response in the console
app.use(cors());  //cors is middleware for external-servers. He is in charge of authorizated whould can access in the routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/', routes);

export default app;