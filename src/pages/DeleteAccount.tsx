import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trash2, 
  AlertTriangle, 
  Shield, 
  FileText, 
  User, 
  Database,
  Calendar,
  MapPin,
  Camera,
  Smartphone,
  CheckCircle,
  X,
  Mail
} from 'lucide-react';

const DeleteAccount: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    reason: '',
    confirmation: false,
    dataRetention: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const dataTypes = [
    {
      category: "Personal Information",
      icon: User,
      items: [
        "Name, email address, phone number",
        "Address and location data",
        "Pet information and photos",
        "Account credentials and profile data"
      ]
    },
    {
      category: "App Usage Data",
      icon: Smartphone,
      items: [
        "Appointment bookings and history",
        "Service preferences and ratings",
        "Search history and location queries",
        "App interaction patterns and analytics"
      ]
    },
    {
      category: "Device Information",
      icon: Database,
      items: [
        "Device model and operating system",
        "IP address and network information",
        "App permissions and settings",
        "Crash reports and performance data"
      ]
    },
    {
      category: "Media and Files",
      icon: Camera,
      items: [
        "Pet photos and profile images",
        "Uploaded documents and certificates",
        "Chat messages and communications",
        "Payment receipts and invoices"
      ]
    }
  ];

  const deletionSteps = [
    {
      step: 1,
      title: "Submit Deletion Request",
      description: "Fill out the form below with your account details and reason for deletion",
      icon: FileText
    },
    {
      step: 2,
      title: "Verification Process",
      description: "We'll verify your identity and send a confirmation email within 24 hours",
      icon: Shield
    },
    {
      step: 3,
      title: "Data Processing",
      description: "Your data will be permanently deleted within 30 days of verification",
      icon: Trash2
    },
    {
      step: 4,
      title: "Confirmation",
      description: "You'll receive a final confirmation email once deletion is complete",
      icon: CheckCircle
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Trash2 size={16} />
              <span>Account Deletion</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-secondary-800 mb-6"
            >
              Delete Your Account
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-secondary-600 leading-relaxed"
            >
              We're sorry to see you go. This page allows you to request permanent deletion of your FetchTails account and all associated data.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle size={24} className="text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-red-800 mb-4">
                    Important: This Action Cannot Be Undone
                  </h2>
                  <div className="space-y-3 text-red-700">
                    <p>• All your account data will be permanently deleted</p>
                    <p>• Your pet profiles, appointment history, and preferences will be lost</p>
                    <p>• Any active bookings or subscriptions will be cancelled</p>
                    <p>• This process cannot be reversed once completed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Types Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-800 mb-4">
                Data That Will Be Deleted
              </h2>
              <p className="text-lg text-secondary-600">
                The following types of user data are collected and will be permanently removed:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataTypes.map((dataType, index) => (
                <motion.div
                  key={dataType.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <dataType.icon size={20} className="text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary-800">
                      {dataType.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {dataType.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-secondary-600">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deletion Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-800 mb-4">
                Deletion Process
              </h2>
              <p className="text-lg text-secondary-600">
                Here's what happens when you request account deletion:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deletionSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <step.icon size={20} className="text-primary-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-secondary-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deletion Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            {!submitted ? (
              <div className="card p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-secondary-800 mb-4">
                    Request Account Deletion
                  </h2>
                  <p className="text-secondary-600">
                    Please fill out the form below to request permanent deletion of your account.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your registered email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-secondary-700 mb-2">
                      Reason for Deletion (Optional)
                    </label>
                    <textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Help us improve by sharing your feedback..."
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="confirmation"
                        name="confirmation"
                        checked={formData.confirmation}
                        onChange={handleInputChange}
                        required
                        className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-1"
                      />
                      <label htmlFor="confirmation" className="text-sm text-secondary-700">
                        I understand that this action cannot be undone and all my data will be permanently deleted.
                      </label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="dataRetention"
                        name="dataRetention"
                        checked={formData.dataRetention}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-1"
                      />
                      <label htmlFor="dataRetention" className="text-sm text-secondary-700">
                        I would like to receive a copy of my data before deletion (processed within 7 days).
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.confirmation}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Trash2 size={20} />
                        <span>Request Account Deletion</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="card p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">
                  Deletion Request Submitted
                </h2>
                <p className="text-secondary-600 mb-6">
                  We've received your account deletion request. You'll receive a confirmation email within 24 hours with next steps.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
                  <h3 className="font-semibold text-blue-800 mb-2">What happens next?</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Verification email sent to {formData.email}</li>
                    <li>• Identity verification required</li>
                    <li>• Data deletion completed within 30 days</li>
                    <li>• Final confirmation email sent</li>
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-secondary-800 mb-6">
              Need Help?
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              If you have questions about account deletion or need assistance, our support team is here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail size={24} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                  Email Support
                </h3>
                <p className="text-secondary-600 text-sm mb-2">
                  support@fetchtails.com
                </p>
                <p className="text-xs text-secondary-500">
                  For account deletion questions
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield size={24} className="text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                  Privacy Team
                </h3>
                <p className="text-secondary-600 text-sm mb-2">
                  privacy@fetchtails.com
                </p>
                <p className="text-xs text-secondary-500">
                  For privacy-related concerns
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DeleteAccount;
