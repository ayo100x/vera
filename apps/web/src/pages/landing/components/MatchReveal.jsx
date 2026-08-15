const MatchReveal = () => {
  const HOLY_SHIT = {
    originalPrice: 300000,
    veraPrice: 96000,
    similarity: 93,
    options: [
      { label: "Exact", price: 250000, match: 97 },
      { label: "Similar", price: 96000, match: 93 },
      { label: "Budget", price: 61000, match: 86 },
      { label: "Premium", price: 180000, match: 95 },
    ],
  };
  return (
    <section className="py-24 px-5 bg-vera-warm">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-vera-gray uppercase tracking-widest mb-4">
          The moment
        </p>
        <h2 className="font-display text-4xl md:text-5xl mb-12">
          ₦300,000 outfit → ₦96,000
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white">
            <img
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80"
              alt="Original"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left space-y-6">
            <div>
              <p className="text-sm text-vera-gray">Original look</p>
              <p className="font-display text-3xl">₦300,000</p>
            </div>
            <div>
              <p className="text-sm text-vera-gray">VERA recreation</p>
              <p className="font-display text-3xl">₦96,000</p>
              <p className="text-sm text-vera-gray mt-1">
                93% visual similarity
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {HOLY_SHIT.options.map((o) => (
                <div
                  key={o.label}
                  className="bg-white rounded-xl p-4 border border-vera-border"
                >
                  <p className="text-xs text-vera-gray">{o.label}</p>
                  <p className="font-medium mt-1">
                    ₦{o.price.toLocaleString()}
                  </p>
                  <p className="text-xs text-vera-gray mt-0.5">
                    {o.match}% match
                  </p>
                </div>
              ))}
            </div>
            <button className="bg-vera-black text-white px-8 py-3.5 rounded-full text-sm">
              Recreate this look
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchReveal;
