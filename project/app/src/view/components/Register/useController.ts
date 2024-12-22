export default function useController() {
    const handleSubmit = (event: any) => {
        event.preventDefault()

        const { target: form } = event

        const { username: { value: username }, password: { value: password }, ['password-repeat']: { value: passwordRepeat } } = form
        console.log(username, password, passwordRepeat)
    }

    return {
        handleSubmit
    }
}