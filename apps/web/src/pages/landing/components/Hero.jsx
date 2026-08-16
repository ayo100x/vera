import { useEffect, useRef, useState } from "react";
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
  const steps = [
    "VERA is looking at your image…",
    "Identifying the pieces…",
    "Finding the closest matches…",
    "Comparing your options…",
  ];

  const [stage, setStage] = useState("idle");
  const [selected, setSelected] = useState(null);
  const [image, setImage] = useState(null);
  const [analysisStep, setAnalysisStep] = useState(0);

  const fileSelect = useRef(null);

  const startDemo = () => {
    setStage("analyzing");

    setTimeout(() => {
      // set a 3 second second timeout before setting stage to results
      setStage("results");
    }, 4000);
  };

  useEffect(() => {
    if (stage !== "analyzing") {
      return;
    }

    setAnalysisStep(0);

    const interval = setInterval(() => {
      setAnalysisStep((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [stage]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileToURL = URL.createObjectURL(file); // create url for image file
      setImage(fileToURL);
    }
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
                  src={image || DEMO_OUTFIT.source}
                  alt={image ? "User uploaded image" : "VERA demo"}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm opacity-80">
                    {image ? "Your image" : "Seen on Instagram"}
                  </p>

                  <p className="mt-1 font-medium">
                    {image
                      ? "Ready for VERA to find it."
                      : "Oversized yellow hoodie + yellow pant"}
                  </p>
                </div>
              </div>

              {/* Upload / CTA */}
              <div className="flex flex-col items-center justify-center gap-6 py-12">
                <button
                  className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-vera-border"
                  onClick={() => fileSelect.current.click()}
                >
                  <Upload size={24} className="text-vera-gray" />
                </button>

                <input
                  type="file"
                  accept="image/*"
                  ref={fileSelect}
                  onChange={handleFileUpload}
                  className="sr-only"
                />

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
                  src={image || DEMO_OUTFIT.source}
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
                {steps[analysisStep]} {/**display steps  */}
              </motion.div>
            </motion.div>
          )}

          {/* RESULTS */}
          {stage === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* What VERA understood */}
              <div className="flex items-start justify-between gap-4">
                <div className="max-w-md">
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[13px] text-vera-gray"
                  >
                    4 pieces recognised
                  </motion.p>
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="mt-1 font-display text-[1.75rem] leading-[1.15] tracking-tight md:text-[2.15rem]"
                  >
                    Closest matches to what you showed us
                  </motion.h3>
                </div>

                <button
                  onClick={() => {
                    setStage("idle");
                    setSelected(null);
                  }}
                  className="mt-0.5 flex shrink-0 items-center gap-1.5 text-[13px] text-vera-gray transition hover:text-vera-black"
                >
                  <X size={14} strokeWidth={1.75} />
                  Start over
                </button>
              </div>

              {/* Identified products */}
              <div className="grid grid-cols-2 gap-x-3.5 gap-y-6 md:grid-cols-4 md:gap-x-5">
                {DEMO_OUTFIT.items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + i * 0.06, duration: 0.35 }}
                    className="group"
                  >
                    <div className="relative mb-3 aspect-[3/4] overflow-hidden rounded-xl bg-vera-warm">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                      />
                      {i === 0 && (
                        <span className="absolute bottom-2 left-2 rounded bg-white/95 px-2 py-0.5 text-[11px] font-medium text-vera-black">
                          Closest
                        </span>
                      )}
                    </div>

                    <p className="text-[13px] font-medium leading-snug">
                      {item.name}
                    </p>
                    <div className="mt-1 flex items-baseline justify-between gap-2">
                      <span className="text-[13px] tabular-nums">
                        ₦{item.price.toLocaleString()}
                      </span>
                      <span className="text-[11px] tabular-nums text-vera-gray">
                        {item.match}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Next actions */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-3.5 border-t border-vera-border pt-7"
              >
                <p className="text-center text-[12.5px] text-vera-gray">
                  Decide what to do with these matches
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    { key: "cheaper", label: "Find it for less" },
                    { key: "premium", label: "Better versions" },
                    { key: "complete", label: "Get the full look" },
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() =>
                        setSelected(selected === opt.key ? null : opt.key)
                      }
                      className={`rounded-full px-4.5 py-2.5 text-[13px] transition ${
                        selected === opt.key
                          ? "bg-vera-black text-white"
                          : "border border-vera-border bg-white text-vera-black hover:border-vera-black"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Contextual panels */}
              <AnimatePresence mode="wait">
                {selected === "cheaper" && (
                  <motion.div
                    key="cheaper"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl border border-vera-border bg-white px-5 py-5 md:px-6"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-[14px] font-medium">
                          Lower price, same direction
                        </p>
                        <p className="mt-1 max-w-sm text-[13px] leading-relaxed text-vera-gray">
                          Alternatives that keep the silhouette and palette.
                          From ₦89,000 for the set.
                        </p>
                      </div>
                      <button className="shrink-0 rounded-full bg-vera-black px-6 py-2.5 text-[13px] text-white transition hover:bg-black">
                        Show options
                      </button>
                    </div>
                  </motion.div>
                )}

                {selected === "premium" && (
                  <motion.div
                    key="premium"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl border border-vera-border bg-white px-5 py-5 md:px-6"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-[14px] font-medium">
                          Higher quality, same look
                        </p>
                        <p className="mt-1 max-w-sm text-[13px] leading-relaxed text-vera-gray">
                          Better fabrics and finishing while staying true to
                          what you showed us.
                        </p>
                      </div>
                      <button className="shrink-0 rounded-full bg-vera-black px-6 py-2.5 text-[13px] text-white transition hover:bg-black">
                        Show options
                      </button>
                    </div>
                  </motion.div>
                )}

                {selected === "complete" && (
                  <motion.div
                    key="complete"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl bg-vera-warm px-5 py-5 md:px-6"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-[12.5px] text-vera-gray">
                          All four pieces
                        </p>
                        <p className="mt-0.5 font-display text-[1.65rem] tracking-tight tabular-nums">
                          ₦136,000
                        </p>
                        <p className="mt-1 text-[13px] text-vera-gray">
                          Shirt, trousers, loafers, watch
                        </p>
                      </div>
                      <button className="shrink-0 rounded-full bg-vera-black px-6 py-2.5 text-[13px] text-white transition hover:bg-black">
                        Get the look
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
