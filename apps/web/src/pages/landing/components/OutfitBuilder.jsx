import { motion } from "framer-motion";

const OutfitBuilder = () => {
  const outfit = [
    {
      name: "Black Oxford",
      price: 32000,
      image:
        "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&q=80",
      main: true,
    },
    {
      name: "Cream trousers",
      price: 28000,
      image:
        "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
      main: false,
    },
    {
      name: "Brown loafers",
      price: 24500,
      image:
        "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&q=80",
      main: false,
    },
    {
      name: "Minimal watch",
      price: 5000,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
      main: false,
    },
  ];

  const total = outfit.reduce((sum, item) => sum + item.price, 0);

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
          {outfit.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
              }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-vera-warm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* {item.main && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-3 pb-3 pt-8">
                    <p className="text-[11px] font-medium tracking-wide text-white">
                      Your piece
                    </p>
                  </div>
                )} */}
              </div>

              <div className="mt-3 space-y-0.5">
                <p className="text-[13px] font-medium leading-snug text-vera-black">
                  {item.name}
                </p>
                <p className="text-[13px] tabular-nums text-vera-gray">
                  ₦{item.price.toLocaleString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-sm text-vera-gray">Complete look</p>
          <p className="font-display text-3xl mt-1">
            ₦{total.toLocaleString()}
          </p>
          <button className="mt-6 bg-vera-black text-white px-8 py-3.5 rounded-full text-sm">
            Get the look
          </button>
        </div>
      </div>
    </section>
  );
};

export default OutfitBuilder;
