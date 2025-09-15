import React from 'react';
import { Brain, Zap, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Technology',
      description: 'Utilizes state-of-the-art convolutional neural networks trained on thousands of MRI scans for accurate tumor classification.'
    },
    {
      icon: Zap,
      title: 'Instant Analysis',
      description: 'Get results in seconds with our optimized deep learning models that process MRI scans with remarkable speed.'
    },
    {
      icon: Shield,
      title: 'Privacy Focused',
      description: 'Your medical data is processed locally and securely. We prioritize patient privacy and data protection.'
    },
    {
      icon: Users,
      title: 'Educational Tool',
      description: 'Designed for learning and research purposes to help understand AI applications in medical imaging.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800"
          >
            About Our Platform
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Empowering medical education through artificial intelligence. Our platform demonstrates 
            how AI can assist in medical imaging analysis while emphasizing the importance of 
            professional medical expertise.
          </motion.p>
        </div>

        {/* What We Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Mission</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Neuro Scan Assist is an educational platform that demonstrates the application 
                of artificial intelligence in medical imaging. Using advanced deep learning algorithms, 
                our system can analyze MRI brain scans and classify potential tumor characteristics.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                The AI model has been trained on a comprehensive dataset of brain MRI images to recognize 
                patterns associated with different types of brain tumors, including gliomas, meningiomas, 
                and pituitary tumors.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-blue-800 mb-2">Neural Networks</h4>
                  <p className="text-sm text-blue-700">Advanced CNN architecture for medical image analysis</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-emerald-800 mb-2">Training Data</h4>
                  <p className="text-sm text-emerald-700">Thousands of MRI scans for pattern recognition</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-purple-800 mb-2">Image Processing</h4>
                  <p className="text-sm text-purple-700">Real-time analysis and classification</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-orange-800 mb-2">Classification</h4>
                  <p className="text-sm text-orange-700">Multi-class tumor type identification</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl flex items-center justify-center">
                  <Brain className="h-24 w-24 text-blue-600" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Limitations Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-8 lg:p-12 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Important Limitations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Educational Purpose Only</h3>
              <p className="text-gray-700 mb-4">
                This tool is designed for educational and research purposes. It should never be used 
                for actual medical diagnosis or treatment decisions.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Professional Consultation Required</h3>
              <p className="text-gray-700 mb-4">
                Any medical concerns should always be discussed with qualified healthcare professionals 
                who can provide proper diagnosis and treatment.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">AI Limitations</h3>
              <p className="text-gray-700 mb-4">
                While AI can assist in pattern recognition, it cannot replace human expertise, 
                clinical experience, and comprehensive medical evaluation.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Accuracy Considerations</h3>
              <p className="text-gray-700 mb-4">
                AI predictions may not always be accurate and can produce false positives or 
                false negatives. Medical imaging requires professional interpretation.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8 p-4 bg-white rounded-xl">
            <p className="text-sm text-gray-600 font-medium">
              Always consult with qualified medical professionals for health-related decisions
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;