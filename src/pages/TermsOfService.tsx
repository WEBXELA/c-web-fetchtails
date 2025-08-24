import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Users, 
  CreditCard, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Globe,
  Lock
} from 'lucide-react';

const TermsOfService: React.FC = () => {
  const lastUpdated = "August 24, 2025";

  const sections = [
    {
      title: "Acceptance of Terms",
      icon: CheckCircle,
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing and using FetchTails services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services."
        },
        {
          subtitle: "Modifications",
          text: "We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the updated terms on our website and, where appropriate, sending email notifications."
        }
      ]
    },
    {
      title: "Service Description",
      icon: Users,
      content: [
        {
          subtitle: "Platform Purpose",
          text: "FetchTails is a pet care platform that connects pet owners with pet care service providers including consultation, grooming, training, walking, daycare, and boarding services. We facilitate appointments, payments, and communication between users and service providers."
        },
        {
          subtitle: "Service Providers",
          text: "We partner with independent pet care service providers including consultation, grooming, training, walking, daycare, and boarding services. These providers are responsible for their own services, pricing, and quality standards. We do not provide pet care services directly."
        },
        {
          subtitle: "Service Availability",
          text: "While we strive to maintain high availability, we do not guarantee uninterrupted access to our services. We may temporarily suspend services for maintenance, updates, or other operational reasons."
        }
      ]
    },
    {
      title: "User Accounts",
      icon: Shield,
      content: [
        {
          subtitle: "Account Creation",
          text: "You must create an account to use certain features of our platform. You are responsible for providing accurate, current, and complete information during registration."
        },
        {
          subtitle: "Account Security",
          text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use."
        },
        {
          subtitle: "Account Termination",
          text: "We may terminate or suspend your account at any time for violations of these terms, fraudulent activity, or other reasons at our sole discretion."
        }
      ]
    },
    {
      title: "User Responsibilities",
      icon: AlertTriangle,
      content: [
        {
          subtitle: "Compliance",
          text: "You agree to use our services only for lawful purposes and in accordance with these terms. You must not use our services to harm others or violate any applicable laws."
        },
        {
          subtitle: "Accurate Information",
          text: "You must provide accurate and complete information about yourself and your pets. Misleading or false information may result in account termination and legal action."
        },
        {
          subtitle: "Respectful Behavior",
          text: "You agree to treat service providers and other users with respect. Harassment, abuse, or inappropriate behavior will not be tolerated and may result in account suspension."
        }
      ]
    },
    {
      title: "Payment Terms",
      icon: CreditCard,
      content: [
        {
          subtitle: "Payment Processing",
          text: "All payments are processed through secure third-party payment processors. You agree to pay all fees associated with your use of our services at the rates in effect at the time of payment."
        },
        {
          subtitle: "Refunds",
          text: "Refund policies are determined by individual service providers. We will facilitate refund requests but cannot guarantee refunds. Contact our support team for assistance with refund requests."
        },
        {
          subtitle: "Service Fees",
          text: "We may charge service fees for using our platform. These fees will be clearly disclosed before you complete any transaction. Service provider fees are separate and determined by each provider."
        }
      ]
    },
    {
      title: "Intellectual Property",
      icon: Lock,
      content: [
        {
          subtitle: "Our Rights",
          text: "All content, features, and functionality of our platform, including but not limited to text, graphics, logos, and software, are owned by FetchTails or its licensors and are protected by copyright and other intellectual property laws."
        },
        {
          subtitle: "User Content",
          text: "You retain ownership of content you submit to our platform. By submitting content, you grant us a non-exclusive, worldwide license to use, display, and distribute your content in connection with our services."
        },
        {
          subtitle: "Prohibited Use",
          text: "You may not copy, modify, distribute, sell, or lease any part of our platform without our express written consent."
        }
      ]
    },
    {
      title: "Privacy and Data",
      icon: Shield,
      content: [
        {
          subtitle: "Privacy Policy",
          text: "Your privacy is important to us. Our collection and use of your personal information is governed by our Privacy Policy, which is incorporated into these terms by reference."
        },
        {
          subtitle: "Data Security",
          text: "We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
        },
        {
          subtitle: "Data Sharing",
          text: "We may share your information with service providers to facilitate appointments and improve our services. We will not sell your personal information to third parties."
        }
      ]
    },
    {
      title: "Limitation of Liability",
      icon: AlertTriangle,
      content: [
        {
          subtitle: "Service Disclaimer",
          text: "We provide a platform for connecting users with service providers. We are not responsible for the quality, safety, or outcome of services provided by third-party pet care service providers including consultation, grooming, training, walking, daycare, and boarding services."
        },
        {
          subtitle: "Liability Limits",
          text: "To the maximum extent permitted by law, FetchTails shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services."
        },
        {
          subtitle: "Indemnification",
          text: "You agree to indemnify and hold harmless FetchTails from any claims, damages, or expenses arising from your use of our services or violation of these terms."
        }
      ]
    },
    {
      title: "Dispute Resolution",
      icon: Globe,
      content: [
        {
          subtitle: "Governing Law",
          text: "These terms are governed by the laws of India. Any disputes arising from these terms or your use of our services shall be resolved in the courts of Gurgaon, India."
        },
        {
          subtitle: "Dispute Process",
          text: "Before pursuing legal action, we encourage users to contact our support team to resolve disputes amicably. We are committed to addressing user concerns promptly and fairly."
        },
        {
          subtitle: "Arbitration",
          text: "For certain disputes, we may offer binding arbitration as an alternative to court proceedings. Details of arbitration procedures will be provided if applicable."
        }
      ]
    },
    {
      title: "Termination",
      icon: Clock,
      content: [
        {
          subtitle: "Termination by User",
          text: "You may terminate your account at any time by contacting our support team or using the account deletion feature in your settings."
        },
        {
          subtitle: "Termination by Us",
          text: "We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including violation of these terms."
        },
        {
          subtitle: "Effect of Termination",
          text: "Upon termination, your right to use our services ceases immediately. We may retain certain information as required by law or for legitimate business purposes."
        }
      ]
    },
    {
      title: "Miscellaneous",
      icon: FileText,
      content: [
        {
          subtitle: "Severability",
          text: "If any provision of these terms is found to be unenforceable or invalid, the remaining provisions will continue to be valid and enforceable."
        },
        {
          subtitle: "Entire Agreement",
          text: "These terms, together with our Privacy Policy, constitute the entire agreement between you and FetchTails regarding your use of our services."
        },
        {
          subtitle: "Contact Information",
          text: "If you have questions about these terms, please contact us at legal@fetchtails.com or through our support channels."
        }
      ]
    }
  ];

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
              <FileText size={16} />
              <span>Terms of Service</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-secondary-800 mb-6"
            >
              Terms of Service
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-secondary-600 leading-relaxed mb-4"
            >
              Please read these terms carefully before using our services.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm text-secondary-500"
            >
              Last updated: {lastUpdated}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                    <section.icon size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-secondary-800">
                    {section.title}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-3">
                      <h3 className="text-lg font-semibold text-secondary-800">
                        {item.subtitle}
                      </h3>
                      <p className="text-secondary-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-secondary-800 mb-6">
              Questions About These Terms?
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              If you have any questions about these Terms of Service, please contact our legal team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                  Legal Team
                </h3>
                <p className="text-secondary-600 text-sm mb-2">
                  legal@fetchtails.com
                </p>
                <p className="text-xs text-secondary-500">
                  For legal inquiries
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                  General Support
                </h3>
                <p className="text-secondary-600 text-sm mb-2">
                  support@fetchtails.com
                </p>
                <p className="text-xs text-secondary-500">
                  For general questions
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService; 