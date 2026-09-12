import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const SellerStrip = ({product}) => {

  return (
    <div className="mt-16 border-t border-vera-border pt-10 md:mt-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-[15px] font-medium">{product.seller?.name}</h2>
            {product.seller?.verified && (
              <span className="inline-flex items-center gap-1 text-[12px] text-vera-gray">
                <Check size={12} strokeWidth={2.25} />
                Verified
              </span>
            )}
          </div>
          <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-vera-gray">
            <Star
              size={12}
              className="fill-vera-black text-vera-black"
              strokeWidth={0}
            />
            <span className="tabular-nums text-vera-black">
              {product.seller?.rating}
            </span>
            <span>
              ·{" "}
              {product.seller?.reviews >= 1000
                ? `${(product.seller?.reviews / 1000).toFixed(1)}k`
                : product.seller?.reviews}{" "}
              reviews
            </span>
          </p>
          <p className="mt-1 text-[12.5px] text-vera-gray">
            {product.seller?.shipping} · {product.seller?.protection}
          </p>
        </div>
        <Link
          to={`/seller/${product.seller?.id}`}
          className="inline-flex items-center gap-1.5 text-[13px] text-vera-black transition hover:opacity-70"
        >
          View seller
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
};

export default SellerStrip;
