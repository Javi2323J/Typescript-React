import { validate } from 'com'

export default async (username: string, password: string, passwordRepeat: string) => {
    validate.username(username)
    validate.password(password)
    validate.passwordsMatch(password, passwordRepeat)
}