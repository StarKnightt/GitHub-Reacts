import React from 'react';
import { FaGithub, FaCoffee, FaGlobe } from 'react-icons/fa';

const Header = ({ className }) => {
  return (
    <header className={`text-white-800 p-4 shadow-md ${className}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">GitHub Reacts</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="https://github.com/StarKnightt/GitHub-Generator" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500 transition-colors">
                <FaGithub className="mr-2" /> GitHub Repo
              </a>
            </li>
            <li>
              <a href="https://buymeacoffee.com/prasen" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500 transition-colors">
                <FaCoffee className="mr-2" /> Buy Me a Coffee
              </a>
            </li>
            <li>
              <a href="https://bento.me/prasenjitnayak" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500 transition-colors">
                <FaGlobe className="mr-2" /> Social Media
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;