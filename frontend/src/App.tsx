import { Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Photos from "./pages/Photos/Photos";

//Templates
import AppTemplate from "./Templates/AppTemplate/AppTemplate";

import Test from "./pages/TestPage/TestPage";

function App() {
  return (
    <Routes>
      <Route element={<AppTemplate />} >
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;