import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('HJ39I9ZYGNUqi3zMr');
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

    try {
      await emailjs.send(
        'service_mr2nu56',
        'template_025elvh',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          reply_to: formData.email
        },
        'HJ39I9ZYGNUqi3zMr'
      );

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('Failed to send. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Send me a message and I'll get back to you soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                    required
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <FaPaperPlane className="ml-3" />
                      </>
                    )}
                  </button>
                </div>

                {status && (
                  <div className={`text-center py-3 rounded-lg ${
                    status.includes('success') ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 
                    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    {status}
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-5">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                    <SiGmail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Email</h4>
                    <a 
                      href="mailto:sokoliabedin@gmail.com" 
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      sokoliabedin@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                    <FaLinkedin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/abedin-sokoli-96334a304/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      linkedin.com/in/abedin-sokoli
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl text-gray-800 dark:text-gray-200">
                    <FaGithub size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">GitHub</h4>
                    <a 
                      href="https://github.com/AbedinSokolii" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      github.com/AbedinSokolii
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-500 dark:text-blue-400">
                    <FaTwitter size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Twitter</h4>
                    <a 
                      href="https://twitter.com/your-handle" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      @your-handle
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-4">Need immediate help?</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Typically replies within 24 hours. For urgent matters, please mention "URGENT" in your message.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}