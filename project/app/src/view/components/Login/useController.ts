import { SyntheticEvent } from 'react'

export default function useController() {
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault()
    }

    return {
        handleSubmit
    }
}