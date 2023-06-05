import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application
app.use('/api/v1/users/', userRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Server responded')
})

export default app
