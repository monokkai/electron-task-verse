import { Box, Text } from "@chakra-ui/react";
import React, { FC } from "react";

const Navbar: FC = () => {
  return (
    <Box
      as="div"
      bg={"transparent"}
      position="fixed"
      p="10px"
      blur="sm"
      top="50px"
      border={"1px solid"}
      borderColor={"red.200"}
      left="20px"
      color={"white"}
      height="650px"
      borderRadius={"xl"}
      display="flex"
      alignItems="center"
      textAlign="center"
      flexDirection="cloumn"
      justifyContent="center"
      width="200px"
      css={{ WebkitAppRegion: "no-drag" }}
    >
      <Box>
        <Text>adasdasd</Text>
        <Text>adasdasd</Text>
        <Text>adasdasd</Text>
        <Text>adasdasd</Text>
        <Text>adasdasd</Text>
        <Text>adasdasd</Text>
      </Box>
    </Box>
  );
};

export default Navbar;
