import { Link } from "react-router-dom";
import categories from "../data/categories.json";


const Learn = () => {
  const blogsData = categories;
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold mb-6">Categories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogsData.map((cat) => (
          <div
            key={cat.id}
            className="p-6 rounded-xl shadow shadow-primary hover:shadow-lg transition bg-white hover:-translate-y-1"
          >
            <h2 className="text-lg font-semibold mb-2">{cat.name}</h2>
            <p className="text-gray-500 text-sm">{cat.slug}</p>

            <Link
            to={`/learn/${cat.slug}`}
             className="mt-4 text-sm text-primary font-medium">
              Explore →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;