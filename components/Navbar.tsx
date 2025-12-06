import { Box, Text, VStack, HStack, IconButton } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { FaCog, FaUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, quickActions } from "../lib/items";

const MotionBox = motion(Box);
const MotionIconButton = motion(IconButton);

const Navbar: FC = () => {
  const [activeItem, setActiveItem] = useState<number>(1);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <MotionBox
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      as="nav"
      bg="rgba(255, 255, 255, 0.05)"
      backdropFilter="blur(20px)"
      border="1px solid"
      borderColor="rgba(255, 255, 255, 0.1)"
      position="fixed"
      top="50px"
      left="20px"
      color="white"
      height="650px"
      borderRadius="2xl"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      width="220px"
      p={4}
      boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
      css={{ WebkitAppRegion: "no-drag" }}
      _hover={{
        borderColor: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 12px 48px rgba(0, 0, 0, 0.4)",
      }}
    >
      <Box mb={4}>
        <Text
          fontSize="xl"
          fontWeight="bold"
          bgGradient="linear(to-r, blue.300, purple.300)"
          bgClip="text"
          textAlign="center"
          mb={2}
        >
          Task Manager
        </Text>
      </Box>

      <VStack gap={3} mb={6} align="stretch">
        {quickActions.map((action) => (
          <MotionBox
            key={action.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <HStack
              bg="rgba(255, 255, 255, 0.08)"
              p={3}
              borderRadius="lg"
              cursor="pointer"
              _hover={{
                bg: "rgba(255, 255, 255, 0.12)",
                transform: "translateY(-2px)",
              }}
              transition="all 0.2s"
            >
              <Box as={action.icon} color={action.color} />
              <Text fontSize="sm" fontWeight="medium">
                {action.label}
              </Text>
            </HStack>
          </MotionBox>
        ))}
      </VStack>

      <VStack gap={2} flex={1} align="stretch">
        {navItems.map((item) => (
          <MotionBox
            key={item.id}
            initial={false}
            animate={{
              backgroundColor:
                activeItem === item.id
                  ? "rgba(255, 255, 255, 0.15)"
                  : hoveredItem === item.id
                    ? "rgba(255, 255, 255, 0.08)"
                    : "transparent",
              paddingLeft: activeItem === item.id ? "16px" : "12px",
              borderLeft:
                activeItem === item.id ? "3px solid" : "1px solid transparent",
              borderLeftColor:
                activeItem === item.id ? item.color : "transparent",
            }}
            transition={{ duration: 0.2 }}
            onHoverStart={() => setHoveredItem(item.id)}
            onHoverEnd={() => setHoveredItem(null)}
            onClick={() => setActiveItem(item.id)}
          >
            <HStack
              p={3}
              borderRadius="lg"
              cursor="pointer"
              position="relative"
              transition="all 0.2s"
            >
              <Box as={item.icon} color={item.color} fontSize="18px" />
              <Text flex={1} fontSize="sm" fontWeight="medium">
                {item.label}
              </Text>

              {item.badge && (
                <MotionBox
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  bg={item.color}
                  color="white"
                  fontSize="xs"
                  fontWeight="bold"
                  px={2}
                  py={1}
                  borderRadius="full"
                  minW="24px"
                  textAlign="center"
                >
                  {item.badge}
                </MotionBox>
              )}
            </HStack>
          </MotionBox>
        ))}
      </VStack>

      <Box mt={4}>
        <HStack justify="center" gap={4}>
          <MotionIconButton
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Settings"
            icon={<FaCog />}
            variant="ghost"
            color="whiteAlpha.800"
            size="sm"
            _hover={{ color: "white", bg: "rgba(255, 255, 255, 0.1)" }}
          />
          <MotionIconButton
            whileHover={{ scale: 1.1, rotate: -15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Profile"
            icon={<FaUser />}
            variant="ghost"
            color="whiteAlpha.800"
            size="sm"
            _hover={{ color: "white", bg: "rgba(255, 255, 255, 0.1)" }}
          />
        </HStack>
      </Box>

      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="radial(circle at 30% 50%, rgba(59, 130, 246, 0.1), transparent 50%)"
        borderRadius="2xl"
        pointerEvents="none"
        zIndex={-1}
      />
    </MotionBox>
  );
};

export default Navbar;
