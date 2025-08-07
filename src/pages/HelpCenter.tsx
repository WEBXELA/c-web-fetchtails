import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  FileText,
  Shield,
  CreditCard,
  Calendar,
  MapPin
} from 'lucide-react';

const HelpCenter: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "How do I book an appointment with a veterinary clinic?",
      answer: "You can book appointments through our app or website. Simply search for clinics in your area, select your preferred time slot, and confirm your booking. You'll receive a confirmation email and SMS."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards, debit cards, UPI, and digital wallets including Paytm, Google Pay, and PhonePe. All payments are processed securely through Razorpay."
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer: "Yes, you can cancel or reschedule appointments up to 24 hours before the scheduled time. Simply go to your bookings section in the app and select the modify option."
    },
    {
      question: "How do I find pet boarding services near me?",
      answer: "Use our location-based search to find boarding services in your area. You can filter by ratings, distance, and services offered. Each listing includes photos, reviews, and detailed information."
    },
    {
      question: "What if I have an emergency with my pet?",
      answer: "For emergencies, use our emergency services feature which connects you directly to 24/7 veterinary care. You can also call our emergency hotline at +91 9633651635."
    },
    {
      question: "How do I know if a service provider is verified?",
      answer: "All service providers on our platform are thoroughly vetted. Look for the verified badge next to their name. We verify licenses, insurance, and conduct background checks."
    },
    {
      question: "Can I leave a review after my appointment?",
      answer: "Yes, you'll receive a review request after each appointment. Your feedback helps other pet owners make informed decisions and helps us maintain quality standards."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "If you're not satisfied, contact our support team within 48 hours. We'll investigate and work to resolve the issue. We may offer refunds or credits for unsatisfactory experiences."
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+91 9633651635',
      availability: '24/7 Emergency Support',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses via email',
      contact: 'support@fetchtails.com',
      availability: 'Response within 4 hours',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Real-time chat with our team',
      contact: 'Available on website',
      availability: '9 AM - 9 PM IST',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: 'Book Appointment',
      description: 'Schedule with veterinary clinics',
      path: '/services'
    },
    {
      icon: MapPin,
      title: 'Find Services',
      description: 'Locate nearby pet care services',
      path: '/services'
    },
    {
      icon: FileText,
      title: 'View Bookings',
      description: 'Check your appointment history',
      path: '/download'
    },
    {
      icon: Shield,
      title: 'Emergency Help',
      description: 'Get immediate assistance',
      path: '/contact'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
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
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <HelpCircle size={16} />
              <span>Help Center</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-secondary-800 mb-6"
            >
              How Can We Help?
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-secondary-600 leading-relaxed mb-8"
            >
              Find answers to common questions, get support, and learn how to make the most of FetchTails.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">
              Quick Actions
            </h2>
            <p className="text-lg text-secondary-600">
              Get started with these common tasks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card p-6 text-center group card-hover border-animate cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <action.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                  {action.title}
                </h3>
                <p className="text-secondary-600 text-sm">
                  {action.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-secondary-600">
              Multiple ways to reach our support team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card p-8 text-center group card-hover border-animate"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <channel.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">
                  {channel.title}
                </h3>
                <p className="text-secondary-600 mb-4">
                  {channel.description}
                </p>
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-primary-600">
                    {channel.contact}
                  </div>
                  <div className="text-sm text-secondary-500 flex items-center justify-center space-x-1">
                    <Clock size={14} />
                    <span>{channel.availability}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-600">
              Find answers to the most common questions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card border border-gray-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-secondary-800">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp size={20} className="text-primary-500" />
                  ) : (
                    <ChevronDown size={20} className="text-secondary-400" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-secondary-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-secondary-800 to-secondary-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Can't find what you're looking for? Our support team is here to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <span>Contact Support</span>
                <MessageCircle size={20} />
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-secondary-800 flex items-center justify-center space-x-2">
                <span>Call Us Now</span>
                <Phone size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter; 