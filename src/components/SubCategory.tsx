import { useParams, Link } from "react-router-dom";
import categories from "../data/categories.json";
import subCategories from "../data/subCategories.json";

const CategoryPage = () => {

  const { categorySlug } = useParams();

  // 1️⃣ category খুঁজে বের করা
  const category = categories.find(
    c => c.slug === categorySlug
  );

  // 2️⃣ ঐ category এর subcategory filter করা
  const filteredSubCategories = subCategories.filter(
    sub => sub.categoryId === category?.id
  );

  return (
    <div className="py-10">

      <h1 className="text-2xl font-bold mb-6">
        {category?.name} - Sub Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {filteredSubCategories.map((sub) => (
          <Link
            key={sub.id}
            to={`/learn/${category?.slug}/${sub.slug}`}
            className="p-6 bg-white shadow rounded-xl hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold">
              {sub.name}
            </h2>

            <p className="text-gray-500 text-sm">
              {sub.slug}
            </p>

          </Link>
        ))}

      </div>

    </div>
  );
};

export default CategoryPage;