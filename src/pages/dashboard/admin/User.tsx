import { Heading, HStack, PaginationNextTrigger, PaginationPrevTrigger, PaginationRoot, Stack, Table } from "@chakra-ui/react";


function Students() {
    return (  
        <Stack width="full" gap="5">
            <Heading size="xl">Students</Heading>
            <Table.Root size="sm" variant="outline" striped>
                <Table.Header>
                <Table.Row>
                    <Table.ColumnHeader>First Name</Table.ColumnHeader>
                    <Table.ColumnHeader>Last Name</Table.ColumnHeader>
                    <Table.ColumnHeader >Email</Table.ColumnHeader>
                    <Table.ColumnHeader >Phone</Table.ColumnHeader>
                    <Table.ColumnHeader >Gender</Table.ColumnHeader>
                    <Table.ColumnHeader >Address</Table.ColumnHeader>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row >
                    <Table.Cell>First name </Table.Cell>
                    <Table.Cell>Last name</Table.Cell>
                    <Table.Cell >email</Table.Cell>
                    <Table.Cell >phone</Table.Cell>
                    <Table.Cell >gender</Table.Cell>
                    <Table.Cell >address</Table.Cell>
                    </Table.Row>

                    <Table.Row >
                    <Table.Cell>First name </Table.Cell>
                    <Table.Cell>Last name</Table.Cell>
                    <Table.Cell >email</Table.Cell>
                    <Table.Cell >phone</Table.Cell>
                    <Table.Cell >gender</Table.Cell>
                    <Table.Cell >address</Table.Cell>
                    </Table.Row>

                    <Table.Row >
                    <Table.Cell>First name </Table.Cell>
                    <Table.Cell>Last name</Table.Cell>
                    <Table.Cell >email</Table.Cell>
                    <Table.Cell >phone</Table.Cell>
                    <Table.Cell >gender</Table.Cell>
                    <Table.Cell >address</Table.Cell>
                    </Table.Row>

                    <Table.Row >
                    <Table.Cell>First name </Table.Cell>
                    <Table.Cell>Last name</Table.Cell>
                    <Table.Cell >email</Table.Cell>
                    <Table.Cell >phone</Table.Cell>
                    <Table.Cell >gender</Table.Cell>
                    <Table.Cell >address</Table.Cell>
                    </Table.Row>
                    
                </Table.Body>
            </Table.Root>

            <PaginationRoot count={items.length * 5} pageSize={5} page={1}>
                <HStack wrap="wrap">
                    <PaginationPrevTrigger />
                    <PaginationItems />
                    <PaginationNextTrigger />
                </HStack>
            </PaginationRoot>
            
        </Stack>
  );
}


export default Students;


