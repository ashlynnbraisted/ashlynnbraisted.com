import { Box, Image, Text } from "@chakra-ui/react";
import { BadgeList, ScrollArea } from "../../components";

function Priceline() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <ScrollArea width={"45%"}>
        <Image
          src={`${process.env.PUBLIC_URL}/priceline-components.svg`}
          alt="Priceline Components"
        ></Image>
        <video
          title="Priceline Demo"
          src={`${process.env.PUBLIC_URL}/priceline-demo.mov`}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </ScrollArea>
      <Box maxWidth="30%">
        <Text fontSize={64} fontWeight="semibold" color="primary.500">
          <a href="https://www.priceline.com">Priceline.com</a>
        </Text>
        <Text fontSize="2xl" mt={-3}>
          Work Sample
        </Text>
        <BadgeList
          badges={[
            "React",
            "Javascript",
            "GraphQL",
            "Apollo Client",
            "Node.js",
            "Storybook",
          ]}
        />
        <Text fontSize="lg" mt={4}>
          As a Software Engineering Co-op on Priceline’s Rental Car WebUX Team,
          I <span className="bold">built, designed,</span> and{" "}
          <span className="bold">maintained</span> front-end features for the
          website.
        </Text>
        <Text fontSize="lg" mt={4}>
          One key feature I developed was a{" "}
          <span className="bold">multi-page dialog</span> that allows users to
          cancel their trip protection easily and independently,
          <span className="bold">
            {" "}
            eliminating the need for customer service calls
          </span>{" "}
          and associated costs.
        </Text>
        <Text fontSize="lg" mt={4}>
          The flow integrates with GraphQL and backend APIs and is engineered to{" "}
          <span className="bold">
            seamlessly scale to additional cancellation types
          </span>{" "}
          in future development.
        </Text>
      </Box>
    </Box>
  );
}

export default Priceline;
