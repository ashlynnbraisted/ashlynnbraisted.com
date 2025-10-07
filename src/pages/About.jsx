import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { Typewriter } from "../components";

const About = () => {
  return (
    <Flex flexDirection="row" justifyContent="space-between">
      <Flex height="50vh" width="30%" alignItems="center">
        <Typewriter text="Ashlynn Braisted" repeating={false} />
      </Flex>

      <Flex flexDirection="column" width="30%">
        <Image
          width="100%"
          src={`${process.env.PUBLIC_URL}/homepage.jpg`}
          alt="Home Page Photo"
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
            school girls as president of Girls Who Code, and photographed
            concerts for <i>Tastemakers</i> magazine.
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
      ></Flex>
    </Flex>
  );
};

export default About;
