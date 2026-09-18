import { useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-vera-border/80 bg-vera-offwhite/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-6">
        <Link
          to="/"
          className="font-display text-[1.35rem] tracking-tight text-vera-black transition hover:opacity-80"
        >
          VERA
        </Link>

        <nav className="hidden items-center gap-10 text-[13px] tracking-wide text-vera-gray md:flex">
          <a
            href="/#heroId"
            className="transition-colors duration-200 hover:text-vera-black"
          >
            Discover
          </a>
          <a
            href="/#how"
            className="transition-colors duration-200 hover:text-vera-black"
          >
            How it works
          </a>
          <Link
            to="/marketplace"
            className="transition-colors duration-200 hover:text-vera-black"
          >
            Marketplace
          </Link>
        </nav>

        <div className="flex items-center gap-4 sm:gap-5">
          {/* <button
            type="button"
            className="hidden text-vera-black transition hover:opacity-70 sm:block"
            aria-label="Search"
          >
            <Search size={18} strokeWidth={1.75} />
          </button> */}
          <button
            type="button"
            className="text-vera-black transition-opacity duration-200 hover:opacity-60"
            aria-label="Bag"
          >
            <ShoppingBag size={18} strokeWidth={1.6} />
          </button>
          <button
            type="button"
            className="hidden text-[13px] tracking-wide text-vera-gray transition-colors duration-200 hover:text-vera-black sm:block"
          >
            Sign in
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center text-vera-black transition-opacity duration-200 hover:opacity-60 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? (
              <X size={18} strokeWidth={1.6} />
            ) : (
              <Menu size={18} strokeWidth={1.6} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-vera-border/80 md:hidden"
          >
            <div className="bg-vera-offwhite px-5 pb-7 pt-2">
              <nav className="flex flex-col">
                <a
                  href="/#heroId"
                  onClick={() => setOpen(false)}
                  className="border-b border-vera-border/60 py-4 text-[15px] tracking-wide text-vera-black transition-opacity hover:opacity-60"
                >
                  Discover
                </a>
                <Link
                  to="/marketplace"
                  onClick={() => setOpen(false)}
                  className="border-b border-vera-border/60 py-4 text-[15px] tracking-wide text-vera-black transition-opacity hover:opacity-60"
                >
                  Marketplace
                </Link>
                <a
                  href="/#how"
                  onClick={() => setOpen(false)}
                  className="border-b border-vera-border/60 py-4 text-[15px] tracking-wide text-vera-black transition-opacity hover:opacity-60"
                >
                  How it works
                </a>
              </nav>

              <div className="mt-6 flex flex-col gap-1">
                <button
                  type="button"
                  className="py-2.5 text-left text-[13px] tracking-wide text-vera-gray transition-colors hover:text-vera-black"
                >
                  Search
                </button>
                <button
                  type="button"
                  className="py-2.5 text-left text-[13px] tracking-wide text-vera-gray transition-colors hover:text-vera-black"
                >
                  Sign in
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
