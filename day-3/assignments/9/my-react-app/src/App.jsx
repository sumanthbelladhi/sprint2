import { ChakraProvider, Box, Input, Button } from "@chakra-ui/react";

import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Box p="4" bg="orange.200" color="white" m={[2, 3]}>
        This is a basic Box component.
      </Box>
      <Input placeholder="Basic usage" m={[2, 3]} />
      <Button colorScheme="blue" m={[2, 3]}>
        Button
      </Button>
    </ChakraProvider>
  );
}

export default App;
