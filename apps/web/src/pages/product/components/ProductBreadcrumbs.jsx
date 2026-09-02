import { Link } from "react-router-dom";

const ProductBreadcrumbs = ({product}) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-[12.5px] text-vera-gray">
      
        <div>
          <Link to="/" className="transition hover:text-vera-black">
            VERA
          </Link>
          <span className="mx-2 text-vera-border">/</span>
          <span>{product.category}</span>
          <span className="mx-2 text-vera-border">/</span>
          <span className="text-vera-black">{product.name}</span>
        </div>
    </nav>
  );
};

export default ProductBreadcrumbs;
