import express from 'express'
import mongoose from 'mongoose'
import {
  logErrors,
  errorHandler,
  boomErrorHandler
} from './middlewares/error.handler'
import routerApi from './routes'
import { config } from './config/config'

const { mongoUri, port } = config
const PORT=3010
const MONGO_URI='mongodb://localhost:27017/proyecto-bd-web-2'

const app = express()

const connectDB = () => {
  mongoose.connect(MONGO_URI)
}

app.use(express.json())
routerApi(app)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
  connectDB()
})

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)
