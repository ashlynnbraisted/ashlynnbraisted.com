import { Link } from "@chakra-ui/react";
import { Image, PortfolioCard } from "../../components";

// A display of my Personal Website
const PersonalWebsite = (props) => {
  return (
    <PortfolioCard
      title="Braisted.com"
      subtitle="Personal Website"
      badges={["JavaScript", "React", "Chakra UI", "GitHub Pages"]}
      media={[
        <Image
          src={`${process.env.PUBLIC_URL}/logo/pw-logo.svg`}
          alt="Personal Website Logo"
          fit="contain"
        />,
      ]}
      description={[
        "You're on it right now!",
        "I designed and developed this website as both a creative space and a personal portfolio. The codebase is built for reusability, making it easy to add new projects as I create them.",
        <>
          You can view the repository{" "}
          <Link
            color="primary.500"
            isExternal
            href="https://github.com/ashlynnbraisted/braisted.com"
          >
            here
          </Link>
          .
        </>,
      ]}
      {...props}
    />
  );
};

export default PersonalWebsite;
