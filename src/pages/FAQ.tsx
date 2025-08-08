import React from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Search,
  Users,
  CreditCard,
  Calendar,
  Shield,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [activeCategory, setActiveCategory] = React.useState('general');

  const categories = [
    { id: 'general', name: 'General', icon: HelpCircle },
    { id: 'booking', name: 'Booking & Appointments', icon: Calendar },
    { id: 'payment', name: 'Payment & Billing', icon: CreditCard },
    { id: 'services', name: 'Services & Providers', icon: Users },
    { id: 'safety', name: 'Safety & Security', icon: Shield },
    { id: 'technical', name: 'Technical Support', icon: Phone }
  ];

  const faqs = {
    general: [
      {
        question: "What is FetchTails?",
        answer: "FetchTails is a comprehensive pet care platform that connects pet owners with trusted veterinary clinics and boarding services. We make it easy to find, book, and manage pet care services in your area."
      },
      {
        question: "How do I get started with FetchTails?",
        answer: "Getting started is easy! Simply download our app or visit our website, create an account, add your pet's information, and start searching for services in your area. You can book appointments and manage everything from one platform."
      },
      {
        question: "Is FetchTails available in my area?",
        answer: "FetchTails is currently available in major cities across India. We're constantly expanding our network of service providers. Check our app or website to see if services are available in your location."
      },
      {
        question: "How do I know if a service provider is trustworthy?",
        answer: "All service providers on our platform are thoroughly vetted. We verify licenses, insurance, and conduct background checks. Look for the verified badge next to provider names, and read reviews from other pet owners."
      }
    ],
    booking: [
      {
        question: "How do I book an appointment?",
        answer: "To book an appointment, search for services in your area, select your preferred provider, choose an available time slot, and confirm your booking. You'll receive a confirmation email and SMS with appointment details."
      },
      {
        question: "Can I cancel or reschedule my appointment?",
        answer: "Yes, you can cancel or reschedule appointments up to 24 hours before the scheduled time. Simply go to your bookings section in the app and select the modify option. Late cancellations may incur fees."
      },
      {
        question: "What information do I need to provide when booking?",
        answer: "You'll need to provide your contact information, pet details (name, breed, age), reason for visit, and any special requirements. This helps service providers prepare for your appointment."
      },
      {
        question: "How far in advance should I book appointments?",
        answer: "For routine check-ups, booking 1-2 weeks in advance is usually sufficient. For emergency services, we offer immediate booking options. Popular providers may require earlier booking."
      }
    ],
    payment: [
      {
        question: "What payment methods are accepted?",
        answer: "We accept all major credit cards, debit cards, UPI, and digital wallets including Paytm, Google Pay, and PhonePe. All payments are processed securely through Razorpay."
      },
      {
        question: "When do I pay for services?",
        answer: "Payment is typically processed at the time of booking for most services. For some services, you may pay at the time of service. Payment terms are clearly displayed before booking."
      },
      {
        question: "What if I need a refund?",
        answer: "Refund policies vary by service provider. Contact our support team within 48 hours of your appointment for assistance with refund requests. We'll work with the provider to process your refund."
      },
      {
        question: "Are there any hidden fees?",
        answer: "No hidden fees! All costs are clearly displayed before booking, including service fees and any additional charges. You'll see the total amount before confirming your appointment."
      }
    ],
    services: [
      {
        question: "What types of services are available?",
        answer: "We offer a wide range of pet care services including veterinary check-ups, vaccinations, emergency care, grooming, boarding, pet sitting, and specialized treatments. Each provider lists their specific services."
      },
      {
        question: "How do I find services near me?",
        answer: "Use our location-based search to find services in your area. You can filter by service type, distance, ratings, and availability. Each listing includes photos, reviews, and detailed information."
      },
      {
        question: "Can I see reviews and ratings?",
        answer: "Yes! All service providers display reviews and ratings from verified customers. You can read detailed reviews and see overall ratings to help you make informed decisions."
      },
      {
        question: "What if I'm not satisfied with the service?",
        answer: "If you're not satisfied, contact our support team within 48 hours. We'll investigate and work to resolve the issue. We may offer refunds or credits for unsatisfactory experiences."
      }
    ],
    safety: [
      {
        question: "How do you ensure service provider safety?",
        answer: "We conduct thorough background checks, verify licenses and insurance, and require service providers to meet our safety standards. We also monitor reviews and feedback to maintain quality."
      },
      {
        question: "What if there's an emergency during my appointment?",
        answer: "All our veterinary partners are equipped to handle emergencies. If you experience an emergency, contact the service provider immediately, and they'll guide you through the next steps."
      },
      {
        question: "Is my pet's information secure?",
        answer: "Yes, we take data security seriously. All pet and personal information is encrypted and stored securely. We never share your information with unauthorized parties."
      },
      {
        question: "What safety protocols are in place?",
        answer: "Service providers must follow our safety protocols including proper sanitization, vaccination requirements, and emergency procedures. We regularly audit providers to ensure compliance."
      }
    ],
    technical: [
      {
        question: "How do I download the FetchTails app?",
        answer: "You can download our app from the Google Play Store (Android) or Apple App Store (iOS). Search for 'FetchTails' and follow the installation instructions."
      },
      {
        question: "What if I can't access my account?",
        answer: "If you're having trouble accessing your account, try resetting your password using the 'Forgot Password' option. If issues persist, contact our support team for assistance."
      },
      {
        question: "How do I update my pet's information?",
        answer: "You can update your pet's information through the app or website. Go to your profile section, select 'My Pets', and edit the information as needed."
      },
      {
        question: "What if the app isn't working properly?",
        answer: "Try restarting the app or clearing your cache. If problems persist, check your internet connection or contact our technical support team for assistance."
      }
    ]
  };

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      contact: '+91 9633651635',
      availability: '24/7 Emergency Support',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      contact: 'support@fetchtails.com',
      availability: 'Response within 4 hours',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      contact: 'Available on website',
      availability: '9 AM - 9 PM IST',
      color: 'from-purple-500 to-purple-600'
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
              <span>Frequently Asked Questions</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-secondary-800 mb-6"
            >
              FAQ
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-secondary-600 leading-relaxed mb-8"
            >
              Find answers to the most common questions about FetchTails services.
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
                  placeholder="Search for answers..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-secondary-600">
              Find answers organized by topic
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-secondary-600 hover:bg-primary-100 hover:text-primary-500'
                }`}
              >
                <category.icon size={20} />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
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
              Still Need Help?
            </h2>
            <p className="text-lg text-secondary-600">
              Can't find what you're looking for? Contact our support team.
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
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-primary-600">
                    {channel.contact}
                  </div>
                  <div className="text-sm text-secondary-500">
                    {channel.availability}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 