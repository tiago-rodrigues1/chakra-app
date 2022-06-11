import type { NextPage } from "next";

import {
	Flex,
	Heading,
	Input,
	Button,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";

const Home: NextPage = () => {
	const { toggleColorMode } = useColorMode();
	const formBackground = useColorModeValue("gray.100", "gray.700");

	return (
		<>
			<Flex h="100vh" alignItems="center" justifyContent="center">
				<Flex
					direction="column"
					background={formBackground}
					p={12}
					rounded={6}
				>
					<Heading mb={6}>Log in</Heading>
					<Input
						placeholder="example@domain.com"
						variant="filled"
						mb={3}
						type="email"
					/>
					<Input
						placeholder="************"
						variant="filled"
						mb={3}
						type="password"
					/>
					<Button colorScheme="teal" mb={6}>
						Log in
					</Button>
					<Button onClick={toggleColorMode}>Toggle Colormode</Button>
				</Flex>
			</Flex>
		</>
	);
};

export default Home;
