import { Field } from "@/components/ui/field"
import { Input, Fieldset, Button } from "@chakra-ui/react"

const Register = () => {
    return (
      <Fieldset.Root size="sm" maxW="md">
      <Fieldset.Content>
          <Field label="Name">
              <Input name="name" type="text" />
          </Field>
          <Field label="Email address">
              <Input name="email" type="email" />
          </Field>
          <Field label="Password">
              <Input name="password" type="password" />
          </Field>
      </Fieldset.Content>
      <Button type="submit" alignSelf="flex-start">
          Register
      </Button>
  </Fieldset.Root>
    )
}
export default Register