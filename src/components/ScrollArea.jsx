import { Flex, Box, HStack, IconButton } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const ScrollArea = ({ children, ...props }) => {
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
      <Flex alignItems={"center"} py={5}>
        {page > 0 && (
          <IconButton
            aria-label="Scroll left"
            icon={<FaChevronLeft />}
            onClick={() => scrollByPage(-1)}
            right={2}
            variant="ghost"
          />
        )}
        <Flex
          ref={containerRef}
          overflowX="auto"
          scrollSnapType="x mandatory"
          css={{
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          {items.map((child, i) => (
            <Box key={i} flexShrink={0} scrollSnapAlign="start" w="100%">
              {child}
            </Box>
          ))}
        </Flex>

        {page < items.length - 1 && (
          <IconButton
            aria-label="Scroll right"
            icon={<FaChevronRight />}
            onClick={() => scrollByPage(1)}
            left={2}
            variant="ghost"
          />
        )}
      </Flex>

      <HStack justify="center">
        {items.map((_, i) => (
          <Box
            key={i}
            w={2.5}
            h={2.5}
            borderRadius="full"
            bg={i === page ? "primary.500" : "gray.300"}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default ScrollArea;
