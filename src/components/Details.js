import {
  Heading,
  Text,
  VStack,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <VStack
      width="full"
      height="full"
      padding={10}
      spacing={10}
      alignItems="flex-start"
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Muhammad" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Kuswari" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Jl. Ismail Marzuki, Cilinaya, Mataram, NTB." />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Mataram" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="Indonesia">Indonesia</option>
              <option value="Malaysia">Malaysia</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button size="lg" w="full" variant={"primary"}>
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
