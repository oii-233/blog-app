import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BlogForm({ blogs, setBlogs }) {
  const { id } = useParams();
  const navigate = useNavigate();

 const blogToEdit = Array.isArray(blogs)
  ? blogs.find((blog) => blog.id.toString() === id)
  : null;


  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [profile, setProfile] = useState("");

  useEffect(() => {
    if (blogToEdit) {
      setTitle(blogToEdit.title);
      setAuthor(blogToEdit.author);
      setDescription(blogToEdit.description);
      setContent(blogToEdit.content);
      setProfile(blogToEdit.profile);
    }
  }, [blogToEdit]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedBlog = {
      ...blogToEdit,
      title,
      author,
      description,
      content,
      profile,
      updatedAt: new Date().toISOString(),
    };

    const updatedBlogs = blogs.map((b) =>
      b.id === blogToEdit.id ? updatedBlog : b
    );

    setBlogs(updatedBlogs);
    navigate(`/blog/${blogToEdit.id}`);
  };

  if (!blogToEdit) {
    return <div className="p-6 text-red-500">Blog not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          className="w-full p-2 border rounded"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <textarea
          placeholder="Content"
          className="w-full p-2 border rounded h-32"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Profile Image URL"
          className="w-full p-2 border rounded"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 rounded"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
