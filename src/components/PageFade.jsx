import { motion } from "framer-motion";

const PageFade = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    style={{ width: "100%", position: "relative" }}
  >
    {children}
  </motion.div>
);

export default PageFade;
