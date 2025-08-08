import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Shield, 
  Clock, 
  Star, 
  Download,
  ArrowRight,
  CheckCircle,
  Play,
  User,
  Search,
  CreditCard,
  FileText,
  Calendar,
  Activity
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Pet Care Management',
      description: 'Comprehensive pet profiles with medical history and care schedules.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Multiple payment methods with Razorpay integration for safe transactions.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Clock,
      title: 'Real-time Booking',
      description: 'Instant appointment booking with real-time availability updates.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Star,
      title: 'Quality Services',
      description: 'Verified veterinary clinics and boarding services near you.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Happy Pet Owners' },
    { number: '500+', label: 'Veterinary Clinics' },
    { number: '200+', label: 'Boarding Services' },
    { number: '50K+', label: 'Appointments Booked' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Pet Owner',
      content: 'FetchTails made finding a vet so easy! The app is intuitive and the service quality is outstanding.',
      rating: 5
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Veterinarian',
      content: 'As a service provider, FetchTails has helped us reach more pet owners and manage appointments efficiently.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Pet Owner',
      content: 'The boarding service booking was seamless. My dog had a great time and I was updated throughout.',
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100 bg-pattern">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.05, ease: "easeOut" }}
                className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                <span>Complete Pet Care Management</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1, ease: "easeOut" }}
                className="text-5xl lg:text-6xl font-bold text-secondary-800 leading-tight"
              >
                Your Pet's Care,
                <span className="text-primary-500 block">Simplified</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.15, ease: "easeOut" }}
                className="text-xl text-secondary-600 leading-relaxed"
              >
                Connect with trusted veterinary clinics and boarding services. 
                Manage your pet's health, appointments, and care all in one place.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/download" className="btn-primary flex items-center justify-center space-x-2 glow-border">
                  <Download size={20} />
                  <span>Download App</span>
                </Link>
                <button className="btn-outline flex items-center justify-center space-x-2">
                  <Play size={20} />
                  <span>Watch Demo</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.25, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-4 mb-6">
                      <img 
                        src="/logo-fetchtails.png" 
                        alt="FetchTails Logo" 
                        className="h-12 w-auto"
                      />
                      <div>
                        <h3 className="font-bold text-lg">FetchTails</h3>
                        <p className="text-sm text-gray-500">Pet Care App</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle size={16} className="text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Appointment Confirmed</p>
                          <p className="text-xs text-gray-500">Dr. Smith - Tomorrow 2:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Heart size={16} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Pet Health Update</p>
                          <p className="text-xs text-gray-500">Max's vaccination due</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-20"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full opacity-20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-4">
              Why Choose FetchTails?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive pet care management with cutting-edge technology and trusted services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card p-6 text-center group card-hover border-animate"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50 bg-pattern">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Join thousands of satisfied pet owners and service providers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card p-8 glow-border"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-secondary-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-secondary-500">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              <span>Simple 3-Step Process</span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-800 mb-6">
              How FetchTails Works
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Get started with comprehensive pet care management in just three simple steps
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: 'Create Pet Profile',
                  description: 'Add your pets with detailed information including breed, age, and medical history.',
                  icon: User,
                  color: 'from-blue-500 to-blue-600',
                  features: ['Multiple pets', 'Health records', 'Breed information', 'Age tracking']
                },
                {
                  title: 'Find Services',
                  description: 'Browse veterinary clinics and boarding services near you with detailed reviews.',
                  icon: Search,
                  color: 'from-green-500 to-green-600',
                  features: ['Nearby search', 'Detailed reviews', 'Service ratings', 'Contact info']
                },
                {
                  title: 'Book & Pay',
                  description: 'Schedule appointments and complete secure payments through our integrated system.',
                  icon: CreditCard,
                  color: 'from-purple-500 to-purple-600',
                  features: ['Instant booking', 'Secure payments', 'Appointment reminders', 'Payment history']
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative z-10"
                >
                  <div className="card p-8 text-center h-full card-hover border-animate">


                    {/* Icon */}
                    <div className="mb-6 pt-4">
                      <div className={`w-24 h-24 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mx-auto shadow-xl transform hover:scale-110 transition-transform duration-300`}>
                        <item.icon size={32} className="text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-secondary-800 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center space-x-2 text-sm text-secondary-600">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              <span>App Interface</span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-800 mb-6">
              Beautiful & Intuitive Design
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Experience our thoughtfully designed interface that makes pet care management effortless
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Dashboard', 
                subtitle: 'Overview & Quick Actions',
                image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&h=600&fit=crop',
                color: 'from-blue-500 to-blue-600',
                icon: Activity,
                features: ['Pet overview', 'Quick actions', 'Recent activity', 'Health alerts']
              },
              { 
                title: 'Pet Profiles', 
                subtitle: 'Detailed Pet Information',
                image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=300&h=600&fit=crop',
                color: 'from-green-500 to-green-600',
                icon: FileText,
                features: ['Health records', 'Vaccination history', 'Medical notes', 'Photo gallery']
              },
              { 
                title: 'Booking', 
                subtitle: 'Easy Appointment Scheduling',
                image: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?w=300&h=600&fit=crop',
                color: 'from-purple-500 to-purple-600',
                icon: Calendar,
                features: ['Service selection', 'Time slots', 'Payment integration', 'Confirmation']
              },
              { 
                title: 'Health Tracking', 
                subtitle: 'Comprehensive Health Monitoring',
                image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=300&h=600&fit=crop',
                color: 'from-orange-500 to-orange-600',
                icon: Activity,
                features: ['Vital signs', 'Medication tracking', 'Health trends', 'Reports']
              }
            ].map((screen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="card overflow-hidden card-hover border-animate">
                  {/* Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${screen.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <screen.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-secondary-800 group-hover:text-primary-500 transition-colors duration-300">
                          {screen.title}
                        </h3>
                        <p className="text-sm text-secondary-600">
                          {screen.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Features */}
                  <div className="p-6 pt-4">
                    <div className="grid grid-cols-2 gap-2">
                      {screen.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-secondary-600">
                          <div className="w-1 h-1 bg-primary-500 rounded-full flex-shrink-0"></div>
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-6 py-3 rounded-full">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              <span className="font-medium">Ready to experience the app?</span>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <span>Download App</span>
                <ArrowRight size={20} />
              </button>
              <button className="btn-outline flex items-center justify-center space-x-2">
                <span>Watch Demo</span>
                <Play size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-800 to-secondary-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Pet Care Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Download the FetchTails app today and join thousands of pet owners 
              who trust us with their furry family members.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/download" className="btn-primary flex items-center justify-center space-x-2">
                <Download size={20} />
                <span>Download Now</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-secondary-800 flex items-center justify-center space-x-2">
                <span>Explore Services</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 