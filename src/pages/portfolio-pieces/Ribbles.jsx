import { Link } from "@chakra-ui/react";
import { Image, PortfolioCard, Video } from "../../components";

// A display of my work on Ribbles
const Ribbles = (props) => (
  <PortfolioCard
    title="Ribbles"
    subtitle="Interactive Public Art Installation"
    badges={["Java", "Processing", "JUnit"]}
    media={[
      <Image
        src={`${process.env.PUBLIC_URL}/ribbles.jpg`}
        alt="Ribbles Installation"
      />,
      <Video
        title="Ribbles Demo"
        src={`${process.env.PUBLIC_URL}/ribbles-2.mov`}
      />,
      <Video
        title="Ribbles Demo"
        src={`${process.env.PUBLIC_URL}/ribbles.mov`}
      />,
    ]}
    description={[
      "Over the course of three days, I developed a large-scale public art piece on the facade of Ars Electronica at FutureLab in Linz, Austria alongside two other programmers. We built an interactive game of tag that played across all five sides of the museum exterior.",
      "We worked with Pharus API, a laser motion-tracking system, to turn people’s movements on the courtyard of the museum into exploding circles of light on the building’s facade when they collided.",
      <>
        You can read more about the project{" "}
        <Link
          color="primary.500"
          isExternal
          href="https://ars.electronica.art/futurelab/en/projects-northeastern-university-2022/"
        >
          here
        </Link>
        .
      </>,
    ]}
    {...props}
  />
);

export default Ribbles;
