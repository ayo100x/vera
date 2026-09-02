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

const ProductPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const source = searchParams.get("source"); // "results" | "marketplace" | null
  const fromResults = source === "results";

  const product = PRODUCTS[id] || PRODUCTS[1];
  const match = product.vera?.match;
  const market = product.vera?.marketplace;

  return (
    <div className="min-h-screen bg-vera-offwhite text-vera-black">
      {/* navbar */}
      <NavBar />

      {/* main */}
      <div className="mx-auto max-w-7xl px-5 pb-28 pt-24 md:pb-24 md:pt-28">
        <ProductBreadcrumbs product={product} fromResults={fromResults} />

        {/* Hero */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <ProductGallery product={product} />
          <PurchaseColumn
            product={product}
            fromResults={fromResults}
            match={match}
            market={market}
          />
        </div>

        <SellerStrip product={product} />
        <ProductDetails DETAIL_ROWS={DETAIL_ROWS} product={product} />
        <SimilarProduct SIMILAR={SIMILAR} fromResults={fromResults} />
        <ProductOutfitBuilder COMPLETE_LOOK={COMPLETE_LOOK} />
      </div>

      <MobilePurchaseBar product={product} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductPage;
