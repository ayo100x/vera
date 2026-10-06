import { useParams, useSearchParams } from "react-router-dom";
import NavBar from "../../components/layout/NavBar";
import {
  PRODUCTS,
  DETAIL_ROWS,
  SIMILAR,
  COMPLETE_LOOK,
} from "./data/productData.js";
import ProductBreadcrumbs from "./components/ProductBreadcrumbs";
import ProductGallery from "./components/ProductGallery.jsx";
import PurchaseColumn from "./components/PurchaseColumn.jsx";
import SellerStrip from "./components/SellerStrip.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import SimilarProduct from "./components/SimilarProduct.jsx";
import ProductOutfitBuilder from "./components/ProductOutfitBuilder.jsx";
import Footer from "../../components/layout/Footer.jsx";
import MobilePurchaseBar from "./components/MobilePurchaseBar.jsx";
import AffiliatePurchaseColumn from "./components/AffiliatePurchaseColumn.jsx";

const ProductPage = () => {
  const { id } = useParams();

  const [searchParams] = useSearchParams();
  const source = searchParams.get("source");

  const fromResults = source === "results";

  const product = PRODUCTS[id] || PRODUCTS[1];
  const match = product.vera?.match;
  const assessment = product.vera?.assessment;

  const isMarketplace = product.source.type === "marketplace";
  // const isAffiliate = product.source.type === "affiliate"

  return (
    <div className="min-h-screen bg-vera-offwhite text-vera-black">
      {/* navbar */}
      <NavBar />

      {/* main */}
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-16 md:px-5 md:pb-18 md:pt-20">
        <ProductBreadcrumbs product={product} fromResults={fromResults} />

        {/* Hero */}
        <div
          className={`grid gap-6 lg:grid-cols-12 lg:gap-8 ${
            isMarketplace ? "border-b border-vera-border pb-8" : ""
          }`}
        >
          <ProductGallery product={product} />
          {isMarketplace ? (
            <PurchaseColumn
              product={product}
              fromResults={fromResults}
              match={match}
              assessment={assessment}
            />
          ) : (
            // affiliate
            <AffiliatePurchaseColumn
              product={product}
              fromResults={fromResults}
              match={match}
              assessment={assessment}
            />
          )}
        </div>

        {/* {isMarketplace && <SellerStrip product={product} />} */}

        <ProductDetails DETAIL_ROWS={DETAIL_ROWS} product={product} />
        <SimilarProduct SIMILAR={SIMILAR} fromResults={fromResults} />
        {/* <ProductOutfitBuilder COMPLETE_LOOK={COMPLETE_LOOK} /> */}
      </div>

      <MobilePurchaseBar product={product} isMarketplace={isMarketplace} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductPage;
