import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from "@chakra-ui/theme";
import { Helmet } from "react-helmet";
import Aboutme from "./components/Aboutme";
const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
  layerStyles: {
    base: {
      bg: "gray.50",
      border: "2px solid",
      borderColor: "gray.500",
    },
    selected: {
      bg: "teal.500",
      color: "teal.700",
      borderColor: "orange.500",
    },
  },
});
function App() {
  const color = "orange";
  const [selectTab, handleTabChange] = useState("aboutme");

  const renderTab = () => {
    if (selectTab === "Portfolio") {
      return <Portfolio color={color} />;
    }
    if (selectTab === "Contact") {
      return <Contact color={color} />;
    }
    if (selectTab === "Aboutme") {
      return <Aboutme color={color} />;
    }

    if (selectTab === "Resume") {
      return <Profile color={color} />;
    }
  };

  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <Helmet color={color}>
          <title>Kyler's Portfolio </title>
        </Helmet>

        <Header
          color={color}
          selectTab={selectTab}
          handleTabChange={handleTabChange}
        ></Header>
        <main>{renderTab()}</main>
        <Footer color={color}></Footer>
      </ChakraBaseProvider>
    </>
  );
}

export default App;
