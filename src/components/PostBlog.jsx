import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function PostBlogDialog({ open, setOpen, blog }) {
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [profile, setProfile] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  // Prefill form if editing
  useEffect(() => {
    if (blog) {
      setAuthor(blog.author || "");
      setDate(blog.createdAt?.split("T")[0] || "");
      setProfile(blog.profile || "");
      setTitle(blog.title || "");
      setDescription(blog.description || "");
      setContent(blog.content || "");
    } else {
      setAuthor("");
      setDate("");
      setProfile("");
      setTitle("");
      setDescription("");
      setContent("");
    }
  }, [blog, open]);

  const handlePost = () => {
  if (!title.trim() || !content.trim()) {
    alert("Title and Content are required");
    return;
  }

  if (blog) {
    // ✅ EDIT MODE
    const updatedBlog = {
      ...blog,
      author,
      profile,
      title,
      description,
      content,
      createdAt: date,
      updatedAt: new Date().toISOString(), // <-- set updated timestamp
    };

    const index = blogData.findIndex((b) => b.id === blog.id);
    if (index !== -1) {
      blogData[index] = updatedBlog;
    }
    console.log("Blog Updated:", updatedBlog);
  } else {
    // ✅ CREATE MODE
    const newBlog = {
      id: Date.now(),
      author,
      profile,
      title,
      description,
      content,
      createdAt: date || new Date().toISOString(),
    };

    blogData.push(newBlog);
    console.log("New Blog Posted:", newBlog);
  }

  setOpen(false);
};


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-white max-w-xl w-full max-h-[90vh] overflow-y-auto rounded-xl px-6 py-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            {blog ? "Edit Blog Post" : "Post a Blog"}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="author">Full Name</Label>
              <Input
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="profile">Profile Link</Label>
            <Input
              id="profile"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[200px]"
            />
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            className="border-red-700 bg-red-700 text-white hover:bg-gray-100 hover:text-black px-6"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className="bg-black text-white hover:bg-gray-900 px-6"
            onClick={handlePost}
          >
            {blog ? "Update" : "Post"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PostBlogDialog;
