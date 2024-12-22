import { TInputProps } from '../types'

export default (props: TInputProps): JSX.Element => {
    return <input className={props.className} type={props.type} id={props.id}></input>
}