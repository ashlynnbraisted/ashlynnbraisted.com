import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  VStack,
} from "@chakra-ui/react";
import { Priceline, Ribbles, Wip } from "./portfolio-pieces";
import { Typewriter } from "../components";

function Portfolio() {
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
      <Tabs variant="unstyled" size="lg">
        <TabList position="sticky" top="192px" bg="white" zIndex={10}>
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
        <TabPanels pt={6}>
          <TabPanel>
            <VStack spacing={10} mb={5}>
              <Priceline />
              <Ribbles />
              <Wip />
            </VStack>
          </TabPanel>
          <TabPanel>
            <Wip />
          </TabPanel>
          <TabPanel>
            <Wip />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Portfolio;
