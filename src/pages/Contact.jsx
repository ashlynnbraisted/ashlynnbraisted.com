import { Box, Image, Text } from "@chakra-ui/react";

function Contact() {
  return (
    <Box
      height="90vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={4}
    >
      <Image
        src="headshot.jpg"
        alt="Headshot Image"
        height="40vh"
        pb={8}
      ></Image>
      <Text fontSize="xl">
        If you’d like to get in touch, please email me at{" "}
        <a href="mailto:ashlynnbraisted@gmail.com" style={{ color: "#2F00FF" }}>
          ashlynnbraisted@gmail.com
        </a>
      </Text>
    </Box>
  );
}

export default Contact;
