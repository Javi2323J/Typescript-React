import { Form, Field, Label, Input, Button, Anchor } from '../../../library'

import useController from './useController'

export default function Register(props: any): JSX.Element {
    const {
        handleSubmit
    } = useController()

    const handleLoginClick = (event: any) => {
        event.preventDefault()

        props.onLoginClick()
    }

    return <main className="h-full w-full flex flex-col justify-center items-center">
        <Form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-[10px]">
            <Field className="flex flex-col items-center justify-center gap-[5px]">
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="text" className="text-black rounded-[2px] h-[20px] px-[4px]" />
            </Field>

            <Field className="flex flex-col items-center justify-center gap-[5px]">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" className="text-black rounded-[2px] h-[20px] px-[4px]" />
            </Field>

            <Field className="flex flex-col items-center justify-center gap-[5px]">
                <Label htmlFor="password-repeat">Repeat password</Label>
                <Input id="password-repeat" type="password" className="text-black rounded-[2px] h-[20px] px-[4px]" />
            </Field>

            <Button type="submit" className="border-2 border-black px-[.75rem] rounded-[.25rem] mt-[.75rem]">Register</Button>
        </Form>

        <Anchor onClick={handleLoginClick} href="" className="underline pointer-click mt-[1rem]">Login</Anchor>
    </main>
}