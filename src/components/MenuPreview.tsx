import { motion } from 'motion/react';

export default function MenuPreview() {
  const menuCategories = [
    {
      title: "Entrées",
      items: [
        { name: "Tartare de Saumon", desc: "Avocat, yuzu, sésame torréfié", price: "12 000 FCFA" },
        { name: "Carpaccio de Bœuf", desc: "Parmesan affiné, huile de truffe", price: "14 000 FCFA" },
      ]
    },
    {
      title: "Plats Signatures",
      items: [
        { name: "Filet de Bar Rôti", desc: "Risotto au safran, légumes croquants", price: "22 000 FCFA" },
        { name: "Côte de Bœuf (Pour 2)", desc: "Pommes grenailles, sauce poivre vert", price: "45 000 FCFA" },
      ]
    },
    {
      title: "Cocktails",
      items: [
        { name: "Sunset Douala", desc: "Gin, purée de mangue, sirop épicé, citron vert", price: "8 000 FCFA" },
        { name: "L'Or Noir", desc: "Rhum vieux, café, vanille de Madagascar", price: "10 000 FCFA" },
      ]
    }
  ];

  return (
    <section id="menu" className="py-24 bg-[#0a0a0a] relative border-y border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm text-[var(--color-gold-400)] uppercase tracking-[0.3em] font-medium mb-4">
            Notre Carte
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white italic">
            L'Art Culinaire
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {menuCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={idx === 2 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}
            >
              <h4 className="text-2xl font-serif text-[var(--color-gold-400)] mb-8 text-center border-b border-white/10 pb-4">
                {category.title}
              </h4>
              <div className="space-y-8">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col">
                    <div className="flex justify-between items-baseline mb-2">
                      <h5 className="text-lg font-medium text-white uppercase tracking-wider">{item.name}</h5>
                      <div className="flex-1 border-b border-dotted border-white/20 mx-4"></div>
                      <span className="text-[var(--color-gold-400)] font-serif font-bold">{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-400 font-light italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 border border-[var(--color-gold-400)] text-[var(--color-gold-400)] hover:bg-[var(--color-gold-400)] hover:text-black font-medium uppercase tracking-widest text-sm transition-all"
          >
            Voir le menu complet
          </a>
        </div>
      </div>
    </section>
  );
}
