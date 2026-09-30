import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Search, Camera, X } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import {
  DEMO_OUTFIT,
  CHEAPER_ITEMS,
  PREMIUM_ITEMS,
  steps,
  OPTIONS,
} from "../data/landingData";

const Hero = ({ heroImage, resetHeroImage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  const [image, setImage] = useState(null);
  const [inputMode, setInputMode] = useState("");
  const [stage, setStage] = useState(
    searchParams.get("hero") === "results" ? "results" : "idle",
  );

  const [analysisStep, setAnalysisStep] = useState(0);

  const [query, setQuery] = useState("");

  const [submittedQuery, setSubmittedQuery] = useState("");

  // Current selected mode in results stage -
  const [selected, setSelected] = useState(searchParams.get("mode") || null);

  const fileSelect = useRef(null);

  const effectiveScroll = () => {
    document.getElementById("heroInteraction")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const startDemo = () => {
    effectiveScroll();
    setSelected(null);
    setInputMode("image");
    setStage("analyzing"); // set to analyzing stage - analyzing stage should have two ui for 2 diff use case image and text

    setTimeout(() => {
      // set a 3 second second timeout before setting stage to results

      // Note: the timeout is a prototype for the analyzeImage fx - instead of a timer -

      // const results = await analyzeImage(...);

      setStage("results");
    }, 4000);
  };

  useEffect(() => {
    if (stage !== "analyzing") {
      return;
    }

    setAnalysisStep(0); // set analysis step to 0

    const interval = setInterval(() => {
      setAnalysisStep((prev) => prev + 1); // At every 1s interval increase the analysis step by 1. {0,1,2,3....}
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
    const file = event.target.files[0]; // the one image a user is uploading
    // console.log(file); // returns an object
    if (file) {
      const fileToURL = URL.createObjectURL(file); // create url for image
      setImage(fileToURL);
    }
  };

  const handleTextSearch = () => {
    if (stage === "analyzing") return;
    if (!query.trim()) return;

    setSubmittedQuery(query);
    setQuery("");
    setInputMode("text");
    setAnalysisStep(0);
    setStage("analyzing");
    effectiveScroll();

    setTimeout(() => {
      setStage("results");
    }, 4000);
  };

  useEffect(() => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);

        if (stage === "results") {
          next.set("hero", "results");
        } else {
          next.delete("hero");
        }

        if (selected) {
          next.set("mode", selected);
        } else {
          next.delete("mode");
        }

        return next;
      },
      { replace: true },
    );
  }, [stage, selected, setSearchParams]);

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();
    handleTextSearch();
  };

  return (
    <section
      className="mx-auto max-w-5xl px-4 pb-10 pt-14 md:px-5 md:pb-14 md:pt-20"
      id="heroId"
    >
      {/* Hero heading */}
      <div className="mx-auto mb-6 max-w-2xl text-center md:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl leading-[1.05] tracking-tight sm:text-4xl md:text-5xl"
        >
          Found something
          <br />
          you want?
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-3 max-w-lg px-2 text-[15px] text-vera-gray md:mt-4 md:px-0 md:text-base"
        >
          Show VERA. It finds the exact product, better alternatives, and tells
          you what’s actually worth buying.
        </motion.div>
      </div>

      {/* Interactive Demo */}
      <div
        className="relative mx-auto max-w-208 scroll-mt-28"
        id="heroInteraction"
      >
        <AnimatePresence mode="wait">
          {/* IDLE */}
          {stage === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid items-center gap-3 md:grid-cols-2 md:gap-6"
            >
              {/* Inspiration image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-vera-border bg-vera-warm md:aspect-[3/4]">
                <img
                  src={image || DEMO_OUTFIT.source}
                  alt={image ? "User uploaded image" : "VERA demo"}
                  className="h-full w-full object-cover"
                />
                {/* shadow overlay on image*/}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white md:bottom-6 md:left-6 md:right-6">
                  <p className="text-sm opacity-80">
                    {image ? "Your image" : "Selected from VERA"}
                  </p>

                  <p className="mt-1 font-medium">
                    {image
                      ? "Ready for VERA to find it."
                      : "Ready to recreate this look."}
                  </p>
                </div>
              </div>

              {/* Upload / CTA */}
              <div className="flex flex-col items-center justify-center gap-3 py-5 md:gap-5 md:py-10">
                <button
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-vera-border md:h-14 md:w-14"
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
                  className="flex items-center gap-2 rounded-full bg-vera-black px-6 py-2.5 text-sm font-medium text-white transition hover:bg-black md:px-7 md:py-3"
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
              className="flex flex-col items-center justify-center py-8 md:py-16"
            >
              {/* Image  */}
              <div className="relative w-full max-w-44 sm:max-w-48">
                <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-vera-warm">
                  <img
                    src={image || DEMO_OUTFIT.source}
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
                    className="absolute inset-x-0 h-16 bg-linear-to-b from-white/20 to-transparent"
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
              <div className="mt-8 w-full max-w-xs text-center">
                {/* STEPS */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={analysisStep}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="text-[13.5px] leading-relaxed text-vera-black"
                  >
                    {/* {steps[analysisStep]} - bad*/}
                    {steps[Math.min(analysisStep, steps.length - 1)]}
                  </motion.p>
                </AnimatePresence>

                {/* Progress marks */}
                <div className="mt-5 flex items-center justify-center gap-1.5">
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
              className="flex flex-col items-center justify-center px-2 py-8 md:py-16"
            >
              <div className="w-full max-w-lg text-center">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="break-words font-display text-[1.35rem] leading-[1.2] tracking-tight text-vera-black sm:text-[1.7rem] md:text-[1.9rem]"
                >
                  “{submittedQuery || "clean wedding outfit under ₦150k"}”
                </motion.p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                  className="mx-auto mt-6 h-px w-12 origin-center bg-vera-border"
                />

                <div className="mt-6">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={analysisStep}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="text-[13.5px] leading-relaxed text-vera-gray"
                    >
                      {steps[Math.min(analysisStep, steps.length - 1)]}
                    </motion.p>
                  </AnimatePresence>

                  {/* Progress marks */}
                  <div className="mt-5 flex items-center justify-center gap-1.5">
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
              className="space-y-7"
            >
              {/* Header */}
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between sm:gap-4">
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
                    className="mt-1.5 break-words font-display text-[1.45rem] leading-[1.12] tracking-tight sm:text-[1.6rem] md:text-[1.9rem]"
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
                    setImage(DEMO_OUTFIT.source);
                    resetHeroImage();
                  }}
                  className="flex shrink-0 items-center gap-1.5 text-[13px] text-vera-gray transition hover:text-vera-black sm:mt-1"
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
                          className="h-12 w-9 overflow-hidden rounded-md bg-vera-warm sm:h-14 sm:w-11"
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
                      <div className="flex justify-center gap-1.5 sm:gap-2.5">
                        {DEMO_OUTFIT.items.map((item, i) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.04 }}
                            className="w-14 sm:w-20"
                          >
                            <div className="aspect-3/4 overflow-hidden rounded-lg bg-vera-warm">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <p className="mt-6 font-display text-[1.8rem] tracking-tight tabular-nums">
                        ₦
                        {DEMO_OUTFIT.items
                          .reduce((sum, item) => sum + item.price, 0)
                          .toLocaleString()}
                      </p>

                      <p className="mx-auto mt-2 max-w-sm text-[13px] leading-relaxed text-vera-gray">
                        {DEMO_OUTFIT.items.map((item) => item.name).join(" · ")}
                      </p>

                      <button className="mt-6 rounded-full bg-vera-black px-7 py-2.5 text-[13px] text-white transition hover:bg-black">
                        Get the full look
                      </button>
                    </div>
                  ) : (
                    /* Product grid — closest / cheaper / premium */
                    <div
                      className={`grid gap-x-3 gap-y-5 ${
                        (selected === "cheaper"
                          ? CHEAPER_ITEMS
                          : selected === "premium"
                            ? PREMIUM_ITEMS
                            : DEMO_OUTFIT.items
                        ).length <= 2
                          ? "mx-auto max-w-sm grid-cols-2"
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
                        <Link
                          key={item.id}
                          to={`/product/${item.id}`}
                          className="block"
                        >
                          <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.04 + i * 0.05,
                              duration: 0.32,
                            }}
                            className="group"
                          >
                            <div className="mb-2 aspect-3/4 overflow-hidden rounded-xl bg-vera-warm">
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
                        </Link>
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
                  className="space-y-3 border-t border-vera-border pt-6"
                >
                  <p className="text-center text-[12.5px] text-vera-gray">
                    {selected
                      ? "Explore another direction"
                      : "Decide what to do with these matches"}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {OPTIONS.map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => {
                          (setSelected(selected === opt.key ? null : opt.key),
                            effectiveScroll());
                        }}
                        className={`rounded-full px-4 py-2 text-[13px] transition ${
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
                  {OPTIONS.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => {
                        setSelected(selected === opt.key ? null : opt.key);
                        effectiveScroll();
                      }}
                      className={`rounded-full px-4 py-2 text-[13px] transition ${
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
      <div className="mx-auto mt-8 max-w-lg md:mt-10">
        <div className="relative">
          <input
            type="text"
            disabled={stage === "analyzing"}
            placeholder={
              stage === "analyzing"
                ? "VERA is analyzing..."
                : stage === "results"
                  ? "Ask VERA to refine these results..."
                  : "What are you looking for? e.g. clean wedding outfit under ₦150k"
            }
            className="min-w-0 w-full rounded-full border border-vera-border bg-white py-3 pl-4 pr-11 text-base focus:outline-none focus:ring-1 focus:ring-vera-black md:text-sm"
            value={query}
            onKeyDown={handleKeyDown}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            onClick={handleTextSearch}
            disabled={stage === "analyzing"}
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-vera-black text-white"
          >
            <Search size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
