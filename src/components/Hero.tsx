import { Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { WEDDING_INFO, IMAGES, DESIGN } from '../constants';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={IMAGES.backgroundImages.hero}
          alt="Wedding Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100/70 via-purple-100/60 to-pink-50/80 backdrop-blur-[2px]"></div>
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(DESIGN.animation.floatingHearts)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ y: '100vh', x: `${Math.random() * 100}vw`, opacity: 0 }}
            animate={{
              y: '-20vh',
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 3,
              ease: 'linear',
            }}
          >
            <Heart className="w-4 h-4 text-rose-300 fill-rose-300" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Heart className="w-16 h-16 mx-auto text-rose-400 fill-rose-400 mb-6" />
        </motion.div>
        
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl font-serif text-rose-900 mb-6"
        >
          {WEDDING_INFO.groom.firstName} & {WEDDING_INFO.bride.firstName}
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-rose-300"></div>
            <p className="text-2xl md:text-3xl text-rose-700 font-light italic">
              are getting married
            </p>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-rose-300"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="inline-block bg-white/90 backdrop-blur-sm px-10 py-8 rounded-2xl shadow-2xl border border-rose-200"
        >
          <p className="text-lg text-rose-600 mb-3">Save the Date</p>
          <p className="text-4xl md:text-5xl font-serif text-rose-900 mb-2">
            {WEDDING_INFO.ceremony.date}
          </p>
          <p className="text-xl text-rose-700">
            {WEDDING_INFO.groom.city.split(',')[0]}, Kerala
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-rose-400 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-rose-400 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}