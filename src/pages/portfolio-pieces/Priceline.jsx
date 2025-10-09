import { Image } from "@chakra-ui/react";
import { PortfolioCard, Video } from "../../components";

// A display of my work from Priceline.com
const Priceline = (props) => {
  return (
    <PortfolioCard
      title="Priceline.com"
      subtitle="Frontend Work Sample"
      link="https://www.priceline.com"
      badges={[
        "React",
        "Javascript",
        "GraphQL",
        "Apollo Client",
        "Node.js",
        "Storybook",
      ]}
      media={[
        <Image
          src={`${process.env.PUBLIC_URL}/priceline-components.svg`}
          alt="Priceline Components"
        />,
        <Video
          title="Priceline Demo"
          src={`${process.env.PUBLIC_URL}/priceline-demo.mov`}
        />,
      ]}
      description={[
        "During my Software Engineering Co-op on Priceline, I built, designed, and maintained front-end features for the website.",
        "One key feature I developed was a multi-page dialog that allows users to cancel their trip protection easily and independently, eliminating the need for customer service calls and associated costs.",
        "The flow integrates with GraphQL and backend APIs and is engineered to seamlessly scale to additional cancellation types in future development.",
      ]}
      {...props}
    />
  );
};

export default Priceline;
