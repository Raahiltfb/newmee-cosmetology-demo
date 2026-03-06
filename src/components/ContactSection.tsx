import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { CLINIC_DATA } from '../constants';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8">
              Get in Touch
            </h2>
            <p className="text-primary/60 text-lg mb-12">
              Ready to start your journey to radiant skin? Book a consultation with our experts today.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary mb-1 text-lg">Our Location</h4>
                  <p className="text-primary/50 leading-relaxed">{CLINIC_DATA.address}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary mb-1 text-lg">Phone Number</h4>
                  <p className="text-primary/50 leading-relaxed">{CLINIC_DATA.phone}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary mb-1 text-lg">Email Address</h4>
                  <p className="text-primary/50 leading-relaxed">{CLINIC_DATA.email}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary mb-1 text-lg">Working Hours</h4>
                  <p className="text-primary/50 leading-relaxed">{CLINIC_DATA.workingHours}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a 
                href={`tel:${CLINIC_DATA.phone}`}
                className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all flex items-center gap-2"
              >
                <Phone size={18} /> Call Clinic
              </a>
              <a 
                href={`https://wa.me/${CLINIC_DATA.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all flex items-center gap-2"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[40px] overflow-hidden shadow-2xl h-[500px] border-8 border-white bg-white"
          >
            {/* Live Google Map */}
            <iframe 
              src="https://www.google.com/maps/place/NewMee+Cosmetology/@13.0629091,77.6068915,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae19ecad3398f3:0xa319abbdb18531c0!8m2!3d13.0629091!4d77.6094664!16s%2Fg%2F11kj2cs9c1?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="NewMee Cosmetology Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
