import { FormEventHandler } from 'react'

type TFormProps = {
    className?: string
    id?: string
    onSubmit?: FormEventHandler<HTMLFormElement>
    children?: any
}

export default TFormProps