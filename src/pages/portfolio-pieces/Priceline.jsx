import { Box, Card, Image, Text } from "@chakra-ui/react";
import { BadgeList, ScrollArea } from "../../components";

const Priceline = () => {
  return (
    <Card
      borderRadius={0}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-evenly"
      width={"90%"}
      variant={"outline"}
      px={10}
      gap={10}
    >
      <ScrollArea width={"65%"}>
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
        <Text fontSize={40} fontWeight="medium" color="primary.500">
          <a href="https://www.priceline.com">Priceline.com</a>
        </Text>
        <Text fontSize={20} mt={-2}>
          Frontend Work Sample
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
        <Text fontSize={16} mt={4}>
          As a Software Engineering Co-op on Priceline’s Rental Car WebUX Team,
          I built, designed, and maintained front-end features for the website.
        </Text>
        <Text fontSize={16} mt={4}>
          One key feature I developed was a multi-page dialog that allows users
          to cancel their trip protection easily and independently, eliminating
          the need for customer service calls and associated costs.
        </Text>
        <Text fontSize={16} mt={4}>
          The flow integrates with GraphQL and backend APIs and is engineered to
          seamlessly scale to additional cancellation types in future
          development.
        </Text>
      </Box>
    </Card>
  );
};

export default Priceline;
