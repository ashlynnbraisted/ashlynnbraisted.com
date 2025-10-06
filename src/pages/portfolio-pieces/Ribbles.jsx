import { Box, Image, Card, Link, Text } from "@chakra-ui/react";
import { BadgeList, ScrollArea } from "../../components";

const Ribbles = () => {
  return (
    <Card
      borderRadius={0}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-evenly"
      gap={10}
      px={10}
      width={"90%"}
      variant={"outline"}
    >
      <ScrollArea width={"65%"}>
        <Image
          src={`${process.env.PUBLIC_URL}/ribbles.jpg`}
          alt="Priceline Components"
        ></Image>
        <video
          title="Ribbles Demo"
          src={`${process.env.PUBLIC_URL}/ribbles.mov`}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <video
          title="Ribbles Demo"
          src={`${process.env.PUBLIC_URL}/ribbles-2.mov`}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </ScrollArea>
      <Box maxWidth="30%">
        <Text fontSize={40} fontWeight="medium" color="primary.500">
          Ribbles
        </Text>
        <Text fontSize={20} mt={-2}>
          Coding Challenge - Linz, Austria
        </Text>
        <BadgeList badges={["Java", "JUnit", "Processing", "Pharus API"]} />

        <Text fontSize={16} mt={4}>
          Over the course of three days, I developed a large-scale public art
          piece on the facade of Ars Electronica in Linz, Austria alongside two
          other programmers. We built an interactive game of tag that played
          across all five sides of the museum exterior.
        </Text>
        <Text fontSize={16} mt={4}>
          We worked with Pharus API, a laser motion-tracking system, to turn
          people’s movements on the courtyard of the museum into exploding
          circles of light on the building’s facade when they collided.
        </Text>

        <Text mt={4}>
          You can read more about the project{" "}
          <Link
            color="primary.500"
            isExternal
            href="https://ars.electronica.art/futurelab/en/projects-northeastern-university-2022/"
          >
            here.
          </Link>
        </Text>
      </Box>
    </Card>
  );
};
export default Ribbles;
