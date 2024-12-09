import { Field } from "@/components/ui/field"
import { Input, Fieldset, Button, Box } from "@chakra-ui/react"
import { PasswordInput } from "../ui/password-input"

const Login = () => {
    return (
        <Fieldset.Root size="sm" maxW="md">
            <Fieldset.Content>
                <Field label="Email address" required>
                    <Input name="email" type="email" />
                </Field>
                <Field label="Password" required>
                    <PasswordInput name="password" />
                </Field>
            </Fieldset.Content>
            <Box display="flex" gap="15px">
                <Button type="submit" alignSelf="flex-start">
                    Login
                </Button>
                <Button type="button"  alignSelf="flex-start">
                    Forget Password
                </Button>
            </Box>
        </Fieldset.Root>
    )
}
export default Login