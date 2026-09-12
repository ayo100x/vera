import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SimilarProduct = ({ SIMILAR, fromResults }) => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  return (
    <section className="mt-16 md:mt-20">
      <h2 className="font-display text-2xl tracking-tight md:text-3xl">
        More like this
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-5">
        {SIMILAR.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.04, duration: 0.35 }}
          >
            <Link
              to={`/product/${item.id}`}
              className="group block"
            >
              <div className="aspect-3/4 overflow-hidden rounded-xl bg-vera-warm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <p className="mt-3 text-[13px] font-medium leading-snug">
                {item.name}
              </p>
              <div className="mt-1 flex items-baseline justify-between gap-2">
                <span className="text-[13px] tabular-nums">
                  ₦{item.price.toLocaleString()}
                </span>
                {fromResults && item.match != null && (
                  <span className="text-[11px] tabular-nums text-vera-gray">
                    {item.match}%
                  </span>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SimilarProduct;
