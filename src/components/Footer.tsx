import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-16 px-4 bg-gradient-to-b from-purple-50 to-pink-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-6"
        >
          <Heart className="w-14 h-14 mx-auto text-rose-400 fill-rose-400" />
        </motion.div>
        
        <h3 className="text-4xl font-serif text-rose-900 mb-3">
          Atul & Andrea
        </h3>
        
        <p className="text-rose-700 text-xl mb-8">
          February 11, 2026
        </p>
        
        <div className="flex items-center justify-center gap-2 text-rose-500 text-sm mb-8">
          <span>Celebrating love</span>
          <Heart className="w-4 h-4 fill-rose-400" />
          <span>together forever</span>
        </div>
        
        <div className="pt-8 border-t border-rose-200">
          <p className="text-rose-500 text-sm">
            © 2026 Atul & Andrea
          </p>
        </div>
      </div>
    </footer>
  );
}
