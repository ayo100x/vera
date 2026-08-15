const OutfitBuilder = () => {
  return (
    <section className="py-24 px-5 bg-vera-warm">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4">
          Complete the look
        </h2>
        <p className="text-center text-vera-gray mb-14">
          One piece → an entire outfit that works.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { name: "Black Oxford", price: 32000, main: true },
            { name: "Cream trousers", price: 28000 },
            { name: "Brown loafers", price: 24500 },
            { name: "Minimal watch", price: 5000 },
          ].map((item, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden ${item.main ? "ring-2 ring-vera-black" : ""}`}
            >
              <div className="aspect-square bg-white" />
              <div className="p-3 bg-white">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-vera-gray">
                  ₦{item.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-sm text-vera-gray">Complete look</p>
          <p className="font-display text-3xl mt-1">₦89,500</p>
          <button className="mt-6 bg-vera-black text-white px-8 py-3.5 rounded-full text-sm">
            Get the look
          </button>
        </div>
      </div>
    </section>
  );
};

export default OutfitBuilder;
