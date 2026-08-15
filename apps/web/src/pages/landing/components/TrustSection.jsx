import { X } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="py-24 px-5 max-w-5xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl text-center mb-6">
        Not everything you find
        <br />
        is worth buying
      </h2>
      <p className="text-center text-vera-gray max-w-xl mx-auto mb-16">
        VERA is on your side. It compares price, trust, quality, fit, and
        delivery before recommending.
      </p>
      <div className="bg-white border border-vera-border rounded-2xl p-8 max-w-lg mx-auto">
        <div className="flex gap-5">
          <div className="w-24 h-32 rounded-lg bg-vera-warm overflow-hidden flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1591047139829-d91aecb6ca87?w=200&q=80"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="font-medium">Linen Blazer</p>
            <p className="text-lg mt-1">₦120,000</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-red-600">
              <X size={16} /> Skip this one
            </div>
            <p className="text-xs text-vera-gray mt-2 leading-relaxed">
              We found a similar piece for ₦74,000 from a more trusted seller
              with better reviews and reliable delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
