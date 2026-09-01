import { motion, AnimatePresence } from "framer-motion";
import { AI_LOOKS } from "../data/landingData";

const AIStylistDemo = () => {
  return (
    <section className="py-24 px-5 max-w-6xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl text-center mb-4">
        Talk to VERA like a personal shopper
      </h2>
      <p className="text-center text-vera-gray mb-16">
        Tell VERA what you need. It finds what actually fits.
      </p>

      <div className="max-w-2xl mx-auto mb-12 bg-white border border-vera-border rounded-2xl p-6 space-y-4">
        <div className="flex justify-end">
          <div className="bg-vera-black text-white text-sm rounded-2xl rounded-br-sm px-4 py-3 max-w-xs">
            I have a wedding next Saturday. I’m 6'0, slim. Nothing too flashy.
            Budget ₦150k.
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-vera-warm text-sm rounded-2xl rounded-bl-sm px-4 py-3 max-w-xs">
            Got it. I’d narrow it down to three looks that fit your style and
            budget.
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {AI_LOOKS.map((look, i) => (
          <motion.div
            key={look.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-vera-warm mb-4">
              <img
                src={look.image}
                alt={look.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{look.title}</p>
                <p className="text-sm text-vera-gray mt-0.5">{look.reason}</p>
              </div>
              <span className="text-xs text-vera-gray">{look.match}%</span>
            </div>
            <p className="mt-2 font-medium">₦{look.price.toLocaleString()}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="border border-vera-black px-8 py-3 rounded-full text-sm hover:bg-vera-black hover:text-white transition">
          Explore more looks
        </button>
      </div>
    </section>
  );
};

export default AIStylistDemo;
