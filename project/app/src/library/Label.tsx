import { TLabelProps } from '../types'

export default (props: TLabelProps): JSX.Element => {
    return <label className={props.className} htmlFor={props.htmlFor}>{props.children}</label>
}