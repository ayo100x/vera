import { Check, Star } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PurchaseColumn = ({ product, fromResults, match, market }) => {
  const [quantity, setQuantity] = useState(1);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.variants.sizes[1]);

  return (
    <div className="lg:col-span-5">
      <div className="lg:sticky lg:top-24">
        <h1 className="font-display text-[1.85rem] leading-[1.12] tracking-tight md:text-[2.2rem]">
          {product.name}
        </h1>

        {/* Seller / rating line */}
        <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px] text-vera-gray">
          <span className="text-vera-black">{product.seller?.name}</span>
          {product.seller?.verified && (
            <span className="inline-flex items-center gap-1">
              <Check size={12} strokeWidth={2.25} />
              Verified
            </span>
          )}
          <span className="text-vera-border">·</span>
          <span className="inline-flex items-center gap-1">
            <Star
              size={11}
              className="fill-vera-black text-vera-black"
              strokeWidth={0}
            />
            <span className="tabular-nums text-vera-black">
              {product.seller.rating}
            </span>
            <span>
              (
              {product.seller.reviews >= 1000
                ? `${(product.seller.reviews / 1000).toFixed(1)}k`
                : product.seller.reviews}
              )
            </span>
          </span>
        </div>

        <p className="mt-5 text-[1.4rem] tabular-nums tracking-tight">
          ₦{product.price.toLocaleString()}
        </p>

        <p className="mt-5 text-[14px] leading-relaxed text-vera-gray">
          {product.description}
        </p>

        {/* ---------- VERA intelligence ---------- */}
        <div className="mt-8 border-t border-vera-border pt-6">
          {fromResults && match ? (
            <div>
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-[11px] tracking-[0.07em] uppercase text-vera-gray">
                  Why VERA recommended this
                </p>
                <p className="text-[13px] tabular-nums text-vera-black">
                  {match.score}% visual match
                </p>
              </div>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-vera-black">
                {match.verdict}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
                {match.reasons.map((row) => (
                  <div key={row.label}>
                    <p className="text-[11px] text-vera-gray">{row.label}</p>
                    <p className="mt-0.5 text-[13px] font-medium">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <p className="text-[11px] tracking-[0.07em] uppercase text-vera-gray">
                VERA's take
              </p>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-vera-black">
                {market?.verdict}
              </p>
              {market?.priceInsight && (
                <p className="mt-2 text-[12.5px] text-vera-gray">
                  {market.priceInsight}
                </p>
              )}
              <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
                {(market?.insights || []).map((row) => (
                  <div key={row.label}>
                    <p className="text-[11px] text-vera-gray">{row.label}</p>
                    <p className="mt-0.5 text-[13px] font-medium">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Colour */}
        <div className="mt-8">
          <p className="text-[13px] font-medium">
            Colour{" "}
            <span className="font-normal text-vera-gray">
              {product.variants.colors[0].name}
            </span>
          </p>
          <div className="mt-2.5 flex gap-2">
            {product.variants.colors.map((c) => (
              <button
                key={c.name}
                type="button"
                aria-label={c.name}
                className="h-8 w-8 rounded-full ring-1 ring-vera-black ring-offset-2 ring-offset-vera-offwhite"
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>

        {/* Size */}
        <div className="mt-7">
          <div className="mb-2.5 flex items-center justify-between">
            <p className="text-[13px] font-medium">Size</p>
            <button
              type="button"
              onClick={() => setSizeGuideOpen((v) => !v)}
              className="text-[12.5px] text-vera-gray transition hover:text-vera-black"
            >
              Size guide
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.variants.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`min-w-[2.85rem] rounded-full px-3.5 py-2.5 text-[13px] transition ${
                  selectedSize === size
                    ? "bg-vera-black text-white"
                    : "border border-vera-border bg-white text-vera-black hover:border-vera-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <AnimatePresence>
            {sizeGuideOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <p className="mt-3 text-[12.5px] leading-relaxed text-vera-gray">
                  This shirt runs oversized. Prefer a closer fit? Size down from
                  your usual.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quantity */}
        <div className="mt-7">
          <p className="mb-2.5 text-[13px] font-medium">Quantity</p>
          <div className="inline-flex items-center rounded-full border border-vera-border bg-white">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-4 py-2 text-[15px] text-vera-gray transition hover:text-vera-black"
              aria-label="Decrease"
            >
              −
            </button>
            <span className="min-w-[1.75rem] text-center text-[13px] tabular-nums">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="px-4 py-2 text-[15px] text-vera-gray transition hover:text-vera-black"
              aria-label="Increase"
            >
              +
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 space-y-2.5">
          <button
            type="button"
            className="w-full rounded-full bg-vera-black py-3.5 text-[14px] text-white transition hover:bg-black"
          >
            Add to bag
          </button>
          <button
            type="button"
            className="w-full rounded-full border border-vera-border bg-white py-3.5 text-[14px] text-vera-black transition hover:border-vera-black"
          >
            Buy now
          </button>
          <p className="pt-1 text-center text-[11.5px] text-vera-gray">
            {product.seller.shipping} · {product.seller.protection}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseColumn;
