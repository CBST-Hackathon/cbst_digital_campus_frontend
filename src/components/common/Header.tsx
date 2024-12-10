import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
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
      bg="teal.500"
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
        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="outline" size="sm">
              Open
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem value="new-txt">New Text File</MenuItem>
            <MenuItem value="new-file">New File...</MenuItem>
            <MenuItem value="new-win">New Window</MenuItem>
            <MenuItem value="open-file">Open File...</MenuItem>
            <MenuItem value="export">Export</MenuItem>
          </MenuContent>
        </MenuRoot>
      </Stack>
      </Box>
    </Flex>
  );
};

export default Header;
