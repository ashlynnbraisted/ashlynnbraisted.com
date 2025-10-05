import { Box, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useState, useEffect, useRef } from "react";

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

  const indexRef = useRef(0);
  const directionRef = useRef(1); // 1 = typing, -1 = deleting
  const pauseCounterRef = useRef(0);

  const blink = keyframes`
    0%, 50%, 100% { opacity: 1; }
    25%, 75% { opacity: 0; }
  `;

  useEffect(() => {
    const interval = setInterval(() => {
      if (directionRef.current === 1) {
        // Typing
        if (indexRef.current < text.length) {
          setDisplayedText(text.slice(0, indexRef.current + 1));
          indexRef.current += 1;
          setIsPaused(false);
        } else {
          if (repeating) {
            // Pause at full
            if (pauseCounterRef.current < pause / speed) {
              pauseCounterRef.current += 1;
              setIsPaused(true);
            } else {
              directionRef.current = -1; // Start deleting
              pauseCounterRef.current = 0;
              indexRef.current -= 1;
              setIsPaused(false);
            }
          } else {
            // Stop once full text is typed
            clearInterval(interval);
            setIsPaused(true);

            // Trigger cursor blinking 3 times
            let blinks = 0;
            const blinkInterval = setInterval(() => {
              setCursorVisible((v) => !v);
              blinks += 1;
              if (blinks >= 6) {
                clearInterval(blinkInterval);
                setCursorVisible(false);
              }
            }, 500);
          }
        }
      } else if (repeating) {
        // Deleting backward
        if (indexRef.current >= 0) {
          setDisplayedText(text.slice(0, indexRef.current));
          indexRef.current -= 1;
          setIsPaused(false);
        } else {
          // Pause at empty
          if (pauseCounterRef.current < pause / speed) {
            pauseCounterRef.current += 1;
            setIsPaused(true);
          } else {
            directionRef.current = 1; // Start typing again
            pauseCounterRef.current = 0;
            indexRef.current = 0;
            setIsPaused(false);
          }
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, pause, repeating]);

  return (
    <Box {...props}>
      <Text fontSize={128} color="primary.500" lineHeight="1">
        {displayedText}
        {cursorVisible && (
          <Text
            color="primary.500"
            as="span"
            ml="2px"
            animation={repeating && isPaused ? `${blink} 2s infinite` : "none"}
          >
            |
          </Text>
        )}
      </Text>
    </Box>
  );
};

export default Typewriter;
