import { Box, Flex, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box bg="blue.500" px={4} py={2} color="white" width="100%">
      <Flex align="center" justify="center">
        <Text fontSize="xl" fontWeight="bold">Postboard</Text>
      </Flex>
    </Box>
  );
};

export default NavBar;