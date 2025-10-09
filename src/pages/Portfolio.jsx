import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  VStack,
} from "@chakra-ui/react";
import { ConcertPhotos, Priceline, Ribbles, Swap } from "./portfolio-pieces";
import { Typewriter } from "../components";

// The "Portfolio" tab
const Portfolio = () => {
  return (
    <Box>
      <Typewriter
        text={[
          "You made it!",
          "...Well...",
          "I made it!",
          "Welcome to my portfolio.",
        ]}
        repeating={false}
        pb={6}
        position="sticky"
        top="104px"
        bg="white"
        width="100%"
        zIndex={10}
      />

      {/*A set of tabs to sort portfolio work */}
      <Tabs variant="unstyled" size="lg">
        <TabList position="sticky" top="192px" bg="white" zIndex={10} pb={3}>
          <Tab
            p={0}
            pr={8}
            pl={2}
            _selected={{ color: "primary.500" }}
            fontSize={"22px"}
          >
            Code
          </Tab>
          <Tab
            p={0}
            pr={8}
            _selected={{ color: "primary.500" }}
            fontSize={"22px"}
          >
            UI/UX
          </Tab>
          <Tab
            p={0}
            pr={8}
            _selected={{ color: "primary.500" }}
            fontSize={"22px"}
          >
            Photography
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack spacing={6} mb={5}>
              {/* {[Priceline, Ribbles].map((CardComp, i) => (
                <CardComp key={i} reverseLayout={i % 2 === 1} />
              ))} */}
              <Priceline />
              <Ribbles />
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={6} mb={5}>
              {/* {[Swap].map((CardComp, i) => (
                <CardComp key={i} reverseLayout={i % 2 === 1} />
              ))} */}
              <Swap />
            </VStack>
          </TabPanel>
          <TabPanel>
            <ConcertPhotos />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Portfolio;
