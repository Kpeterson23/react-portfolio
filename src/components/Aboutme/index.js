import React from "react";
import ProfilePic from "../../assets/kyler.jpeg";
import {
  Image,
  Container,
  Box,
  Divider,
  Heading,
  Spacer,
} from "@chakra-ui/react";

function Aboutme() {
  return (
    <Container
      layerStyle={"selected"}
      bgGradient="linear(to-t, orange.200, orange.500)"
    >
      <Box className="p-3">
        <div class="">
          <div class="">
            <Spacer />
            <Box size={"sm"} align="center">
              <Image
                rounded={"full"}
                size="160px"
                src={ProfilePic}
                alt="Kyler Peterson"
              />
            </Box>
          </div>
        </div>

        <Divider borderColor={"orange.600"} />
        <Heading id="aboutme-text">About Me</Heading>
        <p>Paragraph about being an inspriing fullstack developer</p>

        <p>
          Talk about the backend and working in databases such as MySQL etc.
        </p>

        <p>
          Talk about past projects, and being a fast learner who is strives to
          for creativity in all their projects.
        </p>

        <p>Talk about projects/future goals maybe?</p>
      </Box>
    </Container>
  );
}

export default Aboutme;
