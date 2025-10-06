import { Box, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useState, useEffect, useRef, useMemo } from "react";

const blinkAnimation = keyframes`
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
`;

const Typewriter = ({
  text,
  speed = 100,
  pause = 2000,
  repeating = true,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Stable array of texts
  const texts = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const textIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const directionRef = useRef(1); // 1 = typing, -1 = deleting
  const pauseCounterRef = useRef(0);

  useEffect(() => {
    const currentText = () => texts[textIndexRef.current];

    const handlePause = () => {
      if (pauseCounterRef.current < pause / speed) {
        pauseCounterRef.current += 1;
        setIsPaused(true);
        return true; // still pausing
      }
      pauseCounterRef.current = 0;
      setIsPaused(false);
      return false; // pause complete
    };

    const typeForward = () => {
      if (charIndexRef.current < currentText().length) {
        setDisplayedText(currentText().slice(0, charIndexRef.current + 1));
        charIndexRef.current += 1;
        setIsPaused(false);
      } else if (repeating) {
        if (!handlePause()) {
          directionRef.current = -1;
          charIndexRef.current -= 1;
        }
      } else {
        if (!handlePause()) {
          setCursorVisible(false);
        }
      }
    };

    const deleteBackward = () => {
      if (charIndexRef.current >= 0) {
        setDisplayedText(currentText().slice(0, charIndexRef.current));
        charIndexRef.current -= 1;
        setIsPaused(false);
      } else if (repeating) {
        if (!handlePause()) {
          directionRef.current = 1;
          charIndexRef.current = 0;
          textIndexRef.current = (textIndexRef.current + 1) % texts.length;
        }
      }
    };

    const interval = setInterval(() => {
      directionRef.current === 1 ? typeForward() : deleteBackward();
    }, speed);

    return () => clearInterval(interval);
  }, [texts, speed, pause, repeating]);

  return (
    <Box {...props}>
      <Text fontSize={128} color="primary.500" lineHeight="1">
        {displayedText}
        {cursorVisible && (
          <Text
            as="span"
            ml={2}
            color="primary.500"
            animation={isPaused ? `${blinkAnimation} 2s infinite` : "none"}
          >
            |
          </Text>
        )}
      </Text>
    </Box>
  );
};

export default Typewriter;
