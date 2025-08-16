import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Target, 
  Globe, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About: React.FC = () => {
  // Ensure all content is visible after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        section.style.opacity = '1';
        section.style.visibility = 'visible';
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Pet-First Approach',
      description: 'Every decision we make prioritizes the health and happiness of pets.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Verified service providers and secure payment processing for peace of mind.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building a supportive community of pet owners and care providers.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Leveraging technology to make pet care accessible and efficient.',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  // Timeline removed per request

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
              <Heart size={16} />
              <span>About FetchTails</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-secondary-800 mb-6"
            >
              Our Story
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-secondary-600 leading-relaxed"
            >
              We're on a mission to revolutionize pet care by connecting pet owners with 
              trusted pet care services including consultation, grooming, training, walking, daycare, and boarding through innovative technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                <Target size={16} />
                <span>Our Mission</span>
              </div>
              
              <h2 className="text-4xl font-bold text-secondary-800">
                Making Pet Care Accessible to Everyone
              </h2>
              
              <p className="text-lg text-secondary-600 leading-relaxed">
                At FetchTails, we believe every pet deserves the best care possible. 
                Our platform bridges the gap between pet owners and quality care providers, 
                making it easier than ever to find trusted pet care services including consultation, grooming, training, walking, daycare, and boarding.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-secondary-800">Verified Service Providers</h3>
                    <p className="text-secondary-600">All pet care service providers are thoroughly vetted</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-secondary-800">Secure Payment Processing</h3>
                    <p className="text-secondary-600">Multiple payment methods with Razorpay integration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-secondary-800">Real-time Updates</h3>
                    <p className="text-secondary-600">Live notifications and appointment tracking</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto">
                      <Heart size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-800">
                      Our Vision
                    </h3>
                    <p className="text-secondary-600">
                      To become the most trusted platform for pet care, connecting millions of 
                      pet owners with quality care providers worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              These principles guide everything we do at FetchTails.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card p-6 text-center group card-hover border-animate"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section removed as requested */}

      {/* CTA Section */}
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
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Whether you're a pet owner looking for quality care or a service provider 
              wanting to reach more clients, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight size={20} />
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-secondary-800 flex items-center justify-center space-x-2">
                <span>Contact Us</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 