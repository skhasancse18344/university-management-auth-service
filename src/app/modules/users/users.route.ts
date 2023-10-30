import express from 'express';
import { UserController } from './users.controller';
import { userValidation } from './users.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/createUser',
  validateRequest(userValidation.createUserZodSchema),
  UserController.createUser
);

export const UserRoutes = router;
