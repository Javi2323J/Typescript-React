export default function useController() {
    const handleSubmit = (event: any) => {
        event.preventDefault()
    }

    return {
        handleSubmit
    }
}