import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { WEDDING_INFO, IMAGES } from '../constants';

export function Location() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={IMAGES.backgroundImages.location}
          alt="Location Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <MapPin className="w-12 h-12 mx-auto text-rose-500 mb-4" />
          <h2 className="text-5xl font-serif text-rose-900 mb-4">Location</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-4"></div>
          <p className="text-rose-700 text-lg">{WEDDING_INFO.ceremony.venue.name}, {WEDDING_INFO.ceremony.venue.location}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-pink-200"
        >
          {/* Map */}
          <div className="relative w-full h-96 bg-gray-100">
            <iframe
              src={WEDDING_INFO.ceremony.venue.googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Wedding Location Map"
            ></iframe>
          </div>

          {/* Location Details */}
          <div className="p-10 bg-gradient-to-r from-pink-50 to-purple-50">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/80 p-8 rounded-2xl border border-pink-200 shadow-lg text-center">
                <h3 className="text-3xl font-serif text-rose-900 mb-6">Ceremony Venue</h3>
                <p className="text-rose-900 text-xl mb-2">{WEDDING_INFO.ceremony.venue.name}</p>
                <p className="text-rose-700 mb-1">{WEDDING_INFO.ceremony.venue.address.split(',')[0]}</p>
                <p className="text-rose-700 mb-6">{WEDDING_INFO.ceremony.venue.address.split(',').slice(1).join(',')}</p>
                
                <a
                  href={WEDDING_INFO.ceremony.venue.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-rose-600 hover:to-pink-600 transition-all shadow-lg text-lg"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}