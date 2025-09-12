import { Box, Image } from "@chakra-ui/react";
import { InfoTip } from "./ToggleTip";

function ImageWithInfo({ src, alt, caption }) {
  return (
    <Box position="relative" display="inline-block">
      <Image src={src} alt={alt} />
      <Box position="absolute" bottom={2} right={2} zIndex={10}>
        <InfoTip content={caption} />
      </Box>
    </Box>
  );
}

export default ImageWithInfo;
