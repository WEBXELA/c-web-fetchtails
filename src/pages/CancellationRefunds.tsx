import React from 'react';
import { motion } from 'framer-motion';
import { 
  RotateCcw, 
  XCircle, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  CreditCard,
  Phone,
  Mail,
  Calendar,
  FileText,
  Shield
} from 'lucide-react';

const CancellationRefunds: React.FC = () => {
  const lastUpdated = "August 24, 2025";

  const sections = [
    {
      title: "Cancellation Policy",
      icon: XCircle,
      content: [
        {
          subtitle: "Service Cancellation by Customer",
          text: "You may cancel your scheduled pet care service up to 24 hours before the appointment time without any cancellation fees. Cancellations made within 24 hours may be subject to cancellation fees as determined by individual service providers."
        },
        {
          subtitle: "Cancellation Methods",
          text: "Cancellations can be made through our mobile app, website, or by contacting our support team. We recommend using the app for immediate cancellation processing and instant confirmation."
        },
        {
          subtitle: "Emergency Cancellations",
          text: "For emergency situations (pet illness, family emergency, etc.), please contact our support team immediately. We will work with service providers to accommodate emergency cancellations without penalties."
        },
        {
          subtitle: "No-Show Policy",
          text: "If you fail to show up for a scheduled appointment without prior cancellation, you may be charged a no-show fee equivalent to 50% of the service cost. Repeated no-shows may result in account restrictions."
        }
      ]
    },
    {
      title: "Service Provider Cancellations",
      icon: AlertTriangle,
      content: [
        {
          subtitle: "Provider Cancellation Rights",
          text: "Service providers may cancel appointments due to emergencies, illness, or other unavoidable circumstances. In such cases, we will notify you immediately and work to reschedule or provide alternative options."
        },
        {
          subtitle: "Advance Notice Requirements",
          text: "Service providers are required to provide at least 4 hours notice for non-emergency cancellations. Emergency cancellations will be handled on a case-by-case basis with immediate customer notification."
        },
        {
          subtitle: "Alternative Service Arrangements",
          text: "When a service provider cancels, we will attempt to find an alternative provider for the same time slot. If no alternative is available, you will receive a full refund or credit for future services."
        }
      ]
    },
    {
      title: "Refund Policy",
      icon: RotateCcw,
      content: [
        {
          subtitle: "Full Refund Eligibility",
          text: "Full refunds are provided for cancellations made 24+ hours in advance, service provider cancellations, and services that cannot be completed due to circumstances beyond your control."
        },
        {
          subtitle: "Partial Refund Eligibility",
          text: "Partial refunds may be available for late cancellations (within 24 hours) based on service provider policies. The amount varies by provider and service type."
        },
        {
          subtitle: "Refund Processing Time",
          text: "Refunds are typically processed within 3-5 business days for credit/debit cards and 5-10 business days for bank transfers. Processing times may vary based on your financial institution."
        },
        {
          subtitle: "Refund Methods",
          text: "Refunds are processed through the same payment method used for the original transaction. If the original payment method is no longer available, we will contact you to arrange an alternative refund method."
        }
      ]
    },
    {
      title: "Refund Request Process",
      icon: FileText,
      content: [
        {
          subtitle: "How to Request a Refund",
          text: "To request a refund, use the refund option in our mobile app, contact our support team, or email refunds@fetchtails.com with your order details and reason for the refund request."
        },
        {
          subtitle: "Required Information",
          text: "Please provide your order number, service date, reason for cancellation, and preferred refund method. Additional documentation may be required for certain refund requests."
        },
        {
          subtitle: "Refund Review Process",
          text: "All refund requests are reviewed within 24 hours. Simple cancellations are processed immediately, while complex cases may require additional review and may take up to 48 hours."
        },
        {
          subtitle: "Refund Status Tracking",
          text: "You can track your refund status through our mobile app or by contacting our support team. You will receive email notifications at each stage of the refund process."
        }
      ]
    },
    {
      title: "Service Modifications and Rescheduling",
      icon: Calendar,
      content: [
        {
          subtitle: "Rescheduling Options",
          text: "Instead of cancellation, you may reschedule your appointment up to 12 hours before the scheduled time at no additional cost. Rescheduling is subject to service provider availability."
        },
        {
          subtitle: "Service Modifications",
          text: "You may modify service details (pet information, special requests, etc.) up to 24 hours before the appointment. Last-minute modifications may incur additional charges."
        },
        {
          subtitle: "Provider Substitution",
          text: "If you need to change service providers for the same service type and time, we can assist with provider substitution based on availability and your preferences."
        }
      ]
    },
    {
      title: "Special Circumstances",
      icon: Shield,
      content: [
        {
          subtitle: "Force Majeure Events",
          text: "For events beyond our control (natural disasters, government restrictions, etc.), we will work with service providers to reschedule services or provide full refunds without penalties."
        },
        {
          subtitle: "Pet Health Issues",
          text: "If your pet becomes ill or injured before a scheduled service, please contact us immediately. We will work with service providers to reschedule or provide a full refund."
        },
        {
          subtitle: "Service Quality Issues",
          text: "If you are dissatisfied with service quality, please report the issue within 24 hours. We will investigate and may provide partial or full refunds based on the circumstances."
        }
      ]
    },
    {
      title: "Dispute Resolution",
      icon: AlertTriangle,
      content: [
        {
          subtitle: "Customer Service Resolution",
          text: "Most refund and cancellation issues are resolved through our customer service team. We aim to resolve all disputes within 48 hours of initial contact."
        },
        {
          subtitle: "Escalation Process",
          text: "If you are not satisfied with the initial resolution, your case can be escalated to our management team for further review and resolution."
        },
        {
          subtitle: "Third-Party Mediation",
          text: "For complex disputes that cannot be resolved internally, we may suggest third-party mediation services to ensure fair resolution for all parties involved."
        }
      ]
    },
    {
      title: "Contact Information",
      icon: Phone,
      content: [
        {
          subtitle: "Refund Support",
          text: "For refund-related questions or assistance, contact our refund team at refunds@fetchtails.com or call +1-800-FETCHTAILS and select option 3 for refunds."
        },
        {
          subtitle: "General Support",
          text: "For general cancellation and service questions, contact our support team at support@fetchtails.com or use the live chat feature in our mobile app."
        },
        {
          subtitle: "Emergency Support",
          text: "For urgent cancellation needs outside of normal business hours, use our emergency contact feature in the app or call our 24/7 emergency line."
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
                <RotateCcw className="h-8 w-8 text-primary-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cancellation & Refunds Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear guidelines for cancelling services and requesting refunds on FetchTails
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

        {/* Quick Reference Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Quick Reference: Cancellation & Refund Timeline
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24+ Hours</div>
                <div className="text-primary-100">Full refund, no fees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">12-24 Hours</div>
                <div className="text-primary-100">Partial refund possible</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">3-5 Days</div>
                <div className="text-primary-100">Refund processing</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 bg-white rounded-2xl p-8 border border-gray-100 shadow-lg"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help with Cancellations or Refunds?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our support team is here to help you with any questions about our cancellation 
              and refund policies, or to assist with specific requests.
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

export default CancellationRefunds;
