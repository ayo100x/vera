import { Check } from "lucide-react";

const MarketplaceSection = () => {
  return (
    <section id="sellers" className="py-24 px-5 max-w-5xl mx-auto text-center">
      <h2 className="font-display text-4xl md:text-5xl mb-6">
        Buy with confidence
      </h2>
      <p className="text-vera-gray max-w-lg mx-auto mb-12">
        VERA partners with verified sellers so you get accurate information,
        real reviews, and reliable delivery.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        {[
          "Verified sellers",
          "Real reviews",
          "Accurate product info",
          "Buyer protection",
        ].map((item) => (
          <div key={item} className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-vera-warm flex items-center justify-center">
              <Check size={16} />
            </div>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketplaceSection;
