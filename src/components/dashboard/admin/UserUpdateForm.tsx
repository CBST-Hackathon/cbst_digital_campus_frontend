import { Field } from "@/components/ui/field"

import { Box, Button, Fieldset,  Heading, Input } from "@chakra-ui/react";


function UserUpdateForm() {
    return ( 
        <Box background="" width="100%" padding="4">
            <Heading w="80%" textAlign={'center'} fontWeight="normal" mb="2%">
                Students Update
            </Heading>
            <Fieldset.Root size="sm" maxW="md">
            <Fieldset.Content>
                <Field label="Name">
                    <Input name="name" type="text" />
                </Field>
                <Field label="Email" >
                    <Input name="email" type="email" />
                </Field>
                <Field label="Phone" >
                    <Input name="phone" type="text" />
                </Field>
                <Field label="Address" >
                    <Input name="address" type="text" />
                </Field>
                <Field label="Date of Birth" >
                    <Input name="dob" type="date" />
                </Field>
                <Field label="Gender" >
                    <Input name="gender" type="text" />
                </Field>
                
            </Fieldset.Content>
            <Box display="flex" gap="15px">
                <Button type="submit" alignSelf="flex-start">
                    Create
                </Button>
                <Button type="button"  alignSelf="flex-start">
                    UpDate
                </Button>
            </Box>
            </Fieldset.Root>
            
            
        </Box>

     );
}

export default UserUpdateForm;