import { Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <Flex
      as="header"
      pt={8}
      pb={4}
      justifyContent="space-between"
      fontSize={24}
      position="sticky"
      zIndex={10}
      top={0}
      bg="white"
    >
      <Text
        cursor="pointer"
        _hover={{ textDecoration: "underline" }}
        onClick={() => navigate("/")}
      >
        Ashlynn Braisted
      </Text>

      <Flex justify="space-between" width="25%">
        <Text
          _hover={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          About Me
        </Text>
        <Text
          _hover={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => navigate("/resume")}
        >
          Resume
        </Text>
        <Text
          _hover={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => navigate("/contact")}
        >
          Contact
        </Text>
      </Flex>
    </Flex>
  );
}

export default Header;
