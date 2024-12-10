import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button
  // useDisclosure
} from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";

const Header = (props: Record<string, unknown>) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const handleToggle = () => (isOpen ? onClose() : onOpen());
  // const { open, }
  const isOpen = true

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="#4682B4"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          CBST Digital Campus
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }}>
        Hambarger
      </Box>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Text>User</Text>
        <Button variant="outline" size="sm">
              Logout
        </Button>
      </Stack>
      </Box>
    </Flex>
  );
};

export default Header;
