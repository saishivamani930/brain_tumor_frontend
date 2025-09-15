import React, { useState } from 'react';
import { Upload as UploadIcon, Brain, AlertTriangle, Loader2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Upload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith('image/')) {
      setFile(droppedFile);
      setPrediction(null);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPrediction(null);
    }
  };

  const handlePredict = async () => {
    if (!file) return;
    
    setIsLoading(true);
    setPrediction(null);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Random prediction for demo
    const predictions = ['No Tumor Detected', 'Glioma Tumor', 'Meningioma Tumor', 'Pituitary Tumor'];
    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    
    setPrediction(randomPrediction);
    setIsLoading(false);
  };

  const handleReset = () => {
    setFile(null);
    setPrediction(null);
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-3 mb-6"
          >
            <div className="p-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl">
              <Brain className="h-10 w-10 text-white" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Upload MRI Scan
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Upload your brain MRI scan for AI-powered tumor classification analysis. 
            Get instant results with our advanced deep learning model.
          </motion.p>
        </div>

        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          {/* File Upload Area */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative border-2 border-dashed rounded-xl p-16 text-center transition-all duration-300 ${
              isDragging
                ? 'border-blue-500 bg-blue-50'
                : file
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
            }`}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            
            <UploadIcon className={`h-16 w-16 mx-auto mb-6 ${
              file ? 'text-emerald-600' : 'text-gray-400'
            }`} />
            
            {file ? (
              <div>
                <p className="text-xl font-semibold text-emerald-600 mb-3">
                  ✓ File Selected: {file.name}
                </p>
                <p className="text-gray-500 mb-4">
                  Size: {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
                <p className="text-sm text-gray-500">
                  Click to select a different file or drag to replace
                </p>
              </div>
            ) : (
              <div>
                <p className="text-2xl font-semibold text-gray-700 mb-3">
                  Drop your MRI scan here
                </p>
                <p className="text-gray-500 mb-4">
                  or click to browse and select a file
                </p>
                <p className="text-sm text-gray-400">
                  Supported formats: JPG, PNG, DICOM (Max size: 10MB)
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={handlePredict}
              disabled={!file || isLoading}
              className="flex-1 bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <span>Analyzing MRI Scan...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <Brain className="h-6 w-6" />
                  <span>Start AI Analysis</span>
                </div>
              )}
            </button>
            
            {(file || prediction) && (
              <button
                onClick={handleReset}
                disabled={isLoading}
                className="sm:w-auto px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Reset
              </button>
            )}
          </div>
        </motion.div>

        {/* Results Section */}
        {(isLoading || prediction) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Analysis Results
            </h3>
            
            {isLoading ? (
              <div className="text-center py-16">
                <Loader2 className="h-16 w-16 text-blue-600 animate-spin mx-auto mb-6" />
                <p className="text-xl text-gray-600 mb-2">AI is analyzing your MRI scan...</p>
                <p className="text-gray-500">This may take a few moments</p>
                <div className="mt-8 max-w-md mx-auto bg-gray-100 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-600 to-emerald-600 h-2 rounded-full animate-pulse" style={{width: '70%'}}></div>
                </div>
              </div>
            ) : prediction ? (
              <div className="text-center py-12">
                <div className={`inline-flex items-center space-x-4 px-8 py-4 rounded-2xl text-xl font-bold mb-6 ${
                  prediction === 'No Tumor Detected' 
                    ? 'bg-emerald-100 text-emerald-800 border-2 border-emerald-200'
                    : 'bg-orange-100 text-orange-800 border-2 border-orange-200'
                }`}>
                  <Brain className="h-8 w-8" />
                  <span>{prediction}</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-blue-800 mb-2">Confidence Level</h4>
                    <div className="w-full bg-blue-200 rounded-full h-3 mb-2">
                      <div className="bg-blue-600 h-3 rounded-full" style={{width: '87%'}}></div>
                    </div>
                    <p className="text-blue-700 text-sm">87% confidence</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-2">Processing Time</h4>
                    <p className="text-2xl font-bold text-gray-700">2.3s</p>
                    <p className="text-gray-600 text-sm">Analysis completed</p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <p className="text-sm text-yellow-800 font-medium">
                    This is an AI prediction for educational purposes only. 
                    Please consult a medical professional for proper diagnosis and treatment.
                  </p>
                </div>
              </div>
            ) : null}
          </motion.div>
        )}

        {/* Quick Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-100"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Quick Upload Guide
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                1
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Select Image</h4>
              <p className="text-sm text-gray-600">Choose a clear MRI brain scan in JPG, PNG, or DICOM format</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                2
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Start Analysis</h4>
              <p className="text-sm text-gray-600">Click "Start AI Analysis" to process your scan with our neural network</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                3
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">View Results</h4>
              <p className="text-sm text-gray-600">Get instant classification results with confidence scores</p>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <a
              href="/how-it-works"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <span>Learn more about how it works</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Medical Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-xl"
        >
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">Important Medical Disclaimer</h4>
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

export default Upload;