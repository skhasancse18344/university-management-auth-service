import express from 'express';
import { UserController } from './users.controller';
import { RequestValidation } from '../../middlewares/validateRequest';
import { userValidation } from './users.validation';

const router = express.Router();

router.post(
  '/createUser',
  RequestValidation.validateRequest(userValidation.createUserZodSchema),
  UserController.createUser
);

export const UserRoutes = router;
