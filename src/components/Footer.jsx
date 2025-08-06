
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mb-2 px-4 w-full mt-auto rounded-2xl ">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
       
        <div className="text-lg font-grover font-semibold">
          Blog
        </div>

       
        <div className="text-xs text-gray-400">
          &copy; 2025 All rights reserved.
        </div>

        
        <div className="flex gap-4">
          <a href="https://twitter.com" className="hover:text-blue-400">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <Instagram className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;