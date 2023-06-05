import { User } from './users.model'

export const findLastUserId = async () => {
  const lasUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lasUser?.id
}
export const generatedUserId = async () => {
  const currentUserId =
    (await findLastUserId()) || (0).toString().padStart(5, '0')
  const incrementedId = (parseInt(currentUserId) + 1)
    .toString()
    .padStart(5, '0')
  return incrementedId
}
