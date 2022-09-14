import {
  AspectRatio,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <VStack
      width="full"
      height="full"
      padding={10}
      spacing={10}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size={"2xl"}>Your Cart</Heading>
        <Text>If the price is too hard on your eyes,</Text>
        <Button variant={"link"} colorScheme="black" onClick={toggleColorMode}>
          try changing the theme.
        </Button>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <Image src="/images/macbook.jpg" alt="Macbook Pro" />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction={"row"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Macbook Pro</Heading>
            <Text color={secondaryTextColor}>MBP22091320220913</Text>
          </VStack>
          <Heading size="sm" textAlign={"end"}>
            $12.000
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent={"space-between"}>
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$12.000</Heading>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$10.00</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent={"space-between"} w="full">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg">$12.038,80</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
