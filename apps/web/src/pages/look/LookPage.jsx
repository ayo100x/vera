import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "../../components/layout/NavBar";
import { LOOK_ITEMS } from "./data/outfitLookData";
import { PRODUCTS } from "../product/data/productData";
import Footer from "../../components/layout/Footer";

// build the looks
const buildSelections = (items) => {
  const next = {};

  items.forEach((item) => {
    const product = PRODUCTS[item.productId];

    // Affiliate products are handled by the external retailer.
    if (product.source.type === "affiliate") {
      return;
    }

    // Marketplace products are handled by VERA.
    next[item.id] = {
      quantity: 1,
    };

    if (product.variants.sizes?.length) {
      next[item.id].size = product.variants.sizes[0];
    }

    if (product.variants.colors?.length) {
      next[item.id].color = product.variants.colors[0].name;
    }
  });

  return next;
};

const getOptions = (product) => {
  if (product.source.type === "affiliate") {
    return {};
  }

  const options = {};

  if (product.variants?.sizes?.length) {
    options.size = {
      label: "Size",
      values: product.variants.sizes.map((size) => ({
        value: size,
        available: true,
      })),
    };
  }

  if (product.variants?.colors?.length) {
    options.color = {
      label: "Color",
      values: product.variants.colors.map((color) => ({
        value: color.name,
        available: true,
      })),
    };
  }

  return options;
};

const LookPage = () => {
  const [selections, setSelections] = useState(() =>
    buildSelections(LOOK_ITEMS),
  ); // build selections and returns an object

  const [activeId, setActiveId] = useState(LOOK_ITEMS[0]?.id); // activeId - active look product

  const states = useMemo(
    () =>
      LOOK_ITEMS.map((item) => {
        const product = PRODUCTS[item.productId];

        return {
          item,
          product,
          selection: selections[item.id],
          source: product.source,
        };
      }),
    [selections],
  );

  const active = states.find((s) => s.item.id === activeId) || states[0];
  const activeIndex = states.findIndex((s) => s.item.id === active?.item.id);
  const totalCount = LOOK_ITEMS.length;
  const activeOptions = active ? getOptions(active.product) : {};

  const estimatedTotal = useMemo(
    () =>
      LOOK_ITEMS.reduce((sum, item) => {
        const product = PRODUCTS[item.productId];
        const qty = selections[item.id]?.quantity || 1;

        return sum + product.price * qty;
      }, 0),
    [selections],
  );

  const setOption = (itemId, key, value) => {
    setSelections((prev) => ({
      ...prev,
      [itemId]: { ...prev[itemId], [key]: value },
    }));
  };

  const setQuantity = (itemId, quantity) => {
    setSelections((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        quantity: Math.max(1, quantity),
      },
    }));
  };

  const goToNext = () => {
    const next = states[activeIndex + 1];
    if (next) setActiveId(next.item.id);
  };

  const handleShopPiece = (item, source) => {
    if (source.type === "marketplace") {
      // addToBag({ productId, ...selections[item.id], meta: { fromLook: true } })
      console.log("Add marketplace item to bag", {
        productId: item.productId,
        ...selections[item.id],
      });
      return;
    }

    const href = source.affiliateUrl || source.productUrl;
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    // Prototype fallback — wire to tracked affiliate destination later
    console.log("Shop affiliate piece", {
      productId: item.productId,
      retailer: source.retailer,
      selection: selections[item.id],
    });
  };

  if (!active) return null;

  const isAffiliate = active.source.type === "affiliate";
  const retailerLabel = active.source.retailer || "Retailer";

  return (
    <div className="min-h-screen bg-vera-offwhite text-vera-black">
      <NavBar />

      <main className="mx-auto max-w-3xl px-4 pb-24 pt-16 md:px-5 md:pb-20 md:pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-xl"
        >
          <h1 className="font-display text-[1.65rem] leading-[1.1] tracking-tight md:text-[1.9rem]">
            Your VERA Look
          </h1>
          <p className="mt-2.5 max-w-md text-[13px] leading-relaxed text-vera-gray">
            Pieces VERA selected to recreate the look. Choose your options, then
            shop each piece.
          </p>
        </motion.div>

        {/* Active piece */}
        <div className="mt-8 md:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.item.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="grid gap-5 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-6">
                <Link
                  to={`/product/${active.item.productId}`}
                  className="block overflow-hidden rounded-xl bg-vera-warm"
                >
                  <img
                    src={active.product.images[0]}
                    alt={active.product.name}
                    className="aspect-4/3 w-full object-cover md:aspect-3/4"
                  />
                </Link>
              </div>

              <div className="flex flex-col justify-center md:col-span-6">
                {active.item.badge && (
                  <p className="text-[11px] tracking-wide text-vera-gray">
                    {active.item.badge}
                  </p>
                )}

                <Link
                  to={`/product/${active.item.productId}`}
                  className="mt-1 block font-display text-[1.35rem] leading-tight tracking-tight transition hover:opacity-70 md:text-[1.5rem]"
                >
                  {active.product.name}
                </Link>

                <p className="mt-1.5 text-[14px] tabular-nums">
                  ₦{active.product.price.toLocaleString()}
                </p>

                <p className="mt-2 text-[12px] text-vera-gray">
                  {isAffiliate
                    ? `${retailerLabel} · External retailer`
                    : "VERA Marketplace"}
                </p>

                {/* Options */}
                <div className="mt-5 space-y-4">
                  {Object.entries(activeOptions).map(([key, option]) => (
                    <div key={key}>
                      <div className="mb-2 flex items-baseline justify-between gap-3">
                        <p className="text-[11px] tracking-wide text-vera-gray">
                          {option.label}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {option.values.map((entry) => {
                          const selected =
                            active.selection?.[key] === entry.value;
                          const disabled = !entry.available;
                          return (
                            <button
                              key={entry.value}
                              type="button"
                              disabled={disabled}
                              onClick={() =>
                                setOption(active.item.id, key, entry.value)
                              }
                              className={`min-w-10 rounded-full px-3 py-1.5 text-[12px] transition ${
                                disabled
                                  ? "cursor-not-allowed border border-vera-border text-vera-gray line-through opacity-40"
                                  : selected
                                    ? "bg-vera-black text-white"
                                    : "border border-vera-border bg-transparent text-vera-black hover:border-vera-black"
                              }`}
                            >
                              {entry.value}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  {!isAffiliate && (
                    <div>
                      <p className="mb-2 text-[11px] tracking-wide text-vera-gray">
                        Quantity
                      </p>

                      <div className="inline-flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity(
                              active.item.id,
                              (active.selection?.quantity || 1) - 1,
                            )
                          }
                          className="text-[14px] text-vera-gray transition hover:text-vera-black"
                        >
                          −
                        </button>

                        <span className="min-w-[1rem] text-center text-[13px] tabular-nums">
                          {active.selection?.quantity || 1}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            setQuantity(
                              active.item.id,
                              (active.selection?.quantity || 1) + 1,
                            )
                          }
                          className="text-[14px] text-vera-gray transition hover:text-vera-black"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Piece CTA */}
                <div className="mt-6 space-y-2 border-t border-vera-border pt-5">
                  <button
                    type="button"
                    onClick={() => handleShopPiece(active.item, active.source)}
                    className="w-full rounded-full bg-vera-black py-2.5 text-[13px] text-white transition hover:bg-black md:w-auto md:px-6"
                  >
                    {isAffiliate ? `Shop at ${retailerLabel}` : "Add to bag"}
                  </button>

                  <div className="flex items-center justify-between gap-3 pt-1">
                    <Link
                      to={`/product/${active.item.productId}`}
                      className="text-[12px] text-vera-gray transition hover:text-vera-black"
                    >
                      View product
                    </Link>

                    {activeIndex < totalCount - 1 && (
                      <button
                        type="button"
                        onClick={goToNext}
                        className="text-[12px] text-vera-black underline decoration-vera-border underline-offset-4 transition hover:decoration-vera-black"
                      >
                        Next piece
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Piece navigation */}
        <div className="mx-auto mt-8 flex max-w-md justify-center gap-2.5 md:mt-10">
          {states.map(({ item, product }) => {
            const isActive = item.id === activeId;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                aria-label={product.name}
                aria-current={isActive ? "true" : undefined}
                className="group"
              >
                <div
                  className={`h-11 w-8 overflow-hidden rounded-md bg-vera-warm transition md:h-12 md:w-9 ${
                    isActive
                      ? "ring-1 ring-vera-black"
                      : "opacity-55 group-hover:opacity-100"
                  }`}
                >
                  <img
                    src={product.images[0]}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Estimated total — reference only */}
        <div className="mx-auto mt-10 max-w-md border-t border-vera-border pt-6 text-center md:mt-12">
          <p className="text-[12px] text-vera-gray">
            {totalCount} pieces · Est. ₦{estimatedTotal.toLocaleString()}
          </p>
          <p className="mt-1 text-[11px] text-vera-gray">
            Prices may vary by retailer.
          </p>
        </div>
      </main>

      {/* Mobile summary — no multi-retailer checkout */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-vera-border bg-vera-offwhite/95 px-4 py-3 backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
          <div>
            <p className="text-[11px] text-vera-gray">
              {totalCount} pieces · Estimated
            </p>
            <p className="text-[14px] font-medium tabular-nums">
              ₦{estimatedTotal.toLocaleString()}
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleShopPiece(active.item, active.source)}
            className="shrink-0 rounded-full bg-vera-black px-4 py-2.5 text-[12px] text-white transition hover:bg-black"
          >
            {isAffiliate ? `Shop at ${retailerLabel}` : "Add to bag"}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LookPage;
