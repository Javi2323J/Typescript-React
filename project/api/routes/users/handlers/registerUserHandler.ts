import { Request, Response } from 'express'
import logic from '../../../logic/index.js'
import { createFunctionalHandler } from '../../helpers/index.js'

export default createFunctionalHandler(async (req: Request, res: Response): Promise<void> => {
    const { body: { username, password, passwordRepeat } } = req

    await logic.registerUser(username, password, passwordRepeat)

    res.status(201).send()
})