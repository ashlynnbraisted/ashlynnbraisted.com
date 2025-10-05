import { Image, Flex, Link, Text } from "@chakra-ui/react";
import Typewriter from "../components/Typewriter";

function Contact() {
  return (
    <Flex flexDirection="column">
      <Typewriter text="Contact" repeating={false} />
      <Flex flexDirection="column" alignItems="center" mt={"5%"}>
        <Image
          src={`${process.env.PUBLIC_URL}/headshot.jpg`}
          alt="Headshot Image"
          height="40vh"
          mb={8}
        ></Image>
        <Text fontSize="xl">
          If you’d like to get in touch, please email me at{" "}
          <Link
            href="mailto:ashlynnbraisted@gmail.com"
            color="primary.500"
            isExternal
          >
            ashlynnbraisted@gmail.com
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
}

export default Contact;
