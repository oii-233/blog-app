
import { useState } from "react";
import BlogCard from "../components/BlogCard";
import { blogData } from "../data/constant";

function Home ()  {
  const [showAll, setShowAll] = useState(false);
  const blogsToShow = showAll ? blogData : blogData.slice(0, 3);

  return (
    <div className="bg-white text-black my-5">
      {/* Hero Section */}
      <section className="relative  w-full ">
        <img
          src="/imageHero.png"
          alt="Hero"
          className="w-full h-full object-cover rounded-b-lg"
        />
        
      </section>

      {/* Recent Posts Section */}
      <section className="w-full">
        <h2 className="text-2xl font-bold mb-2 mt-10">Recent Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {blogsToShow.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
    {blogData.length>3 && (
      <div className="text-center pb-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
      </div>
        

    )}
      </section>
    </div>
  );
}

export default Home;
