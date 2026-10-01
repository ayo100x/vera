import { Link } from "react-router-dom";

const FinalCTA = ({ scrollToHero }) => {
  return (
    <section className="py-20 px-5 bg-vera-black text-white text-center">
      <h2 className="font-display text-4xl md:text-5xl leading-tight mb-5">
        Stop searching.
        <br />
        Start showing VERA.
      </h2>
      <p className="text-white/60 max-w-md mx-auto mb-10">
        See something you like? Let VERA find it — and tell you if it’s worth
        buying.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={scrollToHero}
          className="bg-white text-vera-black px-8 py-3 rounded-full text-sm font-medium hover:bg-vera-offwhite transition"
        >
          Try VERA
        </button>

        <Link
          to="/marketplace"
          className="border border-white/30 px-8 py-3 rounded-full text-sm hover:bg-white/10 transition"
        >
          Explore
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;
