import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Home, 
  Search,
  Scissors,
  GraduationCap,
  Plane,
  Users,
  PawPrint,
  Calendar
} from 'lucide-react';

const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // All services combined
  const allServices = [
    // Consultation services
    {
      id: 1,
      title: 'General Pet Consultation',
      description: 'Professional consultation services for routine health checks and preventive care.',
      items: ['Health Checkup', 'Vaccination Advice', 'Nutrition Consultation', 'Behavioral Assessment'],
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=300&fit=crop',
      category: 'Consultation',
      icon: Stethoscope,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Specialized Consultation',
      description: 'Expert consultations for specific health concerns and specialized care needs.',
      items: ['Senior Pet Care', 'Chronic Condition Management', 'Surgery Consultation', 'Emergency Assessment'],
      image: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?w=400&h=300&fit=crop',
      category: 'Consultation',
      icon: Stethoscope,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      title: 'Preventive Care Consultation',
      description: 'Comprehensive preventive care planning and wellness consultations.',
      items: ['Vaccination Schedule', 'Parasite Prevention', 'Dental Care Planning', 'Lifestyle Recommendations'],
      image: 'https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?w=400&h=300&fit=crop',
      category: 'Consultation',
      icon: Stethoscope,
      color: 'from-blue-500 to-blue-600'
    },

    // Grooming services
    {
      id: 4,
      title: 'Basic Grooming',
      description: 'Essential grooming services for pet hygiene and comfort.',
      items: ['Bath & Blow Dry', 'Nail Trimming', 'Ear Cleaning', 'Sanitary Trim'],
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
      category: 'Grooming',
      icon: Scissors,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 5,
      title: 'Premium Grooming',
      description: 'Advanced grooming services with styling and specialized treatments.',
      items: ['Full Grooming', 'Breed-Specific Cuts', 'De-shedding Treatment', 'Teeth Cleaning'],
      image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&h=300&fit=crop',
      category: 'Grooming',
      icon: Scissors,
      color: 'from-pink-500 to-pink-600'
    },

    // Vacation services
    {
      id: 6,
      title: 'Pet Travel Planning',
      description: 'Comprehensive travel planning services for pets including documentation and arrangements.',
      items: ['Travel Documentation', 'Health Certificates', 'Pet-Friendly Accommodation', 'Transportation Arrangements'],
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop',
      category: 'Vacation',
      icon: Plane,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 7,
      title: 'Vacation Pet Care',
      description: 'Specialized care services while you\'re on vacation.',
      items: ['In-Home Pet Sitting', 'Regular Updates', 'Emergency Contact', 'Custom Care Plans'],
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
      category: 'Vacation',
      icon: Plane,
      color: 'from-purple-500 to-purple-600'
    },

    // Trainer services
    {
      id: 8,
      title: 'Basic Training',
      description: 'Foundation training for puppies and young dogs.',
      items: ['Basic Commands', 'House Training', 'Leash Walking', 'Socialization'],
      image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400&h=300&fit=crop',
      category: 'Trainer',
      icon: GraduationCap,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 9,
      title: 'Advanced Training',
      description: 'Specialized training for behavior modification and advanced skills.',
      items: ['Behavior Correction', 'Advanced Commands', 'Agility Training', 'Therapy Dog Training'],
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop',
      category: 'Trainer',
      icon: GraduationCap,
      color: 'from-green-500 to-green-600'
    },

    // Walkers services
    {
      id: 10,
      title: 'Regular Dog Walking',
      description: 'Daily or scheduled dog walking services for exercise and potty breaks.',
      items: ['Individual Walks', 'Group Walks', 'Exercise Routines', 'Potty Breaks'],
      image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400&h=300&fit=crop',
      category: 'Walkers',
      icon: Users,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 11,
      title: 'Specialized Walking',
      description: 'Customized walking services for specific needs and preferences.',
      items: ['Senior Dog Walks', 'Puppy Walks', 'Reactive Dog Handling', 'Long Distance Walks'],
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop',
      category: 'Walkers',
      icon: Users,
      color: 'from-orange-500 to-orange-600'
    },

    // Daycare services
    {
      id: 12,
      title: 'Pet Daycare',
      description: 'Safe and supervised daytime care for pets with socialization and activities.',
      items: ['Supervised Playtime', 'Socialization Groups', 'Rest Periods', 'Enrichment Activities'],
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop',
      category: 'Daycare',
      icon: Calendar,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 13,
      title: 'Specialized Daycare',
      description: 'Daycare services tailored to specific pet needs and preferences.',
      items: ['Small Breed Groups', 'Large Breed Groups', 'Senior Pet Care', 'Special Needs Support'],
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
      category: 'Daycare',
      icon: Calendar,
      color: 'from-yellow-500 to-yellow-600'
    },

    // Walking services
    {
      id: 14,
      title: 'Exercise Walking',
      description: 'Focused exercise walking for fitness and health maintenance.',
      items: ['Fitness Walks', 'Endurance Training', 'Weight Management', 'Health Monitoring'],
      image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400&h=300&fit=crop',
      category: 'Walking',
      icon: PawPrint,
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 15,
      title: 'Recreational Walking',
      description: 'Leisurely walks for mental stimulation and exploration.',
      items: ['Nature Walks', 'City Exploration', 'Social Walks', 'Adventure Walks'],
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop',
      category: 'Walking',
      icon: PawPrint,
      color: 'from-teal-500 to-teal-600'
    },

    // Boarding services
    {
      id: 16,
      title: 'Overnight Boarding',
      description: 'Comfortable overnight accommodation with attentive care and monitoring.',
      items: ['Individual Suites', '24/7 Monitoring', 'Feeding Schedules', 'Regular Check-ins'],
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
      category: 'Boarding',
      icon: Home,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 17,
      title: 'Extended Boarding',
      description: 'Long-term boarding services for extended periods with comprehensive care.',
      items: ['Extended Stay Discounts', 'Personalized Care Plans', 'Regular Updates', 'Home Comforts'],
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=300&fit=crop',
      category: 'Boarding',
      icon: Home,
      color: 'from-red-500 to-red-600'
    }
  ];

  // Filter services based on search term
  const filteredServices = allServices.filter(service =>
    (service.title + ' ' + service.description + ' ' + service.items.join(' ') + ' ' + service.category).toLowerCase().includes(searchTerm.toLowerCase())
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
              Discover trusted pet care services for your beloved pets including consultation, 
              grooming, training, walking, daycare, and boarding.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto mb-12"
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
            {filteredServices.map((service, index) => (
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
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${service.color} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}>
                      <service.icon size={16} />
                      <span>{service.category}</span>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2 group-hover:text-primary-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.items.map((serviceItem: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                      >
                        {serviceItem}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-secondary-600 text-lg">No services found matching your search.</p>
              <p className="text-secondary-500">Try adjusting your search terms.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services; 