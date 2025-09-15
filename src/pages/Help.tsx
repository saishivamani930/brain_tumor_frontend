import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, FileText, Shield, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Help = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqCategories = [
    {
      icon: FileText,
      title: 'Image Upload',
      questions: [
        {
          question: 'What image formats are supported?',
          answer: 'We support common medical imaging formats including JPEG, PNG, and DICOM files. For best results, use high-resolution MRI brain scans in axial, sagittal, or coronal views.'
        },
        {
          question: 'What is the maximum file size allowed?',
          answer: 'The maximum file size is 10MB per upload. Most MRI images fall well within this limit. If your file is too large, consider compressing it without losing essential medical details.'
        },
        {
          question: 'How do I upload an image?',
          answer: 'You can either drag and drop your MRI scan directly onto the upload area on the home page, or click the upload area to browse and select files from your device.'
        }
      ]
    },
    {
      icon: HelpCircle,
      title: 'AI Predictions',
      questions: [
        {
          question: 'How accurate are the AI predictions?',
          answer: 'Our AI model is trained on thousands of MRI scans and achieves high accuracy in controlled testing environments. However, this is an educational tool only and should never be used for actual medical diagnosis.'
        },
        {
          question: 'What types of tumors can the AI detect?',
          answer: 'The AI is trained to classify four categories: No Tumor, Glioma, Meningioma, and Pituitary tumors. Each prediction includes the most likely classification based on learned patterns.'
        },
        {
          question: 'How long does the analysis take?',
          answer: 'Most analyses complete within 2-5 seconds. Processing time may vary slightly depending on image size and server load.'
        },
        {
          question: 'What should I do with the results?',
          answer: 'Use the results only for educational purposes. If you have medical concerns, always consult with qualified healthcare professionals for proper diagnosis and treatment.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      questions: [
        {
          question: 'Is my medical data safe?',
          answer: 'Yes, we prioritize your privacy. Images are processed locally and temporarily. We do not store, save, or share any uploaded medical images or personal information.'
        },
        {
          question: 'Are my uploads stored on your servers?',
          answer: 'No, uploaded images are processed in real-time and are not permanently stored on our servers. Once you close or refresh the browser, the data is completely removed.'
        },
        {
          question: 'Do you share data with third parties?',
          answer: 'We do not share any user data, images, or results with third parties. Your privacy and confidentiality are our top priorities.'
        }
      ]
    },
    {
      icon: Settings,
      title: 'Technical Support',
      questions: [
        {
          question: 'The upload is not working, what should I do?',
          answer: 'First, check your internet connection and ensure your file is in a supported format (JPEG, PNG, DICOM). Try refreshing the page or using a different browser. If issues persist, contact our support team.'
        },
        {
          question: 'Why is the prediction taking so long?',
          answer: 'Occasional delays can occur due to server load or network conditions. If the analysis takes more than 30 seconds, try refreshing the page and uploading again.'
        },
        {
          question: 'The website looks broken on my device',
          answer: 'Our website is optimized for modern browsers. Please ensure you\'re using an updated version of Chrome, Firefox, Safari, or Edge. Clear your browser cache if you experience display issues.'
        },
        {
          question: 'Can I use this on mobile devices?',
          answer: 'Yes, our website is fully responsive and works on smartphones and tablets. However, for the best experience when uploading and viewing results, we recommend using a desktop or laptop computer.'
        }
      ]
    }
  ];

  const toggleFaq = (categoryIndex: number, questionIndex: number) => {
    const faqId = categoryIndex * 100 + questionIndex;
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800"
          >
            Help & Support
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Find answers to common questions about using Neuro Scan Assist. 
            If you need additional help, don't hesitate to contact us.
          </motion.p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + categoryIndex * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">{category.title}</h2>
                </div>
              </div>

              {/* Questions */}
              <div className="divide-y divide-gray-100">
                {category.questions.map((faq, questionIndex) => {
                  const faqId = categoryIndex * 100 + questionIndex;
                  const isOpen = openFaq === faqId;
                  
                  return (
                    <div key={questionIndex}>
                      <button
                        onClick={() => toggleFaq(categoryIndex, questionIndex)}
                        className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-gray-800 pr-4">
                            {faq.question}
                          </h3>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500" />
                            )}
                          </div>
                        </div>
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 text-center border border-blue-100"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Still Need Help?
          </h2>
          
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer you're looking for, our support team is here to help. 
            We typically respond to inquiries within 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <HelpCircle className="h-5 w-5" />
              <span>Contact Support</span>
            </a>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-6"
        >
          <h3 className="text-lg font-semibold text-yellow-800 mb-3 text-center">
            Medical Disclaimer
          </h3>
          <p className="text-sm text-yellow-700 text-center">
            This platform is for educational purposes only and should not be used for medical diagnosis. 
            Always consult with qualified healthcare professionals for medical advice and treatment decisions.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Help;