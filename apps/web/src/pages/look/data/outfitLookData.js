// each item(object) in this list makes up the complete look
// id, productId, price, image, (size, color)- options, 
export const LOOK_ITEMS = [
  {
    id: "shirt",
    productId: 1,
    name: "Black oversized shirt",
    price: 28000,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
    badge: "VERA’s pick",
    options: {
      size: {
        label: "Size",
        required: true,
        suggested: "M",
        values: [
          { value: "S", available: true },
          { value: "M", available: true },
          { value: "L", available: true },
          { value: "XL", available: false },
        ],
      },
      color: {
        label: "Color",
        required: true,
        suggested: "Black",
        values: [
          { value: "Black", available: true },
          { value: "Charcoal", available: true },
          // { value: "Red", available: false },

        ],
      },
    },
  },
  {
    id: "trousers",
    productId: 2,
    name: "Cream relaxed trousers",
    price: 31000,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
    options: {
      size: {
        label: "Size",
        required: true,
        suggested: "32",
        values: [
          { value: "30", available: true },
          { value: "32", available: true },
          { value: "34", available: true },
          { value: "36", available: true },
        ],
      },
      color: {
        label: "Color",
        required: true,
        suggested: "Cream",
        values: [
          { value: "Cream", available: true },
          { value: "Stone", available: true },
        ],
      },
    },
  },
  {
    id: "loafers",
    productId: 3,
    name: "Brown loafers",
    price: 24500,
    image:
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80",
    badge: "Works with the rest",
    options: {
      size: {
        label: "Size",
        required: true,
        suggested: "42",
        values: [
          { value: "41", available: true },
          { value: "42", available: true },
          { value: "43", available: false },
          { value: "44", available: true },
        ],
      },
    },
  },
  {
    id: "watch",
    productId: 4,
    name: "Minimal watch",
    price: 6000,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    options: {
      color: {
        label: "Color",
        required: true,
        suggested: "Gold",
        values: [
          { value: "Gold", available: true },
          { value: "Silver", available: true },
        ],
      },
    },
  },
];
