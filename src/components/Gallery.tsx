import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop", alt: "Rooftop Night", span: "col-span-2 row-span-2" },
    { src: "https://images.unsplash.com/photo-1574096079513-d8259312b78a?q=80&w=2070&auto=format&fit=crop", alt: "Cocktails", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop", alt: "Food", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1950&auto=format&fit=crop", alt: "DJ Ambiance", span: "col-span-2 row-span-1" },
  ];

  return (
    <section id="galerie" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm text-[var(--color-gold-400)] uppercase tracking-[0.3em] font-medium mb-4">
            Galerie
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white italic">
            Instants Magiques
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-serif italic text-xl">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
