import { TFieldProps } from '../types'

export default (props: TFieldProps): JSX.Element => {
    return <div className={props.className}>{props.children}</div>
}