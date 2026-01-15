import { Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { WEDDING_INFO, IMAGES } from '../constants';

export function CoupleSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={IMAGES.backgroundImages.couple}
          alt="Wedding Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif text-rose-900 mb-4">The Couple</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-pink-100 text-center"
          >
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-6xl">👨</span>
              </div>
            </div>
            
            <h3 className="text-4xl font-serif text-rose-900 mb-2">{WEDDING_INFO.groom.fullName}</h3>
            <div className="w-16 h-px bg-rose-300 mx-auto mb-4"></div>
            <p className="text-rose-600 text-sm italic mb-6">The Groom</p>
            
            <div className="text-rose-700 space-y-2">
              <p className="text-sm">Son of</p>
              <p className="font-medium">{WEDDING_INFO.groom.father} & {WEDDING_INFO.groom.mother}</p>
              <p className="text-sm text-rose-600">{WEDDING_INFO.groom.city}</p>
            </div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-pink-100 text-center"
          >
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-6xl">👰</span>
              </div>
            </div>
            
            <h3 className="text-4xl font-serif text-rose-900 mb-2">{WEDDING_INFO.bride.fullName}</h3>
            <div className="w-16 h-px bg-rose-300 mx-auto mb-4"></div>
            <p className="text-rose-600 text-sm italic mb-6">The Bride</p>
            
            <div className="text-rose-700 space-y-2">
              <p className="text-sm">Daughter of</p>
              <p className="font-medium">{WEDDING_INFO.bride.father} & {WEDDING_INFO.bride.mother}</p>
              <p className="text-sm text-rose-600">{WEDDING_INFO.bride.city}</p>
            </div>
          </motion.div>
        </div>

        {/* Love Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 p-10 rounded-3xl shadow-lg relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="w-12 h-12 mx-auto text-rose-400 fill-rose-400 mb-4" />
          </motion.div>
          <p className="text-rose-800 text-2xl md:text-3xl italic font-light">
            "{WEDDING_INFO.quote}"
          </p>
        </motion.div>
      </div>
    </section>
  );
}