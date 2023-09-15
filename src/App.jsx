import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
export default () => {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};
