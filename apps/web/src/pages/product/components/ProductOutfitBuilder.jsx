import { motion } from "framer-motion";
import { useMemo } from "react";

const ProductOutfitBuilder = ({ COMPLETE_LOOK }) => {
  const lookTotal = useMemo(
    () => COMPLETE_LOOK.reduce((sum, item) => sum + item.price, 0),
    [],
  );

  return (
    <section className="mt-16 rounded-2xl bg-vera-warm px-5 py-10 md:mt-20 md:px-10 md:py-12">
      <h2 className="text-center font-display text-2xl tracking-tight md:text-3xl">
        Complete the look
      </h2>
      <p className="mx-auto mt-2 max-w-sm text-center text-[13px] text-vera-gray">
        Pieces that work with this shirt.
      </p>

      <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
        {COMPLETE_LOOK.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.04, duration: 0.35 }}
            className="group"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-white">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
              />
              {item.current && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-3 pb-2.5 pt-8">
                  <p className="text-[11px] font-medium text-white">
                    This piece
                  </p>
                </div>
              )}
            </div>
            <p className="mt-2.5 text-[13px] font-medium leading-snug">
              {item.name}
            </p>
            <p className="mt-0.5 text-[13px] tabular-nums text-vera-gray">
              ₦{item.price.toLocaleString()}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-[12px] text-vera-gray">Complete look</p>
        <p className="mt-1 font-display text-[1.7rem] tracking-tight tabular-nums">
          ₦{lookTotal.toLocaleString()}
        </p>
        <button
          type="button"
          className="mt-5 rounded-full bg-vera-black px-8 py-3 text-[13px] text-white transition hover:bg-black"
        >
          Get the look
        </button>
      </div>
    </section>
  );
};

export default ProductOutfitBuilder;
