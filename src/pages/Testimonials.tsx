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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All', count: 12 },
    { id: 'pet-owners', name: 'Pet Owners', count: 6 },
    { id: 'veterinarians', name: 'Veterinarians', count: 3 },
    { id: 'boarding-services', name: 'Boarding Services', count: 3 }
  ];

  const testimonials = [
    {
      id: 1,
      category: 'pet-owners',
      name: 'Aanya Sharma',
      role: 'Pet Owner',
      location: 'New Delhi, DL',
      rating: 5,
      content: 'FetchTails makes everything so simple. I can track vaccinations, set reminders, and find trusted vets near my home. It\'s become part of our routine for Bruno and Misty.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      pets: ['Bruno (Labrador)', 'Misty (Indie Cat)'],
      services: ['Vaccinations', 'General Checkups'],
      date: '2024-01-15',
      verified: true
    },
    {
      id: 2,
      category: 'veterinarians',
      name: 'Dr. Arjun Mehta',
      role: 'Veterinarian',
      location: 'Mumbai, MH',
      rating: 5,
      content: 'Our clinic scheduling and communication improved drastically with FetchTails. Pet parents appreciate the reminders and quick confirmations. It\'s a professional platform for Indian practices.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      clinic: 'CareVet Mumbai',
      services: ['Consultation', 'Diagnostics', 'Surgery'],
      date: '2024-01-10',
      verified: true
    },
    {
      id: 3,
      category: 'boarding-services',
      name: 'Priya Nair',
      role: 'Boarding Service Owner',
      location: 'Bengaluru, KA',
      rating: 5,
      content: 'Parents can see exactly what we offer and contact us easily. FetchTails has helped Paws & Play reach more families in our area with complete transparency.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      business: 'Paws & Play Boarding',
      services: ['Daycare', 'Overnight Boarding', 'Playgroups'],
      date: '2024-01-08',
      verified: true
    },
    {
      id: 4,
      category: 'pet-owners',
      name: 'Rohan Verma',
      role: 'Pet Owner',
      location: 'Pune, MH',
      rating: 5,
      content: 'I booked a senior care consultation for my beagle in minutes. The doctor\'s notes and follow-ups stayed right in the app. Super convenient for busy families.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      pets: ['Buddy (Beagle)'],
      services: ['Senior Pet Care', 'Follow-up Notes'],
      date: '2024-01-05',
      verified: true
    },
    {
      id: 5,
      category: 'veterinarians',
      name: 'Dr. Sneha Iyer',
      role: 'Veterinarian',
      location: 'Chennai, TN',
      rating: 5,
      content: 'From reminders to appointment flow, everything is tailored for Indian pet parents. Our clinic team finds it intuitive and efficient.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      clinic: 'Happy Tails Animal Clinic',
      services: ['Preventive Care', 'Dental', 'Emergency'],
      date: '2024-01-03',
      verified: true
    },
    {
      id: 6,
      category: 'pet-owners',
      name: 'Kavya Singh',
      role: 'Pet Owner',
      location: 'Hyderabad, TS',
      rating: 5,
      content: 'The boarding discovery and reminders reduced my stress when I travelled. Regular updates kept me assured my dog was doing well.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      pets: ['Rocky (German Shepherd)'],
      services: ['Boarding Discovery', 'Reminders'],
      date: '2023-12-28',
      verified: true
    },
    {
      id: 7,
      category: 'boarding-services',
      name: 'Aditya Kumar',
      role: 'Boarding Service Manager',
      location: 'Gurugram, HR',
      rating: 5,
      content: 'We receive clearer enquiries and faster confirmations now. Families value transparent service lists and quick responses through FetchTails.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      business: 'Pet Paradise Gurgaon',
      services: ['Suites', 'Walks', 'Playtime'],
      date: '2023-12-25',
      verified: true
    },
    {
      id: 8,
      category: 'pet-owners',
      name: 'Neha Patel',
      role: 'Pet Owner',
      location: 'Ahmedabad, GJ',
      rating: 5,
      content: 'Managing two pets across vaccinations and grooming is easy now. Everything stays in one place with timely alerts.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      pets: ['Whiskers (Cat)', 'Bruno (Labrador)'],
      services: ['Vaccinations', 'Grooming'],
      date: '2023-12-20',
      verified: true
    },
    {
      id: 9,
      category: 'veterinarians',
      name: 'Dr. Farhan Khan',
      role: 'Veterinarian',
      location: 'Kolkata, WB',
      rating: 5,
      content: 'Appointment coordination and pet history are seamless. Pet parents in our city appreciate the clarity and speed.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      clinic: 'City Vet Kolkata',
      services: ['General Practice', 'Diagnostics'],
      date: '2023-12-18',
      verified: true
    },
    {
      id: 10,
      category: 'pet-owners',
      name: 'Meera Joshi',
      role: 'Pet Owner',
      location: 'Jaipur, RJ',
      rating: 5,
      content: 'Found an experienced vet for our parrot quickly. The experience felt local, trustworthy, and easy.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      pets: ['Mithu (Parrot)'],
      services: ['Exotic Pet Care'],
      date: '2023-12-15',
      verified: true
    },
    {
      id: 11,
      category: 'boarding-services',
      name: 'Anjali Menon',
      role: 'Boarding Service Owner',
      location: 'Kochi, KL',
      rating: 5,
      content: 'Our small facility now reaches more nearby families. The listing and communication tools are simple and effective.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      business: 'Coastal Paws Boarding',
      services: ['Daycare', 'Overnight Care'],
      date: '2023-12-12',
      verified: true
    },
    {
      id: 12,
      category: 'pet-owners',
      name: 'Siddharth Rao',
      role: 'Pet Owner',
      location: 'Bengaluru, KA',
      rating: 5,
      content: 'Emergency locator helped us find care at midnight when our indie pup fell ill. The experience was fast and reassuring.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      pets: ['Chotu (Indie Dog)'],
      services: ['Emergency Care'],
      date: '2023-12-10',
      verified: true
    }
  ];

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === selectedCategory);

  const stats = [
    { label: 'Happy Users', value: 'Growing' },
    { label: 'Average Rating', value: 'Loved by our early users' },
    { label: 'Service Providers', value: 'Expanding' },
    { label: 'Cities Covered', value: 'Rolling out' }
  ];

  const nextTestimonial = () => {
    if (selectedTestimonial !== null) {
      setSelectedTestimonial((selectedTestimonial + 1) % filteredTestimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (selectedTestimonial !== null) {
      setSelectedTestimonial(selectedTestimonial === 0 ? filteredTestimonials.length - 1 : selectedTestimonial - 1);
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
              <Quote size={16} />
              <span>User Stories</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-secondary-800 mb-6"
            >
              What Our Users
              <span className="text-primary-500 block">Say About Us</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-secondary-600 leading-relaxed mb-8"
            >
              Real stories from pet owners, veterinarians, and service providers 
              who have transformed their pet care experience with FetchTails.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-secondary-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
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

      {/* Testimonials Grid */}
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
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group cursor-pointer ${
                    viewMode === 'list' ? 'flex items-start space-x-6' : ''
                  }`}
                  onClick={() => setSelectedTestimonial(index)}
                >
                  <div className={`card p-6 ${
                    viewMode === 'list' ? 'flex-1' : ''
                  } card-hover border-animate`}>
                    {/* Header */}
                    <div className={`flex items-start space-x-4 mb-4 ${
                      viewMode === 'list' ? 'flex-row' : 'flex-col sm:flex-row'
                    }`}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold text-secondary-800 truncate">
                            {testimonial.name}
                          </h3>
                          {testimonial.verified && (
                            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                              <Award size={12} className="text-white" />
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-secondary-600 mb-2">{testimonial.role}</p>
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={14} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                      <Quote size={20} className="text-primary-500 mb-2" />
                      <p className="text-secondary-700 leading-relaxed line-clamp-4">
                        "{testimonial.content}"
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between text-sm text-secondary-500">
                      <div className="flex items-center space-x-2">
                        <MapPin size={14} />
                        <span>{testimonial.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} />
                        <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Detailed Testimonial Modal */}
      <AnimatePresence>
        {selectedTestimonial !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTestimonial(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <X size={24} className="text-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); prevTestimonial(); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextTestimonial(); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <ChevronRight size={24} className="text-white" />
              </button>

              {/* Testimonial Content */}
              <motion.div
                key={selectedTestimonial}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                                 <div className="flex items-start space-x-6 mb-6">
                   <img
                     src={filteredTestimonials[selectedTestimonial]?.image}
                     alt={filteredTestimonials[selectedTestimonial]?.name}
                     className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                   />
                   <div className="flex-1">
                     <div className="flex items-center space-x-2 mb-2">
                       <h2 className="text-2xl font-bold text-secondary-800">
                         {filteredTestimonials[selectedTestimonial]?.name}
                       </h2>
                       {filteredTestimonials[selectedTestimonial]?.verified && (
                         <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                           <Award size={14} className="text-white" />
                         </div>
                       )}
                     </div>
                     <p className="text-lg text-secondary-600 mb-2">
                       {filteredTestimonials[selectedTestimonial]?.role}
                     </p>
                     <div className="flex items-center space-x-4 text-sm text-secondary-500">
                       <div className="flex items-center space-x-1">
                         <MapPin size={14} />
                         <span>{filteredTestimonials[selectedTestimonial]?.location}</span>
                       </div>
                       <div className="flex items-center space-x-1">
                         <Calendar size={14} />
                         <span>{new Date(filteredTestimonials[selectedTestimonial]?.date || '').toLocaleDateString()}</span>
                       </div>
                     </div>
                   </div>
                   <div className="flex items-center space-x-1">
                     {[...Array(filteredTestimonials[selectedTestimonial]?.rating || 0)].map((_, i) => (
                       <Star key={i} size={20} className="text-yellow-400 fill-current" />
                     ))}
                   </div>
                 </div>

                 <div className="mb-6">
                   <Quote size={24} className="text-primary-500 mb-4" />
                   <p className="text-lg text-secondary-700 leading-relaxed">
                     "{filteredTestimonials[selectedTestimonial]?.content}"
                   </p>
                 </div>

                                 {/* Additional Details */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {filteredTestimonials[selectedTestimonial]?.pets && (
                     <div>
                       <h3 className="font-semibold text-secondary-800 mb-2">Pets</h3>
                       <div className="space-y-1">
                         {filteredTestimonials[selectedTestimonial]?.pets?.map((pet, idx) => (
                           <div key={idx} className="flex items-center space-x-2 text-sm text-secondary-600">
                             <Heart size={14} className="text-primary-500" />
                             <span>{pet}</span>
                           </div>
                         ))}
                       </div>
                     </div>
                   )}

                   {filteredTestimonials[selectedTestimonial]?.services && (
                     <div>
                       <h3 className="font-semibold text-secondary-800 mb-2">Services Used</h3>
                       <div className="space-y-1">
                         {filteredTestimonials[selectedTestimonial]?.services?.map((service, idx) => (
                           <div key={idx} className="flex items-center space-x-2 text-sm text-secondary-600">
                             <Calendar size={14} className="text-primary-500" />
                             <span>{service}</span>
                           </div>
                         ))}
                       </div>
                     </div>
                   )}

                   {filteredTestimonials[selectedTestimonial]?.clinic && (
                     <div>
                       <h3 className="font-semibold text-secondary-800 mb-2">Clinic</h3>
                       <p className="text-sm text-secondary-600">{filteredTestimonials[selectedTestimonial]?.clinic}</p>
                     </div>
                   )}

                   {filteredTestimonials[selectedTestimonial]?.business && (
                     <div>
                       <h3 className="font-semibold text-secondary-800 mb-2">Business</h3>
                       <p className="text-sm text-secondary-600">{filteredTestimonials[selectedTestimonial]?.business}</p>
                     </div>
                   )}
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
              Join Our Happy Community
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to experience the same level of satisfaction? Download FetchTails 
              and become part of our growing community of satisfied users.
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

export default Testimonials;
