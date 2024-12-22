import { ErrorData } from '../../types'
import { validate, errors } from 'com'

const { SystemError } = errors

export default async (username: string, password: string, passwordRepeat: string): Promise<void> => {
    validate.username(username)
    validate.password(password)
    validate.passwordsMatch(password, passwordRepeat)

    let res: Response

    try {
        res = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, passwordRepeat })
        })
    } catch (error) {
        throw new SystemError((error as Error).message)
    }

    if (res.ok) return

    let errorData: ErrorData

    try {
        errorData = await res.json()
    } catch (error) {
        throw new SystemError((error as Error).message)
    }

    const { error, message } = errorData

    throw new errors[error](message)
}