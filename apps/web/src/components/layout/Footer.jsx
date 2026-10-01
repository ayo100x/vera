const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-vera-border md:px-5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5 text-sm text-vera-gray">
        <span className="font-display text-xl text-vera-black">VERA</span>
        <div className="flex gap-6">
          {/*  */}
          <p className="hover:text-vera-black">
            Privacy
          </p>
          <p className="hover:text-vera-black">
            Terms
          </p>
          <p className="hover:text-vera-black">
            Contact
          </p>
        </div>
        <p>© 2026 VERA</p>
      </div>
    </footer>
  );
};

export default Footer;
