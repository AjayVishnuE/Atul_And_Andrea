import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { IMAGES, DESIGN } from '../constants';

export function Gallery() {
  const images = IMAGES.galleryImages;

  // Calculate the exact width needed for seamless loop
  const imageWidth = 400; // Width in pixels
  const gap = 32; // Gap between images in pixels
  const totalWidth = images.length * (imageWidth + gap);

  return (
    <section className="py-20  relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={IMAGES.backgroundImages.gallery}
          alt="Wedding Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 to-pink-50/85"></div>
      </div>

      <div className="mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif text-rose-900 mb-4">Our Moments</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Infinite Scroll Container with padding for hover effect */}
          <div className="overflow-hidden py-12 bg-gradient-to-b from-transparent to-pink-50/30">
            <motion.div
              className="flex gap-8"
              style={{ width: 'fit-content' }}
              animate={{
                x: [`0px`, `-${totalWidth}px`],
              }}
              transition={{
                x: {
                  duration: DESIGN.animation.galleryScrollDuration,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                },
              }}
            >
              {/* First set of images */}
              {images.map((image, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-[350px] md:w-[400px] group relative rounded-3xl shadow-xl border-2 border-pink-200 bg-white overflow-hidden"
                  whileHover={{ scale: 1.05, zIndex: 20 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'center center' }}
                >
                  <div className="aspect-[3/4] relative">
                    <ImageWithFallback
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {images.map((image, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-[350px] md:w-[400px] group relative rounded-3xl shadow-xl border-2 border-pink-200 bg-white overflow-hidden"
                  whileHover={{ scale: 1.05, zIndex: 20 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'center center' }}
                >
                  <div className="aspect-[3/4] relative">
                    <ImageWithFallback
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Overlays for edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-pink-50/30 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-pink-50/30 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
}