import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
// import About from "../pages/About";
// import Courses from "../pages/Courses";
// import Login from "../pages/Login";
// import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public layout routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} /> */}
      </Route>

      {/* Auth route (no header/footer) */}
      {/* <Route path="/login" element={<Login />} /> */}

      {/* 404 page */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRouter;