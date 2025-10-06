import { Flex, Image } from "@chakra-ui/react";
import { ScrollingBanner } from "../components";

function Resume() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height={"80vh"}
    >
      <ScrollingBanner
        text="Look at all this stuff!"
        text2="Totally ATS friendly..."
      ></ScrollingBanner>
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
