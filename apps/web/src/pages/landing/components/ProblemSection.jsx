const ProblemSection = () => {
  return (
    <section className="py-16 px-5 bg-vera-black text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-12">
          Shopping today is broken
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3 text-white/60 text-sm leading-relaxed">
            <p>See something → Search → Scroll → Open 20 tabs</p>
            <p>Compare prices → Question the seller → Still unsure</p>
            <p className="text-white/40">
              …and you often end up buying nothing.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-white/40 uppercase tracking-widest">
              With VERA
            </p>
            <div className="space-y-3 text-base">
              <p>See it</p>
              <p className="text-white/40">→</p>
              <p>Show VERA</p>
              <p className="text-white/40">→</p>
              <p>Get your options</p>
              <p className="text-white/40">→</p>
              <p className="font-medium">Know what’s worth buying</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
