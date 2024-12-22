import { TFormProps } from '../types'

export default (props: TFormProps): JSX.Element => {
    return <form onSubmit={props.onSubmit} className={props.className}>{props.children}</form>
}