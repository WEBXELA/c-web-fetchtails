import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Package, 
  MapPin, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  Globe,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

const ShippingPolicy: React.FC = () => {
  const lastUpdated = "August 24, 2025";

  const sections = [
    {
      title: "Service Delivery Policy",
      icon: Package,
      content: [
        {
          subtitle: "Service-Based Platform",
          text: "FetchTails is a digital platform that connects pet owners with pet care service providers. We do not ship physical products. All services are delivered in-person at the service provider's location or at your specified address for mobile services."
        },
        {
          subtitle: "Service Types",
          text: "Our platform facilitates various pet care services including consultation, grooming, training, walking, daycare, and boarding. Each service is delivered according to the specific arrangements made with individual service providers."
        },
        {
          subtitle: "No Physical Shipping",
          text: "Since we provide digital services and in-person pet care, there is no traditional shipping involved. All transactions are processed digitally through our secure payment system."
        }
      ]
    },
    {
      title: "Service Scheduling and Delivery",
      icon: Calendar,
      content: [
        {
          subtitle: "Appointment Booking",
          text: "Services are scheduled through our platform based on availability of service providers. You will receive confirmation emails and SMS notifications for all scheduled appointments."
        },
        {
          subtitle: "Service Location",
          text: "Services are delivered at the service provider's facility or at your specified location for mobile services. Exact addresses and directions are provided during the booking process."
        },
        {
          subtitle: "Service Time",
          text: "Service duration varies by type. Grooming sessions typically take 2-4 hours, training sessions are 1-2 hours, and daycare/boarding services follow the provider's operating hours."
        }
      ]
    },
    {
      title: "Digital Service Delivery",
      icon: Globe,
      content: [
        {
          subtitle: "Platform Access",
          text: "Our mobile app and website are accessible 24/7 for booking services, managing appointments, and accessing your pet care history. Digital services are delivered instantly upon successful transactions."
        },
        {
          subtitle: "Account Management",
          text: "Your FetchTails account provides access to all digital services including appointment scheduling, payment processing, service history, and communication with service providers."
        },
        {
          subtitle: "Notifications",
          text: "We deliver real-time notifications for appointment confirmations, reminders, service updates, and payment confirmations through email, SMS, and push notifications."
        }
      ]
    },
    {
      title: "Service Provider Coordination",
      icon: MapPin,
      content: [
        {
          subtitle: "Provider Selection",
          text: "Our platform helps you find and connect with qualified pet care service providers in your area. We facilitate the initial connection and ongoing communication between you and service providers."
        },
        {
          subtitle: "Service Standards",
          text: "All service providers on our platform are vetted and must meet our quality standards. However, the actual delivery of services is the responsibility of individual providers."
        },
        {
          subtitle: "Quality Assurance",
          text: "We monitor service quality through user reviews and feedback. If you experience issues with service delivery, our support team will assist in resolving the matter."
        }
      ]
    },
    {
      title: "International Service Availability",
      icon: Globe,
      content: [
        {
          subtitle: "Geographic Coverage",
          text: "FetchTails services are currently available in select regions. Service availability varies by location and is subject to local regulations and service provider availability."
        },
        {
          subtitle: "Regional Restrictions",
          text: "Some services may not be available in all areas due to local laws, licensing requirements, or service provider availability. We will clearly indicate service availability during the booking process."
        },
        {
          subtitle: "Cross-Border Services",
          text: "For users traveling with pets, we can help connect you with local service providers in supported regions. Advance booking is recommended for travel-related services."
        }
      ]
    },
    {
      title: "Service Delivery Issues",
      icon: AlertTriangle,
      content: [
        {
          subtitle: "Service Cancellations",
          text: "If a service provider needs to cancel or reschedule, you will be notified immediately. We will work to reschedule your appointment or provide a full refund if rescheduling is not possible."
        },
        {
          subtitle: "Service Quality Issues",
          text: "If you are dissatisfied with service delivery, please contact our support team within 24 hours. We will investigate and work with the service provider to resolve the issue."
        },
        {
          subtitle: "Emergency Situations",
          text: "In case of emergencies or urgent service needs, our support team is available 24/7 to assist you in finding immediate care for your pets."
        }
      ]
    },
    {
      title: "Contact Information",
      icon: Phone,
      content: [
        {
          subtitle: "Customer Support",
          text: "For questions about service delivery, scheduling, or any issues, contact our support team at support@fetchtails.com or call our helpline at +1-800-FETCHTAILS."
        },
        {
          subtitle: "Service Provider Support",
          text: "Service providers can contact our business development team at partners@fetchtails.com for technical support and platform assistance."
        },
        {
          subtitle: "Emergency Contact",
          text: "For urgent pet care needs outside of normal business hours, please contact your local emergency veterinary services or use our emergency contact feature in the app."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-primary-100 rounded-full">
                <Truck className="h-8 w-8 text-primary-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Shipping & Service Delivery Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding how FetchTails delivers digital services and coordinates in-person pet care
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Last updated: {lastUpdated}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <section.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>
              
              <div className="space-y-6">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-l-4 border-primary-200 pl-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.subtitle}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-primary-50 rounded-2xl p-8 border border-primary-200"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help with Service Delivery?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our support team is here to help you with any questions about service scheduling, 
              provider coordination, or platform usage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Contact Support
              </a>
              <a
                href="/help"
                className="inline-flex items-center px-6 py-3 border border-primary-300 text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 transition-colors"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Help Center
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
