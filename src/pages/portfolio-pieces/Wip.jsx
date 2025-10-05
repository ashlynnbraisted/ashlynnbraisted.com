import { Flex, Text, Link } from "@chakra-ui/react";

function Wip() {
  return (
    <Flex width="100%" justifyContent="center">
      <Text fontSize="xl">
        This site is a work in progress! In the meantime, check out my{" "}
        <Link
          href="https://www.linkedin.com/in/ashlynnbraisted/"
          color="primary.500"
          isExternal
        >
          LinkedIn
        </Link>{" "}
        or{" "}
        <Link href="/resume" color="primary.500">
          Resume
        </Link>{" "}
        to see some of my other projects.
      </Text>
    </Flex>
  );
}

export default Wip;
