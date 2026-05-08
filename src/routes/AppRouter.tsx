import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Learn from "../pages/Learn";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SubCategory from "../components/SubCategory";
import BlogList from "../components/BlogList";
import Blogs from "../components/Blog";



const AppRouter = () => {
  return (
    <Routes>

      {/* Layout wrapper */}
      <Route element={<MainLayout />}>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Learn - Categories */}
        <Route path="/learn" element={<Learn />} />

        {/* Sub Categories */}
        <Route
          path="/learn/:categorySlug"
          element={<SubCategory  />}
        />

        {/* Blogs under Sub Category */}
        <Route
          path="/learn/:categorySlug/:subCategorySlug"
          element={<BlogList />}
        />

        {/* Single Blog */}
        <Route
           path="/learn/:categorySlug/:subCategorySlug/:blogSlug"
          element={<Blogs />}
        />

        {/* Static pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Route>

    </Routes>
  );
};

export default AppRouter;