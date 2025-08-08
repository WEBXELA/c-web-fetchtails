import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Home, 
  Search,
  Scissors,
  GraduationCap,
  AlertTriangle
} from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'clinics' | 'boarding' | 'grooming' | 'training' | 'emergency'>('clinics');
  const [searchTerm, setSearchTerm] = useState('');

  // General service information (not provider-specific)
  const clinicServices = [
    {
      id: 1,
      title: 'General Veterinary Care',
      description: 'Routine health checks, consultations, and preventive care for overall wellness.',
      items: ['General Checkup', 'Deworming', 'Flea/Tick Treatment', 'Nutrition Advice'],
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Vaccinations & Preventive Care',
      description: 'Core and non-core vaccines with tailored schedules for dogs and cats.',
      items: ['Puppy/Kitten Vaccines', 'Annual Boosters', 'Travel Certificates', 'Microchipping'],
      image: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Diagnostics & Procedures',
      description: 'On-site diagnostics and minor procedures handled by qualified professionals.',
      items: ['Blood Tests', 'X-Ray/Ultrasound', 'Dental Scaling', 'Minor Surgeries'],
      image: 'https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?w=400&h=300&fit=crop'
    }
  ];

  const boardingInfo = [
    {
      id: 1,
      title: 'Daycare & Playgroups',
      description: 'Safe, supervised environments for socialization and exercise during the day.',
      items: ['Small/Large Breed Groups', 'Indoor & Outdoor Play', 'Rest Periods', 'Enrichment Activities'],
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Overnight Boarding',
      description: 'Comfortable accommodation with attentive care and regular check-ins.',
      items: ['Individual Suites', '24/7 Monitoring', 'Feeding Schedules', 'Walking & Potty Breaks'],
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop'
    }
  ];

  const groomingInfo = [
    {
      id: 1,
      title: 'Bathing & Hygiene',
      description: 'Regular bathing and hygiene care tailored to coat type and skin needs.',
      items: ['Bath & Blow Dry', 'Nail Trim', 'Ear Cleaning', 'Sanitary Trim'],
      image: 'https://images.unsplash.com/photo-1601758064138-745cb720612f?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Styling & Coat Care',
      description: 'Breed-specific cuts, de-shedding, and coat maintenance for healthy fur.',
      items: ['Full Grooming', 'De-shedding', 'Teeth Cleaning', 'Coat Styling'],
      image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&h=300&fit=crop',
    }
  ];

  const trainingInfo = [
    {
      id: 1,
      title: 'Obedience & Manners',
      description: 'Foundation skills for good behavior and communication at home and outdoors.',
      items: ['Basic Commands', 'Leash Walking', 'Recall', 'House Manners'],
      image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Behavior & Enrichment',
      description: 'Addressing anxiety, reactivity, and providing mental stimulation.',
      items: ['Behavior Correction', 'Confidence Building', 'Agility Basics', 'Puppy Classes'],
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop',
    }
  ];

  const emergencyInfo = [
    {
      id: 1,
      title: 'Emergency & Critical Care',
      description: 'Immediate medical attention for accidents, poisoning, and sudden illness.',
      items: ['ER Triage', 'ICU', 'On-call Surgeon', 'Ambulance'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Advanced Procedures',
      description: 'Specialized support with access to surgical teams and diagnostics.',
      items: ['Emergency Surgery', 'Blood Bank', 'X-Ray/CT', 'Overnight Care'],
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    }
  ];

  const filteredClinics = clinicServices.filter(svc =>
    (svc.title + ' ' + svc.items.join(' ')).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBoarding = boardingInfo.filter(svc =>
    (svc.title + ' ' + svc.items.join(' ')).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredGrooming = groomingInfo.filter(svc =>
    (svc.title + ' ' + svc.items.join(' ')).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTraining = trainingInfo.filter(svc =>
    (svc.title + ' ' + svc.items.join(' ')).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredEmergency = emergencyInfo.filter(svc =>
    (svc.title + ' ' + svc.items.join(' ')).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const datasetByTab: Record<typeof activeTab, any[]> = {
    clinics: filteredClinics,
    boarding: filteredBoarding,
    grooming: filteredGrooming,
    training: filteredTraining,
    emergency: filteredEmergency,
  } as const;

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
            <div className="inline-flex bg-gray-100 rounded-full p-1 flex-wrap gap-1">
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
              <button
                onClick={() => setActiveTab('grooming')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'grooming'
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-secondary-600 hover:text-primary-500'
                }`}
              >
                <Scissors size={20} className="inline mr-2" />
                Grooming
              </button>
              <button
                onClick={() => setActiveTab('training')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'training'
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-secondary-600 hover:text-primary-500'
                }`}
              >
                <GraduationCap size={20} className="inline mr-2" />
                Training
              </button>
              <button
                onClick={() => setActiveTab('emergency')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'emergency'
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-secondary-600 hover:text-primary-500'
                }`}
              >
                <AlertTriangle size={20} className="inline mr-2" />
                Emergency
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
            {(datasetByTab[activeTab] || []).map((service, index) => (
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
        </div>
      </section>
    </div>
  );
};

export default Services; 