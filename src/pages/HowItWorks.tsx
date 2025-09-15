import React from 'react';
import { Upload, Brain, BarChart3, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Upload Your MRI Scan',
      description: 'Simply drag and drop or select your brain MRI image file. We support common formats like JPG, PNG, and DICOM.',
      details: [
        'Secure upload process',
        'Multiple file format support',
        'Instant file validation',
        'Privacy-focused handling'
      ]
    },
    {
      icon: Brain,
      title: 'AI Analysis Process',
      description: 'Our advanced neural network analyzes the image using trained patterns to identify potential tumor characteristics.',
      details: [
        'Deep learning algorithms',
        'Pattern recognition',
        'Multi-class classification',
        'Real-time processing'
      ]
    },
    {
      icon: BarChart3,
      title: 'View Results',
      description: 'Receive instant classification results with confidence scores and educational information about the findings.',
      details: [
        'Clear result presentation',
        'Confidence indicators',
        'Educational context',
        'Next steps guidance'
      ]
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
            How It Works
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Our AI-powered brain tumor detection process is designed to be simple, fast, and educational. 
            Here's how our technology works in three easy steps.
          </motion.p>
        </div>

        {/* Steps Process */}
        <div className="relative">
          {/* Connection Lines for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-emerald-400 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl">
                      <step.icon className="h-12 w-12 text-blue-600" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Details List */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Arrow for Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <ArrowRight className="h-6 w-6 text-blue-400 transform rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="mt-20 bg-white rounded-2xl shadow-xl p-8 lg:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Behind the Technology
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Deep Learning Architecture
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our system uses a sophisticated Convolutional Neural Network (CNN) architecture 
                  specifically designed for medical image analysis. The model has been trained on 
                  thousands of brain MRI scans to recognize patterns associated with different tumor types.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Classification Categories
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-50 p-4 rounded-xl">
                    <h4 className="font-medium text-emerald-800 mb-1">No Tumor Detected</h4>
                    <p className="text-sm text-emerald-600">Healthy brain tissue</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl">
                    <h4 className="font-medium text-red-800 mb-1">Glioma Tumor</h4>
                    <p className="text-sm text-blue-600">Primary brain tumor</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <h4 className="font-medium text-purple-800 mb-1">Meningioma Tumor</h4>
                    <p className="text-sm text-purple-600">Membrane tumor</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl">
                    <h4 className="font-medium text-orange-800 mb-1">Pituitary Tumor</h4>
                    <p className="text-sm text-orange-600">Pituitary gland tumor</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 bg-gradient-to-br from-blue-100 via-purple-100 to-emerald-100 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <Brain className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <div className="space-y-2">
                      <div className="h-2 w-24 bg-blue-300 rounded-full mx-auto"></div>
                      <div className="h-2 w-16 bg-purple-300 rounded-full mx-auto"></div>
                      <div className="h-2 w-20 bg-emerald-300 rounded-full mx-auto"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-8"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">
              Educational Purpose Only
            </h3>
            <p className="text-yellow-700 max-w-3xl mx-auto leading-relaxed">
              This AI demonstration is designed for educational and research purposes only. 
              It should not be used for actual medical diagnosis or treatment decisions. 
              Always consult with qualified healthcare professionals for medical advice and proper diagnosis.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HowItWorks;