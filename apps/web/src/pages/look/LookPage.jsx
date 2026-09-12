import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "../../components/layout/NavBar";
import { LOOK_ITEMS } from "./data/outfitLookData";

// initially when page loads build looks - selections(quantity, suggested size, suggested colors) - returns object
const buildSelections = (items) => {
  const next = {};    // create an empty object
  items.forEach((item) => {     // for each item in the LOOK LIST
    next[item.id] = { quantity: 1 };  // set a default quantity of 1 in the object - next[item.id] = {quantity: 1}

    Object.entries(item.options || {}).forEach(([key, opt]) => {  
      const ok = opt.values?.find(
        (v) => v.value === opt.suggested && v.available
      );
      // console.log("type: ", ok)
      next[item.id][key] = ok ? opt.suggested : null;
    });
  });
  return next;
}

function itemComplete(item, selection) {
  return Object.entries(item.options || {}).every(([key, opt]) => {
    if (!opt.required) return true;
    const value = selection?.[key];
    if (!value) return false;
    return opt.values?.find((v) => v.value === value)?.available !== false;
  });
}

function missingLabels(item, selection) {
  return Object.entries(item.options || {})
    .filter(([key, opt]) => {
      if (!opt.required) return false;
      const value = selection?.[key];
      const meta = opt.values?.find((v) => v.value === value);
      return !value || meta?.available === false;
    })
    .map(([, opt]) => opt.label.toLowerCase());
}

const LookPage = () => {
  // selections from options (size / color)
  const [selections, setSelections] = useState(() =>
    buildSelections(LOOK_ITEMS)
  );
  const [activeId, setActiveId] = useState(LOOK_ITEMS[0].id); // initial active id - first product
  const [attempted, setAttempted] = useState(false);
  const [added, setAdded] = useState(false);  // look added to bag? true or false

  const states = useMemo(
    () =>
      LOOK_ITEMS.map((item) => ({
        item,
        selection: selections[item.id],
        complete: itemComplete(item, selections[item.id]),
        missing: missingLabels(item, selections[item.id]),
      })),
    [selections]
  );
  console.log(states)

  const active = states.find((s) => s.item.id === activeId) || states[0];
  const activeIndex = states.findIndex((s) => s.item.id === active.item.id);
  const completeCount = states.filter((s) => s.complete).length;
  const totalCount = LOOK_ITEMS.length;
  const allComplete = completeCount === totalCount;

  const total = useMemo(
    () =>
      LOOK_ITEMS.reduce((sum, item) => {
        const qty = selections[item.id]?.quantity || 1;
        return sum + item.price * qty;
      }, 0), 
    [selections]
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

  const handleAddLook = () => {
    setAttempted(true);
    if (!allComplete) {
      const firstIncomplete = states.find((s) => !s.complete);
      if (firstIncomplete) setActiveId(firstIncomplete.item.id);
      return;
    }

    const lineItems = LOOK_ITEMS.map((item) => {
      const { quantity, ...options } = selections[item.id];
      return {
        productId: item.productId,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity,
        ...options,
      };
    });

    // addItemsToBag(lineItems)
    console.log("Add look to bag", lineItems);
    setAdded(true);
  };

  return (
    <div className="min-h-screen bg-vera-offwhite text-vera-black">
      <NavBar />

      <main className="mx-auto max-w-5xl px-5 pb-36 pt-24 md:pb-28 md:pt-28">
        {/* Quiet introduction */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="max-w-xl"
        >
          <h1 className="font-display text-[2rem] leading-[1.1] tracking-tight md:text-[2.5rem]">
            Your VERA Look
          </h1>
          <p className="mt-3 max-w-md text-[14px] leading-relaxed text-vera-gray">
            Four pieces, selected to work together. Review each one, set your
            sizes, and add the whole look to your bag.
          </p>
        </motion.div>

        {/* THE LOOK — single editorial composition */}
        <div className="mt-12 md:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28 }}
              className="grid gap-8 md:grid-cols-12 md:gap-14"
            >
              {/* Active product image */}
              <div className="md:col-span-6">
                <Link
                  to={`/product/${active.item.productId}`}
                  className="block overflow-hidden rounded-xl bg-vera-warm"
                >
                  <img
                    src={active.item.image}
                    alt={active.item.name}
                    className="aspect-3/4 w-full object-cover"
                  />
                </Link>
              </div>

              {/* Active product decisions */}
              <div className="flex flex-col justify-center md:col-span-6">
                {active.item.badge && (
                  <p className="text-[11px] tracking-wide text-vera-gray">
                    {active.item.badge}
                  </p>
                )}
                {/* Product name */}
                <Link
                  to={`/product/${active.item.productId}`}
                  className="mt-1 block font-display text-[1.55rem] leading-tight tracking-tight transition hover:opacity-70 md:text-[1.75rem]"
                >
                  {active.item.name}
                </Link>
                {/* Product price */}
                <p className="mt-2 text-[15px] tabular-nums">
                  ₦{active.item.price.toLocaleString()}
                </p>

                <div className="mt-8 space-y-6">
                  {Object.entries(active.item.options || {}).map(
                    ([key, option]) => (
                      <div key={key}>
                        <div className="mb-2.5 flex items-baseline justify-between gap-3">
                          <p className="text-[12px] tracking-wide text-vera-gray">
                            {option.label}
                          </p>
                          {option.suggested &&
                            active.selection?.[key] === option.suggested && (
                              <p className="text-[11px] text-vera-gray">
                                VERA’s suggestion
                              </p>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2">
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
                                className={`min-w-11 rounded-full px-3.5 py-2 text-[13px] transition ${
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
                    )
                  )}

                  <div>
                    <p className="mb-2.5 text-[12px] tracking-wide text-vera-gray">
                      Quantity
                    </p>
                    <div className="inline-flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() =>
                          setQuantity(
                            active.item.id,
                            (active.selection?.quantity || 1) - 1
                          )
                        }
                        className="text-[15px] text-vera-gray transition hover:text-vera-black"
                      >
                        −
                      </button>
                      <span className="min-w-[1.25rem] text-center text-[14px] tabular-nums">
                        {active.selection?.quantity || 1}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setQuantity(
                            active.item.id,
                            (active.selection?.quantity || 1) + 1
                          )
                        }
                        className="text-[15px] text-vera-gray transition hover:text-vera-black"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Status + quiet forward nudge */}
                <div className="mt-10 flex items-center justify-between gap-4 border-t border-vera-border pt-6">
                  <p className="text-[13px] text-vera-gray">
                    {active.complete
                      ? "Ready"
                      : attempted
                        ? `Needs ${active.missing.join(" & ")}`
                        : "Choose your options"}
                  </p>

                  {activeIndex < totalCount - 1 && (
                    <button
                      type="button"
                      onClick={goToNext}
                      className="text-[13px] text-vera-black underline decoration-vera-border underline-offset-4 transition hover:decoration-vera-black"
                    >
                      Next piece
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quiet piece navigation — the only other place the pieces appear */}
        <div className="mx-auto mt-10 flex max-w-md justify-center gap-3 md:mt-14">
          {states.map(({ item, complete }) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                aria-label={item.name}
                aria-current={isActive}
                className="group flex flex-col items-center gap-2"
              >
                <div
                  className={`h-14 w-11 overflow-hidden rounded-md bg-vera-warm transition ${
                    isActive
                      ? "ring-1 ring-vera-black"
                      : "opacity-60 group-hover:opacity-100"
                  }`}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <span
                  className={`h-1 w-1 rounded-full transition ${
                    complete ? "bg-vera-black" : "bg-vera-border"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Closing action */}
        <div className="mx-auto mt-14 max-w-md text-center md:mt-16">
          <p className="text-[13px] text-vera-gray">
            {allComplete
              ? `${totalCount} pieces`
              : `${completeCount} of ${totalCount} ready`}
          </p>
          <p className="mt-1 font-display text-[2rem] tracking-tight tabular-nums md:text-[2.25rem]">
            ₦{total.toLocaleString()}
          </p>

          {attempted && !allComplete && (
            <p className="mt-3 text-[13px] text-vera-black">
              Finish the remaining selections to continue.
            </p>
          )}

          <AnimatePresence>
            {added && (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-[13px] text-vera-gray"
              >
                Look added to your bag.
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={handleAddLook}
            className="mt-6 hidden w-full rounded-full bg-vera-black py-3.5 text-[14px] text-white transition hover:bg-black md:inline-flex md:w-auto md:px-10 md:items-center md:justify-center"
          >
            {allComplete
              ? "Add look to bag"
              : attempted
                ? "Finish selections"
                : "Add look to bag"}
          </button>
        </div>
      </main>

      {/* Mobile sticky */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-vera-border bg-vera-offwhite/95 px-5 py-3 backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-5xl items-center gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-[12px] text-vera-gray">
              {allComplete
                ? `${totalCount} pieces`
                : `${completeCount}/${totalCount} ready`}
            </p>
            <p className="text-[15px] font-medium tabular-nums">
              ₦{total.toLocaleString()}
            </p>
          </div>
          <button
            type="button"
            onClick={handleAddLook}
            className="shrink-0 rounded-full bg-vera-black px-5 py-3 text-[13px] text-white transition hover:bg-black"
          >
            {allComplete
              ? "Add look to bag"
              : attempted
                ? "Finish selections"
                : "Add look to bag"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LookPage;