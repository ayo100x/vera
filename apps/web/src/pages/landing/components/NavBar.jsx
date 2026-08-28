import { useState } from "react";
import { Menu, ShoppingBag } from "lucide-react";

const NavBar = ({ scrollToHero }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-vera-offwhite/90 backdrop-blur-md border-b border-vera-border">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <span className="font-display text-2xl tracking-tight">VERA</span>
        <div className="hidden md:flex items-center gap-10 text-sm text-vera-gray">
          <a href="#" className="hover:text-vera-black transition">
            Discover
          </a>
          <a href="#how" className="hover:text-vera-black transition">
            How it works
          </a>
          <a href="#" className="hover:text-vera-black transition">
            MarketPlace
          </a>
        </div>
        <div className="flex items-center gap-4">
          
          <button className="hidden sm:block text-sm text-vera-gray hover:text-vera-black">
            Sign in
          </button>
          
          <button
            onClick={scrollToHero}
            className="bg-vera-black text-white text-sm px-5 py-2.5 rounded-full hover:bg-black transition"
          >
            Try VERA
          </button>
          
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
