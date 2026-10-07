// PROP DATA REPLACE WITH ACTUAL DATA
export const DEMO_OUTFIT = {
  source:
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",

  items: [
    {
      productId: 1,
      match: 94,
    },
    {
      productId: 2,
      match: 91,
    },
    {
      productId: 3,
      match: 96,
    },
    {
      productId: 4,
      match: 89,
    },
  ],
};

export const CHEAPER_ITEMS = [
  {
    productId: 1,
    match: 88,
  },
  {
    productId: 2,
    match: 85,
  },
  {
    productId: 6,
    match: 87,
  },
  {
    productId: 4,
    match: 82,
  },
];

export const PREMIUM_ITEMS = [
  {
    productId: 1,
    match: 93,
  },
  {
    productId: 2,
    match: 91,
  },
  {
    productId: 6,
    match: 95,
  },
  {
    productId: 4,
    match: 90,
  },
];

export const COMPLETE_LOOK = {
  id: "cl1",

  items: [
    {
      productId: 1,
      current: true,
    },
    {
      productId: 2,
    },
    {
      productId: 6,
    },
    {
      productId: 4,
    },
  ],
};

export const steps = [
  "VERA is looking at your image…",
  "Identifying the pieces…",
  "Finding the closest matches…",
  "Comparing your options…",
];

export const HOLY_SHIT = {
  imageURL:
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
  originalPrice: 300000,
  veraPrice: 96000,
  similarity: 93,
  options: [
    { label: "Exact", price: 250000, match: 97 },
    { label: "Similar", price: 96000, match: 93 },
    { label: "Budget", price: 61000, match: 86 },
    { label: "Premium", price: 180000, match: 95 },
  ],
};

export const AI_LOOKS = [
  {
    id: 1,
    title: "Quiet Confidence",
    price: 142000,
    match: 96,
    reason: "Slim silhouette, muted tones, understated elegance",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&q=80",
  },
  {
    id: 2,
    title: "Modern Classic",
    price: 128000,
    match: 94,
    reason: "Clean lines, breathable fabrics, perfect for evening",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&q=80",
  },
  {
    id: 3,
    title: "Refined Minimal",
    price: 98000,
    match: 91,
    reason: "Lightweight, versatile, stays under budget",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80",
  },
];

export const OPTIONS = [
  { key: "cheaper", label: "Find it for less" },
  { key: "premium", label: "Better versions" },
  { key: "complete", label: "Get the full look" },
];
