import { Box, IconButton, Text } from "@chakra-ui/react";
import * as React from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

const InfoTip = React.forwardRef(function InfoTip(
  { content, buttonProps, ...rest },
  ref
) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Box position="relative" display="inline-block" {...rest} ref={ref} px={1}>
      <IconButton
        variant="ghost"
        aria-label="info"
        size="2xs"
        colorScheme="whiteAlpha"
        icon={<HiOutlineInformationCircle size={25} />}
        onClick={toggle}
        {...buttonProps}
      />
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            position="absolute"
            right="100%"
            bottom="0%"
            width="auto"
            bg="white"
            color="gray"
            px="3"
            py="1"
            rounded="md"
            fontSize="xs"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            zIndex={10}
          >
            <Text whiteSpace="nowrap" fontSize="sm" color="black">
              {content}
            </Text>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
});

export default InfoTip;
