import React, { FC } from "react";
import { Box, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const App: FC = () => {
  return (
    <Box h="100vh" w="100vw" bg="transparent">
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        height="30px"
        zIndex="9999"
        css={{ WebkitAppRegion: "drag" }}
      />
      <Navbar />
    </Box>
  );
};

export default App;
