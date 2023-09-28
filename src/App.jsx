import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Naijawives from "./components/naijawives";
import Scroll from "./components/scroll";
export default () => {
  return (
    <div className="">
      <Router>
        <Scroll />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/9jawives" element={<Naijawives />} />
          <Route path="*" element={<>404</>} />
        </Routes>
      </Router>
    </div>
  );
};
