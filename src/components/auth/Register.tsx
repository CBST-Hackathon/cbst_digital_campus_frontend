import { Field } from "@/components/ui/field"
import { Input, Fieldset, Button, Textarea } from "@chakra-ui/react"
import { PasswordInput } from "../ui/password-input"
import { Radio, RadioGroup } from "../ui/radio"
import React from "react"



    

const Register = () => {
    const [value, setValue] = React.useState("male");

    const handleRadioChange = (newValue) => {
        setValue(newValue); 
      };

    return (
      <Fieldset.Root size="sm" maxW="md">
      <Fieldset.Content>
          <Field label="Name" required>
              <Input name="full_name" type="text" />
          </Field>
          <Field label="Phone Number" required>
              <Input name="phone" type="text" />
          </Field>
          
          <Field label="Email address" required>
              <Input name="email" type="email" />
          </Field>
          <Field label="Password" required>
                <PasswordInput name="password" / >
          </Field>
          <Field label="Confirm Password" required>
                <PasswordInput name="password" />
          </Field>
          <Field label="Gender">
            <RadioGroup value={value} onChange={handleRadioChange}  >
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="other">Other</Radio>
            </RadioGroup>
          </Field>
          <Field label="Date of Birth">
             <Input name="dob" type="date" />
          </Field>
          <Field label="Full Address">
            <Textarea name="address" />
          </Field>
        </Fieldset.Content>
        <Button type="submit" alignSelf="flex-start">
          Register
        </Button>
        
      </Fieldset.Root>
    )
}
export default Register