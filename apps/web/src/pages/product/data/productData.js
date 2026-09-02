export const PRODUCTS = {
  1: {
    id: 1,
    name: "Black oversized shirt",
    price: 28000,
    category: "Shirts",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1100&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1100&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=1100&q=80",
      // "https://images.unsplash.com/photo-1620012253295-c5d759a34ddf?w=1100&q=80",
    ],
    description:
      "A relaxed oversized shirt in matte black cotton. Dropped shoulders, clean placket, straight hem — built for everyday layering.",
    seller: {
      id: "atelier-north",
      name: "Atelier North",
      verified: true,
      rating: 4.8,
      reviews: 1200,
      shipping: "Ships in 2–4 days",
      protection: "Buyer protection included",
    },
    variants: {
      colors: [{ name: "Black", hex: "#0A0A0A" }],
      sizes: ["S", "M", "L", "XL"],
    },
    details: {
      description:
        "A relaxed oversized shirt in matte black cotton. Dropped shoulders, clean placket, straight hem — built for everyday layering.",
      material: "100% cotton",
      fit: "Oversized · relaxed through the body",
      care: "Machine wash cold · hang dry",
      shipping: "2–5 business days in major cities",
      returns: "Free returns within 14 days",
    },
    vera: {
      match: {
        score: 94,
        verdict:
          "Strong visual match to the look you showed us. The silhouette, colour and relaxed proportions are particularly close.",
        reasons: [
          { label: "Silhouette", value: "Very close" },
          { label: "Colour", value: "Exact" },
          { label: "Proportions", value: "Similar" },
          { label: "Price", value: "Within range" },
        ],
      },
      marketplace: {
        verdict:
          "A well-rated oversized cotton shirt priced competitively for its category.",
        priceInsight: "Similar products typically sell for ₦35k–₦42k.",
        insights: [
          { label: "Price", value: "Good value" },
          { label: "Seller", value: "Verified" },
          { label: "Rating", value: "4.8 ★" },
          { label: "Category", value: "Oversized shirts" },
        ],
      },
    },
  },
};

export const SIMILAR = [
  {
    id: 2,
    name: "Black relaxed shirt",
    price: 18500,
    match: 88,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80",
  },
  {
    id: 3,
    name: "Charcoal boxy shirt",
    price: 30000,
    match: 90,
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&q=80",
  },
  {
    id: 4,
    name: "Matte black camp shirt",
    price: 21000,
    match: 86,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80",
  },
  {
    id: 5,
    name: "Heavyweight black shirt",
    price: 48000,
    match: 91,
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&q=80",
  },
];

export const COMPLETE_LOOK = [
  {
    id: "cl1",
    name: "Black oversized shirt",
    price: 28000,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80",
    current: true,
  },
  {
    id: "cl2",
    name: "Cream relaxed trousers",
    price: 31000,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&q=80",
  },
  {
    id: "cl3",
    name: "Brown loafers",
    price: 24500,
    image:
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&q=80",
  },
  {
    id: "cl4",
    name: "Minimal watch",
    price: 6000,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
  },
];

export const DETAIL_ROWS = [
  { key: "description", label: "Description" },
  { key: "material", label: "Material" },
  { key: "fit", label: "Fit" },
  { key: "care", label: "Care" },
  { key: "shipping", label: "Shipping" },
  { key: "returns", label: "Returns" },
];