

const MobilePurchaseBar = ({product}) => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-vera-border bg-vera-offwhite/95 px-5 py-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-7xl items-center gap-4">
        <p className="flex-1 text-[14px] font-medium tabular-nums">
          ₦{product.price.toLocaleString()}
        </p>
        <button
          type="button"
          className="shrink-0 rounded-full bg-vera-black px-6 py-3 text-[13px] text-white transition hover:bg-black"
        >
          Add to bag
        </button>
      </div>
    </div>
  );
};

export default MobilePurchaseBar;
