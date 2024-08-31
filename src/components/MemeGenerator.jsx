import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateMeme } from '/services/api';
import AnimatedText from './AnimatedText';
import { FaGithub, FaSmile, FaAngry, FaCopy } from 'react-icons/fa';

const MemeGenerator = () => {
  const [username, setUsername] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = useCallback(async (type) => {
    if (!username.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)) {
      setError('Please enter a valid GitHub username.');
      return;
    }
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const generatedResult = await generateMeme(username, type);
      setResult(generatedResult);
    } catch (err) {
      if (err.message === 'Invalid GitHub username') {
        setError('This GitHub username does not exist.');
      } else {
        setError('Failed to generate content. Please try again.');
      }
    }
    setLoading(false);
  }, [username]);

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center p-6 text-gray-800"
    >
      <AnimatedText
        text="GitHub Reacts"
        className="text-6xl font-bold mb-10 text-center"
      />
      <motion.div
        className="bg-white bg-opacity-60 p-10 rounded-lg shadow-2xl w-full max-w-lg backdrop-filter backdrop-blur-sm"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="relative mb-8">
          <FaGithub className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-12 py-4 bg-gray-100 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-lg"
          />
        </div>
        <div className="flex justify-between space-x-6">
          <Button onClick={() => handleGenerate('compliment')} disabled={loading || !username} color="green" icon={<FaSmile />}>
            Compliment
          </Button>
          <Button onClick={() => handleGenerate('insult')} disabled={loading || !username} color="red" icon={<FaAngry />}>
            Insult
          </Button>
        </div>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 text-red-500 text-lg"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="mt-8 p-6 bg-gray-100 rounded-md shadow-inner relative"
            >
              <p className="text-xl font-medium text-gray-800">{result}</p>
              <motion.button
                onClick={handleCopy}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaCopy size={20} />
              </motion.button>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-2 right-10 text-sm text-green-500"
                >
                  Copied!
                </motion.span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Button = ({ onClick, disabled, color, icon, children }) => {
  const baseClasses = 'flex items-center justify-center px-6 py-3 text-white rounded-md focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 w-full text-lg';

  const colorClasses = {
    green: 'bg-green-500 hover:bg-green-800 focus:ring-green-500',
    red: 'bg-red-500 hover:bg-red-600 focus:ring-red-500',
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${colorClasses[color]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};


export default MemeGenerator;