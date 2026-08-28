const FinalCTA = ({ scrollToHero }) => {
  return (
    <section className="py-32 px-5 bg-vera-black text-white text-center">
      <h2 className="font-display text-5xl md:text-6xl leading-tight mb-6">
        Stop searching.
        <br />
        Start showing VERA.
      </h2>
      <p className="text-white/60 max-w-md mx-auto mb-12">
        See something you like? Let VERA find it — and tell you if it’s worth
        buying.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={scrollToHero}
          className="bg-white text-vera-black px-10 py-4 rounded-full text-sm font-medium hover:bg-vera-offwhite transition"
        >
          Try VERA
        </button>
        <button className="border border-white/30 px-10 py-4 rounded-full text-sm hover:bg-white/10 transition">
          Explore
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
