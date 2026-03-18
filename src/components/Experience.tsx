import { motion } from 'motion/react';
import { GlassWater, Music, UtensilsCrossed } from 'lucide-react';

export default function Experience() {
  const features = [
    {
      icon: <GlassWater size={32} className="text-[var(--color-gold-400)]" />,
      title: "Cocktails Signature",
      description: "Des créations uniques par nos mixologues experts, parfaites pour accompagner le coucher du soleil."
    },
    {
      icon: <UtensilsCrossed size={32} className="text-[var(--color-gold-400)]" />,
      title: "Cuisine Premium",
      description: "Une fusion gastronomique raffinée, mettant en valeur les meilleurs produits locaux et internationaux."
    },
    {
      icon: <Music size={32} className="text-[var(--color-gold-400)]" />,
      title: "Ambiance Chic",
      description: "Live music, DJ sets exclusifs et une atmosphère vibrante pour des soirées mémorables."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm text-[var(--color-gold-400)] uppercase tracking-[0.3em] font-medium mb-4">
            L'Atmosphère
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">
            Plus qu'un restaurant, <br className="hidden md:block" />
            <span className="italic text-gray-400">une destination.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-[var(--color-gold-400)] transition-colors duration-500 bg-white/5">
                {feature.icon}
              </div>
              <h4 className="text-xl font-serif text-white mb-4">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Video / Image Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group"
        >
          <img
            src="https://images.unsplash.com/photo-1574096079513-d8259312b78a?q=80&w=2070&auto=format&fit=crop"
            alt="Ambiance Rooftop"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-12">
            <div className="text-center">
              <p className="text-[var(--color-gold-400)] uppercase tracking-widest text-sm font-bold mb-2">Soirées DJ & Live Music</p>
              <p className="text-white text-2xl font-serif italic">Vivez la nuit autrement</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
