import { Tabs, Box, Heading } from '@chakra-ui/react';
import { LuFolder, LuUser } from "react-icons/lu"
import Login from '@/components/auth/Login';
import Register from '@/components/auth/Register';

export default function Auth() {
    return (
        <Box
            maxW="md"
            mx="auto"
            mt="8"
            p="6"
            borderWidth="1px"
            borderRadius="lg"
            shadow="md"
        >
            <div className="h-[calc(100vh-80px)] pt-14">
                <div className="max-w-[600px] mx-auto bg-white py-12 px-16 rounded-2xl shadow-auth">
                    <Heading as="h2" size="lg" textAlign="center" mb="6">
                        Welcome to CBST digital campus
                    </Heading>
                    <Tabs.Root defaultValue="login">
                        <Tabs.List>
                            <Tabs.Trigger value="login">
                                <LuUser />
                                Login
                            </Tabs.Trigger>
                            <Tabs.Trigger value="register">
                                <LuFolder />
                                Register
                            </Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value="login"><Login /></Tabs.Content>
                        <Tabs.Content value="register"><Register /></Tabs.Content>
                    </Tabs.Root>
                </div>
            </div>
        </Box>
    );
}
