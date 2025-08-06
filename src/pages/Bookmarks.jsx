import { useAtom } from "jotai";
import { bookmarkAtom } from "../atoms/bookmarkAtom";
import { Bookmark } from "lucide-react";
import { useState } from "react";

const Bookmarks = () => {
  const [bookmarked] = useAtom(bookmarkAtom);
  const [expanded, setExpanded] = useState(null); // To track which blog is expanded

  const toggleReadMore = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h5 className="text-4xl font-serif mb-6 text-center">Bookmarked Blogs</h5>

        {bookmarked.length === 0 ? (
          <p className="text-muted-foreground font-bold text-center">
            No bookmarks yet.
          </p>
        ) : (
          <div className="flex flex-col gap-6">
            {bookmarked.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-xl  overflow-hidden max-w-md mx-auto"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <img src={blog.im} alt="" />
                    <div>
                      <p className="font-medium">{blog.author}</p>
                      <p className="text-sm text-muted-foreground">
                       Posted on {new Date(blog.createdAt).toDateString()}
                      </p>
                    </div>
                    </div>
                    <Bookmark className="w-10 h-10 fill-primary text-primary mt-1" />
                </div>

                <div className="p-4 flex flex-col gap-2">
                  
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="text-xl font-semibold">{blog.title}</h2>
                    
                  </div>

                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-48 w-full object-cover"
                  />
                  <h4>{blog.description}</h4>
                  <p className="text-sm text-muted-foreground">
                    {expanded === blog.id
                      ? blog.content
                      : blog.content.slice(0, 100) + "..."}
                  </p>

                  <button
                    className="text-blue-600 hover:underline text-sm w-fit"
                    onClick={() => toggleReadMore(blog.id)}
                  >
                    {expanded === blog.id ? "Show Less" : "Read More"}
                  </button>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
