import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAtom } from "jotai";
import { bookmarkAtom } from "../atoms/bookmarkAtom";

const BlogCard = ({ blog }) => {
  const [bookmarked, setBookmarked] = useAtom(bookmarkAtom);

  const toggleBookmark = () => {
    const exists = bookmarked.some((b) => b.id === blog.id);
    if (exists) {
      setBookmarked(bookmarked.filter((b) => b.id !== blog.id));
    } else {
      setBookmarked([...bookmarked, blog]);
    }
  };

  const isBookmarked = bookmarked.some((b) => b.id === blog.id);

  return (
    <div className="rounded-lg shadow hover:shadow-md transition duration-300 border p-4">
      <Link to={`/blog/${blog.id}`}>
        <img
          src={blog.image}
          alt={blog.title}
          className=" w-full object-cover rounded mb-3"
        />
        <h2 className="text-xl font-bold mb-1">{blog.title}</h2>
        <p  className="text-sm text-muted-foreground mb-2">{blog.description}</p>
      </Link>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={blog.im} alt=""/>
          <span className="text-sm text-black-500">{blog.author} </span>
          <span>   </span><img src="ellipse.png" alt=""/>
          <span className="text-sm text-black-500">
              {new Date(blog.createdAt).toDateString()}
          </span>
          
        </div>
        {/*<button
          onClick={toggleBookmark}
          className="text-xs text-blue-600 hover:underline"
        >
          {isBookmarked ? "Unsave" : "Save"}
        </button>*/}
      </div>
    </div>
  );
};

export default BlogCard;
