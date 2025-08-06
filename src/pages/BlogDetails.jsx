import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "../data/constant";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Pencil, Trash2, Bookmark, BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { bookmarkAtom } from "../atoms/bookmarkAtom";
import { useState } from "react";
import PostBlogDialog from "../components/PostBlog";

const BlogDetails = ({blogs, se}) => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id.toString() === id);
  const navigate = useNavigate();
  const [bookmarked, setBookmarked] = useAtom(bookmarkAtom);
  const [open, setOpen] = useState(false);

  if (!blog) {
    return (
      <div className="p-10 text-center text-destructive">
        Blog not found.
      </div>
    );
  }

  const isBookmarked = bookmarked.some((item) => item.id === blog.id);

  const toggleBookmark = () => {
    setBookmarked((prev) =>
      prev.some((item) => item.id === blog.id)
        ? prev.filter((item) => item.id !== blog.id)
        : [...prev, blog]
    );
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-black space-y-8">
      <Button onClick={() => navigate(-1)} variant="outline">
        ← Back
      </Button>

      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <img src={blog.im} alt="" />
          <div>
            <p className="font-medium">{blog.author}</p>
            <p className="text-sm text-muted-foreground">
              {new Date(blog.createdAt).toDateString()}
            </p>
            {/*{blog.updatedAt && blog.updatedAt !==blog.createdAt &&(
              <p className="text-sm text-muted-foreground italic">
                Edited on{new Date(blog.updatedAt).toDateString()}
              </p>
            )}*/}
          </div>
        </div>

        <div className="flex gap-2">
          {/* Edit Icon */}
          <Button
            variant="ghost"
            size="icon"
            title="Edit Blog"
            onClick={() => setOpen(true)}
          >
            <Pencil className="w-4 h-4 text-blue-600 hover:text-blue-800" />
          </Button>

          {/* Bookmark Toggle */}
          <Button
            onClick={toggleBookmark}
            variant="ghost"
            size="icon"
            title="Bookmark"
          >
             <Bookmark
                className="w-5 h-5"
                fill={isBookmarked ? "black" : "none"}
                stroke={isBookmarked ? "black" : "gray"}
              />
          </Button>

          {/* Delete Icon - optional action */}
          <Button variant="ghost" size="icon" title="Delete Blog">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <h1 className="text-3xl font-bold leading-tight">{blog.title}</h1>

      <img
        src={blog.image}
        alt={blog.title}
        className="rounded-lg w-full object-cover"
      />

      <div className="leading-7 text-black space-y-6">
        <h4 className="text-xl font-semibold">{blog.description}</h4>
        <p>{blog.content}</p>
        {blog.body && <p>{blog.body}</p>}
      </div>

      {/* Edit Dialog */}
      <PostBlogDialog
       open={open}
       setOpen={setOpen} 
       blog={blog}
       blogs={blogData}
       setBlogs={() =>{}} />
    </div>
  );
};

export default BlogDetails;
