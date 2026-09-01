import { HOLY_SHIT } from "../data/landingData";

const MatchReveal = ({ setHeroImage }) => {
  const handleRecreateLook = () => {
    setHeroImage(HOLY_SHIT.imageURL);
    document.getElementById("heroInteraction")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
          <div className="aspect-3/4 rounded-2xl overflow-hidden bg-white">
            <img
              src={HOLY_SHIT.imageURL}
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
              <p className="text-sm text-vera-gray">VERA found</p>
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
            <button
              onClick={handleRecreateLook}
              className="bg-vera-black text-white px-8 py-3.5 rounded-full text-sm"
            >
              Recreate this look
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchReveal;
