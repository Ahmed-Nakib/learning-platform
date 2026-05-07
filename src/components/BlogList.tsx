import { useParams, Link } from "react-router-dom";
import categories from "../data/categories.json";
import subCategories from "../data/subCategories.json";
import blogs from "../data/blogs.json";

const BlogList = () => {

  const { categorySlug, subCategorySlug } = useParams();

  // 1️⃣ category খুঁজে বের করা
  const category = categories.find(
    c => c.slug === categorySlug
  );

  // 2️⃣ subCategory খুঁজে বের করা
  const subCategory = subCategories.find(
    sub => sub.slug === subCategorySlug
  );

  // 3️⃣ ঐ subCategory এর blogs filter করা
  const filteredBlogs = blogs.filter(
    blog => blog.subCategoryId === subCategory?.id
  );

  return (
    <div className="py-10">

      <h1 className="text-2xl font-bold mb-2">
        {subCategory?.name} Blogs
      </h1>

      <p className="text-gray-500 mb-6">
        Category: {category?.name}
      </p>

      {/* Blog List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {filteredBlogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blog/${blog.slug}`}
            className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition"
          >

            <h2 className="text-lg font-semibold mb-2">
              {blog.title}
            </h2>

            <p className="text-gray-500 text-sm">
              {blog.slug}
            </p>

          </Link>
        ))}

      </div>

    </div>
  );
};

export default BlogList;