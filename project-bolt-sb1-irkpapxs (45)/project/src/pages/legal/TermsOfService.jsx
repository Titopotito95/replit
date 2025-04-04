import React from 'react';
import { motion } from 'framer-motion';
import { FaGavel } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function TermsOfService() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-4 pt-32">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center mb-8">
            <FaGavel className="text-blue-400 text-6xl mr-4" />
            <h1 className="text-6xl font-bold text-white">Terms & Conditions (TheGenFX)</h1>
          </div>
          
          <div className="space-y-0.5">
            <p className="text-gray-300 text-3xl">
              The Terms and Conditions define the agreement between you and TheGenFX when using their services.
            </p>

            <p className="text-gray-300 text-3xl">
              By opening an account and engaging in trading with TheGenFX, you agree to follow these terms. They cover key topics such as account responsibilities, trading operations, transaction fees, dispute resolution, and termination conditions.
            </p>

            <p className="text-gray-300 text-3xl">
              TheGenFX also reserves rights such as modifying terms, suspending services, or acting against misuse or violations of the agreement.
            </p>

            <p className="text-gray-300 text-3xl">
              Understanding and accepting these terms is crucial for a seamless trading experience.
            </p>

            <p className="text-gray-300 text-3xl">
              For detailed information, please read the full Terms and Conditions issued by TheGenFX.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TermsOfService;