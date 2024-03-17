import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "../src/components/About.jsx";
import Home from "../src/components/Home.jsx";
import Notfound from "../src/components/NotFound.jsx";
import Layout from "./pages/Layout.jsx";
import Singlepage from "./components/singlePage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/about/:id" element={<Singlepage />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
