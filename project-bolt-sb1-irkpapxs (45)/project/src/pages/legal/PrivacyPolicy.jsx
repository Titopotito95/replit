import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt } from 'react-icons/fa';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-4 pt-32">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center mb-8">
            <FaShieldAlt className="text-blue-400 text-6xl mr-4" />
            <h1 className="text-6xl font-bold text-white">Privacy Policy (TheGenFX)</h1>
          </div>
          
          <div className="space-y-0.5">
            <p className="text-gray-300 text-3xl">
              TheGenFX is committed to protecting your privacy.
            </p>

            <p className="text-gray-300 text-3xl">
              They collect personal information such as your name, date of birth, contact details, and financial data to provide their services and meet legal obligations. This information may be gathered through account applications, website interactions, and communications with their support team.
            </p>

            <p className="text-gray-300 text-3xl">
              TheGenFX uses this data to manage your trading account, process transactions, and improve the customer experience. Your information may be shared with affiliated entities, service providers, or regulatory bodies when required by law.
            </p>

            <p className="text-gray-300 text-3xl">
              They maintain high-level security measures to safeguard your data and retain information only for as long as necessary for operational or legal purposes.
            </p>

            <p className="text-gray-300 text-3xl">
              For full transparency, you should review the complete Privacy Policy document provided by TheGenFX.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;