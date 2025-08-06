import { NavLink } from "react-router-dom";
import PostBlogDialog from "./PostBlog";
import { useState } from "react";
import { Info } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full text-black py-3 px-10 sticky top-0 z-50 bg-white rounded-sm shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold font-grover">Blog</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-black text-white px-4 py-1 rounded-md"
                    : "hover:text-gray-600 transition-colors px-4 py-1"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "bg-black text-white px-4 py-1 rounded-md"
                    : "hover:text-gray-600 transition-colors px-4 py-1"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bookmarks"
                className={({ isActive }) =>
                  isActive
                    ? "bg-black text-white px-4 py-1 rounded-md"
                    : "hover:text-gray-600 transition-colors px-4 py-1"
                }
              >
                Saved
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Side Button - Create Post */}
        <div className="flex-shrink-0">
          <button
            onClick={() => setOpen(true)}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900"
          >
            Post a Blog
          </button>
        </div>
      </div>

      {/* Dialog Modal */}
      <PostBlogDialog open={open} setOpen={setOpen} />
    </nav>
  );
};

export default NavBar;
