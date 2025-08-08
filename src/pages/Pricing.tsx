import React from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Download, Play } from 'lucide-react';

const Pricing: React.FC = () => {
  // Pricing is currently free while we grow

  const plans = [
    {
      id: 'free',
      name: 'Free',
      description: 'We’re just getting started — enjoy FetchTails for free while we grow',
      price: { monthly: 0, yearly: 0 },
      features: [
        { name: 'Pet profiles & health records', included: true },
        { name: 'Appointment requests', included: true },
        { name: 'Service discovery', included: true },
        { name: 'Notifications & reminders', included: true },
        { name: 'Basic analytics (coming soon)', included: true }
      ],
      popular: true,
      color: 'from-primary-500 to-primary-600'
    }
  ];

  // Feature comparison removed while pricing is free

  // no-op pricing helper while free

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
              <Crown size={16} />
              <span>Pricing Plans</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-secondary-800 mb-6"
            >
              Choose Your Perfect
              <span className="text-primary-500 block">Pet Care Plan</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-secondary-600 leading-relaxed mb-8"
            >
              We’ve just launched and are growing — FetchTails is currently free for everyone. 
              No hidden fees. We’ll introduce paid plans later with more value.
            </motion.p>
            {/* Billing toggle removed while pricing is free */}
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative card p-8 ${
                  plan.popular 
                    ? 'ring-2 ring-primary-500 shadow-2xl scale-105' 
                    : 'card-hover border-animate'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-secondary-800 mb-2">{plan.name}</h3>
                  <p className="text-secondary-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-semibold">
                      Currently Free
                    </div>
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-primary-500 text-white hover:bg-primary-600'
                        : 'bg-gray-100 text-secondary-800 hover:bg-gray-200'
                    }`}
                  >
                    {plan.price.monthly === 0 ? 'Get Started Free' : 'Choose Plan'}
                  </button>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Check size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-secondary-700">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison removed while pricing is free */}

      {/* FAQ Section */}
      <section className="section-padding pt-0 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Get answers to common questions about our pricing and features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Can I change my plan anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes! You can start with our free plan and upgrade when you need more features. No credit card required to start."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, debit cards, and digital wallets. All payments are processed securely through our payment partners."
              },
              {
                question: "Can I cancel my subscription?",
                answer: "Absolutely. You can cancel your subscription at any time from your account settings. No long-term contracts or cancellation fees."
              },
              {
                question: "Do you offer discounts for multiple pets?",
                answer: "Our Premium and Enterprise plans include unlimited pet profiles, so you can manage all your pets under one account."
              },
              {
                question: "What happens if I exceed my plan limits?",
                answer: "We'll notify you when you're approaching your limits and suggest upgrading to a plan that better fits your needs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card p-6 card-hover"
              >
                <h3 className="font-semibold text-secondary-800 mb-3">{faq.question}</h3>
                <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of pet owners who trust FetchTails with their pet care needs. 
              Start your free trial today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <Download size={20} />
                <span>Start Free Trial</span>
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

export default Pricing;
