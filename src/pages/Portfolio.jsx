import { Box } from "@chakra-ui/react";
import { Priceline, Wip } from "./portfolio-pieces";
import { Typewriter } from "../components";

function Portfolio() {
  return (
    <Box position="relative" minHeight="85vh">
      <Typewriter text="Portfolio" repeating={false} mb={5} />
      <Priceline />
      <Box position="absolute" bottom="10px" left="0" right="0">
        <Wip />
      </Box>
    </Box>
  );
}

export default Portfolio;
