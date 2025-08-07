import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Home, 
  Star, 
  MapPin, 
  Clock, 
  Phone,
  Search,
  ArrowRight,
  Heart,
  Calendar
} from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('clinics');
  const [searchTerm, setSearchTerm] = useState('');

  const clinics = [
    {
      id: 1,
      name: 'Pawsome Veterinary Clinic',
      rating: 4.8,
      location: 'Downtown District',
      distance: '0.8 km',
      services: ['General Checkup', 'Vaccination', 'Surgery'],
      price: '$$',
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=300&fit=crop',
      phone: '+91 9633651635',
      hours: 'Mon-Fri: 8AM-6PM'
    },
    {
      id: 2,
      name: 'Healthy Pets Medical Center',
      rating: 4.9,
      location: 'Westside Area',
      distance: '2.1 km',
      services: ['Specialized Care', 'Dental', 'X-Ray'],
      price: '$$$',
      image: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?w=400&h=300&fit=crop',
      phone: '+1 (555) 234-5678',
      hours: 'Mon-Sat: 7AM-8PM'
    }
  ];

  const boardingServices = [
    {
      id: 1,
      name: 'Happy Tails Boarding',
      rating: 4.9,
      location: 'Countryside',
      distance: '5.2 km',
      services: ['24/7 Care', 'Large Play Areas', 'Individual Suites'],
      price: '$$',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop',
      phone: '+1 (555) 456-7890',
      hours: '24/7 Service',
      capacity: '50 dogs, 30 cats'
    },
    {
      id: 2,
      name: 'Pet Paradise Resort',
      rating: 4.8,
      location: 'Lakeside',
      distance: '8.7 km',
      services: ['Luxury Suites', 'Swimming Pool', 'Training'],
      price: '$$$',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
      phone: '+1 (555) 567-8901',
      hours: '7AM-7PM Daily',
      capacity: '75 dogs, 40 cats'
    }
  ];

  const filteredClinics = clinics.filter(clinic =>
    clinic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBoarding = boardingServices.filter(boarding =>
    boarding.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <Stethoscope size={16} />
              <span>Our Services</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-secondary-800 mb-6"
            >
              Quality Pet Care
              <span className="text-primary-500 block">Services</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-secondary-600 leading-relaxed"
            >
              Discover trusted veterinary clinics and premium boarding services 
              for your beloved pets.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab('clinics')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'clinics'
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-secondary-600 hover:text-primary-500'
                }`}
              >
                <Stethoscope size={20} className="inline mr-2" />
                Veterinary Clinics
              </button>
              <button
                onClick={() => setActiveTab('boarding')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'boarding'
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-secondary-600 hover:text-primary-500'
                }`}
              >
                <Home size={20} className="inline mr-2" />
                Boarding Services
              </button>
            </div>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-md mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === 'clinics' ? filteredClinics : filteredBoarding).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card overflow-hidden group card-hover border-animate"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-300">
                      <Heart size={16} className="text-gray-600" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-primary-500 text-white px-2 py-1 rounded text-sm font-medium">
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-secondary-800 group-hover:text-primary-500 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-secondary-600">
                        {service.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-secondary-500 mb-4">
                    <MapPin size={14} />
                    <span>{service.location}</span>
                    <span>•</span>
                    <span>{service.distance}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.services.slice(0, 3).map((serviceItem: string, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                      >
                        {serviceItem}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-secondary-600">
                      <Clock size={14} />
                      <span>{service.hours}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-secondary-600">
                      <Phone size={14} />
                      <span>{service.phone}</span>
                    </div>
                    {'capacity' in service && (
                      <div className="flex items-center space-x-2 text-sm text-secondary-600">
                        <span>Capacity: {(service as any).capacity}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <button className="btn-primary flex-1 flex items-center justify-center space-x-2">
                      <Calendar size={16} />
                      <span>Book Now</span>
                    </button>
                    <button className="btn-outline flex items-center justify-center">
                      <ArrowRight size={16} />
                    </button>
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

export default Services; 