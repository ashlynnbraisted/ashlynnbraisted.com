// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { Header } from "./components";
import { Home, Resume, Contact } from "./pages";

function App() {
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
    }
  }, [firstLoad]);

  return (
    <Router>
      <Box px={50}>
        <Header />
        <Routes>
          <Route path="/" element={<Home firstLoad={firstLoad} />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
