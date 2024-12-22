import { TAnchorProps } from '../types'

export default (props: TAnchorProps): JSX.Element => {
    return <a onClick={props.onClick} href={props.href} className={props.className}>{props.children}</a>
}