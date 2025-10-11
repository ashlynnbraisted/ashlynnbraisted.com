import { Image, PortfolioCard, Video } from "../../components";

// A display of my work from Priceline.com
const Priceline = (props) => {
  return (
    <PortfolioCard
      title="Priceline.com"
      subtitle="Feature Development"
      link="https://www.priceline.com"
      badges={[
        "Javascript",
        "React",
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
          fit="cover"
        />,
      ]}
      description={[
        "During my Software Engineering Co-op on Priceline, I designed, built, and maintained frontend features for the website.",
        "One key feature I developed was a multi-page dialog that allows users to cancel their trip protection easily and independently, eliminating the need for customer service calls and associated costs.",
        "The flow integrates with GraphQL and backend APIs and is engineered to scale seamlessly to additional cancellation types in future releases.",
      ]}
      {...props}
    />
  );
};

export default Priceline;
