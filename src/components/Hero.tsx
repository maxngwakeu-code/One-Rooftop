import { motion } from 'motion/react';
import { ChevronDown, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image / Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop"
          alt="One Rooftop Douala Night View"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center space-x-2 text-[var(--color-gold-400)] mb-6 uppercase tracking-[0.2em] text-sm font-medium"
        >
          <MapPin size={16} />
          <span>Bonapriso, Douala</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
        >
          L'expérience rooftop la plus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold-400)] to-[var(--color-gold-600)] italic">exclusive</span> de Douala
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light"
        >
          Vue panoramique, cuisine premium et ambiance chic. Réservez votre table pour une soirée inoubliable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/237600000000?text=Bonjour,%20je%20souhaite%20réserver%20une%20table%20chez%20One%20Rooftop"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-400)] text-black font-bold uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
          >
            Réserver maintenant
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 border border-white/30 hover:border-white text-white font-medium uppercase tracking-widest text-sm transition-all bg-white/5 backdrop-blur-sm"
          >
            Voir le menu
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 text-sm text-[var(--color-accent-orange)] font-medium tracking-wider uppercase"
        >
          Places limitées le week-end
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#experience"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.a>
    </section>
  );
}
