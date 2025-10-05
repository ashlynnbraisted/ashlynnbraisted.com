import { Flex, Text } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "Portfolio", path: "/portfolio" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Flex
      as="header"
      pt={8}
      pb={14}
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

      <Flex justify="space-between" width="20%">
        {links.map((link) => (
          <Text
            key={link.path}
            cursor="pointer"
            _hover={{ textDecoration: "underline" }}
            onClick={() => navigate(link.path)}
            textDecoration={
              location.pathname === link.path ? "underline" : "none"
            }
          >
            {link.name}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;
