import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { WEDDING_INFO, IMAGES } from '../constants';

export function WeddingDetails() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={IMAGES.backgroundImages.weddingDetails}
          alt="Wedding Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-10 h-10 text-purple-400" />
          </motion.div>
          <h2 className="text-5xl font-serif text-rose-900 mb-4">Wedding Details</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-md p-12 rounded-3xl shadow-2xl border-2 border-pink-200"
        >
          <div className="space-y-8">
            {/* Date */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center shadow-lg">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-rose-600 text-sm mb-1">Date</p>
                <p className="text-rose-900 text-2xl">Wednesday, {WEDDING_INFO.ceremony.date}</p>
              </div>
            </motion.div>

            {/* Time */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-rose-600 text-sm mb-1">{WEDDING_INFO.ceremony.event}</p>
                <p className="text-rose-900 text-2xl mb-1">{WEDDING_INFO.ceremony.time}</p>
              </div>
            </motion.div>

            {/* Venue */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-2xl"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-rose-600 text-sm mb-1">Venue</p>
                <p className="text-rose-900 text-2xl mb-1">{WEDDING_INFO.ceremony.venue.name}</p>
                <p className="text-rose-700">{WEDDING_INFO.ceremony.venue.location}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M19 12l.75 2.25L22 15l-2.25.75L19 18l-.75-2.25L16 15l2.25-.75L19 12z" />
    </svg>
  );
}