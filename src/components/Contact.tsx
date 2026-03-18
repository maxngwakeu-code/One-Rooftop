import { motion } from 'motion/react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm text-[var(--color-gold-400)] uppercase tracking-[0.3em] font-medium mb-4">
              Nous Trouver
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-10">
              Réservez votre <span className="italic text-gray-400">table</span>
            </h3>

            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin size={24} className="text-[var(--color-gold-400)]" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-xl mb-1">Adresse</h4>
                  <p className="text-gray-400 font-light">Quartier Bonapriso<br />Douala, Cameroun</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Clock size={24} className="text-[var(--color-gold-400)]" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-xl mb-1">Horaires</h4>
                  <p className="text-gray-400 font-light">Mar - Jeu : 18h00 - 02h00<br />Ven - Sam : 18h00 - 05h00<br />Dim : 16h00 - 00h00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Phone size={24} className="text-[var(--color-gold-400)]" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-xl mb-1">Téléphone</h4>
                  <p className="text-gray-400 font-light">+237 600 00 00 00</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/237600000000?text=Bonjour,%20je%20souhaite%20réserver%20une%20table%20chez%20One%20Rooftop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold uppercase tracking-widest text-sm transition-all rounded-md shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Direct</span>
              </a>
              <a
                href="tel:+237600000000"
                className="flex items-center justify-center space-x-2 px-8 py-4 border border-white/30 hover:border-white text-white font-medium uppercase tracking-widest text-sm transition-all rounded-md"
              >
                <Phone size={20} />
                <span>Appeler</span>
              </a>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 relative group"
          >
            {/* Fake Map Image for demo */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
              alt="Map Location" 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 bg-[var(--color-gold-400)]/20 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-4 h-4 bg-[var(--color-gold-400)] rounded-full shadow-[0_0_20px_var(--color-gold-400)]"></div>
              </div>
            </div>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/80 backdrop-blur-md text-white text-sm font-medium uppercase tracking-widest border border-white/20 hover:border-[var(--color-gold-400)] transition-colors"
            >
              Ouvrir dans Maps
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
