import { ArrowRight, Check } from "lucide-react";

const SellerTrustSection = () => {
  return (
    <section id="sellers" className="py-24 px-5 max-w-5xl mx-auto text-center">
      <h2 className="font-display text-4xl md:text-5xl mb-6">
        Buy with confidence
      </h2>
      <p className="text-vera-gray max-w-lg mx-auto mb-12">
        Every seller on VERA is verified, so you can shop with accurate product
        information, real reviews, and confidence in every purchase.
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

      <div className="mt-16 flex justify-center">
        <a
          href="#seller-onboarding"
          className="group relative inline-flex items-center gap-2 pb-2 text-[13px]"
        >
          <span className="font-medium text-vera-black">Sell on VERA</span>

          <ArrowRight
            size={15}
            strokeWidth={1.75}
            className="text-vera-black transition-transform duration-200 group-hover:translate-x-0.5"
          />

          <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-vera-black transition duration-300 group-hover:scale-x-100" />
        </a>
      </div>
    </section>
  );
};

export default SellerTrustSection;
