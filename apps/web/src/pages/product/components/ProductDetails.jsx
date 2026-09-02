import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const ProductDetails = ({ DETAIL_ROWS, product }) => {
  const [openDetail, setOpenDetail] = useState(DETAIL_ROWS[0]?.key);

  return (
    <section className="mx-auto mt-14 max-w-2xl md:mt-16">
      <h2 className="font-display text-2xl tracking-tight">Details</h2>
      <div className="mt-5 divide-y divide-vera-border border-y border-vera-border">
        {DETAIL_ROWS.map((row) => {
          const open = openDetail === row.key;
          return (
            <div key={row.key}>
              <button
                type="button"
                onClick={() => setOpenDetail(open ? null : row.key)}
                className="flex w-full items-center justify-between py-4 text-left"
                aria-expanded={open}
              >
                <span className="text-[14px] font-medium">{row.label}</span>
                <ChevronDown
                  size={16}
                  className={`text-vera-gray transition ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-[13.5px] leading-relaxed text-vera-gray">
                      {product.details[row.key]}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductDetails;
