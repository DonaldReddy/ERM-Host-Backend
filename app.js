import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import userRouter from './routes/User/userRoute.js'

dotenv.config()

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use(userRouter)

export default app