import { Flex, Image, Tabs, TabList, Tab } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

// Header component
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "Portfolio", path: "/portfolio" },
    { name: "Resume", path: "/resume" },
    { name: "About", path: "/about" },
  ];

  const currentIndex = links.findIndex(
    (link) => link.path === location.pathname
  );

  return (
    <Flex
      py={8}
      justifyContent="space-between"
      position="sticky"
      top={0}
      zIndex={10}
      bg="white"
      maxHeight="15vh"
    >
      <Image
        src={`${process.env.PUBLIC_URL}/logo-ab.svg`}
        alt="Ashlynn Braisted"
        cursor="pointer"
        boxSize="40px"
        onClick={() => navigate("/")}
      />

      <Tabs
        index={currentIndex >= 0 ? currentIndex : -1} // <-- -1 means no tab selected
        onChange={(index) => navigate(links[index].path)}
        variant="unstyled"
        size="lg"
      >
        <TabList>
          {links.map((link) => (
            <Tab
              fontSize={"22px"}
              key={link.path}
              _selected={{ color: "white", bg: "primary.500" }}
              height={"40px"}
            >
              {link.name}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Flex>
  );
};

export default Header;
