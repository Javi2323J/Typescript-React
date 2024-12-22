import { MouseEventHandler } from 'react'

type TAnchorProps = {
    className?: string
    href?: string
    children?: any
    onClick?: MouseEventHandler<HTMLAnchorElement>
}

export default TAnchorProps