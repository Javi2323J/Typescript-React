import { TButtonProps } from '../types'

export default (props: TButtonProps): JSX.Element => {
    return <button id={props.id} type={props.type} className={props.className}>{props.children}</button>
}