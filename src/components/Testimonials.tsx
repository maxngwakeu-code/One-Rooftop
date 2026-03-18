import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Sophie T.",
      role: "Cliente Premium",
      text: "Une vue à couper le souffle et des cocktails incroyables. Le meilleur endroit pour commencer la soirée à Douala.",
      rating: 5
    },
    {
      name: "Marc E.",
      role: "Guide Local",
      text: "Le service est impeccable, la viande est cuite à la perfection. L'ambiance musicale le week-end est juste parfaite.",
      rating: 5
    },
    {
      name: "Amina K.",
      role: "Influenceuse Lifestyle",
      text: "Mon spot préféré pour les couchers de soleil. Le cadre est magnifique, idéal pour des photos et des moments inoubliables.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-gold-600)]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm text-[var(--color-gold-400)] uppercase tracking-[0.3em] font-medium mb-4">
            Preuve Sociale
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">
            Ils ont adoré <span className="italic text-gray-400">l'expérience</span>
          </h3>
          <p className="mt-6 text-[var(--color-accent-orange)] font-medium tracking-widest uppercase text-sm">
            +500 clients satisfaits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:border-[var(--color-gold-400)]/50 transition-colors"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[var(--color-gold-400)] text-[var(--color-gold-400)]" />
                ))}
              </div>
              <p className="text-gray-300 font-light italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-gold-400)] to-black flex items-center justify-center text-black font-bold font-serif">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="text-white font-medium">{review.name}</p>
                  <p className="text-xs text-[var(--color-gold-400)] uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
