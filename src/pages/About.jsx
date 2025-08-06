 import { Info } from "lucide-react";

 
 function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-black">
      <h1 className="text-3xl mb-6 text-center"> 🛈 About </h1>

      <img
        src="/imageHero.png" // Make sure this image exists
        alt="Blog Illustration"
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      <p className="text-lg mb-4">
        This <span className="font-semibold">Personal Blog App</span> is a simple yet functional blogging platform built using modern React practices. It allows users to create, edit, and read blog posts, as well as bookmark their favorite ones for later.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">✨ Features:</h2>
      <ul className="list-disc pl-6 space-y-1 text-base">
        <li>Create a blog post using a modal form</li>
        <li>Edit existing blog posts</li>
        <li>View full blog post details on a dedicated page</li>
        <li>Bookmark/unbookmark posts</li>
        <li>Dynamic routing with React Router</li>
        <li>State management using Jotai</li>
        <li>Styled using Tailwind CSS</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">🛠️ Tech Stack:</h2>
      <ul className="list-disc pl-6 space-y-1 text-base">
        <li>React (JSX, Components, Hooks)</li>
        <li>React Router DOM</li>
        <li>Jotai for global state management</li>
        <li>Tailwind CSS for UI styling</li>
        <li>Vite for fast project setup and build</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">🎯 Purpose:</h2>
      <p className="text-base">
        This app was developed as a final project in a React Bootcamp, focusing on applying key concepts like component structure, state handling, dynamic routing, and real-world project development.
      </p>
    </div>
  );
}
export default About;
