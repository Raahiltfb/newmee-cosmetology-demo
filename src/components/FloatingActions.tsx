import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CLINIC_DATA } from '../constants';

export const FloatingActions = () => {
  return (
    <>
      {/* WhatsApp Button - Kept as the primary floating action */}
      <motion.a
        href={`https://wa.me/${CLINIC_DATA.whatsapp}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-[60] w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-colors"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <MessageCircle size={32} />
        </motion.div>
      </motion.a>
    </>
  );
};
