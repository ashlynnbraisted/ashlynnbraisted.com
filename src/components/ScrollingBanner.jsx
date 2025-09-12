import { Flex, Box, Text } from "@chakra-ui/react";

function ScrollingBanner({ text }) {
  return (
    <Box
      bottom={5}
      left={0}
      right={0}
      width="100%"
      bg="#2F00FF"
      overflow="hidden"
      whiteSpace="nowrap"
      py={2}
      position="fixed"
    >
      <Flex
        width="100%"
        flexDirection={"row"}
        justifyContent={"space-between"}
        animation="scroll 15s linear infinite"
        fontSize={24}
        color="white"
        fontWeight="semibold"
      >
        <Text>{text}</Text>
        <Text>{text}</Text>

        {/* CSS animation */}
        <style>
          {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
        </style>
      </Flex>
    </Box>
  );
}

export default ScrollingBanner;
