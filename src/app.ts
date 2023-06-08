import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/users/users.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application

app.use('/api/v1/users/', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the University Management');
});
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   // res.send('Welcome to the University Management')
//   // Promise.reject(new Error('Unhandled Promise rejection'))4
//   throw new Error('Unhandled Promise rejection')
// })

//Global Error Handler
app.use(globalErrorHandler);

export default app;
