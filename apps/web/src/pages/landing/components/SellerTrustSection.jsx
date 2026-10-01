import { ArrowRight, Check } from "lucide-react";

const SellerTrustSection = () => {
  return (
    <section id="sellers" className="py-16 px-5 max-w-3xl mx-auto text-center">
      <h2 className="font-display text-3xl md:text-4xl mb-5">
        Buy with confidence
      </h2>
      <p className="text-vera-gray max-w-md mx-auto mb-8">
        VERA is building a more trustworthy way to shop online — with clearer
        product information, seller signals, reviews, and purchase options.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-sm">
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
      
      {/* SELL ON VERA */}
      {/* <div className="mt-10 flex justify-center">
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
      </div> */}
    </section>
  );
};

export default SellerTrustSection;
