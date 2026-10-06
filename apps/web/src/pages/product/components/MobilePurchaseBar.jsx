const MobilePurchaseBar = ({ product, isMarketplace }) => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-vera-border bg-vera-offwhite px-5 py-3  lg:hidden">
      <div className="mx-auto flex max-w-7xl items-center gap-4">
        <p className="min-w-0 flex-1 text-[14px] font-medium tabular-nums">
          ₦{product.price.toLocaleString()}
        </p>

        <button
          type="button"
          className="flex min-h-11 min-w-0 max-w-[65%] shrink-0 items-center justify-center rounded-full bg-vera-black px-4 text-[12px] font-medium text-white transition hover:bg-black sm:px-5 sm:text-[13px]"
        >
          <span className="truncate">
            {isMarketplace
              ? "Add to bag"
              : `Shop now from ${product.source.retailer}`}
          </span>
        </button>
      </div>
    </div>
  );
};

export default MobilePurchaseBar;
