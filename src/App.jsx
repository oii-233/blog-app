import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import Bookmarks from "./pages/Bookmarks";
import BlogForm from "./components/BlogForm";
import { blogData } from "./data/constant";

function App() {
  const [blogs, setBlogs] = useState(blogData);
  const [bookmarks, setBookmarks] = useState([]);

  const toggleBookmark = (blogId) => {
    setBookmarks((prev) =>
      prev.includes(blogId)
        ? prev.filter((id) => id !== blogId)
        : [...prev, blogId]
    );
  };

  const addBlog = (newBlog) => {
    setBlogs((prev) => [...prev, newBlog]);
  };

  const updateBlog = (updatedBlog) => {
    setBlogs((prev) =>
      prev.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              blogs={blogs}
              bookmarks={bookmarks}
              toggleBookmark={toggleBookmark}
            />
          }
        />
        <Route
          path="/blog/:id"
          element={
            <BlogDetails
              blogs={blogs}
              bookmarks={bookmarks}
              toggleBookmark={toggleBookmark}
              setBlogs={setBlogs}
            />
          }
        />
        <Route
          path="/bookmarks"
          element={
            <Bookmarks
              blogs={blogs}
              bookmarks={bookmarks}
              toggleBookmark={toggleBookmark}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={<BlogForm blogs={blogs} updateBlog={updateBlog} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
