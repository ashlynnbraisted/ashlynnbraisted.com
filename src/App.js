// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { Header } from "./components";
import { Home, Portfolio, Resume, Contact } from "./pages";

function App() {
  return (
    <Router>
      <Box px={75}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
