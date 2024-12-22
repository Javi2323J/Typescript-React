import bcrypt from 'bcryptjs'

import { User } from 'dat'
import { validate, errors } from 'com'
import { MongoError } from 'mongodb'

const { DuplicityError, SystemError } = errors

export default (username: string, password: string, passwordRepeat: string): Promise<void> => {
    validate.username(username)
    validate.password(password)
    validate.passwordsMatch(password, passwordRepeat)

    return (async (): Promise<void> => {
        let hash

        try {
            hash = await bcrypt.hash(password, 10)
        } catch (error) {
            throw new SystemError((error as Error).message)
        }

        try {
            await User.create({ username, password: hash })
        } catch (error) {
            if ((error as MongoError).code === 11000) throw new DuplicityError('User already exists')

            throw new SystemError((error as Error).message)
        }
    })()
}