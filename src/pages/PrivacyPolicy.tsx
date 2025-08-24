import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  Globe,
  FileText,
  Calendar,
  CheckCircle,
  Smartphone,
  MapPin,
  Camera,
  Wifi
} from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = "August 24, 2025";

  const sections = [
    {
      title: "Information We Collect",
      icon: Database,
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, such as when you create an account, book appointments, or contact our support team. This may include your name, email address, phone number, address, and pet information."
        },
        {
          subtitle: "Usage Information",
          text: "We automatically collect certain information about your use of our services, including your IP address, device information, browser type, pages visited, and time spent on our platform."
        },
        {
          subtitle: "Location Information",
          text: "With your consent, we may collect your location information to help you find nearby pet care services including consultation, grooming, training, walking, daycare, and boarding."
        },
        {
          subtitle: "Device Information",
          text: "We collect device-specific information such as your hardware model, operating system version, unique device identifiers, mobile network information, and device settings."
        }
      ]
    },
    {
      title: "App Permissions and Data Access",
      icon: Smartphone,
      content: [
        {
          subtitle: "Location Permission",
          text: "Our app requests location access to help you find nearby pet care services. This permission is optional and you can deny it without affecting core app functionality. Location data is only used for service discovery and is not shared with third parties."
        },
        {
          subtitle: "Camera Permission",
          text: "Camera access is requested to allow you to take photos of your pets for their profiles and to upload images for service requests. Photos are stored securely and are only accessible to you and authorized service providers."
        },
        {
          subtitle: "Storage Permission",
          text: "Storage access is needed to save pet photos, download appointment confirmations, and cache app data for offline use. We do not access files outside of our app's designated storage area."
        },
        {
          subtitle: "Network Access",
          text: "Internet access is required for core app functionality including booking appointments, syncing data, and receiving notifications. We use secure connections (HTTPS) for all data transmission."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Users,
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve our services, including processing appointments, facilitating payments, and connecting you with service providers."
        },
        {
          subtitle: "Communication",
          text: "We use your contact information to send you important updates about your appointments, service notifications, and respond to your inquiries and support requests."
        },
        {
          subtitle: "Personalization",
          text: "We use your information to personalize your experience, including showing relevant services and recommendations based on your location and preferences."
        },
        {
          subtitle: "App Functionality",
          text: "We use collected data to ensure the app works properly, including debugging, performance monitoring, and improving user experience."
        }
      ]
    },
    {
      title: "Information Sharing",
      icon: Globe,
      content: [
        {
          subtitle: "Service Providers",
          text: "We share your information with pet care service providers including consultation, grooming, training, walking, daycare, and boarding services to facilitate appointments and ensure quality service delivery. We only share necessary information required for service provision."
        },
        {
          subtitle: "Payment Processors",
          text: "We work with trusted payment processors like Razorpay to handle payments securely. These processors have their own privacy policies governing their use of your payment information."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, court order, or government request, or to protect our rights, property, or safety."
        },
        {
          subtitle: "No Third-Party Advertising",
          text: "We do not sell, rent, or share your personal information with third-party advertisers. Any advertising within our app is for our own services only."
        }
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Data Encryption",
          text: "All sensitive information is encrypted using industry-standard protocols during transmission and storage to ensure your data remains secure."
        },
        {
          subtitle: "Access Controls",
          text: "We limit access to your personal information to authorized employees and service providers who need access to perform their duties."
        },
        {
          subtitle: "Regular Security Audits",
          text: "We conduct regular security assessments and updates to maintain the highest level of data protection for our users."
        }
      ]
    },
    {
      title: "Your Rights and Choices",
      icon: Eye,
      content: [
        {
          subtitle: "Access and Update",
          text: "You can access, update, or correct your personal information through your account settings or by contacting our support team."
        },
        {
          subtitle: "Data Portability",
          text: "You can request a copy of your personal information in a structured, machine-readable format for transfer to another service."
        },
        {
          subtitle: "Deletion",
          text: "You can request deletion of your personal information, subject to certain legal and contractual obligations."
        },
        {
          subtitle: "Marketing Preferences",
          text: "You can opt out of marketing communications at any time by updating your preferences or using the unsubscribe link in our emails."
        },
        {
          subtitle: "Permission Management",
          text: "You can manage app permissions through your device settings at any time. Revoking permissions may affect certain app features."
        }
      ]
    },
    {
      title: "Data Retention",
      icon: Calendar,
      content: [
        {
          subtitle: "Retention Period",
          text: "We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements."
        },
        {
          subtitle: "Account Deletion",
          text: "When you delete your account, we will delete or anonymize your personal information, except where retention is required by law or for legitimate business purposes."
        },
        {
          subtitle: "Data Backup",
          text: "We maintain secure backups of your data for disaster recovery purposes. These backups are automatically deleted after 30 days."
        }
      ]
    },
    {
      title: "Cookies and Tracking",
      icon: Database,
      content: [
        {
          subtitle: "Cookie Usage",
          text: "We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and provide personalized content and advertisements."
        },
        {
          subtitle: "Third-Party Analytics",
          text: "We may use third-party analytics services to help us understand how users interact with our platform and improve our services."
        },
        {
          subtitle: "Cookie Preferences",
          text: "You can control cookie settings through your browser preferences, though disabling certain cookies may affect the functionality of our services."
        },
        {
          subtitle: "No Cross-App Tracking",
          text: "We do not use cross-app tracking technologies or share data with other apps for advertising purposes."
        }
      ]
    },
    {
      title: "Children's Privacy",
      icon: Shield,
      content: [
        {
          subtitle: "Age Requirements",
          text: "Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13."
        },
        {
          subtitle: "Parental Consent",
          text: "If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly."
        },
        {
          subtitle: "COPPA Compliance",
          text: "We comply with the Children's Online Privacy Protection Act (COPPA) and do not knowingly collect personal information from children under 13 without parental consent."
        }
      ]
    },
    {
      title: "International Transfers",
      icon: Globe,
      content: [
        {
          subtitle: "Data Transfers",
          text: "Your information may be transferred to and processed in countries other than your own, including countries with different data protection laws."
        },
        {
          subtitle: "Adequate Protection",
          text: "We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information."
        },
        {
          subtitle: "GDPR Compliance",
          text: "For users in the European Union, we comply with GDPR requirements and provide additional rights and protections as required by law."
        }
      ]
    },
    {
      title: "Google Play Store Compliance",
      icon: CheckCircle,
      content: [
        {
          subtitle: "Play Store Policies",
          text: "Our app complies with all Google Play Store policies including privacy, data handling, and user protection requirements. We regularly review and update our practices to maintain compliance."
        },
        {
          subtitle: "App Permissions",
          text: "All app permissions are clearly explained and are only used for their intended purpose. Users can revoke permissions at any time through device settings."
        },
        {
          subtitle: "Data Transparency",
          text: "We provide clear information about what data we collect, how we use it, and who we share it with, as required by Google Play Store policies."
        },
        {
          subtitle: "User Control",
          text: "Users have full control over their data and can request access, modification, or deletion of their information at any time."
        }
      ]
    },
    {
      title: "Changes to This Policy",
      icon: FileText,
      content: [
        {
          subtitle: "Policy Updates",
          text: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors."
        },
        {
          subtitle: "Notification",
          text: "We will notify you of any material changes to this policy by posting the updated policy on our website and, where appropriate, sending you an email notification."
        },
        {
          subtitle: "Continued Use",
          text: "Your continued use of our services after any changes to this policy constitutes acceptance of the updated policy."
        },
        {
          subtitle: "App Store Updates",
          text: "For app users, we will notify you of significant policy changes through in-app notifications and may require you to accept the updated policy to continue using the app."
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
              <Shield size={16} />
              <span>Privacy Policy</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-secondary-800 mb-6"
            >
              Privacy Policy
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-secondary-600 leading-relaxed mb-4"
            >
              Your privacy is important to us. This policy explains how we collect, use, and protect your information in compliance with Google Play Store requirements.
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

      {/* Policy Sections */}
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
              Contact Us
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              If you have any questions about this Privacy Policy or our data practices, please contact us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  Email Us
                </h3>
                <p className="text-secondary-600 text-sm mb-2">
                  privacy@fetchtails.com
                </p>
                <p className="text-xs text-secondary-500">
                  For privacy-related inquiries
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
                  <Shield size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                  Data Protection Officer
                </h3>
                <p className="text-secondary-600 text-sm mb-2">
                  dpo@fetchtails.com
                </p>
                <p className="text-xs text-secondary-500">
                  For data protection matters
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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

export default PrivacyPolicy; 