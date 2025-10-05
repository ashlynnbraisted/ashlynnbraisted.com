import { Box, Image } from "@chakra-ui/react";
import Typewriter from "../components/Typewriter";

function Resume() {
  return (
    <Box>
      <Typewriter text="Resume" repeating={false} />
      <Box align="center">
        <Image
          src="resume.svg"
          alt="Resume"
          fit={"contain"}
          border={"1px solid #2F00FF"}
          shadow={"lg"}
          maxH="70vh"
        />
      </Box>
    </Box>
  );
}

export default Resume;
