import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Search, Sparkles, X, Camera } from "lucide-react";

const DEMO_OUTFIT = {
  source:
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",

  items: [
    {
      id: 1,
      name: "Black oversized shirt",
      price: 28000,
      match: 94,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80",
    },
    {
      id: 2,
      name: "Cream relaxed trousers",
      price: 31000,
      match: 91,
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&q=80",
    },
    {
      id: 3,
      name: "Brown loafers",
      price: 35000,
      match: 96,
      image:
        "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&q=80",
    },
    {
      id: 4,
      name: "Gold minimal watch",
      price: 42000,
      match: 89,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    },
  ],
};

const Hero = () => {
  const [stage, setStage] = useState("idle");
  const [selected, setSelected] = useState(null);

  const startDemo = () => {
    setStage("analyzing");

    setTimeout(() => {
      setStage("results");
    }, 2200);
  };

  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 pt-28">
      {/* Hero heading */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Found something
          <br />
          you want?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-xl text-lg text-vera-gray"
        >
          Show VERA. It finds the exact product, better alternatives, and tells
          you what’s actually worth buying.
        </motion.p>
      </div>

      {/* Interactive Demo */}
      <div className="relative mx-auto max-w-5xl">
        <AnimatePresence mode="wait">
          {/* IDLE */}
          {stage === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid items-center gap-8 md:grid-cols-2"
            >
              {/* Inspiration image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-vera-border bg-vera-warm">
                <img
                  src={DEMO_OUTFIT.source}
                  alt="Inspiration"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm opacity-80">Seen on Instagram</p>

                  <p className="mt-1 font-medium">
                    Oversized black shirt + cream trousers
                  </p>
                </div>
              </div>

              {/* Upload / CTA */}
              <div className="flex flex-col items-center justify-center gap-6 py-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-vera-border">
                  <Upload size={24} className="text-vera-gray" />
                </div>

                <p className="text-sm text-vera-gray">
                  Upload a screenshot or photo
                </p>

                <button
                  onClick={startDemo}
                  className="flex items-center gap-2 rounded-full bg-vera-black px-8 py-3.5 text-sm font-medium text-white transition hover:bg-black"
                >
                  <Camera size={16} />
                  Try with this look
                </button>

                <p className="text-xs text-vera-gray">
                  or describe what you’re looking for below
                </p>
              </div>
            </motion.div>
          )}

          {/* ANALYZING */}
          {stage === "analyzing" && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-32"
            >
              <div className="relative mb-8 h-64 w-48 overflow-hidden rounded-xl">
                <img
                  src={DEMO_OUTFIT.source}
                  alt="Analyzing outfit"
                  className="h-full w-full object-cover opacity-60"
                />

                <motion.div
                  className="absolute inset-0 border-2 border-white/80"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                />
              </div>

              <motion.div
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                }}
                className="flex items-center gap-3 text-sm"
              >
                <Sparkles size={16} />
                VERA is understanding the look…
              </motion.div>
            </motion.div>
          )}

          {/* RESULTS */}
          {stage === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-10"
            >
              {/* Results header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-vera-gray">Found the look</p>

                  <h3 className="mt-1 font-display text-3xl">
                    94% visual match
                  </h3>
                </div>

                <button
                  onClick={() => {
                    setStage("idle");
                    setSelected(null);
                  }}
                  className="flex items-center gap-1 text-sm text-vera-gray hover:text-vera-black"
                >
                  <X size={14} />
                  Reset
                </button>
              </div>

              {/* Product results */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {DEMO_OUTFIT.items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: i * 0.12,
                    }}
                    className="group"
                  >
                    <div className="mb-3 aspect-[3/4] overflow-hidden rounded-xl bg-vera-warm">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <p className="text-sm font-medium">{item.name}</p>

                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-sm">
                        ₦{item.price.toLocaleString()}
                      </span>

                      <span className="text-xs text-vera-gray">
                        {item.match}% match
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Result actions */}
              <div className="flex flex-wrap justify-center gap-3">
                {["cheaper", "premium", "complete"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelected(opt)}
                    className={`rounded-full border px-5 py-2.5 text-sm transition ${
                      selected === opt
                        ? "border-vera-black bg-vera-black text-white"
                        : "border-vera-border hover:border-vera-black"
                    }`}
                  >
                    {opt === "cheaper" && "Cheaper alternatives"}

                    {opt === "premium" && "Premium options"}

                    {opt === "complete" && "Complete the look"}
                  </button>
                ))}
              </div>

              {/* Complete look */}
              {selected === "complete" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  className="rounded-2xl bg-vera-warm p-6 text-center"
                >
                  <p className="text-sm text-vera-gray">Full look total</p>

                  <p className="mt-1 font-display text-4xl">₦136,000</p>

                  <button className="mt-5 rounded-full bg-vera-black px-8 py-3 text-sm text-white">
                    Get the look
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Secondary interaction */}
      <div className="mx-auto mt-16 max-w-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for? e.g. clean wedding outfit under ₦150k"
            className="w-full rounded-full border border-vera-border bg-white py-4 pl-6 pr-14 text-sm focus:outline-none focus:ring-1 focus:ring-vera-black"
          />

          <button className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-vera-black text-white">
            <Search size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
