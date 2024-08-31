import React from 'react';
// import { FaGithub, FaCoffee, FaGlobe } from 'react-icons/fa';

const Footer = ({ className }) => {
  return (
    <footer className={`bg-white-800 text-white p-4 shadow-md ${className}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <p className="text-1xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">&copy; 2024 GitHub Reacts. All rights reserved.</p>
        {/* <div className="flex space-x-6 mt-2 md:mt-0">
          <a href="https://github.com/StarKnightt" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500 transition-colors">
            <FaGithub className="mr-2" /> GitHub
          </a>
          <a href="https://buymeacoffee.com/prasen" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500 transition-colors">
            <FaCoffee className="mr-2" /> Buy Me a Coffee
          </a>
          <a href="https://bento.me/prasenjitnayak" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500 transition-colors">
            <FaGlobe className="mr-2" /> Social Media
          </a>
        </div> */}
        <p className="mt-2 md:mt-0 text-black">Created by <a href="https://github.com/StarKnightt" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500 transition-colors">Prasenjit Nayak</a></p>
      </div>
    </footer>
  );
};

export default Footer;
