import express from 'express'
import * as dotenv from 'dotenv'
import {
    userRouter,
    studentRouter
} from "./routes/index.js";

dotenv.config()
import connect from './database/database.js'

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000

app.use('/users', userRouter)
app.use('/students', studentRouter)

app.listen(PORT, async () => {
    await connect()
    console.log(`App start on port: ${PORT}`)
})