import { Share2 } from "lucide-react";

const SocialSharingSection = () => {
  return (
    <section className="py-24 px-5 max-w-4xl mx-auto text-center">
      <h2 className="font-display text-4xl md:text-5xl mb-6">
        Share what VERA finds
      </h2>
      <p className="text-vera-gray mb-12">
        Make it viral. Friends will ask where you got it.
      </p>
      <div className="bg-white border border-vera-border rounded-2xl p-8 max-w-sm mx-auto">
        <p className="text-xs text-vera-gray uppercase tracking-widest mb-4">
          Found on VERA
        </p>
        <div className="aspect-[3/4] rounded-xl overflow-hidden bg-vera-warm mb-4">
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=85"
            alt="Look found and recreated by VERA"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-between text-sm">
          <div>
            <p className="text-vera-gray">Original</p>
            <p className="font-medium">₦420,000</p>
          </div>
          <div className="text-right">
            <p className="text-vera-gray">Recreated</p>
            <p className="font-medium">₦110,000</p>
          </div>
        </div>
        <p className="text-xs text-vera-gray mt-3">93% visual match</p>
        <button className="mt-6 w-full border border-vera-border rounded-full py-2.5 text-sm flex items-center justify-center gap-2 hover:bg-vera-warm transition">
          <Share2 size={14} /> Share look
        </button>
      </div>
    </section>
  );
};

export default SocialSharingSection;
