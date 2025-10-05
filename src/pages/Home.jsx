import { Box, Flex, Text } from "@chakra-ui/react";
import {
  ImageWithInfo,
  Typewriter,
  ScrollingBanner,
  ZigZagGame,
} from "../components";

function Home() {
  const paragraphs = [
    {
      text: (
        <>
          I’m a <span className="bold-blue">Software Engineer</span> with a
          passion for human-centered design and quality web solutions.
        </>
      ),
      delay: 2,
    },
    {
      text: (
        <>
          I recently graduated from Northeastern University with a
          <span className="bold-blue"> BS </span> in
          <span className="bold-blue">
            {" "}
            Computer Science and Interaction Design
          </span>{" "}
          and spent the summer on a cross-country National Parks camping trip!
        </>
      ),
      delay: 4,
    },
    {
      text: (
        <>
          During undergrad, I completed two 6-month full-time
          <span className="bold-blue"> Web Development</span> positions, led a
          mentorship program for middle school girls in foundational coding
          skills as president of Northeastern's Girls Who Code chapter, and
          photographed concerts for <i>Tastemakers</i> magazine.
        </>
      ),
      delay: 6,
    },
    {
      text: (
        <>
          Outside of work, I love to hike, crochet, and play <i>Catan</i>. Take
          a look around to see some of my work — including this site, which I
          designed and built from scratch!
        </>
      ),
      delay: 8,
    },
  ];

  return (
    <Box position="relative">
      <ScrollingBanner
        text="Welcome to my website!"
        text2="It's good to see you."
      />
      <Typewriter text="Hi, I'm Ashlynn!" />
      <Flex
        position="absolute"
        zIndex={-10}
        justifyContent={"space-between"}
        mt={-10}
      >
        <ImageWithInfo
          width="65%"
          src={`${process.env.PUBLIC_URL}/homepage.jpg`}
          alt="Home Page Photo"
          caption="This photo was taken in Banff National Park on the Plain of Six Glaciers trail."
        />
        <Box width="30%" fontSize={20}>
          {paragraphs.map(({ text }, idx) => (
            <Text key={idx} mb={idx < paragraphs.length - 1 ? 6 : 0}>
              {text}
            </Text>
          ))}
          <ZigZagGame mt={16} />
        </Box>
      </Flex>
    </Box>
  );
}

export default Home;
