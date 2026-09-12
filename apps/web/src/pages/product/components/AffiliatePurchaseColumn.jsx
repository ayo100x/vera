
const AffiliatePurchaseColumn = ({ product, fromResults, match, market }) => {
  return (
    <div className="lg:col-span-5">
      <div className="lg:sticky lg:top-24">
        <h1 className="font-display text-[1.85rem] leading-[1.12] tracking-tight md:text-[2.2rem]">
          {product.name}
        </h1>

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
            Buy now from SHEIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default AffiliatePurchaseColumn;
