import { Box, Text } from "@chakra-ui/react";
import React, { FC } from "react";

const Navbar: FC = () => {
  return (
    <Box
      as="div"
      bg={"transparent"}
      position="fixed"
      blur="sm"
      top="30px"
      border={"1px solid"}
      borderColor={"red.200"}
      left="10px"
      color={"white"}
      height="50px"
      borderRadius={"md"}
      display="flex"
      alignItems="center"
      flexDirection="cloumn"
      width="200px"
      css={{ WebkitAppRegion: "no-drag" }}
    >
      <Text>adasdasd</Text>
    </Box>
  );
};

export default Navbar;
