import { errors } from './index.js'

const { ValidationError } = errors

const validateUsername = (username: string): void => {
    if (typeof username !== 'string') throw new ValidationError('Invalid username')
    if (username.length < 4) throw new ValidationError('Username is too short')
    if (username.length > 16) throw new ValidationError('Username is too long')
}

const validatePassword = (password: string): void => {
    if (typeof password !== 'string') throw new ValidationError('Invalid password')
    if (password.length < 8) throw new ValidationError('Password is too short')
}

const validatePasswordsMatch = (password: string, passwordRepeat: string): void => {
    if (password !== passwordRepeat) throw new ValidationError('Passwords do not match')
}

const validate = {
    username: validateUsername,
    password: validatePassword,
    passwordsMatch: validatePasswordsMatch
}

export default validate