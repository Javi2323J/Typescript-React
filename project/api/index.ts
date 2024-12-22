import 'dotenv/config'
import db from 'dat'
import express, { Request, Response } from 'express'
import cors from 'cors'

import { errorHandler } from './routes/helpers/index.js'
import { usersRouter } from './routes/index.js'

db.connect(process.env.MONGO_URL!).then(() => {
    console.log('connected to db')

    const server = express()

    server.use(cors())

    server.get('/', (req: Request, res: Response): void => { res.send('Hello API!') })

    server.use('/users', usersRouter)

    server.use(errorHandler)

    server.listen(process.env.PORT, () => console.log(`API listening on port ${process.env.PORT}`))
})