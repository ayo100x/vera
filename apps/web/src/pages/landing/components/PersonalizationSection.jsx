const PersonalizationSection = () => {
  const traits = [
    "Your style",
    "Your budget",
    "Preferred fit",
    "Favorite brands",
    "Past likes",
  ];
  return (
    <section className="py-24 px-5 bg-vera-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl mb-6">
          VERA gets better
          <br />
          the more you use it
        </h2>
        <p className="text-white/60 mb-12 max-w-lg mx-auto">
          The more you use VERA, the better it understands what you like, what
          you spend, and what is actually worth recommending to you.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {traits.map((t) => (
            <span
              key={t}
              className="px-5 py-2 rounded-full border border-white/20 text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalizationSection;
