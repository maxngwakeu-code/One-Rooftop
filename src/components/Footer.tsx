import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-serif font-bold text-white mb-6">
            ONE <span className="text-[var(--color-gold-400)]">ROOFTOP</span>
          </h3>
          <p className="text-gray-400 mb-6 max-w-sm">
            L'expérience rooftop la plus exclusive de Douala. Vue panoramique, cuisine premium et ambiance chic.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-gold-400)] hover:text-black transition-all">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-serif text-white mb-6 uppercase tracking-widest">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 text-gray-400">
              <MapPin size={20} className="text-[var(--color-gold-400)] shrink-0 mt-1" />
              <span>Bonapriso, Douala<br />Cameroun</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-400">
              <Phone size={20} className="text-[var(--color-gold-400)] shrink-0" />
              <span>+237 600 00 00 00</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-serif text-white mb-6 uppercase tracking-widest">Horaires</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start space-x-3">
              <Clock size={20} className="text-[var(--color-gold-400)] shrink-0 mt-1" />
              <div>
                <p><span className="text-white">Mar - Jeu :</span> 18h00 - 02h00</p>
                <p><span className="text-white">Ven - Sam :</span> 18h00 - 05h00</p>
                <p><span className="text-white">Dimanche :</span> 16h00 - 00h00</p>
                <p className="text-sm text-[var(--color-accent-orange)] mt-2">Fermé le Lundi</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} One Rooftop Douala. Tous droits réservés.</p>
        <div className="mt-4 md:mt-0 space-x-4">
          <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
