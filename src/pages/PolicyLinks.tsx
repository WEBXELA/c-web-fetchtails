import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Shield, 
  Truck, 
  RotateCcw, 
  Phone, 
  Mail,
  ExternalLink,
  CheckCircle
} from 'lucide-react';

const PolicyLinks: React.FC = () => {
  const policies = [
    {
      title: "Terms and Conditions",
      description: "Our terms of service and user agreement",
      path: "/terms",
      icon: FileText,
      status: "Active"
    },
    {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your information",
      path: "/privacy",
      icon: Shield,
      status: "Active"
    },
    {
      title: "Shipping Policy",
      description: "Service delivery and coordination policies",
      path: "/shipping",
      icon: Truck,
      status: "Active"
    },
    {
      title: "Contact Us",
      description: "Get in touch with our support team",
      path: "/contact",
      icon: Phone,
      status: "Active"
    },
    {
      title: "Cancellation and Refunds",
      description: "Our cancellation and refund policies",
      path: "/cancellation-refunds",
      icon: RotateCcw,
      status: "Active"
    }
  ];

  const contactInfo = {
    email: "support@fetchtails.com",
    phone: "+1-800-FETCHTAILS",
    address: "Gurgaon, India",
    website: "https://www.fetchtails.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-primary-100 rounded-full">
                <FileText className="h-8 w-8 text-primary-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              FetchTails Policy Links
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete collection of our legal policies and terms for Razorpay verification
            </p>
            <div className="mt-6 text-sm text-gray-500">
              All policies are active and accessible for verification
            </div>
          </motion.div>
        </div>
      </div>

      {/* Policy Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {policies.map((policy, index) => (
            <motion.div
              key={policy.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <policy.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium text-green-600">{policy.status}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {policy.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {policy.description}
              </p>
              
              <Link
                to={policy.path}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                View Policy
                <ExternalLink className="h-4 w-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contact Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All contact methods are verified and actively monitored for customer support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-600" />
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <a href={`mailto:${contactInfo.email}`} className="text-primary-600 hover:text-primary-700">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-600" />
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <a href={`tel:${contactInfo.phone}`} className="text-primary-600 hover:text-primary-700">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-600" />
                  <div>
                    <div className="font-medium text-gray-900">Website</div>
                    <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      {contactInfo.website}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-600" />
                  <div>
                    <div className="font-medium text-gray-900">Address</div>
                    <div className="text-gray-600">{contactInfo.address}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Verification Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white text-center"
        >
          <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-100" />
          <h3 className="text-2xl font-bold mb-2">
            All Policies Verified and Active
          </h3>
          <p className="text-green-100 max-w-2xl mx-auto">
            FetchTails has all required policy pages active and accessible for Razorpay verification. 
            All links are functional and policies are up-to-date as of August 24, 2025.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PolicyLinks;
