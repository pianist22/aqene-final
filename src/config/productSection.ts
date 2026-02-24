// src/config/productSection.ts

export type ProductSection = {
  slug: string;
  title: string;
  folder: string;
};

export const productSections: ProductSection[] = [
  { slug: "furniture", title: "Furniture", folder: "Furniture" }, // ✅ FIRST
  { slug: "kitchen", title: "Kitchen", folder: "Kitchen" },
  { slug: "wardrobe", title: "Wardrobe", folder: "Wardrobe" },
  { slug: "vanity", title: "Vanity", folder: "Vanity" },
  { slug: "doors", title: "Doors", folder: "Doors" },
  { slug: "paneling", title: "Panelling", folder: "Panelling" },
  { slug: "factory", title: "Factory", folder: "Factory" },
  { slug: "moodboards", title: "Moodboards", folder: "Moodboards" },
];
