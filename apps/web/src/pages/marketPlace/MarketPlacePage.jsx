import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";

const MarketPlacePage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-vera-offwhite text-vera-black">
      <NavBar />

      <main className="flex flex-1 flex-col justify-center px-4 pb-16 pt-16 md:px-5 md:pb-20 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mx-auto w-full max-w-lg"
        >
          <p className="text-[11px] tracking-[0.14em] text-vera-gray uppercase">
            VERA Marketplace
          </p>

          <div className="mt-5 h-px w-10 bg-vera-border" />

          <h1 className="mt-6 font-display text-[1.85rem] leading-[1.08] tracking-tight sm:text-[2.25rem] md:text-[2.75rem]">
            A better way to buy.
          </h1>

          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-vera-gray md:text-[15px]">
            VERA Marketplace is where discovery becomes purchase — bringing
            trusted sellers, products, and VERA's intelligence into one
            place.
          </p>

          <div className="mt-10 flex flex-col gap-5 border-t border-vera-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] tracking-wide text-vera-gray">
              Coming soon
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[13px] text-vera-black transition hover:opacity-60"
            >
              Back to VERA
              <span aria-hidden>→</span>
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default MarketPlacePage;
