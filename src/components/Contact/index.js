import React, { useState } from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdFacebook } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export default function Contact({ color }) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "userName") setUserName(value);
    else setMessage(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or Name is invalid");
      return;
    }

    if (!message) {
      setErrorMessage("Message is required.");
      return;
    }

    setUserName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
  };

  return (
    <Container
      bgGradient="linear(to-t, orange.200, orange.500)"
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
    >
      <Flex>
        <Box
          bg="orange.700"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <VStack spacing={5} alignItems="flex-start">
              <Heading>Contact</Heading>
              <Text mt={5} color="white.500">
                Want to reach me out?
              </Text>
              <Button
                size="md"
                height="48px"
                width="200px"
                variant="ghost"
                color="white.900"
                _hover={{ border: "2px solid #1C6FEB" }}
                leftIcon={<MdPhone color="#1970F1" size="20px" />}
              >
                +1-435-302-2080
              </Button>
              <Button
                size="md"
                height="48px"
                width="200px"
                variant="ghost"
                color="white.900"
                _hover={{ border: "2px solid #1C6FEB" }}
                leftIcon={<MdEmail color="#1970F1" size="20px" />}
              >
                kylerpeterson23@gmailcom
              </Button>
              <Button
                size="md"
                height="48px"
                width="200px"
                variant="ghost"
                color="white.900"
                _hover={{ border: "2px solid #1C6FEB" }}
                leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
              >
                Lehi, Utah USA
              </Button>
              <IconButton
                aria-label="facebook"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: "#0D74FF" }}
                icon={<MdFacebook size="28px" />}
              />
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
