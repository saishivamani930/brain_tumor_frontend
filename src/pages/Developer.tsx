import React from 'react';
import { Github, Linkedin, Mail, Code, Heart, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const Developer = () => {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      color: 'hover:text-gray-700'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:shivamani@example.com',
      color: 'hover:text-emerald-600'
    }
  ];

  const skills = [
    'Machine Learning', 'Deep Learning', 'Computer Vision', 'TensorFlow/Keras',
    'Python', 'JavaScript', 'React', 'Medical Image Processing',
    'Data Science', 'Neural Networks', 'Healthcare AI'
  ];

  const achievements = [
    {
      icon: Code,
      title: 'AI Research',
      description: 'Specialized in medical AI applications with focus on diagnostic imaging'
    },
    {
      icon: Heart,
      title: 'Healthcare Impact',
      description: 'Passionate about leveraging technology to improve healthcare accessibility'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Committed to developing educational tools that bridge AI and medicine'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative inline-block mb-8"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              S
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <Heart className="h-4 w-4 text-white" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800"
          >
            Meet Shivamani
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-gray-600 mb-8"
          >
            AI Developer & Medical Technology Researcher
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-gray-500 ${link.color} transform hover:-translate-y-1`}
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            My Story
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Hello! I'm Shivamani, a passionate AI developer with a deep interest in healthcare technology. 
              My journey into artificial intelligence began with a fascination for how machines can learn 
              to recognize patterns that might be invisible to the human eye, especially in medical imaging.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The inspiration for this Brain Tumor Detection AI came from witnessing the challenges faced 
              in medical diagnosis, particularly in regions where access to specialized radiologists is limited. 
              While AI cannot replace medical professionals, it can serve as a valuable educational tool 
              and demonstrate the potential for technology to assist in healthcare.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              This project represents my commitment to making AI more accessible and understandable, 
              while always emphasizing the critical importance of professional medical expertise. 
              Every line of code is written with the hope that it might inspire someone to explore 
              the intersection of technology and healthcare.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Technical Expertise
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-emerald-50 text-gray-700 rounded-full text-sm font-medium border border-blue-100 hover:border-blue-300 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl mb-4">
                <achievement.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 text-center border border-blue-100"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Let's Connect
          </h2>
          
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always excited to discuss AI, healthcare technology, or potential collaborations. 
            Whether you're a fellow developer, researcher, or simply curious about AI in medicine, 
            I'd love to hear from you!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:shivamani@example.com"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail className="h-5 w-5" />
              <span>Send Email</span>
            </a>
            
            <a
              href="#"
              className="inline-flex items-center justify-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-xl font-medium border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
              <span>View Projects</span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Developer;