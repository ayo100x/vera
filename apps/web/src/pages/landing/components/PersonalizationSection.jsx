const PersonalizationSection = () => {
  const traits = [
    "Your style",
    "Your budget",
    "Preferred fit",
    "Favorite brands",
    "Past likes",
  ];
  return (
    <section className="py-16 px-5 bg-vera-black text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl mb-5">
          VERA gets better
          <br />
          the more you use it
        </h2>
        <p className="text-white/60 mb-10 max-w-lg mx-auto">
          The more you use VERA, the better it understands what you like, what
          you spend, and what is actually worth recommending to you.
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {traits.map((trait) => (
            <span
              key={trait}
              className="px-4 py-1.5 rounded-full border border-white/20 text-sm"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalizationSection;
