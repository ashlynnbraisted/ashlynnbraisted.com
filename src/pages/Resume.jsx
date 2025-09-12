import { Box, Image } from "@chakra-ui/react";

function Resume() {
  return (
    <Box align="center" mt={10}>
      <Image
        src="resume.svg"
        alt="Resume"
        fit={"contain"}
        border={"1px solid #2F00FF"}
        shadow={"lg"}
      />
    </Box>
  );
}

export default Resume;
