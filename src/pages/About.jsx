import { Box, Flex, Text } from "@chakra-ui/react";
import { ImageWithInfo } from "../components";

const About = () => {
  return (
    <Flex flexDirection="row" justifyContent="space-between">
      <Flex
        height="50vh"
        width="30%"
        alignItems="center"
        justifyContent="center"
      >
        <Text color={"primary.500"} fontSize={200}>
          Who
        </Text>
      </Flex>

      <Flex flexDirection="column" width="30%">
        <ImageWithInfo
          width="100%"
          src={`${process.env.PUBLIC_URL}/homepage.jpg`}
          alt="Home Page Photo"
          caption="This photo was taken in Banff National Park on the Plain of Six Glaciers trail."
          border="1px solid"
          borderColor="primary.500"
        />

        <Box width="100%" fontSize={16} mt={10} textAlign={"center"}>
          <Text mb={6}>
            I’m a <span className="bold-blue">Software Engineer</span> with a
            passion for human-centered design and fun web creations!
          </Text>

          <Text mb={6}>
            I recently graduated from Northeastern University with a
            <span className="bold-blue"> BS </span> in
            <span className="bold-blue">
              {" "}
              Computer Science and Interaction Design
            </span>
            . During my studies, I completed two 6-month full-time
            <span className="bold-blue"> Web Development</span> positions, led a
            mentorship program teaching foundational coding skills to middle
            school girls as president of Northeastern's Girls Who Code chapter,
            and photographed concerts for <i>Tastemakers</i> magazine.
          </Text>

          <Text>
            Outside of work, I love to hike, crochet, and play <i>Catan</i>.
            Take a look around to see some of my work — including this site,
            which I designed and built from scratch!
          </Text>
        </Box>
      </Flex>

      <Flex
        height="50vh"
        width="30%"
        alignItems="center"
        justifyContent="center"
      >
        <Text color={"primary.500"} fontSize={200}>
          Am I?
        </Text>
      </Flex>
    </Flex>
  );
};

export default About;
