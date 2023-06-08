import express from 'express'
import { UserController } from './users.controller'

const router = express.Router()

router.post('/createUser', UserController.createUser)

export const UserRoutes = router
