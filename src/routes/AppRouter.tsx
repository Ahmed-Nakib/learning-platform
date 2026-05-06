import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../components/About";
import Learn from "../pages/Learn";


const AppRouter = () => {
  return (
    <Routes>
      {/* Public layout routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} /> 
      </Route>

      {/* Auth route (no header/footer) */}
      {/* <Route path="/login" element={<Login />} /> */}

      {/* 404 page */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRouter;