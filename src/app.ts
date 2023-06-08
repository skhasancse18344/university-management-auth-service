import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application

app.use('/api/v1/users/', UserRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the University Management')
})

//Global Error Handler
app.use(globalErrorHandler)

export default app
