import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { CLINIC_DATA } from '../constants';

export const FloatingActions = () => {
  return (
    <>
      {/* WhatsApp Button */}
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

      {/* Mobile Sticky Call Button */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden bg-white/80 backdrop-blur-md border-t border-black/5 p-4 flex gap-4">
        <a 
          href={`tel:${CLINIC_DATA.phone}`}
          className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
        >
          <Phone size={20} /> Call Now
        </a>
        <a 
          href="#contact"
          className="flex-1 bg-accent text-white py-4 rounded-2xl font-bold flex items-center justify-center"
        >
          Book Now
        </a>
      </div>
    </>
  );
};
