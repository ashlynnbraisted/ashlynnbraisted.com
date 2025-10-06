import { Box, Image } from "@chakra-ui/react";
import InfoTip from "./ToggleTip";

const ImageWithInfo = ({ src, alt, caption, ...props }) => {
  return (
    <Box position="relative" {...props}>
      <Image src={src} alt={alt} />
      <Box position="absolute" bottom={4} right={2} zIndex={10}>
        <InfoTip content={caption} />
      </Box>
    </Box>
  );
};

export default ImageWithInfo;
