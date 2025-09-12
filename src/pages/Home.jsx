import { Box, Flex, Text, chakra } from "@chakra-ui/react";
import {
  ImageWithInfo,
  Typewriter,
  FadeIn,
  ScrollingBanner,
} from "../components";

// Custom snapping components
const SnapContainer = chakra(Box, {
  baseStyle: {
    height: "90vh",
    overflowY: "scroll",
    scrollSnapType: "y mandatory",
    scrollBehavior: "smooth",
  },
});

const SnapSection = chakra(Box, {
  baseStyle: {
    height: "90vh",
    scrollSnapAlign: "start",
  },
});

function Home({ firstLoad }) {
  const paragraphs = [
    {
      text: (
        <>
          I’m a <b>software engineer</b> with a passion for human-centered
          design and quality web solutions.
        </>
      ),
      delay: 2,
    },
    {
      text: (
        <>
          I recently graduated from Northeastern University with a <b>BS</b> in{" "}
          <b>Computer Science and Interaction Design</b> and spent the summer on
          a cross-country National Parks camping trip!
        </>
      ),
      delay: 4,
    },
    {
      text: (
        <>
          During undergrad, I completed two 6-month full-time{" "}
          <b>web development</b> positions, led a coding club to mentor middle
          school girls, and worked as a concert photographer for a music
          magazine.
        </>
      ),
      delay: 6,
    },
    {
      text: (
        <>
          Outside of work, I love to hike, crochet, and play <i>Catan</i>. Take
          a look below to see some of my work — including this site, which I
          built from scratch!
        </>
      ),
      delay: 8,
    },
  ];

  return (
    <SnapContainer>
      {/* Page 1 */}
      <SnapSection position="relative">
        <ScrollingBanner text="Welcome to my website!" />

        <Box
          position="absolute"
          top={90}
          right={50}
          width="65%"
          objectFit="cover"
          zIndex={0}
        >
          <ImageWithInfo
            src="/homepage.jpg"
            alt="Home Page Photo"
            caption="This photo was taken in Banff National Park on the Plain of Six Glaciers trail."
          />
        </Box>

        <Flex
          flexDirection="column"
          alignItems="flex-start"
          width="100%"
          position="absolute"
          zIndex={1}
        >
          <Typewriter text="Hi, I'm Ashlynn!" speed={100} pause={2000} />

          <Box width="25%" mt={10} fontSize={22}>
            {paragraphs.map(({ text, delay }, idx) =>
              firstLoad ? (
                <FadeIn key={idx} delay={delay}>
                  <Text mb={idx < paragraphs.length - 1 ? 6 : 0}>{text}</Text>
                </FadeIn>
              ) : (
                <Text key={idx} mb={idx < paragraphs.length - 1 ? 6 : 0}>
                  {text}
                </Text>
              )
            )}
          </Box>
        </Flex>
      </SnapSection>

      {/* Page 2 */}
      <SnapSection
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={4}
        bg="#F7F7F7"
      >
        <Text fontSize="xl">
          This page is a work in progress! In the meantime, check out my{" "}
          <a
            href="https://www.linkedin.com/in/ashlynnbraisted/"
            style={{ color: "#2F00FF" }}
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a href="/resume" style={{ color: "#2F00FF" }}>
            Resume
          </a>{" "}
          to see some of my projects.
        </Text>
      </SnapSection>
    </SnapContainer>
  );
}

export default Home;
