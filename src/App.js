import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import Details from "./components/Details";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Container maxWidth="container.xl" padding={0}>
      <Flex
        height={{ base: "auto", md: "100vh" }}
        paddingY={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default App;
