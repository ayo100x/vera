import { useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-vera-border bg-vera-offwhite/90 backdrop-blur-md">
      <div className="mx-auto flex h-13 max-w-7xl items-center justify-between px-5">
        <Link
          to="/"
          className="font-display text-xl tracking-tight text-vera-black"
        >
          VERA
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-vera-gray md:flex">
          <Link to="/" className="transition hover:text-vera-black">
            Discover
          </Link>
          <Link to="/marketplace" className="transition hover:text-vera-black">
            Marketplace
          </Link>
          <a href="/#how" className="transition hover:text-vera-black">
            How it works
          </a>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* <button
            type="button"
            className="hidden text-vera-black transition hover:opacity-70 sm:block"
            aria-label="Search"
          >
            <Search size={18} strokeWidth={1.75} />
          </button> */}
          <button
            type="button"
            className="text-vera-black transition hover:opacity-70"
            aria-label="Bag"
          >
            <ShoppingBag size={18} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            className="hidden text-sm text-vera-gray transition hover:text-vera-black sm:block"
          >
            Sign in
          </button>
          <button
            type="button"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-vera-border bg-vera-offwhite px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-vera-gray">
            <Link to="/" onClick={() => setOpen(false)}>
              Discover
            </Link>
            <Link to="/marketplace" onClick={() => setOpen(false)}>
              Marketplace
            </Link>
            <a href="/#how" onClick={() => setOpen(false)}>
              How it works
            </a>
            <button type="button" className="text-left">
              Search
            </button>
            <button type="button" className="text-left">
              Sign in
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
