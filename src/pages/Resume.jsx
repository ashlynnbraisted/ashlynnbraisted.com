import { Flex, Image } from "@chakra-ui/react";

function Resume() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height={"80vh"}
    >
      <Image
        src={`${process.env.PUBLIC_URL}/resume.svg`}
        alt="Resume"
        fit={"contain"}
        border={"1px solid"}
        borderColor={"primary.500"}
        shadow={"md"}
        maxH="70vh"
      />
    </Flex>
  );
}

export default Resume;
