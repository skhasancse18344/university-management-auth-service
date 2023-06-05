import express from 'express'
import userController from './users.controller'

const router = express.Router()

router.post('/createUser', userController.createUser)

export default router
