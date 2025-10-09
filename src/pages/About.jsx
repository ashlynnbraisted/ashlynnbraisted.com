import { Box, Image, Flex, Link, Text } from "@chakra-ui/react";
import { Typewriter } from "../components";
import { GrMailOption, GrLinkedinOption } from "react-icons/gr";

// The "About" tab
const About = () => {
  return (
    <Flex position="relative">
      <Box width="20%" fontSize={16}>
        <Typewriter text="Ashlynn Braisted" repeating={false} mb={6} />
        <Text mb={6}>
          is a <span className="bold">Software Engineer</span> with a passion
          for human-centered design and fun web creations!
        </Text>

        <Text mb={6}>
          I recently graduated from Northeastern University with a
          <span className="bold"> BS </span> in
          <span className="bold"> Computer Science and Interaction Design</span>
          . During my studies, I completed two 6-month full-time Web Development
          positions, led a mentorship program teaching foundational coding
          skills to middle school girls as president of Girls Who Code, and
          photographed concerts for <i>Tastemakers</i> magazine.
        </Text>

        <Text mb={6}>
          Outside of work, I love to hike, crochet, and play <i>Catan</i>. Take
          a look around to see some of my work, including this site, which I
          designed and built from scratch!
        </Text>

        <Box mb={6}>
          <Text fontWeight={500}>Publications</Text>
          <Text>
            <Link
              color="primary.500"
              isExternal
              href="https://voca.network/blog/2022/07/06/a-conversation-with-kerry-tribe-exploring-cognizance-and-interaction/"
            >
              A Conversation With Kerry Tribe
            </Link>
          </Text>
          <Text>
            <Link
              color="primary.500"
              isExternal
              href="https://www.tastemakersmag.com/issue/issue-65-cmamm"
            >
              TMM Issue 65, Pg. 32
            </Link>
          </Text>
          <Text>
            <Link
              color="primary.500"
              isExternal
              href="https://www.tastemakersmag.com/issue/issue68-ba46l"
            >
              TMM Issue 68, Pg. 23, 44
            </Link>
          </Text>
          <Text>
            <Link
              color="primary.500"
              isExternal
              href="https://www.tastemakersmag.com/photos?offset=1634058300879&reversePaginate=true&author=678fde4809c59c4443712fbe"
            >
              TMM Online
            </Link>
          </Text>
        </Box>
        <Flex flexDirection="row" gap={3} justifyContent="flex-start">
          <Box
            as="a"
            href="https://www.linkedin.com/in/ashlynnbraisted/"
            target="_blank"
            rel="noopener noreferrer"
            cursor="pointer"
            _hover={{ transform: "scale(1.05)" }}
            color="primary.500"
          >
            <GrLinkedinOption size={25} />
          </Box>
          <Box
            as="a"
            href="mailto:ashlynnbraisted@gmail.com"
            cursor="pointer"
            _hover={{ transform: "scale(1.05)" }}
            color="primary.500"
          >
            <GrMailOption size={26} />
          </Box>
        </Flex>
      </Box>
      <Image
        src={`${process.env.PUBLIC_URL}/logo-transparent.svg`}
        right={0}
        bottom={0}
        minWidth="80%"
        maxHeight="85vh"
        position="fixed"
        zIndex={-1}
      />
      {/*<Flex flexDirection="column" alignItems={"center"}>
        <Image
          src={`${process.env.PUBLIC_URL}/ashlynn.jpg`}
          alt="Personal Photo"
          maxHeight="75vh"
        />
      </Flex>*/}
    </Flex>
  );
};

export default About;
