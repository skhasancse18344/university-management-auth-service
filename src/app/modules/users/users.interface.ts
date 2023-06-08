import { Model } from 'mongoose'

export type IUser = {
  id: string
  role: string
  password: string
}

export type UserModel = Model<IUser, Record<string, unknown>>
// export type UserModel = Model<IUser, object> you can use this also
