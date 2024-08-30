import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateMeme } from '/services/api';
import AnimatedText from './AnimatedText';
import { FaGithub, FaSmile, FaAngry } from 'react-icons/fa';

const MemeGenerator = () => {
  const [username, setUsername] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center p-4 text-white"
    >
      <AnimatedText
        text="GitHub Reacts"
        className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
      />
      <motion.div
        className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-2xl w-full max-w-md backdrop-filter backdrop-blur-sm"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="relative mb-6">
          <FaGithub className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-10 py-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
        </div>
        <div className="flex justify-between space-x-4">
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
              className="mt-4 text-red-400"
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
              className="mt-6 p-4 bg-gray-700 rounded-md shadow-inner"
            >
              <p className="text-lg font-medium text-white">{result}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Button = ({ onClick, disabled, color, icon, children }) => (
  <motion.button
    onClick={onClick}
    disabled={disabled}
    className={`flex items-center justify-center px-4 py-2 text-white bg-${color}-500 rounded-md hover:bg-${color}-600 focus:outline-none focus:ring-2 focus:ring-${color}-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 w-full`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {children}
  </motion.button>
);

export default MemeGenerator;