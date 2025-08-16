import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Download,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Grid,
  List
} from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All', count: 25 },
    { id: 'consultation', name: 'Consultation', count: 5 },
    { id: 'boarding', name: 'Boarding', count: 5 },
    { id: 'grooming', name: 'Grooming', count: 5 },
    { id: 'training', name: 'Training', count: 5 },
    { id: 'walking', name: 'Walking', count: 5 }
  ];

  const galleryItems = [
    // App Screens
    {
      id: 1,
      category: 'app-screens',
      title: 'Home Dashboard',
      description: 'Main dashboard showing pet profiles and quick actions',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop',
      tags: ['dashboard', 'mobile', 'ui']
    },
    {
      id: 2,
      category: 'app-screens',
      title: 'Pet Profile',
      description: 'Detailed pet profile with health information',
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=400&fit=crop',
      tags: ['profile', 'health', 'mobile']
    },
    {
      id: 3,
      category: 'app-screens',
      title: 'Booking Interface',
      description: 'Appointment booking with service selection',
      image: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?w=600&h=400&fit=crop',
      tags: ['booking', 'appointment', 'ui']
    },
    {
      id: 4,
      category: 'app-screens',
      title: 'Payment Screen',
      description: 'Secure payment processing with multiple options',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop',
      tags: ['payment', 'security', 'ui']
    },
    {
      id: 5,
      category: 'app-screens',
      title: 'Service Discovery',
      description: 'Browse pet care services including consultation, grooming, training, walking, daycare, and boarding',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop',
      tags: ['services', 'discovery', 'ui']
    },
    {
      id: 6,
      category: 'app-screens',
      title: 'Notifications',
      description: 'Real-time notifications and reminders',
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=400&fit=crop',
      tags: ['notifications', 'alerts', 'ui']
    },
    {
      id: 7,
      category: 'app-screens',
      title: 'Analytics Dashboard',
      description: 'Pet care analytics and health tracking',
      image: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?w=600&h=400&fit=crop',
      tags: ['analytics', 'dashboard', 'ui']
    },
    {
      id: 8,
      category: 'app-screens',
      title: 'Settings & Profile',
      description: 'User account settings and preferences',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop',
      tags: ['settings', 'profile', 'ui']
    },
    // Pets
    {
      id: 9,
      category: 'pets',
      title: 'Happy Golden Retriever',
      description: 'A joyful golden retriever enjoying outdoor playtime',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=400&fit=crop',
      tags: ['dog', 'golden-retriever', 'outdoor']
    },
    {
      id: 10,
      category: 'pets',
      title: 'Curious Cat',
      description: 'A curious cat exploring its environment',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop',
      tags: ['cat', 'curious', 'indoor']
    },
    {
      id: 11,
      category: 'pets',
      title: 'Playful Puppy',
      description: 'An energetic puppy playing with toys',
      image: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=600&h=400&fit=crop',
      tags: ['puppy', 'playful', 'toys']
    },
    {
      id: 12,
      category: 'pets',
      title: 'Sleeping Kitten',
      description: 'A peaceful kitten taking a nap',
      image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=600&h=400&fit=crop',
      tags: ['kitten', 'sleeping', 'peaceful']
    },
    {
      id: 13,
      category: 'pets',
      title: 'Adventure Dog',
      description: 'A dog ready for outdoor adventures',
      image: 'https://images.unsplash.com/photo-1507146426996-ef05306b0a78?w=600&h=400&fit=crop',
      tags: ['dog', 'adventure', 'outdoor']
    },
    {
      id: 14,
      category: 'pets',
      title: 'Elegant Cat',
      description: 'A graceful cat in a relaxed pose',
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&h=400&fit=crop',
      tags: ['cat', 'elegant', 'graceful']
    },
    // Consultation
    {
      id: 21,
      category: 'consultation',
      title: 'Modern Consultation Room',
      description: 'State-of-the-art consultation facility',
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=400&fit=crop',
      tags: ['consultation', 'modern', 'professional']
    },
    {
      id: 22,
      category: 'consultation',
      title: 'Consultation Area',
      description: 'Comfortable consultation space for pets and owners',
      image: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?w=600&h=400&fit=crop',
      tags: ['consultation', 'comfortable', 'space']
    },
    {
      id: 23,
      category: 'consultation',
      title: 'Consultation Equipment',
      description: 'Professional consultation and examination equipment',
      image: 'https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?w=600&h=400&fit=crop',
      tags: ['consultation', 'equipment', 'professional']
    },
    {
      id: 24,
      category: 'consultation',
      title: 'Consultation Waiting Area',
      description: 'Welcoming waiting area for consultation appointments',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
      tags: ['consultation', 'waiting', 'area']
    },
    {
      id: 25,
      category: 'consultation',
      title: 'Consultation Services',
      description: 'Comprehensive consultation and care services',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
      tags: ['consultation', 'services', 'care']
    },
    // Boarding
    {
      id: 20,
      category: 'boarding',
      title: 'Luxury Pet Resort',
      description: 'Premium boarding facilities for pets',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop',
      tags: ['resort', 'luxury', 'premium']
    },
    {
      id: 21,
      category: 'boarding',
      title: 'Play Area',
      description: 'Large outdoor play area for dogs',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop',
      tags: ['play-area', 'outdoor', 'dogs']
    },
    {
      id: 22,
      category: 'boarding',
      title: 'Pet Suites',
      description: 'Comfortable individual suites for pets',
      image: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?w=600&h=400&fit=crop',
      tags: ['suites', 'comfortable', 'individual']
    },
    {
      id: 23,
      category: 'boarding',
      title: 'Swimming Pool',
      description: 'Pet swimming pool for exercise and fun',
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=400&fit=crop',
      tags: ['pool', 'swimming', 'exercise']
    },
    {
      id: 24,
      category: 'boarding',
      title: 'Grooming Station',
      description: 'Professional grooming services',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop',
      tags: ['grooming', 'professional', 'services']
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

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
              <Camera size={16} />
              <span>App Gallery</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-secondary-800 mb-6"
            >
              Visual Journey Through
              <span className="text-primary-500 block">FetchTails</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-secondary-600 leading-relaxed"
            >
              Explore our app screenshots, beautiful pet photography, and the amazing 
              facilities that make FetchTails the ultimate pet care platform.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="section-padding bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-gray-100 text-secondary-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-secondary-600 hover:bg-gray-200'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-secondary-600 hover:bg-gray-200'
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            layout
            className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
            }
          >
            <AnimatePresence mode="wait">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group cursor-pointer ${
                    viewMode === 'list' ? 'flex items-center space-x-6' : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className={`relative overflow-hidden rounded-2xl shadow-lg ${
                    viewMode === 'list' ? 'w-48 h-32' : 'aspect-video'
                  }`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <button className="w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-300">
                        <ZoomIn size={16} className="text-gray-600" />
                      </button>
                    </div>
                  </div>
                  
                  <div className={viewMode === 'list' ? 'flex-1' : 'mt-4'}>
                    <h3 className="font-semibold text-secondary-800 mb-2 group-hover:text-primary-500 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-secondary-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl w-full">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <X size={24} className="text-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <ChevronRight size={24} className="text-white" />
              </button>

              {/* Image */}
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredItems[selectedImage].image}
                  alt={filteredItems[selectedImage].title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {filteredItems[selectedImage].title}
                  </h3>
                  <p className="text-white/90 mb-3">
                    {filteredItems[selectedImage].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {filteredItems[selectedImage].tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/20 text-white text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
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
              Experience FetchTails Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to see these beautiful features in action? Download the app and 
              start your pet care journey with FetchTails.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <Download size={20} />
                <span>Download App</span>
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-secondary-800 flex items-center justify-center space-x-2">
                <Play size={20} />
                <span>Watch Demo</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

