import { AspectRatio, Flex, Box, HStack, IconButton } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// A scrollable media display component
const ScrollArea = ({ children, aspectRatio = false, ...props }) => {
  const items = Array.isArray(children) ? children : [children];
  const containerRef = useRef(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const onScroll = () => {
      const scrollLeft = container.scrollLeft;
      const width = container.offsetWidth;
      setPage(Math.round(scrollLeft / width));
    };
    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const scrollByPage = (direction) => {
    const container = containerRef.current;
    if (!container) return;
    const width = container.offsetWidth;
    container.scrollTo({
      left: container.scrollLeft + direction * width,
      behavior: "smooth",
    });
  };

  return (
    <Box {...props}>
      <Flex alignItems="center">
        {/* Left arrow */}
        <IconButton
          aria-label="Scroll left"
          icon={<FaChevronLeft />}
          onClick={() => scrollByPage(-1)}
          right={3}
          variant="ghost"
          color="secondary.500"
          visibility={page > 0 ? "visible" : "hidden"}
        />
        {/* Media on display */}
        <Flex
          ref={containerRef}
          overflowX="auto"
          scrollSnapType="x mandatory"
          css={{
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
          width="100%"
        >
          {items.map((child, i) => (
            <Box key={i} flexShrink={0} scrollSnapAlign="start" w="100%">
              {aspectRatio ? (
                <AspectRatio ratio={aspectRatio}>{child}</AspectRatio>
              ) : (
                child
              )}
            </Box>
          ))}
        </Flex>

        {/* Right arrow */}
        <IconButton
          aria-label="Scroll right"
          icon={<FaChevronRight />}
          onClick={() => scrollByPage(1)}
          left={3}
          variant="ghost"
          color="secondary.500"
          visibility={page < items.length - 1 ? "visible" : "hidden"}
        />
      </Flex>

      {/* Dots below media */}
      {items.length > 1 && (
        <HStack justify="center" pt={6} pb={3}>
          {items.map((_, i) => (
            <Box
              key={i}
              w={2}
              h={2}
              bg={i === page ? "primary.500" : "secondary.400"}
            />
          ))}
        </HStack>
      )}
    </Box>
  );
};

export default ScrollArea;
