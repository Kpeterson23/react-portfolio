import React from "react";
import NavBar from "../NavBar";
import {
  ScaleFade,
  Container,
  Stack,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

function Header(props) {
  const { selecTab, handleTabChange } = props;
  return (
    <div>
      <section>
        <header>
          <div>
            <ScaleFade initialScale={0.1} in={true}>
              {" "}
              <h1>Kyler's Portfolio</h1>
            </ScaleFade>
          </div>
          <div>
            <NavBar
              selecTab={selecTab}
              handleTabChange={handleTabChange}
            ></NavBar>
          </div>
        </header>
      </section>
      <Container bg={"green.50"}>
        <Stack
          pb={{ base: 18, md: 34 }}
          spacing={{ base: 8, md: 16 }}
          as={Box}
          textAlign={"center"}
        >
          <Heading lineHeight={"100%"} fontWeight={500}>
            Hi, My name is Kyler Peterson
            <br />
            <br />
            <Text as={"span"} color={"orange.500"}>
              I'm an aspiring Fullstack Developer
            </Text>
          </Heading>
        </Stack>
        <Box px={2}>
          <Text as={"span"} color={"gray.500"}>
            Introduction about my portfolio and aspring to be a developer.
          </Text>
        </Box>
      </Container>
    </div>
  );
}

export default Header;
