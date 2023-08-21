import React from "react";
import { Container, Box, Heading } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
function Profile() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("").then((response) => {
      // Will insert pdf file inside
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = ""; //Till put resume pdf file inside
        alink.click();
      });
    });
  };
  return (
    <Container
      maxW={"3x1"}
      bgGradient="linear(to-t, orange.200, orange.500)"
      p={5}
    >
      <Box>
        <Heading>
          {" "}
          Download My Resume{" "}
          <DownloadIcon w={8} h={8} color="blue.500" onClick={onButtonClick} />
        </Heading>
      </Box>
    </Container>
  );
}

export default Profile;
