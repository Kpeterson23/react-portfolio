import React, { useRef } from "react";
import { HStack, Center, CardBody, Badge, Button } from "@chakra-ui/react";
import homeroom from "../../assets/homeroom.jpg";
import codecrusaders from "../../assets/codecrusaders.jpg";
import weather from "../../assets/weather.jpg";
import { Image } from "@chakra-ui/react";

import {
  Heading,
  Divider,
  Box,
  Text,
  Container,
  Stack,
  Card,
} from "@chakra-ui/react";
function Portfolio({ color }) {
  const ref = useRef(null);

  return (
    <>
      <Container
        maxW={"3x1"}
        bgGradient="linear(to-t, orange.200, orange.500)"
        p={5}
      >
        <Center>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 18, md: 34 }}
          >
            <Stack px={4} align={"center"} direction="row">
              <HStack mx={5}>
                <Heading color={"white"} fontWeight={800}>
                  Project Work
                </Heading>
              </HStack>
            </Stack>
            <Divider orientation="horizontal" />
            <Stack spacing={4} px={4}>
              <Card
                flexShrink={0}
                borderRadius="15px"
                overflow={"hidden"}
                direction={{ base: "column" }}
                shadow={"md"}
                m={3}
                p={3}
                width={{ base: 600, md: 800 }}
                bg={"gray.400"}
                ref={ref}
              >
                <Image
                  objectFit={"cover"}
                  src={weather}
                  alt="HTML CSS"
                  width={{ base: 600, md: 800 }}
                  height={"400px"}
                ></Image>
                <Stack>
                  <CardBody align="left">
                    <Heading> Project 1 - National Parks Weather</Heading>
                    <Text>Text about the project</Text>
                    <HStack py={2}>
                      <a href="https://github.com/ClaireMorris89/Mystic-Criminal">
                        {" "}
                        <Button>Link</Button>{" "}
                      </a>
                    </HStack>
                    <HStack spacing={2} pt={4}>
                      <Badge ml="1" fontSize="0.8em" colorScheme="green">
                        PROJECT
                      </Badge>
                    </HStack>
                  </CardBody>
                </Stack>
              </Card>
            </Stack>
            <Stack spacing={4} px={4}>
              <Card
                borderRadius="15px"
                overflow={"hidden"}
                direction={{ base: "column" }}
                shadow={"md"}
                m={3}
                p={3}
                width={{ base: 600, md: 800 }}
                bg={"gray.400"}
                ref={ref}
              >
                <Image
                  objectFit={"cover"}
                  src={codecrusaders}
                  alt="HTML CSS"
                  width={{ base: 600, md: 800 }}
                  height={"400px"}
                ></Image>
                <Stack>
                  <CardBody align="left">
                    <Heading> Project 2 - Code Crusaders Clothing</Heading>
                    <Text>
                      Text about the project, just trying to finish this
                      assignment in time.
                    </Text>
                    <HStack py={2}>
                      <a href="https://github.com/Sohzo/Ecommerce-Website-CodeCrusaders">
                        {" "}
                        <Button>Link</Button>
                      </a>
                    </HStack>
                    <HStack spacing={2} pt={4}>
                      <Badge ml="1" fontSize="0.8em" colorScheme="green">
                        PROJECT
                      </Badge>
                    </HStack>
                  </CardBody>
                </Stack>
              </Card>
            </Stack>
            <Stack spacing={4} px={4}>
              <Card
                borderRadius="15px"
                overflow={"hidden"}
                direction={{ base: "column" }}
                shadow={"md"}
                m={3}
                p={3}
                width={{ base: 600, md: 800 }}
                bg={"gray.400"}
                ref={ref}
              >
                <Image
                  objectFit={"cover"}
                  src={homeroom}
                  alt="HTML CSS"
                  width={{ base: 600, md: 800 }}
                  height={"400px"}
                ></Image>
                <Stack>
                  <CardBody align="left">
                    <Heading> Project 3 - Homeroom</Heading>
                    <Text>
                      This website will provide teachers with an easier way to
                      keep track of kids during free periods. They can also see
                      if students are requested by another teacher, comment why
                      they need to be in a certain classroom, and mark if they
                      are still in my class or on the way via a toggle button.
                    </Text>
                    <HStack py={2}>
                      <a href="https://github.com/AWinterCoding/Project_Home_Room">
                        <Button>Link</Button>
                      </a>
                    </HStack>
                    <HStack spacing={2} pt={4}>
                      <Badge ml="1" fontSize="0.8em" colorScheme="green">
                        PROJECT
                      </Badge>
                    </HStack>
                  </CardBody>
                </Stack>
              </Card>
            </Stack>
          </Stack>
        </Center>
      </Container>
    </>
  );
}

export default Portfolio;
