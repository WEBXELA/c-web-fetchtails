import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  Heart, 
  Award,
  Calendar,
  MapPin,
  Play,
  ChevronLeft,
  ChevronRight,
  Grid,
  List,
  X,
  Download
} from 'lucide-react';

const Testimonials: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('pet-owners');
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'pet-owners', name: 'Pet Owners', count: 3 }
  ];

  const testimonials = [
    {
      id: 1,
      category: 'pet-owners',
      name: 'Yatharth Chauhan',
      role: 'Pet Owner',
      location: 'New Delhi, DL',
      rating: 5,
      content: 'FetchTails makes everything so simple. I can track vaccinations, set reminders, and find trusted vets near my home. It\'s become part of our routine for Bruno and Misty.',
      pets: ['Bruno (Labrador)', 'Misty (Indie Cat)'],
      services: ['Vaccinations', 'General Checkups'],
      date: '2024-01-15',
      verified: true
    },
    {
      id: 2,
      category: 'pet-owners',
      name: 'Anurag Mishra',
      role: 'Pet Owner',
      location: 'Mumbai, MH',
      rating: 5,
      content: 'The boarding service booking was seamless. My dog had a great time and I was updated throughout. Highly recommend!',
      pets: ['Max (Golden Retriever)'],
      services: ['Boarding Discovery', 'Reminders'],
      date: '2024-01-20',
      verified: true
    },
    {
      id: 3,
      category: 'pet-owners',
      name: 'Priyanshu Gupta',
      role: 'Pet Owner',
      location: 'Bangalore, KA',
      rating: 5,
      content: 'Managing two pets across vaccinations and grooming is easy now. Everything stays in one place with timely alerts.',
      pets: ['Luna (Persian Cat)', 'Rocky (German Shepherd)'],
      services: ['Vaccinations', 'Grooming'],
      date: '2024-01-25',
      verified: true
    }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => testimonial.category === 'pet-owners');

  const openTestimonial = (id: number) => {
    setSelectedTestimonial(id);
  };

  const closeTestimonial = () => {
    setSelectedTestimonial(null);
  };

  const nextTestimonial = () => {
    if (selectedTestimonial !== null) {
      const currentIndex = filteredTestimonials.findIndex(t => t.id === selectedTestimonial);
      const nextIndex = (currentIndex + 1) % filteredTestimonials.length;
      setSelectedTestimonial(filteredTestimonials[nextIndex].id);
    }
  };

  const prevTestimonial = () => {
    if (selectedTestimonial !== null) {
      const currentIndex = filteredTestimonials.findIndex(t => t.id === selectedTestimonial);
      const prevIndex = currentIndex === 0 ? filteredTestimonials.length - 1 : currentIndex - 1;
      setSelectedTestimonial(filteredTestimonials[prevIndex].id);
    }
  };

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
              <Quote size={16} />
              <span>Testimonials</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-secondary-800 mb-6"
            >
              What Our
              <span className="text-primary-500 block">Customers Say</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-secondary-600 leading-relaxed"
            >
              Real experiences from pet owners who trust FetchTails for their pet care needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'text-secondary-600 hover:text-primary-500'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>

          {/* View Mode Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-primary-500 text-white'
                    : 'text-secondary-600 hover:text-primary-500'
                }`}
              >
                <Grid size={20} className="inline mr-2" />
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-primary-500 text-white'
                    : 'text-secondary-600 hover:text-primary-500'
                }`}
              >
                <List size={20} className="inline mr-2" />
                List
              </button>
            </div>
          </motion.div>

          {/* Testimonials Grid/List */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`card group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  viewMode === 'list' ? 'flex items-start space-x-6' : ''
                }`}
                onClick={() => openTestimonial(testimonial.id)}
              >
                {viewMode === 'list' ? (
                  // List View
                  <>
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-secondary-800">{testimonial.name}</h3>
                        {testimonial.verified && (
                          <div className="inline-flex items-center space-x-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                            <Award size={12} />
                            <span>Verified</span>
                          </div>
                        )}
                      </div>
                      <p className="text-secondary-600 text-sm mb-2">{testimonial.role} • {testimonial.location}</p>
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-secondary-700 leading-relaxed">{testimonial.content}</p>
                    </div>
                  </>
                ) : (
                  // Grid View
                  <>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-lg font-bold">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-secondary-800">{testimonial.name}</h3>
                            <p className="text-sm text-secondary-600">{testimonial.role}</p>
                          </div>
                        </div>
                        {testimonial.verified && (
                          <div className="inline-flex items-center space-x-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                            <Award size={12} />
                            <span>Verified</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <p className="text-secondary-700 leading-relaxed mb-4">{testimonial.content}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-secondary-600">
                          <MapPin size={14} />
                          <span>{testimonial.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-secondary-600">
                          <Calendar size={14} />
                          <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={closeTestimonial}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {filteredTestimonials.find(t => t.id === selectedTestimonial) && (
                <div className="p-8">
                  {/* Modal Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {filteredTestimonials.find(t => t.id === selectedTestimonial)?.name.charAt(0)}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-secondary-800">
                          {filteredTestimonials.find(t => t.id === selectedTestimonial)?.name}
                        </h2>
                        <p className="text-secondary-600">
                          {filteredTestimonials.find(t => t.id === selectedTestimonial)?.role} • {filteredTestimonials.find(t => t.id === selectedTestimonial)?.location}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={closeTestimonial}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(filteredTestimonials.find(t => t.id === selectedTestimonial)?.rating || 0)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-secondary-700 text-lg leading-relaxed mb-6">
                    {filteredTestimonials.find(t => t.id === selectedTestimonial)?.content}
                  </p>

                  {/* Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-secondary-800 mb-2">Pets</h3>
                      <div className="space-y-1">
                        {filteredTestimonials.find(t => t.id === selectedTestimonial)?.pets.map((pet, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-secondary-600">
                            <Heart size={14} className="text-primary-500" />
                            <span>{pet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-800 mb-2">Services Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {filteredTestimonials.find(t => t.id === selectedTestimonial)?.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="text-sm text-secondary-500 text-center">
                    {new Date(filteredTestimonials.find(t => t.id === selectedTestimonial)?.date || '').toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-8">
                    <button
                      onClick={prevTestimonial}
                      className="flex items-center space-x-2 px-4 py-2 text-secondary-600 hover:text-primary-500 transition-colors"
                    >
                      <ChevronLeft size={20} />
                      <span>Previous</span>
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="flex items-center space-x-2 px-4 py-2 text-secondary-600 hover:text-primary-500 transition-colors"
                    >
                      <span>Next</span>
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Testimonials;
