import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  MapPin,
  Calendar,
  Smartphone,
  Lock,
  Zap,
  TrendingUp,
  CheckCircle,
  Play,
  ArrowRight,
  Shield,
  Bell
} from 'lucide-react';

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 'pet-management',
      title: 'Pet Profile Management',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      description: 'Comprehensive pet profiles with medical history, vaccination records, and care schedules.',
      details: [
        'Multiple pet profiles per account',
        'Medical history tracking',
        'Vaccination reminders',
        'Weight and health monitoring',
        'Photo gallery for each pet',
        'Breed and age information'
      ],
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop'
    },
    {
      id: 'booking-system',
      title: 'Smart Booking System',
      icon: Calendar,
      color: 'from-blue-500 to-indigo-500',
      description: 'Intelligent appointment booking with real-time availability and instant confirmations.',
      details: [
        'Real-time slot availability',
        'Instant booking confirmations',
        'Multiple service selection',
        'Pet-specific appointments',
        'Reschedule and cancellation',
        'Reminder notifications'
      ],
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=400&fit=crop'
    },
    {
      id: 'payment-security',
      title: 'Secure Payment Gateway',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      description: 'Multiple payment methods with Razorpay integration for safe and convenient transactions.',
      details: [
        'UPI payment support',
        'Credit/Debit card payments',
        'Digital wallet integration',
        'Secure transaction processing',
        'Payment history tracking',
        'Refund management'
      ],
      image: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?w=600&h=400&fit=crop'
    },
    {
      id: 'service-discovery',
      title: 'Service Discovery',
      icon: MapPin,
      color: 'from-yellow-500 to-orange-500',
      description: 'Find the best pet care services including consultation, grooming, training, walking, daycare, and boarding near you with detailed reviews.',
      details: [
        'Location-based search',
        'Service provider ratings',
        'Detailed service descriptions',
        'Price comparison tools',
        'Operating hours display',
        'Contact information'
      ],
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop'
    }
  ];

  const advancedFeatures = [
    {
      title: 'Real-time Notifications',
      icon: Bell,
      description: 'Stay updated with instant notifications for appointments, reminders, and service updates.',
      benefits: ['Instant booking confirmations', 'Appointment reminders', 'Service completion updates', 'Payment confirmations']
    },
    {
      title: 'Multi-platform Support',
      icon: Smartphone,
      description: 'Access your pet care information across all devices with seamless synchronization.',
      benefits: ['iOS and Android apps', 'Web dashboard access', 'Cross-device sync', 'Offline capability']
    },
    {
      title: 'Data Security',
      icon: Lock,
      description: 'Your pet and payment information is protected with enterprise-grade security measures.',
      benefits: ['End-to-end encryption', 'Secure authentication', 'Data privacy compliance', 'Regular security audits']
    },
    {
      title: 'Analytics Dashboard',
      icon: TrendingUp,
      description: 'Track your pet care expenses, appointment history, and service provider performance.',
      benefits: ['Spending analytics', 'Health tracking', 'Service provider ratings', 'Care timeline']
    }
  ];



  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="container-custom section-padding">
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
              <Zap size={16} />
              <span>App Features</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-secondary-800 mb-6"
            >
              Powerful Features for
              <span className="text-primary-500 block">Pet Care Excellence</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-secondary-600 leading-relaxed"
            >
              Discover the comprehensive features that make FetchTails the ultimate 
              pet care management platform.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Features Showcase */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature Navigation */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-xl scale-105'
                      : 'bg-gray-50 hover:bg-gray-100 text-secondary-800'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeFeature === index ? 'bg-white/20' : `bg-gradient-to-br ${feature.color}`
                    }`}>
                      <feature.icon size={24} className={activeFeature === index ? 'text-white' : 'text-white'} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className={`text-sm ${activeFeature === index ? 'text-white/90' : 'text-secondary-600'}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature Details */}
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="relative">
                <img
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{features[activeFeature].title}</h3>
                  <p className="text-white/90">{features[activeFeature].description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features[activeFeature].details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                    <span className="text-sm text-secondary-700">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Beyond basic pet care management - discover the advanced features that set FetchTails apart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card p-8 card-hover border-animate"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800">{feature.title}</h3>
                </div>
                <p className="text-secondary-600 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-sm text-secondary-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Interactive Demo Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-800 to-secondary-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience FetchTails
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              See how our features work together to provide the ultimate pet care experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <Play size={20} />
                <span>Watch Demo</span>
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-secondary-800 flex items-center justify-center space-x-2">
                <span>Download App</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;
