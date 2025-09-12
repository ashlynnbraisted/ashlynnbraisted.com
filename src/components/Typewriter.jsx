import { Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useState, useEffect, useRef } from "react";

function Typewriter({ text, speed = 50, pause = 1500 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isPaused, setIsPaused] = useState(false);

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
        // Typing forward
        if (indexRef.current < text.length) {
          setDisplayedText(text.slice(0, indexRef.current + 1));
          indexRef.current += 1;
          setIsPaused(false);
        } else {
          // Pause at full text
          if (pauseCounterRef.current < pause / speed) {
            pauseCounterRef.current += 1;
            setIsPaused(true);
          } else {
            directionRef.current = -1; // start deleting
            pauseCounterRef.current = 0;
            indexRef.current -= 1;
            setIsPaused(false);
          }
        }
      } else {
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
            directionRef.current = 1; // start typing again
            pauseCounterRef.current = 0;
            indexRef.current = 0;
            setIsPaused(false);
          }
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, pause]);

  return (
    <Text fontSize={128} color="#2F00FF" lineHeight="1">
      {displayedText}
      <Text
        as="span"
        ml="2px"
        animation={isPaused ? `${blink} 2s infinite` : "none"}
      >
        |
      </Text>
    </Text>
  );
}

export default Typewriter;
