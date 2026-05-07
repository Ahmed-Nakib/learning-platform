import { useParams } from "react-router-dom";
import blogs from "../data/blogs.json";

const BlogPage = () => {
  const { blogSlug } = useParams();

  // 1️⃣ blog খুঁজে বের করা
  const blog = blogs.find(
    (b) => b.slug === blogSlug
  );

  // 2️⃣ যদি blog না পাওয়া যায়
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
    <div className="py-10 max-w-3xl mx-auto">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-3">
        {blog.title}
      </h1>

      {/* Meta info */}
      <div className="text-sm text-gray-500 mb-6">
        <p>Slug: {blog.slug}</p>
      </div>

      {/* Content */}
      {/* <div className="text-gray-700 leading-7">
        {blog.content}
      </div> */}

    </div>
  );
};

export default BlogPage;