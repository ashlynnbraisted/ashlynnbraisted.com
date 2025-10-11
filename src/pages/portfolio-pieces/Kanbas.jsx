import { Link } from "@chakra-ui/react";
import { Image, PortfolioCard, Video } from "../../components";

// A display of my work on Kanbas
const Kanbas = (props) => (
  <PortfolioCard
    title="Kanbas"
    subtitle="Canvas Replica Web App"
    badges={[
      "TypeScript",
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
      "Bootstrap",
    ]}
    media={[
      <Image src={`${process.env.PUBLIC_URL}/kanbas.png`} alt="Kanbas Logo" />,
      <Video
        src={`${process.env.PUBLIC_URL}/kanbas-demo.mp4`}
        alt="Kanbas Demo"
      />,
      <Image
        src={`${process.env.PUBLIC_URL}/kanbas-quiz.png`}
        alt="Kanbas Quiz"
      />,
    ]}
    description={[
      "I built a clone of the Learning Management System Canvas from scratch as part of my Web Development course.",
      "The app allows users to create, edit, and delete courses, modules, and quizzes, and includes a user login and management system.",
      <>
        The backend is hosted on{" "}
        <Link
          color="primary.500"
          isExternal
          href="https://kanbas-node-server-app-quizzes.onrender.com/"
        >
          Render
        </Link>{" "}
        and connects to a MongoDB cluster that stores the app’s content and user
        data, while the frontend is deployed on{" "}
        <Link
          color="primary.500"
          isExternal
          href="https://cheerful-parfait-c509f6.netlify.app/#/Kanbas/Dashboard"
        >
          Netlify
        </Link>
        , where you can explore the features. It is divided into a{" "}
        <Link
          color="primary.500"
          isExternal
          href="https://github.com/ashlynnbraisted/kanbas-react-web-app"
        >
          frontend
        </Link>{" "}
        and{" "}
        <Link
          color="primary.500"
          isExternal
          href="https://github.com/ashlynnbraisted/kanbas-node-server-app"
        >
          backend
        </Link>{" "}
        repository.
      </>,
    ]}
    {...props}
  />
);

export default Kanbas;
