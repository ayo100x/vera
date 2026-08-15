import { motion, AnimatePresence } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Show it",
      desc: "Upload a screenshot, photo, or product link.",
    },
    {
      num: "02",
      title: "VERA understands",
      desc: "Identifies products, style, colors, fit, and intent.",
    },
    {
      num: "03",
      title: "Find your match",
      desc: "Exact matches, cheaper alternatives, complete looks.",
    },
  ];
  return (
    <section id="how" className="py-24 px-5 max-w-6xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl text-center mb-16">
        How VERA works
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-vera-gray text-sm mb-4">{s.num}</p>
            <h3 className="font-display text-2xl mb-3">{s.title}</h3>
            <p className="text-vera-gray text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
