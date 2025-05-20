import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Linku jem i usernames 
  const GITHUB_USERNAME = 'AbedinSokolii';

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=16`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub repositories');
        }
        
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-blue-700 dark:text-blue-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Latest Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <FaGithub className="text-gray-700 dark:text-gray-300 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 truncate">
                      {repo.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                    {repo.description || 'No description provided'}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-auto pt-4 text-sm">
                    <div className="flex items-center text-yellow-500">
                      <FaStar className="mr-1" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center text-purple-500">
                      <FaCodeBranch className="mr-1" />
                      <span>{repo.forks_count}</span>
                    </div>
                    <div className="flex items-center text-blue-500">
                      <FaEye className="mr-1" />
                      <span>{repo.watchers_count}</span>
                    </div>
                  </div>
                  
                  {repo.language && (
                    <div className="mt-3">
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {repo.language}
                      </span>
                    </div>
                  )}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            View All Projects on GitHub
            <FaGithub className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}