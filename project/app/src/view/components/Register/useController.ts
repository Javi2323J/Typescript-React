import logic from '../../../logic'

export default function useController() {
    const handleSubmit = (event: any) => {
        event.preventDefault()

        const { target: form } = event

        const { username: { value: username }, password: { value: password }, ['password-repeat']: { value: passwordRepeat } } = form

        try {
            logic.registerUser(username, password, passwordRepeat)
                .then(() => console.log('all good'))
        } catch (error) {

        }
    }

    return {
        handleSubmit
    }
}