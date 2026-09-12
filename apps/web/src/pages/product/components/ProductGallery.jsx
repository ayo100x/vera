import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductGallery = ({ product }) => {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className="lg:col-span-6">
      <div className="overflow-hidden rounded-xl bg-vera-warm">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={product.images[activeImage]}
            alt={product.name}
            initial={{ opacity: 0.55 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="aspect-4/5 w-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* <div className="mt-3 flex gap-2 overflow-x-auto pb-0.5">
        {product.images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveImage(i)}
            aria-label={`Image ${i + 1}`}
            className={`h-18 w-14 shrink-0 overflow-hidden rounded-lg bg-vera-warm sm:h-24 sm:w-20 ${
              activeImage === i
                ? "border border-vera-black"
                : "opacity-75 transition hover:opacity-100"
            }`}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default ProductGallery;
