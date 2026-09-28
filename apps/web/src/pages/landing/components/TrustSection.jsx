import { X } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="py-16 px-5 max-w-3xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl text-center mb-5">
        Not everything you find
        <br />
        is worth buying
      </h2>
      <p className="text-center text-vera-gray max-w-lg mx-auto mb-10">
        VERA is on your side. It compares price, trust, quality, fit, and
        delivery before recommending.
      </p>
      <div className="bg-white border border-vera-border rounded-2xl p-6 max-w-md mx-auto">
        <div className="flex gap-4">
          <div className="w-20 h-28 rounded-lg bg-vera-warm overflow-hidden flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=300&auto=format&fit=crop"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="font-medium">Linen Blazer</p>
            <p className="text-base mt-1">₦120,000</p>
            <div className="mt-3 flex items-center gap-2 text-sm text-red-600">
              <X size={16} /> Skip this one
            </div>
            <p className="text-xs text-vera-gray mt-2 leading-relaxed">
              A similar piece is available for ₦74,000 from a more trusted
              seller with stronger reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
