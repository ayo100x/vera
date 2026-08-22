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

const CHEAPER_ITEMS = [
  {
    id: "c1",
    name: "Black relaxed shirt",
    price: 18500,
    match: 88,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80",
  },
  {
    id: "c2",
    name: "Off-white wide trousers",
    price: 22000,
    match: 85,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&q=80",
  },
  {
    id: "c3",
    name: "Tan slip-ons",
    price: 24000,
    match: 87,
    image:
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&q=80",
  },
  {
    id: "c4",
    name: "Slim gold watch",
    price: 24500,
    match: 82,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
  },
];

const PREMIUM_ITEMS = [
  {
    id: "p1",
    name: "Black Italian cotton shirt",
    price: 52000,
    match: 93,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80",
  },
  {
    id: "p2",
    name: "Cream tailored trousers",
    price: 58000,
    match: 91,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&q=80",
  },
  {
    id: "p3",
    name: "Brown leather loafers",
    price: 65000,
    match: 95,
    image:
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&q=80",
  },
  {
    id: "p4",
    name: "Gold dress watch",
    price: 78000,
    match: 90,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
  },
];

const Hero = ({ heroImage, resetHeroMessage }) => {
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
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [inputMode, setInputMode] = useState("");

  const fileSelect = useRef(null);

  const startDemo = () => {
    setInputMode("image");
    setStage("analyzing"); // set to analyzing stage - analyzing stage should have two ui for 2 diff use case image and text

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

  useEffect(() => {
    if (heroImage) {
      setImage(heroImage);
      setInputMode("image");
      setSelected(null);
      setStage("results");
    }
  }, [heroImage]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileToURL = URL.createObjectURL(file); // create url for image file
      setImage(fileToURL);
    }
  };

  const handleTextSearch = () => {
    if (!query.trim()) return;

    setSubmittedQuery(query);
    setQuery("");
    setInputMode("text");
    setAnalysisStep(0);
    setStage("analyzing");

    document.getElementById("heroId")?.scrollIntoView({
      behavior: "smooth",
    });

    setTimeout(() => {
      setStage("results");
    }, 4000);
  };

  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 pt-28 ">
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
      <div className="relative mx-auto max-w-5xl scroll-mt-50" id="heroId">
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
                  src={image || heroImage || DEMO_OUTFIT.source}
                  alt={image ? "User uploaded image" : "VERA demo"}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm opacity-80">
                    {image
                      ? "Your image"
                      : heroImage
                        ? "Selected from VERA"
                        : "Seen on Instagram"}
                  </p>

                  <p className="mt-1 font-medium">
                    {image
                      ? "Ready for VERA to find it."
                      : heroImage
                        ? "Ready to recreate this look."
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

          {/* ANALYZING - IMAGE */}
          {stage === "analyzing" && inputMode === "image" && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center justify-center py-20 md:py-28"
            >
              <div className="relative w-full max-w-[11.5rem] sm:max-w-[13rem]">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-vera-warm">
                  <img
                    src={image || heroImage || DEMO_OUTFIT.source}
                    alt="Analyzing"
                    className="h-full w-full object-cover"
                  />

                  {/* Soft veil */}
                  <div className="absolute inset-0 bg-vera-black/10" />

                  {/* Vertical scan line */}
                  <motion.div
                    className="absolute inset-x-0 h-[1.5px] bg-white/70"
                    initial={{ top: "0%" }}
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{
                      duration: 2.8,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  />

                  {/* Soft band trailing the scan */}
                  <motion.div
                    className="absolute inset-x-0 h-16 bg-gradient-to-b from-white/20 to-transparent"
                    initial={{ top: "0%" }}
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{
                      duration: 2.8,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  />
                </div>
              </div>

              <div className="mt-10 w-full max-w-xs text-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={analysisStep}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="text-[13.5px] leading-relaxed text-vera-black"
                  >
                    {steps[Math.min(analysisStep, steps.length - 1)]}
                  </motion.p>
                </AnimatePresence>

                {/* Progress marks */}
                <div className="mt-6 flex items-center justify-center gap-1.5">
                  {steps.map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-[2px] rounded-full"
                      initial={false}
                      animate={{
                        width:
                          i === Math.min(analysisStep, steps.length - 1)
                            ? 20
                            : 8,
                        backgroundColor:
                          i <= Math.min(analysisStep, steps.length - 1)
                            ? "#0A0A0A"
                            : "#E8E4DF",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ANALYZING — TEXT */}
          {stage === "analyzing" && inputMode === "text" && (
            <motion.div
              key="analyzing-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center justify-center px-2 py-20 md:py-28"
            >
              <div className="w-full max-w-lg text-center">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-display text-[1.65rem] leading-[1.2] tracking-tight text-vera-black sm:text-[1.9rem] md:text-[2.15rem]"
                >
                  “{submittedQuery || "clean wedding outfit under ₦150k"}”
                </motion.p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                  className="mx-auto mt-8 h-px w-16 origin-center bg-vera-border"
                />

                <div className="mt-8">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={analysisStep}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="text-[13.5px] leading-relaxed text-vera-gray"
                    >
                      {
                        [
                          "VERA is understanding your request…",
                          "Picking up the details…",
                          "Finding pieces that fit…",
                          "Comparing the strongest matches…",
                        ][Math.min(analysisStep, 3)]
                      }
                    </motion.p>
                  </AnimatePresence>

                  <div className="mt-6 flex items-center justify-center gap-1.5">
                    {[0, 1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="h-[2px] rounded-full"
                        initial={false}
                        animate={{
                          width: i === Math.min(analysisStep, 3) ? 20 : 8,
                          backgroundColor:
                            i <= Math.min(analysisStep, 3)
                              ? "#0A0A0A"
                              : "#E8E4DF",
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* RESULTS */}
          {stage === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-9"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="max-w-md">
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[13px] text-vera-gray"
                  >
                    {selected === "cheaper" || selected === "premium"
                      ? `${DEMO_OUTFIT.items.length} original matches`
                      : `${DEMO_OUTFIT.items.length} pieces recognised`}
                  </motion.p>

                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="mt-1.5 font-display text-[1.75rem] leading-[1.12] tracking-tight md:text-[2.15rem]"
                  >
                    {inputMode === "text"
                      ? "Strong matches for your search"
                      : selected === "cheaper"
                        ? "Find it for less"
                        : selected === "premium"
                          ? "Better versions"
                          : selected === "complete"
                            ? "Get the full look"
                            : "Closest matches to what you showed us"}
                  </motion.h3>
                </div>

                <button
                  onClick={() => {
                    setStage("idle");
                    setSelected(null);
                    resetHeroMessage();
                    setImage(DEMO_OUTFIT.source);
                  }}
                  className="mt-1 flex shrink-0 items-center gap-1.5 text-[13px] text-vera-gray transition hover:text-vera-black"
                >
                  <X size={14} strokeWidth={1.75} />
                  Start over
                </button>
              </div>

              {/* Quiet original reference — only in alternative modes */}
              <AnimatePresence>
                {(selected === "cheaper" || selected === "premium") && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-end gap-3"
                  >
                    <div className="flex gap-2">
                      {DEMO_OUTFIT.items.map((item) => (
                        <div
                          key={item.id}
                          className="h-14 w-11 overflow-hidden rounded-md bg-vera-warm sm:h-16 sm:w-12"
                        >
                          <img
                            src={item.image}
                            alt=""
                            className="h-full w-full object-cover opacity-60"
                          />
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelected(null)}
                      className="mb-1 text-[12px] text-vera-gray transition hover:text-vera-black"
                    >
                      Closest matches
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected || "closest"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28 }}
                >
                  {selected === "complete" ? (
                    /* Full look — one calm composition */
                    <div className="mx-auto max-w-xl text-center">
                      <div className="flex justify-center gap-2 sm:gap-2.5">
                        {DEMO_OUTFIT.items.map((item, i) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.04 }}
                            className="w-[4.5rem] sm:w-24"
                          >
                            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-vera-warm">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <p className="mt-8 font-display text-[2.1rem] tracking-tight tabular-nums">
                        ₦
                        {DEMO_OUTFIT.items
                          .reduce((sum, item) => sum + item.price, 0)
                          .toLocaleString()}
                      </p>

                      <p className="mx-auto mt-2 max-w-sm text-[13px] leading-relaxed text-vera-gray">
                        {DEMO_OUTFIT.items.map((item) => item.name).join(" · ")}
                      </p>

                      <button className="mt-7 rounded-full bg-vera-black px-8 py-3 text-[13px] text-white transition hover:bg-black">
                        Get the full look
                      </button>
                    </div>
                  ) : (
                    /* Product grid — closest / cheaper / premium */
                    <div
                      className={`grid gap-x-4 gap-y-7 ${
                        (selected === "cheaper"
                          ? CHEAPER_ITEMS
                          : selected === "premium"
                            ? PREMIUM_ITEMS
                            : DEMO_OUTFIT.items
                        ).length <= 2
                          ? "mx-auto max-w-md grid-cols-2"
                          : "grid-cols-2 md:grid-cols-4"
                      }`}
                    >
                      {(selected === "cheaper"
                        ? CHEAPER_ITEMS
                        : selected === "premium"
                          ? PREMIUM_ITEMS
                          : DEMO_OUTFIT.items
                      ).map((item, i) => (
                        // product - card
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.04 + i * 0.05,
                            duration: 0.32,
                          }}
                          className="group"
                        >
                          <div className="mb-3 aspect-[3/4] overflow-hidden rounded-xl bg-vera-warm">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                            />
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
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Actions */}
              {selected !== "complete" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-3.5 border-t border-vera-border pt-7"
                >
                  <p className="text-center text-[12.5px] text-vera-gray">
                    {selected
                      ? "Explore another direction"
                      : "Decide what to do with these matches"}
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
              )}

              {/* When in complete mode, still allow switching modes */}
              {selected === "complete" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-wrap justify-center gap-2 pt-2"
                >
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
            placeholder={
              stage === "results"
                ? "Ask VERA to refine these results..."
                : "What are you looking for? e.g. clean wedding outfit under ₦150k"
            }
            className="w-full rounded-full border border-vera-border bg-white py-4 pl-6 pr-14 text-sm focus:outline-none focus:ring-1 focus:ring-vera-black"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            onClick={handleTextSearch}
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-vera-black text-white"
          >
            <Search size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
