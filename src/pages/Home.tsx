import { motion } from "framer-motion";
import { Brain, ArrowRight, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-3 mb-6"
          >
            <div className="p-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl">
              <Brain className="h-12 w-12 text-white" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl sm:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Neuro Scan Assist
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Fast, AI-powered MRI brain tumor classification using advanced deep learning technology.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Neuro Scan Assist is an AI-powered tool for educational purposes that demonstrates how deep learning 
            can classify brain MRI scans. Explore how technology can assist medical imaging and research.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link
              to="/upload"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <Brain className="h-6 w-6" />
              <span>Upload MRI Scan</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-600 text-sm">Advanced deep learning algorithms for accurate MRI classification</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Instant Results</h3>
            <p className="text-gray-600 text-sm">Get classification results in seconds with confidence scores</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Educational Tool</h3>
            <p className="text-gray-600 text-sm">Learn about AI applications in medical imaging and research</p>
          </div>
        </motion.div>

        {/* Medical Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-16 p-6 bg-yellow-50 border border-yellow-200 rounded-xl max-w-4xl mx-auto"
        >
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">Medical Disclaimer</h4>
              <p className="text-sm text-yellow-700 leading-relaxed">
                This tool is for educational and research purposes only. Not for medical diagnosis. 
                Always consult with qualified healthcare professionals for medical advice, diagnosis, and treatment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;