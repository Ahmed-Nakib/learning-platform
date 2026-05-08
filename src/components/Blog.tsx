import { useParams } from "react-router-dom";
import categories from "../data/categories.json";
import subCategories from "../data/subCategories.json";
import blogs from "../data/blogs.json";

const Blogs = () => {

  const {
    categorySlug,
    subCategorySlug,
    blogSlug
  } = useParams();

  // category খুঁজে বের করা
  const category = categories.find(
    (c) => c.slug === categorySlug
  );

  // subCategory খুঁজে বের করা
  const subCategory = subCategories.find(
    (sub) => sub.slug === subCategorySlug
  );

  // blog খুঁজে বের করা
  const blog = blogs.find(
    (b) => b.slug === blogSlug
  );

  // blog না পেলে
  if (!blog) {
    return (
      <div className="py-10 text-center">
        <h1 className="text-2xl font-bold text-red-500">
          Blog Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="py-10 max-w-3xl mx-auto px-4">

      {/* Category */}
      <p className="text-sm text-blue-600 font-medium mb-2">
        {category?.name} / {subCategory?.name}
      </p>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">
        {blog.heading}
      </h1>

      {/* Meta */}
      <p className="text-sm text-gray-500 mb-8">
        Slug: {blog.slug}
      </p>

      {/* Content */}
      <div className="text-gray-700 leading-8 space-y-4">
        <p>{blog.content}</p>
      </div>

    </div>
  );
};

export default Blogs;