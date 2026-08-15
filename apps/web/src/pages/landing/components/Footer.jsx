const Footer = () => {
  return (
    <footer className="py-12 px-5 border-t border-vera-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-vera-gray">
        <span className="font-display text-xl text-vera-black">VERA</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-vera-black">
            Privacy
          </a>
          <a href="#" className="hover:text-vera-black">
            Terms
          </a>
          <a href="#" className="hover:text-vera-black">
            Contact
          </a>
        </div>
        <p>© 2026 VERA</p>
      </div>
    </footer>
  );
};

export default Footer;
