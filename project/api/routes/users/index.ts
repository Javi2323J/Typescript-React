import { RequestHandler, Router } from 'express'

import { jsonBodyParser, authorizationHandler } from '../helpers/index.js'
import {
    registerUserHandler
} from './handlers/index.js'


const usersRouter = Router()

usersRouter.post('/', authorizationHandler as RequestHandler, jsonBodyParser, registerUserHandler)

export default usersRouter