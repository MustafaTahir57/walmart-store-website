export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  categorySlug: string;
  description: string;
  materials: string;
  safetyInfo: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  rating: number;
  reviewCount: number;
  soldCount: number;
}

export const products: Product[] = [
  {
    id: "boys-striped-tee-1",
    name: "Classic Striped Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format",
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format",
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&auto=format"
    ],
    category: "Boys Clothing",
    categorySlug: "boys",
    description: "A timeless striped t-shirt made from 100% organic cotton. Soft, breathable, and perfect for everyday adventures. Pre-shrunk fabric ensures lasting fit.",
    materials: "100% Organic Cotton, OEKO-TEX certified, Pre-shrunk, Machine washable",
    safetyInfo: "CPSIA compliant, Lead-free, Phthalate-free, Meets all US safety standards for children's clothing",
    sizes: ["2T", "3T", "4T", "5", "6", "7"],
    colors: ["Blue/White", "Navy/White", "Green/White"],
    isNew: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 124,
    soldCount: 890
  },
  {
    id: "girls-floral-dress-1",
    name: "Floral Print Summer Dress",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&auto=format",
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&auto=format"
    ],
    category: "Girls Clothing",
    categorySlug: "girls",
    description: "A beautiful floral dress perfect for sunny days. Features a twirl-worthy skirt and comfortable cotton lining. Easy pull-on style with back button closure.",
    materials: "Outer: 100% Cotton, Lining: 100% Cotton, Machine washable",
    safetyInfo: "CPSIA compliant, Lead-free, Phthalate-free, All buttons securely attached with reinforced stitching",
    sizes: ["2T", "3T", "4T", "5", "6", "6X"],
    colors: ["Pink Floral", "Blue Floral", "Yellow Floral"],
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 98,
    soldCount: 650
  },
  {
    id: "baby-onesie-set-1",
    name: "Organic Cotton Onesie 3-Pack",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&auto=format",
    images: [
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&auto=format"
    ],
    category: "Baby Clothing",
    categorySlug: "baby",
    description: "Super soft organic cotton onesies in a convenient 3-pack. Features lap shoulders for easy dressing and nickel-free snaps at the bottom for quick diaper changes.",
    materials: "100% GOTS Certified Organic Cotton, Nickel-free snaps, Pre-washed for softness",
    safetyInfo: "CPSIA compliant, Pediatrician recommended, Hypoallergenic, Free from harmful chemicals",
    sizes: ["0-3M", "3-6M", "6-9M", "9-12M", "12-18M"],
    colors: ["White/Mint/Gray", "Pastel Pink Set", "Blue/White/Gray"],
    isFeatured: true,
    rating: 4.9,
    reviewCount: 215,
    soldCount: 1420
  },
  {
    id: "kids-canvas-sneakers-1",
    name: "Canvas Sneakers - Classic Collection",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1555274175-75f79b09d5b8?w=600&auto=format",
    images: [
      "https://images.unsplash.com/photo-1555274175-75f79b09d5b8?w=600&auto=format"
    ],
    category: "Kids Shoes",
    categorySlug: "shoes",
    description: "Durable canvas sneakers with non-slip rubber soles. Features padded insoles for all-day comfort and easy-tie laces. Perfect for school and play.",
    materials: "Upper: Canvas, Sole: Rubber, Insole: Padded EVA foam",
    safetyInfo: "Non-toxic materials, Non-slip soles, ASTM F963 tested, Arch support design",
    sizes: ["5", "6", "7", "8", "9", "10", "11", "12", "13", "1", "2", "3"],
    colors: ["Sky Blue", "Coral Pink", "Navy", "White", "Mint Green"],
    isNew: true,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 76,
    soldCount: 530
  },
  {
    id: "boys-jogger-set-1",
    name: "Cozy Jogger Set",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&auto=format",
    images: [
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&auto=format"
    ],
    category: "Boys Clothing",
    categorySlug: "boys",
    description: "A matching hoodie and jogger set made from ultra-soft fleece. Perfect for school, play, or lounging at home. Features elastic waistband with drawstring.",
    materials: "80% Cotton, 20% Polyester, Fleece-lined, Machine washable",
    safetyInfo: "CPSIA compliant, Drawstring meets safety standards, Lead-free dyes",
    sizes: ["3T", "4T", "5", "6", "7", "8"],
    colors: ["Heather Gray", "Navy Blue", "Forest Green"],
    isFeatured: true,
    rating: 4.8,
    reviewCount: 142,
    soldCount: 780
  },
  {
    id: "girls-leggings-2pack",
    name: "Stretch Leggings 2-Pack",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&auto=format",
    images: [
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&auto=format"
    ],
    category: "Girls Clothing",
    categorySlug: "girls",
    description: "Ultra-stretchy leggings that move with active kids. Features a wide, comfortable waistband that stays put. Fade-resistant fabric maintains color wash after wash.",
    materials: "92% Cotton, 8% Spandex, Machine washable, Fade-resistant",
    safetyInfo: "CPSIA compliant, Lead-free, Skin-safe dyes, OEKO-TEX certified",
    sizes: ["2T", "3T", "4T", "5", "6", "6X", "7", "8"],
    colors: ["Black/Navy", "Pink/Purple", "Gray/White"],
    rating: 4.6,
    reviewCount: 89,
    soldCount: 1100
  },
  {
    id: "baby-romper-1",
    name: "Short Sleeve Romper",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&auto=format",
    images: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&auto=format"
    ],
    category: "Baby Clothing",
    categorySlug: "baby",
    description: "An adorable short-sleeve romper perfect for warm weather. Features snap closures for easy diaper changes and a cute decorative pocket.",
    materials: "100% Cotton, Jersey knit, Pre-washed, Machine washable",
    safetyInfo: "CPSIA compliant, Nickel-free snaps, Hypoallergenic fabric",
    sizes: ["0-3M", "3-6M", "6-9M", "9-12M", "12-18M", "18-24M"],
    colors: ["Mint", "Peach", "Light Blue", "White"],
    isNew: true,
    rating: 4.7,
    reviewCount: 63,
    soldCount: 410
  },
  {
    id: "kids-sandals-1",
    name: "Adventure Sandals",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1604001307862-2d953b875079?w=600&auto=format",
    images: [
      "https://images.unsplash.com/photo-1604001307862-2d953b875079?w=600&auto=format"
    ],
    category: "Kids Shoes",
    categorySlug: "shoes",
    description: "Durable sandals with adjustable velcro straps. Features quick-dry materials and non-slip soles. Perfect for beach, pool, or outdoor adventures.",
    materials: "Upper: Synthetic, Sole: Rubber, Quick-dry lining",
    safetyInfo: "Non-toxic materials, Non-slip soles, Toe protection, ASTM tested",
    sizes: ["5", "6", "7", "8", "9", "10", "11", "12", "13"],
    colors: ["Blue/Green", "Pink/Purple", "Gray/Orange"],
    rating: 4.5,
    reviewCount: 54,
    soldCount: 320
  },
];

export const getProductsByCategory = (categorySlug: string) => {
  return products.filter((p) => p.categorySlug === categorySlug);
};

export const getFeaturedProducts = () => {
  return products.filter((p) => p.isFeatured);
};

export const getProductById = (id: string) => {
  return products.find((p) => p.id === id);
};
