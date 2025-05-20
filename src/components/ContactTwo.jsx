import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Add this to your component
const testEmailJS = async () => {
  try {
    const res = await emailjs.send(
      'service_mr2nu56',
      'template_025elvh',
      {
        name: "FORCED TEST",
        email: "YOUR_ACTUAL_EMAIL@domain.com",
        message: "Testing at " + new Date().toLocaleTimeString()
      },
      'HJ39I9ZYGNUqi3zMr'
    );
    alert(`Success! Status: ${res.status}\nCheck EmailJS logs`);
  } catch (err) {
    alert(`Error: ${err.text}\n\nCheck console for details`);
    console.error("Full error:", err);
  }
};

// Add this button temporarily
<button 
  onClick={testEmailJS}
  className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
>
  EMERGENCY TEST
</button>
export default function ContactTwo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('HJ39I9ZYGNUqi3zMr');
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill all fields');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setStatus('Please enter a valid email');
      return;
    }

    setStatus('Sending...');

    try {
      await emailjs.send(
        'service_mr2nu56',     // Your Service ID
        'template_025elvh',    // Your Template ID
        formData,
        'HJ39I9ZYGNUqi3zMr'   // Your Public Key
      );

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            Send Message <FaPaperPlane className="ml-2" />
          </button>

          {status && (
            <span className={`text-sm ${
              status.includes('success') ? 'text-green-500' : 
              status.includes('Sending') ? 'text-blue-500' : 'text-red-500'
            }`}>
              {status}
            </span>
          )}
        </div>
      </form>
    </motion.div>
  );
}