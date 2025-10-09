// components/AutoVideo.jsx
import { Box } from "@chakra-ui/react";

// Video with props
const Video = ({ src, title, ...props }) => (
  <Box
    as="video"
    src={src}
    title={title}
    autoPlay
    loop
    muted
    playsInline
    {...props}
  />
);

export default Video;
