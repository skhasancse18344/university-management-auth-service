import { User } from './users.model';
import { IUser } from './users.interface';
import config from '../../../config/index';
import { generatedUserId } from './users.utils';
import ApiError from '../../../errors/ApiError';

const createUser = async (user: IUser): Promise<IUser | null> => {
  //Auto generated incremental id

  const id = await generatedUserId();

  user.id = id;
  //default password

  if (!user.password) {
    user.password = config.default_user_password as string;
  }

  const createdUser = await User.create(user);
  if (!createdUser) {
    throw new ApiError(400, 'Failed to create user');
  }
  return createdUser;
};

export const UserService = {
  createUser,
};
