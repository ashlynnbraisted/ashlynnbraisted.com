// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { Header, Footer } from "./components";
import { Home, Portfolio, Resume, Contact } from "./pages";

function App() {
  return (
    <Router>
      <Box
        px={75}
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent={"space-between"}
      >
        <Box>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
