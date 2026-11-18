export type Category = "Laptops" | "Phones" | "Audio" | "Wearables";
export type BrandGroup = "Apple Eco" | "Android Pro" | "Windows Ultra";
export type Brand =
  | "Apple"
  | "Samsung"
  | "Google"
  | "Sony"
  | "MSI"
  | "ASUS"
  | "HP";
export type ProductBadge = "new" | "popular";
export type ProductImage = { url: string; alt: string };
export type SpecGroup = {
  group: string;
  items: { key: string; value: string }[];
};

export const CATEGORIES: Category[] = [
  "Laptops",
  "Phones",
  "Audio",
  "Wearables",
];
export const BRAND_GROUPS: BrandGroup[] = [
  "Apple Eco",
  "Android Pro",
  "Windows Ultra",
];

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: Brand;
  brandGroup: BrandGroup;
  category: Category;
  priceCents: number;
  stock: number;
  image: ProductImage;
  description: string;
  tagline: string;
  details: string[];
  rating: number;
  reviewCount: number;
  createdAt: string;
  popularity: number;
  badges: ProductBadge[];
  specGroups: SpecGroup[];
  inTheBox: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "macbook-pro-16",
    slug: "macbook-pro-16",
    name: 'MacBook Pro 16" M4 Max',
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Laptops",
    priceCents: 349900,
    stock: 6,
    image: {
      url: "/src/assets/products/laptop-1.png",
      alt: 'MacBook Pro 16" M4 Max',
    },
    description:
      "16.2-inch Liquid Retina XDR at up to 1600 nits HDR, a 16-core M4 Max CPU with 40-core GPU, and up to 21 hours of battery in an aluminium chassis.",
    tagline: "Built for 8K timelines and huge code builds",
    details: [
      "Three Thunderbolt 5 ports, HDMI, SDXC slot",
      "Six-speaker sound with force-cancelling woofers",
      "12MP Center Stage camera",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.9,
    reviewCount: 812,
    createdAt: "2026-09-30T00:00:00.000Z",
    popularity: 812,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: 'MacBook Pro 16" M4 Max' },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "36GB unified memory · 1TB SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          {
            key: "Feature 1",
            value: "Three Thunderbolt 5 ports, HDMI, SDXC slot",
          },
          {
            key: "Feature 2",
            value: "Six-speaker sound with force-cancelling woofers",
          },
          { key: "Feature 3", value: "12MP Center Stage camera" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      'MacBook Pro 16" M4 Max',
      "USB-C to MagSafe 3 cable",
      "Quick start guide",
    ],
  },
  {
    id: "macbook-pro-14",
    slug: "macbook-pro-14",
    name: 'MacBook Pro 14" M4 Pro',
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Laptops",
    priceCents: 199900,
    stock: 13,
    image: {
      url: "/src/assets/products/laptop-2.png",
      alt: 'MacBook Pro 14" M4 Pro',
    },
    description:
      "14.2-inch Liquid Retina XDR with nano-texture option, 12-core M4 Pro CPU, 16-core GPU and up to 22 hours of battery.",
    tagline: "Studio power in a bag-friendly size",
    details: [
      "Thunderbolt 5 on every USB-C port",
      "Space Black anodised finish",
      "120Hz ProMotion display",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.8,
    reviewCount: 1104,
    createdAt: "2026-09-15T00:00:00.000Z",
    popularity: 1104,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: 'MacBook Pro 14" M4 Pro' },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "24GB unified memory · 512GB SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Thunderbolt 5 on every USB-C port" },
          { key: "Feature 2", value: "Space Black anodised finish" },
          { key: "Feature 3", value: "120Hz ProMotion display" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      'MacBook Pro 14" M4 Pro',
      "USB-C to MagSafe 3 cable",
      "Quick start guide",
    ],
  },
  {
    id: "macbook-pro-14-m4",
    slug: "macbook-pro-14-m4",
    name: 'MacBook Pro 14" M4',
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Laptops",
    priceCents: 159900,
    stock: 20,
    image: {
      url: "/src/assets/products/laptop-3.png",
      alt: 'MacBook Pro 14" M4',
    },
    description:
      "14.2-inch Liquid Retina XDR, 10-core M4 chip, three Thunderbolt 4 ports and up to 24 hours of battery life.",
    tagline: "The pro display, now at an easier price",
    details: [
      "1000 nits SDR outdoors",
      "HDMI and SDXC card slot",
      "12MP Center Stage camera",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.8,
    reviewCount: 640,
    createdAt: "2026-10-15T00:00:00.000Z",
    popularity: 640,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: 'MacBook Pro 14" M4' },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "16GB unified memory · 512GB SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "1000 nits SDR outdoors" },
          { key: "Feature 2", value: "HDMI and SDXC card slot" },
          { key: "Feature 3", value: "12MP Center Stage camera" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      'MacBook Pro 14" M4',
      "USB-C to MagSafe 3 cable",
      "Quick start guide",
    ],
  },
  {
    id: "macbook-air-15",
    slug: "macbook-air-15",
    name: 'MacBook Air 15" M4',
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Laptops",
    priceCents: 119900,
    stock: 8,
    image: {
      url: "/src/assets/products/laptop-1.png",
      alt: 'MacBook Air 15" M4',
    },
    description:
      "15.3-inch Liquid Retina display, 10-core M4 chip, six-speaker sound system and up to 18 hours of battery in an 11.5mm-thin body.",
    tagline: "Big screen, fanless and silent",
    details: [
      "Fanless, completely silent design",
      "Supports two external displays",
      "MagSafe charging",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.8,
    reviewCount: 1560,
    createdAt: "2026-10-25T00:00:00.000Z",
    popularity: 1560,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: 'MacBook Air 15" M4' },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "16GB unified memory · 256GB SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Fanless, completely silent design" },
          { key: "Feature 2", value: "Supports two external displays" },
          { key: "Feature 3", value: "MagSafe charging" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      'MacBook Air 15" M4',
      "USB-C to MagSafe 3 cable",
      "Quick start guide",
    ],
  },
  {
    id: "macbook-air-13",
    slug: "macbook-air-13",
    name: 'MacBook Air 13" M4',
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Laptops",
    priceCents: 99900,
    stock: 15,
    image: {
      url: "/src/assets/products/laptop-2.png",
      alt: 'MacBook Air 13" M4',
    },
    description:
      "13.6-inch Liquid Retina display, M4 chip with 10-core CPU and up to 18 hours of battery, all at 1.24kg.",
    tagline: "The everyday Mac that goes anywhere",
    details: [
      "Sky Blue, Silver, Starlight and Midnight",
      "12MP Center Stage camera",
      "Touch ID",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.8,
    reviewCount: 2210,
    createdAt: "2026-10-20T00:00:00.000Z",
    popularity: 2210,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: 'MacBook Air 13" M4' },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "16GB unified memory · 256GB SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          {
            key: "Feature 1",
            value: "Sky Blue, Silver, Starlight and Midnight",
          },
          { key: "Feature 2", value: "12MP Center Stage camera" },
          { key: "Feature 3", value: "Touch ID" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      'MacBook Air 13" M4',
      "USB-C power adapter",
      "Quick start guide",
    ],
  },
  {
    id: "macbook-air-13-m3",
    slug: "macbook-air-13-m3",
    name: 'MacBook Air 13" M3',
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Laptops",
    priceCents: 84900,
    stock: 22,
    image: {
      url: "/src/assets/products/laptop-3.png",
      alt: 'MacBook Air 13" M3',
    },
    description:
      "13.6-inch Liquid Retina, 8-core M3 chip, MagSafe charging and up to 18 hours of battery.",
    tagline: "Proven M3 speed for students",
    details: [
      "Two Thunderbolt ports",
      "Backlit Magic Keyboard",
      "1080p FaceTime HD camera",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.7,
    reviewCount: 980,
    createdAt: "2026-04-28T00:00:00.000Z",
    popularity: 980,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: 'MacBook Air 13" M3' },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "8GB unified memory · 256GB SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Two Thunderbolt ports" },
          { key: "Feature 2", value: "Backlit Magic Keyboard" },
          { key: "Feature 3", value: "1080p FaceTime HD camera" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      'MacBook Air 13" M3',
      "USB-C power adapter",
      "Quick start guide",
    ],
  },
  {
    id: "msi-prestige-13-ai-plus-evo",
    slug: "msi-prestige-13-ai-plus-evo",
    name: "MSI Prestige 13 AI+ Evo A2VM",
    brand: "MSI",
    brandGroup: "Windows Ultra",
    category: "Laptops",
    priceCents: 129900,
    stock: 12,
    image: {
      url: "/src/assets/products/laptop-1.png",
      alt: "MSI Prestige 13 AI+ Evo A2VM",
    },
    description:
      "13.3-inch 2.8K OLED display, Intel Core Ultra 7 258V processor and Intel Arc graphics in a magnesium-aluminium chassis weighing about 990g.",
    tagline: "A 990g OLED laptop for work anywhere",
    details: [
      "Intel Core Ultra 7 258V with Intel AI Boost NPU",
      "13.3-inch 2880 × 1800 OLED display",
      "Wi-Fi 7, Thunderbolt 4 and HDMI 2.1",
    ],
    rating: 4.7,
    reviewCount: 186,
    createdAt: "2026-10-10T00:00:00.000Z",
    popularity: 186,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "MSI" },
          { key: "Model", value: "MSI Prestige 13 AI+ Evo A2VM" },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "32GB LPDDR5x RAM · 1TB NVMe SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          {
            key: "Feature 1",
            value: "Intel Core Ultra 7 258V with Intel AI Boost NPU",
          },
          { key: "Feature 2", value: "13.3-inch 2880 × 1800 OLED display" },
          { key: "Feature 3", value: "Wi-Fi 7, Thunderbolt 4 and HDMI 2.1" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      "MSI Prestige 13 AI+ Evo A2VM",
      "65W USB-C power adapter",
      "Quick start guide",
    ],
  },
  {
    id: "msi-katana-15-hx-b14v",
    slug: "msi-katana-15-hx-b14v",
    name: "MSI Katana 15 HX B14V",
    brand: "MSI",
    brandGroup: "Windows Ultra",
    category: "Laptops",
    priceCents: 119900,
    stock: 16,
    image: {
      url: "/src/assets/products/laptop-2.png",
      alt: "MSI Katana 15 HX B14V",
    },
    description:
      "15.6-inch Full HD 144Hz gaming laptop with Intel Core i7-14650HX, NVIDIA GeForce RTX 4060 Laptop GPU and a four-zone RGB keyboard.",
    tagline: "Desktop-class gaming power with RTX graphics",
    details: [
      "NVIDIA GeForce RTX 4060 Laptop GPU with 8GB GDDR6",
      "15.6-inch 1920 × 1080 144Hz IPS-level display",
      "Cooler Boost cooling with shared-pipe design",
    ],
    rating: 4.6,
    reviewCount: 244,
    createdAt: "2026-09-15T00:00:00.000Z",
    popularity: 244,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "MSI" },
          { key: "Model", value: "MSI Katana 15 HX B14V" },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "16GB DDR5 RAM · 1TB NVMe SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          {
            key: "Feature 1",
            value: "NVIDIA GeForce RTX 4060 Laptop GPU with 8GB GDDR6",
          },
          {
            key: "Feature 2",
            value: "15.6-inch 1920 × 1080 144Hz IPS-level display",
          },
          {
            key: "Feature 3",
            value: "Cooler Boost cooling with shared-pipe design",
          },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      "MSI Katana 15 HX B14V",
      "240W power adapter",
      "Quick start guide",
    ],
  },
  {
    id: "msi-stealth-a16-ai-plus-a3xv",
    slug: "msi-stealth-a16-ai-plus-a3xv",
    name: "MSI Stealth A16 AI+ A3XV",
    brand: "MSI",
    brandGroup: "Windows Ultra",
    category: "Laptops",
    priceCents: 189900,
    stock: 8,
    image: {
      url: "/src/assets/products/laptop-3.png",
      alt: "MSI Stealth A16 AI+ A3XV",
    },
    description:
      "16-inch QHD+ 240Hz OLED laptop pairing AMD Ryzen AI 9 HX 370 with NVIDIA GeForce RTX 4070 Laptop graphics in a slim magnesium-aluminium body.",
    tagline: "Slim 16-inch OLED gaming and creation",
    details: [
      "AMD Ryzen AI 9 HX 370 with XDNA 2 NPU",
      "16-inch 2560 × 1600 OLED 240Hz display",
      "Per-key RGB keyboard and six-speaker audio",
    ],
    rating: 4.7,
    reviewCount: 132,
    createdAt: "2026-09-30T00:00:00.000Z",
    popularity: 132,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "MSI" },
          { key: "Model", value: "MSI Stealth A16 AI+ A3XV" },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "32GB LPDDR5x RAM · 1TB NVMe SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "AMD Ryzen AI 9 HX 370 with XDNA 2 NPU" },
          { key: "Feature 2", value: "16-inch 2560 × 1600 OLED 240Hz display" },
          {
            key: "Feature 3",
            value: "Per-key RGB keyboard and six-speaker audio",
          },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      "MSI Stealth A16 AI+ A3XV",
      "240W power adapter",
      "Quick start guide",
    ],
  },
  {
    id: "msi-summit-13-ai-plus-evo",
    slug: "msi-summit-13-ai-plus-evo",
    name: "MSI Summit 13 AI+ Evo A2VM",
    brand: "MSI",
    brandGroup: "Windows Ultra",
    category: "Laptops",
    priceCents: 139900,
    stock: 10,
    image: {
      url: "/src/assets/products/laptop-1.png",
      alt: "MSI Summit 13 AI+ Evo A2VM",
    },
    description:
      "13.3-inch Full HD+ touchscreen convertible with Intel Core Ultra 7 258V, a 360-degree hinge and MSI Pen support for working in laptop or tablet mode.",
    tagline: "A compact convertible for notes and presentations",
    details: [
      "13.3-inch 1920 × 1200 IPS-level touchscreen",
      "Intel Core Ultra 7 258V with Intel AI Boost NPU",
      "Thunderbolt 4, Wi-Fi 7 and fingerprint reader",
    ],
    rating: 4.6,
    reviewCount: 98,
    createdAt: "2026-09-20T00:00:00.000Z",
    popularity: 98,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "MSI" },
          { key: "Model", value: "MSI Summit 13 AI+ Evo A2VM" },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "32GB LPDDR5x RAM · 1TB NVMe SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          {
            key: "Feature 1",
            value: "13.3-inch 1920 × 1200 IPS-level touchscreen",
          },
          {
            key: "Feature 2",
            value: "Intel Core Ultra 7 258V with Intel AI Boost NPU",
          },
          {
            key: "Feature 3",
            value: "Thunderbolt 4, Wi-Fi 7 and fingerprint reader",
          },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      "MSI Summit 13 AI+ Evo A2VM",
      "MSI Pen",
      "65W USB-C power adapter",
      "Quick start guide",
    ],
  },
  {
    id: "asus-zenbook-14-oled-ux3405",
    slug: "asus-zenbook-14-oled-ux3405",
    name: "ASUS Zenbook 14 OLED (UX3405)",
    brand: "ASUS",
    brandGroup: "Windows Ultra",
    category: "Laptops",
    priceCents: 109900,
    stock: 18,
    image: {
      url: "/src/assets/products/laptop-2.png",
      alt: "ASUS Zenbook 14 OLED (UX3405)",
    },
    description:
      "14-inch 3K OLED 120Hz touchscreen with Intel Core Ultra 7 155H, Intel Arc graphics and a lightweight all-metal chassis.",
    tagline: "A bright 3K OLED ultraportable",
    details: [
      "14-inch 2880 × 1800 OLED 120Hz touchscreen",
      "Intel Core Ultra 7 155H with Intel AI Boost NPU",
      "Two Thunderbolt 4 ports and up to 15 hours of battery",
    ],
    rating: 4.7,
    reviewCount: 326,
    createdAt: "2026-08-31T00:00:00.000Z",
    popularity: 326,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "ASUS" },
          { key: "Model", value: "ASUS Zenbook 14 OLED (UX3405)" },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "16GB LPDDR5x RAM · 1TB NVMe SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          {
            key: "Feature 1",
            value: "14-inch 2880 × 1800 OLED 120Hz touchscreen",
          },
          {
            key: "Feature 2",
            value: "Intel Core Ultra 7 155H with Intel AI Boost NPU",
          },
          {
            key: "Feature 3",
            value: "Two Thunderbolt 4 ports and up to 15 hours of battery",
          },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      "ASUS Zenbook 14 OLED (UX3405)",
      "65W USB-C power adapter",
      "Quick start guide",
    ],
  },
  {
    id: "asus-rog-zephyrus-g16-gu605",
    slug: "asus-rog-zephyrus-g16-gu605",
    name: "ASUS ROG Zephyrus G16 (GU605)",
    brand: "ASUS",
    brandGroup: "Windows Ultra",
    category: "Laptops",
    priceCents: 199900,
    stock: 9,
    image: {
      url: "/src/assets/products/laptop-3.png",
      alt: "ASUS ROG Zephyrus G16 (GU605)",
    },
    description:
      "16-inch 2.5K OLED 240Hz gaming laptop with Intel Core Ultra 9 185H, NVIDIA GeForce RTX 4070 Laptop GPU and a CNC-milled aluminium chassis.",
    tagline: "OLED gaming in a precision aluminium body",
    details: [
      "16-inch 2560 × 1600 OLED 240Hz G-SYNC display",
      "NVIDIA GeForce RTX 4070 Laptop GPU with 8GB GDDR6",
      "ROG Intelligent Cooling with liquid metal",
    ],
    rating: 4.8,
    reviewCount: 287,
    createdAt: "2026-08-26T00:00:00.000Z",
    popularity: 287,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "ASUS" },
          { key: "Model", value: "ASUS ROG Zephyrus G16 (GU605)" },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "16GB LPDDR5x RAM · 1TB NVMe SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          {
            key: "Feature 1",
            value: "16-inch 2560 × 1600 OLED 240Hz G-SYNC display",
          },
          {
            key: "Feature 2",
            value: "NVIDIA GeForce RTX 4070 Laptop GPU with 8GB GDDR6",
          },
          {
            key: "Feature 3",
            value: "ROG Intelligent Cooling with liquid metal",
          },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      "ASUS ROG Zephyrus G16 (GU605)",
      "240W power adapter",
      "Quick start guide",
    ],
  },
  {
    id: "asus-tuf-gaming-a15-fa507",
    slug: "asus-tuf-gaming-a15-fa507",
    name: "ASUS TUF Gaming A15 (FA507)",
    brand: "ASUS",
    brandGroup: "Windows Ultra",
    category: "Laptops",
    priceCents: 109900,
    stock: 20,
    image: {
      url: "/src/assets/products/laptop-1.png",
      alt: "ASUS TUF Gaming A15 (FA507)",
    },
    description:
      "15.6-inch Full HD 144Hz gaming laptop with AMD Ryzen 7 7735HS, NVIDIA GeForce RTX 4060 Laptop GPU and an upgraded cooling system.",
    tagline: "Durable Ryzen and RTX gaming value",
    details: [
      "AMD Ryzen 7 7735HS eight-core processor",
      "NVIDIA GeForce RTX 4060 Laptop GPU with 8GB GDDR6",
      "MIL-STD-810H tested chassis and 90Wh battery",
    ],
    rating: 4.6,
    reviewCount: 412,
    createdAt: "2026-07-17T00:00:00.000Z",
    popularity: 412,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "ASUS" },
          { key: "Model", value: "ASUS TUF Gaming A15 (FA507)" },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "16GB DDR5 RAM · 1TB NVMe SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          {
            key: "Feature 1",
            value: "AMD Ryzen 7 7735HS eight-core processor",
          },
          {
            key: "Feature 2",
            value: "NVIDIA GeForce RTX 4060 Laptop GPU with 8GB GDDR6",
          },
          {
            key: "Feature 3",
            value: "MIL-STD-810H tested chassis and 90Wh battery",
          },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      "ASUS TUF Gaming A15 (FA507)",
      "240W power adapter",
      "Quick start guide",
    ],
  },
  {
    id: "asus-vivobook-s-15-s5507",
    slug: "asus-vivobook-s-15-s5507",
    name: "ASUS Vivobook S 15 (S5507)",
    brand: "ASUS",
    brandGroup: "Windows Ultra",
    category: "Laptops",
    priceCents: 99900,
    stock: 14,
    image: {
      url: "/src/assets/products/laptop-2.png",
      alt: "ASUS Vivobook S 15 (S5507)",
    },
    description:
      "15.6-inch 3K OLED 120Hz laptop powered by Snapdragon X Elite, with a dedicated Copilot key and a slim 1.42kg chassis.",
    tagline: "A thin Copilot+ PC with a 3K OLED screen",
    details: [
      "Snapdragon X Elite X1E-78-100 with 45 TOPS NPU",
      "15.6-inch 2880 × 1620 OLED 120Hz display",
      "Wi-Fi 7, USB4 and up to 18 hours of battery",
    ],
    rating: 4.5,
    reviewCount: 205,
    createdAt: "2026-09-10T00:00:00.000Z",
    popularity: 205,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "ASUS" },
          { key: "Model", value: "ASUS Vivobook S 15 (S5507)" },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "16GB LPDDR5x RAM · 1TB NVMe SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          {
            key: "Feature 1",
            value: "Snapdragon X Elite X1E-78-100 with 45 TOPS NPU",
          },
          {
            key: "Feature 2",
            value: "15.6-inch 2880 × 1620 OLED 120Hz display",
          },
          {
            key: "Feature 3",
            value: "Wi-Fi 7, USB4 and up to 18 hours of battery",
          },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      "ASUS Vivobook S 15 (S5507)",
      "90W USB-C power adapter",
      "Quick start guide",
    ],
  },
  {
    id: "hp-spectre-x360-14-eu0000",
    slug: "hp-spectre-x360-14-eu0000",
    name: "HP Spectre x360 14 (14-eu0000)",
    brand: "HP",
    brandGroup: "Windows Ultra",
    category: "Laptops",
    priceCents: 139900,
    stock: 11,
    image: {
      url: "/src/assets/products/laptop-3.png",
      alt: "HP Spectre x360 14 (14-eu0000)",
    },
    description:
      "14-inch 2.8K OLED touchscreen convertible with Intel Core Ultra 7 155H, a 360-degree hinge and a 9MP camera with hardware-enabled low-light adjustment.",
    tagline: "A premium OLED convertible with pen input",
    details: [
      "14-inch 2880 × 1800 OLED 120Hz touchscreen",
      "Intel Core Ultra 7 155H with Intel Arc graphics",
      "Poly Studio quad speakers and Wi-Fi 6E",
    ],
    rating: 4.7,
    reviewCount: 238,
    createdAt: "2026-08-16T00:00:00.000Z",
    popularity: 238,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "HP" },
          { key: "Model", value: "HP Spectre x360 14 (14-eu0000)" },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "16GB LPDDR5x RAM · 1TB NVMe SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          {
            key: "Feature 1",
            value: "14-inch 2880 × 1800 OLED 120Hz touchscreen",
          },
          {
            key: "Feature 2",
            value: "Intel Core Ultra 7 155H with Intel Arc graphics",
          },
          { key: "Feature 3", value: "Poly Studio quad speakers and Wi-Fi 6E" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      "HP Spectre x360 14 (14-eu0000)",
      "HP rechargeable MPP2.0 tilt pen",
      "65W USB-C power adapter",
      "Quick start guide",
    ],
  },
  {
    id: "hp-omen-16-wf0000",
    slug: "hp-omen-16-wf0000",
    name: "HP OMEN 16 (16-wf0000)",
    brand: "HP",
    brandGroup: "Windows Ultra",
    category: "Laptops",
    priceCents: 139900,
    stock: 13,
    image: {
      url: "/src/assets/products/laptop-1.png",
      alt: "HP OMEN 16 (16-wf0000)",
    },
    description:
      "16.1-inch Full HD 165Hz gaming laptop with Intel Core i7-14700HX, NVIDIA GeForce RTX 4060 Laptop GPU and OMEN Tempest Cooling.",
    tagline: "High-refresh gaming with RTX 4060 graphics",
    details: [
      "Intel Core i7-14700HX 20-core processor",
      "NVIDIA GeForce RTX 4060 Laptop GPU with 8GB GDDR6",
      "16.1-inch 1920 × 1080 165Hz anti-glare display",
    ],
    rating: 4.6,
    reviewCount: 301,
    createdAt: "2026-08-21T00:00:00.000Z",
    popularity: 301,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "HP" },
          { key: "Model", value: "HP OMEN 16 (16-wf0000)" },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "16GB DDR5 RAM · 1TB NVMe SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          {
            key: "Feature 1",
            value: "Intel Core i7-14700HX 20-core processor",
          },
          {
            key: "Feature 2",
            value: "NVIDIA GeForce RTX 4060 Laptop GPU with 8GB GDDR6",
          },
          {
            key: "Feature 3",
            value: "16.1-inch 1920 × 1080 165Hz anti-glare display",
          },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      "HP OMEN 16 (16-wf0000)",
      "230W power adapter",
      "Quick start guide",
    ],
  },
  {
    id: "hp-envy-x360-15-fe0000",
    slug: "hp-envy-x360-15-fe0000",
    name: "HP Envy x360 15 (15-fe0000)",
    brand: "HP",
    brandGroup: "Windows Ultra",
    category: "Laptops",
    priceCents: 99900,
    stock: 17,
    image: {
      url: "/src/assets/products/laptop-2.png",
      alt: "HP Envy x360 15 (15-fe0000)",
    },
    description:
      "15.6-inch Full HD OLED touchscreen convertible with Intel Core Ultra 7 155U, a 360-degree hinge and a 5MP IR camera for Windows Hello.",
    tagline: "A versatile 15-inch OLED touchscreen laptop",
    details: [
      "15.6-inch 1920 × 1080 OLED multitouch display",
      "Intel Core Ultra 7 155U with Intel graphics",
      "HP Wide Vision 5MP IR camera with privacy shutter",
    ],
    rating: 4.5,
    reviewCount: 174,
    createdAt: "2026-08-01T00:00:00.000Z",
    popularity: 174,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "HP" },
          { key: "Model", value: "HP Envy x360 15 (15-fe0000)" },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "16GB LPDDR5x RAM · 1TB NVMe SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          {
            key: "Feature 1",
            value: "15.6-inch 1920 × 1080 OLED multitouch display",
          },
          {
            key: "Feature 2",
            value: "Intel Core Ultra 7 155U with Intel graphics",
          },
          {
            key: "Feature 3",
            value: "HP Wide Vision 5MP IR camera with privacy shutter",
          },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      "HP Envy x360 15 (15-fe0000)",
      "65W USB-C power adapter",
      "Quick start guide",
    ],
  },
  {
    id: "hp-omnibook-ultra-flip-14-fh0000",
    slug: "hp-omnibook-ultra-flip-14-fh0000",
    name: "HP OmniBook Ultra Flip 14 (14-fh0000)",
    brand: "HP",
    brandGroup: "Windows Ultra",
    category: "Laptops",
    priceCents: 149900,
    stock: 7,
    image: {
      url: "/src/assets/products/laptop-3.png",
      alt: "HP OmniBook Ultra Flip 14 (14-fh0000)",
    },
    description:
      "14-inch 3K OLED 120Hz touchscreen convertible with Intel Core Ultra 7 258V, a 47 TOPS NPU and a haptic touchpad in a 1.34kg design.",
    tagline: "A next-generation AI convertible with 3K OLED",
    details: [
      "Intel Core Ultra 7 258V with 47 TOPS NPU",
      "14-inch 2880 × 1800 OLED 120Hz touchscreen",
      "9MP IR AI camera, Wi-Fi 7 and Thunderbolt 4",
    ],
    rating: 4.7,
    reviewCount: 116,
    createdAt: "2026-10-20T00:00:00.000Z",
    popularity: 116,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "HP" },
          { key: "Model", value: "HP OmniBook Ultra Flip 14 (14-fh0000)" },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "16GB LPDDR5x RAM · 1TB NVMe SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          {
            key: "Feature 1",
            value: "Intel Core Ultra 7 258V with 47 TOPS NPU",
          },
          {
            key: "Feature 2",
            value: "14-inch 2880 × 1800 OLED 120Hz touchscreen",
          },
          {
            key: "Feature 3",
            value: "9MP IR AI camera, Wi-Fi 7 and Thunderbolt 4",
          },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      "HP OmniBook Ultra Flip 14 (14-fh0000)",
      "65W USB-C power adapter",
      "Quick start guide",
    ],
  },
  {
    id: "galaxy-book4-pro",
    slug: "galaxy-book4-pro",
    name: 'Galaxy Book4 Pro 14"',
    brand: "Samsung",
    brandGroup: "Android Pro",
    category: "Laptops",
    priceCents: 144900,
    stock: 14,
    image: {
      url: "/src/assets/products/laptop-1.png",
      alt: 'Galaxy Book4 Pro 14"',
    },
    description:
      "14-inch 3K Dynamic AMOLED 2X touchscreen, Intel Core Ultra 7, and seamless Galaxy phone, tablet and Buds integration.",
    tagline: "AMOLED laptop that syncs with your Galaxy",
    details: [
      "Vision Booster anti-glare",
      "Thunderbolt 4 and HDMI",
      "Quad AKG speakers with Dolby Atmos",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.6,
    reviewCount: 380,
    createdAt: "2026-08-31T00:00:00.000Z",
    popularity: 380,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Samsung" },
          { key: "Model", value: 'Galaxy Book4 Pro 14"' },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "16GB RAM · 512GB SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Vision Booster anti-glare" },
          { key: "Feature 2", value: "Thunderbolt 4 and HDMI" },
          { key: "Feature 3", value: "Quad AKG speakers with Dolby Atmos" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      'Galaxy Book4 Pro 14"',
      "65W USB-C charger",
      "Quick start guide",
    ],
  },
  {
    id: "galaxy-book4-ultra",
    slug: "galaxy-book4-ultra",
    name: "Galaxy Book4 Ultra",
    brand: "Samsung",
    brandGroup: "Android Pro",
    category: "Laptops",
    priceCents: 239900,
    stock: 21,
    image: {
      url: "/src/assets/products/laptop-2.png",
      alt: "Galaxy Book4 Ultra",
    },
    description:
      "16-inch 3K Dynamic AMOLED 2X, Intel Core Ultra 9 and NVIDIA GeForce RTX 4070 for gaming and creative work.",
    tagline: "RTX power behind an AMOLED screen",
    details: [
      "120Hz touchscreen",
      "Up to 21 hours of video playback",
      "Full-size keyboard with numpad",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.6,
    reviewCount: 170,
    createdAt: "2026-08-11T00:00:00.000Z",
    popularity: 170,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Samsung" },
          { key: "Model", value: "Galaxy Book4 Ultra" },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "32GB RAM · 1TB SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "120Hz touchscreen" },
          { key: "Feature 2", value: "Up to 21 hours of video playback" },
          { key: "Feature 3", value: "Full-size keyboard with numpad" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Galaxy Book4 Ultra", "140W power adapter", "Quick start guide"],
  },
  {
    id: "galaxy-book4-pro-360",
    slug: "galaxy-book4-pro-360",
    name: "Galaxy Book4 Pro 360",
    brand: "Samsung",
    brandGroup: "Android Pro",
    category: "Laptops",
    priceCents: 164900,
    stock: 9,
    image: {
      url: "/src/assets/products/laptop-3.png",
      alt: "Galaxy Book4 Pro 360",
    },
    description:
      "16-inch 360-degree convertible with Dynamic AMOLED 2X, S Pen in the box and Intel Core Ultra 7.",
    tagline: "Flip it, fold it, write on it",
    details: [
      "S Pen included",
      "1.66kg convertible body",
      "Galaxy Continuity with phones and tablets",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.5,
    reviewCount: 210,
    createdAt: "2026-08-16T00:00:00.000Z",
    popularity: 210,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Samsung" },
          { key: "Model", value: "Galaxy Book4 Pro 360" },
          { key: "Category", value: "Laptops" },
          { key: "Configuration", value: "16GB RAM · 512GB SSD" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "S Pen included" },
          { key: "Feature 2", value: "1.66kg convertible body" },
          {
            key: "Feature 3",
            value: "Galaxy Continuity with phones and tablets",
          },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Galaxy Book4 Pro 360", "S Pen", "Quick start guide"],
  },
  {
    id: "iphone-16-pro-max",
    slug: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Phones",
    priceCents: 119900,
    stock: 16,
    image: {
      url: "/src/assets/products/phone-1.png",
      alt: "iPhone 16 Pro Max",
    },
    description:
      "6.9-inch Super Retina XDR with ProMotion, A18 Pro chip, titanium design and a 48MP Fusion camera with 5x Tetraprism zoom.",
    tagline: "Biggest display and 5x telephoto",
    details: [
      "Camera Control button",
      "4K 120fps Dolby Vision video",
      "Longest battery life on an iPhone",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.9,
    reviewCount: 2140,
    createdAt: "2026-10-05T00:00:00.000Z",
    popularity: 2140,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: "iPhone 16 Pro Max" },
          { key: "Category", value: "Phones" },
          { key: "Configuration", value: "256GB storage" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Camera Control button" },
          { key: "Feature 2", value: "4K 120fps Dolby Vision video" },
          { key: "Feature 3", value: "Longest battery life on an iPhone" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      "iPhone 16 Pro Max",
      "USB-C charge cable (1 m)",
      "Quick start guide",
    ],
  },
  {
    id: "iphone-16-pro",
    slug: "iphone-16-pro",
    name: "iPhone 16 Pro",
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Phones",
    priceCents: 99900,
    stock: 23,
    image: { url: "/src/assets/products/phone-2.png", alt: "iPhone 16 Pro" },
    description:
      "6.3-inch Super Retina XDR with ProMotion, A18 Pro, titanium frame and the same 5x telephoto as the Pro Max.",
    tagline: "Pro cameras in a one-hand size",
    details: [
      "48MP Fusion and Ultra Wide cameras",
      "Studio-quality four-mic recording",
      "Desert, Natural, White and Black Titanium",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.8,
    reviewCount: 1680,
    createdAt: "2026-10-05T00:00:00.000Z",
    popularity: 1680,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: "iPhone 16 Pro" },
          { key: "Category", value: "Phones" },
          { key: "Configuration", value: "128GB storage" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "48MP Fusion and Ultra Wide cameras" },
          { key: "Feature 2", value: "Studio-quality four-mic recording" },
          {
            key: "Feature 3",
            value: "Desert, Natural, White and Black Titanium",
          },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      "iPhone 16 Pro",
      "USB-C charge cable (1 m)",
      "Quick start guide",
    ],
  },
  {
    id: "iphone-16-plus",
    slug: "iphone-16-plus",
    name: "iPhone 16 Plus",
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Phones",
    priceCents: 89900,
    stock: 11,
    image: { url: "/src/assets/products/phone-3.png", alt: "iPhone 16 Plus" },
    description:
      "6.7-inch Super Retina XDR, A18 chip, Camera Control and Action button in a colour-infused glass back.",
    tagline: "Large screen, marathon battery",
    details: [
      "48MP Fusion camera with 2x zoom",
      "Spatial photo and video capture",
      "Up to 27 hours of video playback",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.7,
    reviewCount: 720,
    createdAt: "2026-10-05T00:00:00.000Z",
    popularity: 720,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: "iPhone 16 Plus" },
          { key: "Category", value: "Phones" },
          { key: "Configuration", value: "128GB storage" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "48MP Fusion camera with 2x zoom" },
          { key: "Feature 2", value: "Spatial photo and video capture" },
          { key: "Feature 3", value: "Up to 27 hours of video playback" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      "iPhone 16 Plus",
      "USB-C charge cable (1 m)",
      "Quick start guide",
    ],
  },
  {
    id: "iphone-16",
    slug: "iphone-16",
    name: "iPhone 16",
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Phones",
    priceCents: 79900,
    stock: 18,
    image: { url: "/src/assets/products/phone-1.png", alt: "iPhone 16" },
    description:
      "6.1-inch Super Retina XDR, A18 chip, Action button and a vertical dual-camera system for spatial capture.",
    tagline: "A18 speed with Camera Control",
    details: [
      "Ultramarine, Teal, Pink, White, Black",
      "Apple Intelligence ready",
      "MagSafe charging up to 25W",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.7,
    reviewCount: 1920,
    createdAt: "2026-10-05T00:00:00.000Z",
    popularity: 1920,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: "iPhone 16" },
          { key: "Category", value: "Phones" },
          { key: "Configuration", value: "128GB storage" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Ultramarine, Teal, Pink, White, Black" },
          { key: "Feature 2", value: "Apple Intelligence ready" },
          { key: "Feature 3", value: "MagSafe charging up to 25W" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["iPhone 16", "USB-C charge cable (1 m)", "Quick start guide"],
  },
  {
    id: "iphone-16e",
    slug: "iphone-16e",
    name: "iPhone 16e",
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Phones",
    priceCents: 59900,
    stock: 6,
    image: { url: "/src/assets/products/phone-2.png", alt: "iPhone 16e" },
    description:
      "6.1-inch OLED display, A18 chip, 48MP Fusion camera and Apple's own C1 modem with excellent battery life.",
    tagline: "Modern iPhone essentials, lower price",
    details: [
      "Face ID",
      "Action button",
      "Apple Intelligence ready",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.6,
    reviewCount: 540,
    createdAt: "2026-10-30T00:00:00.000Z",
    popularity: 540,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: "iPhone 16e" },
          { key: "Category", value: "Phones" },
          { key: "Configuration", value: "128GB storage" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Face ID" },
          { key: "Feature 2", value: "Action button" },
          { key: "Feature 3", value: "Apple Intelligence ready" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["iPhone 16e", "USB-C charge cable (1 m)", "Quick start guide"],
  },
  {
    id: "iphone-15-pro",
    slug: "iphone-15-pro",
    name: "iPhone 15 Pro",
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Phones",
    priceCents: 84900,
    stock: 13,
    image: { url: "/src/assets/products/phone-3.png", alt: "iPhone 15 Pro" },
    description:
      "6.1-inch ProMotion display, A17 Pro chip and a light titanium design with a 48MP main camera.",
    tagline: "Titanium flagship at a sharper price",
    details: [
      "USB 3 speeds over USB-C",
      "Action button",
      "3x telephoto",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.7,
    reviewCount: 1320,
    createdAt: "2026-02-27T00:00:00.000Z",
    popularity: 1320,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: "iPhone 15 Pro" },
          { key: "Category", value: "Phones" },
          { key: "Configuration", value: "128GB storage" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "USB 3 speeds over USB-C" },
          { key: "Feature 2", value: "Action button" },
          { key: "Feature 3", value: "3x telephoto" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      "iPhone 15 Pro",
      "USB-C charge cable (1 m)",
      "Quick start guide",
    ],
  },
  {
    id: "iphone-15",
    slug: "iphone-15",
    name: "iPhone 15",
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Phones",
    priceCents: 69900,
    stock: 20,
    image: { url: "/src/assets/products/phone-1.png", alt: "iPhone 15" },
    description:
      "6.1-inch Super Retina XDR with Dynamic Island, A16 Bionic, and a 48MP main camera with 2x zoom.",
    tagline: "Dynamic Island and 48MP for less",
    details: [
      "Colour-infused matte glass",
      "USB-C charging",
      "Roadside Assistance via satellite",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.6,
    reviewCount: 1100,
    createdAt: "2026-01-18T00:00:00.000Z",
    popularity: 1100,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: "iPhone 15" },
          { key: "Category", value: "Phones" },
          { key: "Configuration", value: "128GB storage" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Colour-infused matte glass" },
          { key: "Feature 2", value: "USB-C charging" },
          { key: "Feature 3", value: "Roadside Assistance via satellite" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["iPhone 15", "USB-C charge cable (1 m)", "Quick start guide"],
  },
  {
    id: "galaxy-s25-ultra",
    slug: "galaxy-s25-ultra",
    name: "Galaxy S25 Ultra",
    brand: "Samsung",
    brandGroup: "Android Pro",
    category: "Phones",
    priceCents: 129900,
    stock: 8,
    image: { url: "/src/assets/products/phone-2.png", alt: "Galaxy S25 Ultra" },
    description:
      "6.9-inch Dynamic AMOLED 2X, Snapdragon 8 Elite for Galaxy, titanium frame and a 200MP quad camera with 100x Space Zoom.",
    tagline: "200MP zoom king with built-in S Pen",
    details: [
      "Built-in S Pen",
      "Galaxy AI features",
      "Seven years of OS updates",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.8,
    reviewCount: 1450,
    createdAt: "2026-10-15T00:00:00.000Z",
    popularity: 1450,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Samsung" },
          { key: "Model", value: "Galaxy S25 Ultra" },
          { key: "Category", value: "Phones" },
          { key: "Configuration", value: "256GB storage · 12GB RAM" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Built-in S Pen" },
          { key: "Feature 2", value: "Galaxy AI features" },
          { key: "Feature 3", value: "Seven years of OS updates" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Galaxy S25 Ultra", "SIM ejection pin", "Quick start guide"],
  },
  {
    id: "galaxy-s25-plus",
    slug: "galaxy-s25-plus",
    name: "Galaxy S25+",
    brand: "Samsung",
    brandGroup: "Android Pro",
    category: "Phones",
    priceCents: 99900,
    stock: 15,
    image: { url: "/src/assets/products/phone-3.png", alt: "Galaxy S25+" },
    description:
      "6.7-inch QHD+ Dynamic AMOLED 2X, Snapdragon 8 Elite and a 50MP triple camera with 3x optical zoom.",
    tagline: "Big screen flagship without the pen",
    details: [
      "45W Super Fast Charging",
      "Armor Aluminum frame",
      "IP68 dust and water resistance",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.7,
    reviewCount: 640,
    createdAt: "2026-10-15T00:00:00.000Z",
    popularity: 640,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Samsung" },
          { key: "Model", value: "Galaxy S25+" },
          { key: "Category", value: "Phones" },
          { key: "Configuration", value: "256GB storage · 12GB RAM" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "45W Super Fast Charging" },
          { key: "Feature 2", value: "Armor Aluminum frame" },
          { key: "Feature 3", value: "IP68 dust and water resistance" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Galaxy S25+", "SIM ejection pin", "Quick start guide"],
  },
  {
    id: "galaxy-s25",
    slug: "galaxy-s25",
    name: "Galaxy S25",
    brand: "Samsung",
    brandGroup: "Android Pro",
    category: "Phones",
    priceCents: 79900,
    stock: 22,
    image: { url: "/src/assets/products/phone-1.png", alt: "Galaxy S25" },
    description:
      "6.2-inch Dynamic AMOLED 2X at 120Hz, Snapdragon 8 Elite and a 50MP triple camera in a pocketable body.",
    tagline: "Compact Galaxy AI flagship",
    details: [
      "Now Brief and Circle to Search",
      "Corning Gorilla Glass Victus 2",
      "Seven years of updates",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.7,
    reviewCount: 880,
    createdAt: "2026-10-15T00:00:00.000Z",
    popularity: 880,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Samsung" },
          { key: "Model", value: "Galaxy S25" },
          { key: "Category", value: "Phones" },
          { key: "Configuration", value: "128GB storage · 12GB RAM" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Now Brief and Circle to Search" },
          { key: "Feature 2", value: "Corning Gorilla Glass Victus 2" },
          { key: "Feature 3", value: "Seven years of updates" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Galaxy S25", "SIM ejection pin", "Quick start guide"],
  },
  {
    id: "galaxy-z-fold6",
    slug: "galaxy-z-fold6",
    name: "Galaxy Z Fold6",
    brand: "Samsung",
    brandGroup: "Android Pro",
    category: "Phones",
    priceCents: 189900,
    stock: 10,
    image: { url: "/src/assets/products/phone-2.png", alt: "Galaxy Z Fold6" },
    description:
      "7.6-inch foldable main screen and 6.3-inch cover display, Snapdragon 8 Gen 3 and three-app multitasking.",
    tagline: "A phone that opens into a tablet",
    details: [
      "S Pen Fold Edition support",
      "Lighter 239g build",
      "Flex Mode hands-free shots",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.6,
    reviewCount: 610,
    createdAt: "2026-08-06T00:00:00.000Z",
    popularity: 610,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Samsung" },
          { key: "Model", value: "Galaxy Z Fold6" },
          { key: "Category", value: "Phones" },
          { key: "Configuration", value: "256GB storage · 12GB RAM" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "S Pen Fold Edition support" },
          { key: "Feature 2", value: "Lighter 239g build" },
          { key: "Feature 3", value: "Flex Mode hands-free shots" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Galaxy Z Fold6", "SIM ejection pin", "Quick start guide"],
  },
  {
    id: "galaxy-z-flip6",
    slug: "galaxy-z-flip6",
    name: "Galaxy Z Flip6",
    brand: "Samsung",
    brandGroup: "Android Pro",
    category: "Phones",
    priceCents: 109900,
    stock: 17,
    image: { url: "/src/assets/products/phone-3.png", alt: "Galaxy Z Flip6" },
    description:
      "6.7-inch foldable display, 3.4-inch FlexWindow cover screen, Snapdragon 8 Gen 3 and a new 50MP main camera.",
    tagline: "Pocket-sized flip with a 50MP camera",
    details: [
      "Use apps on the cover screen",
      "FlexCam hands-free selfies",
      "IP48 water resistance",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.6,
    reviewCount: 590,
    createdAt: "2026-08-06T00:00:00.000Z",
    popularity: 590,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Samsung" },
          { key: "Model", value: "Galaxy Z Flip6" },
          { key: "Category", value: "Phones" },
          { key: "Configuration", value: "256GB storage · 12GB RAM" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Use apps on the cover screen" },
          { key: "Feature 2", value: "FlexCam hands-free selfies" },
          { key: "Feature 3", value: "IP48 water resistance" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Galaxy Z Flip6", "SIM ejection pin", "Quick start guide"],
  },
  {
    id: "galaxy-a56",
    slug: "galaxy-a56",
    name: "Galaxy A56 5G",
    brand: "Samsung",
    brandGroup: "Android Pro",
    category: "Phones",
    priceCents: 44900,
    stock: 24,
    image: { url: "/src/assets/products/phone-1.png", alt: "Galaxy A56 5G" },
    description:
      "6.7-inch Super AMOLED at 120Hz, Exynos 1580, 50MP triple camera and six years of OS updates.",
    tagline: "Flagship looks at a mid-range price",
    details: [
      "45W fast charging",
      "IP67 water resistance",
      "Awesome Intelligence AI tools",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.5,
    reviewCount: 430,
    createdAt: "2026-09-30T00:00:00.000Z",
    popularity: 430,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Samsung" },
          { key: "Model", value: "Galaxy A56 5G" },
          { key: "Category", value: "Phones" },
          { key: "Configuration", value: "128GB storage · 8GB RAM" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "45W fast charging" },
          { key: "Feature 2", value: "IP67 water resistance" },
          { key: "Feature 3", value: "Awesome Intelligence AI tools" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Galaxy A56 5G", "SIM ejection pin", "Quick start guide"],
  },
  {
    id: "pixel-9-pro",
    slug: "pixel-9-pro",
    name: "Pixel 9 Pro",
    brand: "Google",
    brandGroup: "Android Pro",
    category: "Phones",
    priceCents: 99900,
    stock: 12,
    image: { url: "/src/assets/products/phone-2.png", alt: "Pixel 9 Pro" },
    description:
      "6.3-inch Super Actua display, Google Tensor G4, 50MP main, 48MP ultrawide and 48MP 5x telephoto cameras.",
    tagline: "Google AI with a pro triple camera",
    details: [
      "Gemini built in",
      "Video Boost and Night Sight",
      "Seven years of updates",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.7,
    reviewCount: 720,
    createdAt: "2026-08-16T00:00:00.000Z",
    popularity: 720,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Google" },
          { key: "Model", value: "Pixel 9 Pro" },
          { key: "Category", value: "Phones" },
          { key: "Configuration", value: "128GB storage · 16GB RAM" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Gemini built in" },
          { key: "Feature 2", value: "Video Boost and Night Sight" },
          { key: "Feature 3", value: "Seven years of updates" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Pixel 9 Pro", "USB-C to USB-C cable", "Quick start guide"],
  },
  {
    id: "pixel-9-pro-xl",
    slug: "pixel-9-pro-xl",
    name: "Pixel 9 Pro XL",
    brand: "Google",
    brandGroup: "Android Pro",
    category: "Phones",
    priceCents: 109900,
    stock: 19,
    image: { url: "/src/assets/products/phone-3.png", alt: "Pixel 9 Pro XL" },
    description:
      "6.8-inch Super Actua display at up to 3000 nits, Tensor G4 and the full Pro camera system with 30x Super Res Zoom.",
    tagline: "Bigger Pixel, bigger battery",
    details: [
      "Add Me and Magic Editor",
      "Satellite SOS",
      "Polished aluminium frame",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.7,
    reviewCount: 520,
    createdAt: "2026-08-16T00:00:00.000Z",
    popularity: 520,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Google" },
          { key: "Model", value: "Pixel 9 Pro XL" },
          { key: "Category", value: "Phones" },
          { key: "Configuration", value: "128GB storage · 16GB RAM" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Add Me and Magic Editor" },
          { key: "Feature 2", value: "Satellite SOS" },
          { key: "Feature 3", value: "Polished aluminium frame" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Pixel 9 Pro XL", "USB-C to USB-C cable", "Quick start guide"],
  },
  {
    id: "pixel-9",
    slug: "pixel-9",
    name: "Pixel 9",
    brand: "Google",
    brandGroup: "Android Pro",
    category: "Phones",
    priceCents: 79900,
    stock: 7,
    image: { url: "/src/assets/products/phone-1.png", alt: "Pixel 9" },
    description:
      "6.3-inch Actua display, Tensor G4, 50MP main and 48MP ultrawide cameras in a satin aluminium frame.",
    tagline: "The helpful everyday Pixel",
    details: [
      "Gemini Live conversations",
      "Call Screen and Clear Calling",
      "IP68 rating",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.6,
    reviewCount: 640,
    createdAt: "2026-08-16T00:00:00.000Z",
    popularity: 640,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Google" },
          { key: "Model", value: "Pixel 9" },
          { key: "Category", value: "Phones" },
          { key: "Configuration", value: "128GB storage · 12GB RAM" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Gemini Live conversations" },
          { key: "Feature 2", value: "Call Screen and Clear Calling" },
          { key: "Feature 3", value: "IP68 rating" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Pixel 9", "USB-C to USB-C cable", "Quick start guide"],
  },
  {
    id: "pixel-9a",
    slug: "pixel-9a",
    name: "Pixel 9a",
    brand: "Google",
    brandGroup: "Android Pro",
    category: "Phones",
    priceCents: 49900,
    stock: 14,
    image: { url: "/src/assets/products/phone-2.png", alt: "Pixel 9a" },
    description:
      "6.3-inch Actua display, Tensor G4, 48MP main camera and the biggest battery ever in an A-series Pixel.",
    tagline: "Pixel camera magic for less",
    details: [
      "Flat camera bar design",
      "Seven years of updates",
      "IP68 water resistance",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.6,
    reviewCount: 390,
    createdAt: "2026-10-10T00:00:00.000Z",
    popularity: 390,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Google" },
          { key: "Model", value: "Pixel 9a" },
          { key: "Category", value: "Phones" },
          { key: "Configuration", value: "128GB storage · 8GB RAM" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Flat camera bar design" },
          { key: "Feature 2", value: "Seven years of updates" },
          { key: "Feature 3", value: "IP68 water resistance" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Pixel 9a", "USB-C to USB-C cable", "Quick start guide"],
  },
  {
    id: "airpods-max",
    slug: "airpods-max",
    name: "AirPods Max (USB-C)",
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Audio",
    priceCents: 54900,
    stock: 21,
    image: {
      url: "/src/assets/products/audio-1.png",
      alt: "AirPods Max (USB-C)",
    },
    description:
      "Custom 40mm dynamic drivers, Active Noise Cancellation, Transparency mode and Personalised Spatial Audio with head tracking.",
    tagline: "Over-ear sound in aluminium and mesh",
    details: [
      "Up to 20 hours of listening",
      "Digital Crown for volume",
      "Five colours",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.6,
    reviewCount: 980,
    createdAt: "2026-06-27T00:00:00.000Z",
    popularity: 980,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: "AirPods Max (USB-C)" },
          { key: "Category", value: "Audio" },
          { key: "Configuration", value: "USB-C · Smart Case" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Up to 20 hours of listening" },
          { key: "Feature 2", value: "Digital Crown for volume" },
          { key: "Feature 3", value: "Five colours" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["AirPods Max (USB-C)", "Smart Case", "Quick start guide"],
  },
  {
    id: "airpods-pro-2",
    slug: "airpods-pro-2",
    name: "AirPods Pro 2",
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Audio",
    priceCents: 24900,
    stock: 9,
    image: { url: "/src/assets/products/audio-2.png", alt: "AirPods Pro 2" },
    description:
      "H2 chip with Adaptive Audio, up to 2x more Active Noise Cancellation, hearing health features and a USB-C MagSafe case.",
    tagline: "Class-leading noise cancelling earbuds",
    details: [
      "Hearing Aid and Hearing Test features",
      "IP54 dust, sweat and water resistance",
      "Case with speaker and lanyard loop",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.8,
    reviewCount: 3120,
    createdAt: "2026-07-17T00:00:00.000Z",
    popularity: 3120,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: "AirPods Pro 2" },
          { key: "Category", value: "Audio" },
          { key: "Configuration", value: "USB-C MagSafe case" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Hearing Aid and Hearing Test features" },
          { key: "Feature 2", value: "IP54 dust, sweat and water resistance" },
          { key: "Feature 3", value: "Case with speaker and lanyard loop" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["AirPods Pro 2", "Ear tips (XS, S, M, L)", "Quick start guide"],
  },
  {
    id: "airpods-4-anc",
    slug: "airpods-4-anc",
    name: "AirPods 4 with Active Noise Cancellation",
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Audio",
    priceCents: 17900,
    stock: 16,
    image: {
      url: "/src/assets/products/audio-1.png",
      alt: "AirPods 4 with Active Noise Cancellation",
    },
    description:
      "Redesigned open-fit AirPods with H2 chip, Active Noise Cancellation, Transparency and a wireless charging case.",
    tagline: "Open-fit comfort that still blocks noise",
    details: [
      "Voice Isolation for calls",
      "Head gestures for Siri",
      "Case speaker for Find My",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.6,
    reviewCount: 860,
    createdAt: "2026-08-26T00:00:00.000Z",
    popularity: 860,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: "AirPods 4 with Active Noise Cancellation" },
          { key: "Category", value: "Audio" },
          { key: "Configuration", value: "Wireless charging case" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Voice Isolation for calls" },
          { key: "Feature 2", value: "Head gestures for Siri" },
          { key: "Feature 3", value: "Case speaker for Find My" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      "AirPods 4 with Active Noise Cancellation",
      "USB-C charge cable",
      "Quick start guide",
    ],
  },
  {
    id: "airpods-4",
    slug: "airpods-4",
    name: "AirPods 4",
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Audio",
    priceCents: 12900,
    stock: 23,
    image: { url: "/src/assets/products/audio-2.png", alt: "AirPods 4" },
    description:
      "Open-fit design with H2 chip, Personalised Spatial Audio and the smallest AirPods case yet, charged over USB-C.",
    tagline: "Simple, comfy everyday AirPods",
    details: [
      "Up to 30 hours with the case",
      "IP54 rating",
      "Automatic switching between Apple devices",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.5,
    reviewCount: 720,
    createdAt: "2026-08-26T00:00:00.000Z",
    popularity: 720,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: "AirPods 4" },
          { key: "Category", value: "Audio" },
          { key: "Configuration", value: "USB-C charging case" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Up to 30 hours with the case" },
          { key: "Feature 2", value: "IP54 rating" },
          {
            key: "Feature 3",
            value: "Automatic switching between Apple devices",
          },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["AirPods 4", "USB-C charge cable", "Quick start guide"],
  },
  {
    id: "sony-wh-1000xm5",
    slug: "sony-wh-1000xm5",
    name: "Sony WH-1000XM5",
    brand: "Sony",
    brandGroup: "Android Pro",
    category: "Audio",
    priceCents: 39900,
    stock: 11,
    image: { url: "/src/assets/products/audio-1.png", alt: "Sony WH-1000XM5" },
    description:
      "Eight microphones and two processors for industry-leading noise cancelling, 30mm carbon-fibre drivers and 30-hour battery.",
    tagline: "Benchmark noise cancelling headphones",
    details: [
      "Speak-to-Chat auto pause",
      "3 minutes charge for 3 hours play",
      "Multipoint Bluetooth",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.7,
    reviewCount: 2240,
    createdAt: "2026-03-19T00:00:00.000Z",
    popularity: 2240,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Sony" },
          { key: "Model", value: "Sony WH-1000XM5" },
          { key: "Category", value: "Audio" },
          { key: "Configuration", value: "Carrying case" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Speak-to-Chat auto pause" },
          { key: "Feature 2", value: "3 minutes charge for 3 hours play" },
          { key: "Feature 3", value: "Multipoint Bluetooth" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Sony WH-1000XM5", "Carrying case", "Quick start guide"],
  },
  {
    id: "sony-wf-1000xm5",
    slug: "sony-wf-1000xm5",
    name: "Sony WF-1000XM5",
    brand: "Sony",
    brandGroup: "Android Pro",
    category: "Audio",
    priceCents: 29900,
    stock: 18,
    image: { url: "/src/assets/products/audio-2.png", alt: "Sony WF-1000XM5" },
    description:
      "Integrated Processor V2 and HD Noise Cancelling QN2e, 8.4mm Dynamic Driver X and LDAC Hi-Res Audio Wireless.",
    tagline: "Sony's smallest, best ANC earbuds",
    details: [
      "Bone conduction call sensor",
      "Up to 24 hours with case",
      "IPX4 rating",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.6,
    reviewCount: 1120,
    createdAt: "2026-04-28T00:00:00.000Z",
    popularity: 1120,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Sony" },
          { key: "Model", value: "Sony WF-1000XM5" },
          { key: "Category", value: "Audio" },
          { key: "Configuration", value: "Charging case" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Bone conduction call sensor" },
          { key: "Feature 2", value: "Up to 24 hours with case" },
          { key: "Feature 3", value: "IPX4 rating" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      "Sony WF-1000XM5",
      "Foam ear tips (4 sizes)",
      "Quick start guide",
    ],
  },
  {
    id: "sony-ult-wear",
    slug: "sony-ult-wear",
    name: "Sony ULT WEAR",
    brand: "Sony",
    brandGroup: "Android Pro",
    category: "Audio",
    priceCents: 19900,
    stock: 6,
    image: { url: "/src/assets/products/audio-1.png", alt: "Sony ULT WEAR" },
    description:
      "ULT button for deep bass, dual noise sensor ANC, 30-hour battery and soft fit leather ear pads.",
    tagline: "Massive bass at the push of a button",
    details: [
      "Quick Charge 3 min = 1.5 hours",
      "Multipoint connection",
      "Folds flat for travel",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.4,
    reviewCount: 430,
    createdAt: "2026-06-07T00:00:00.000Z",
    popularity: 430,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Sony" },
          { key: "Model", value: "Sony ULT WEAR" },
          { key: "Category", value: "Audio" },
          { key: "Configuration", value: "Carrying pouch" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Quick Charge 3 min = 1.5 hours" },
          { key: "Feature 2", value: "Multipoint connection" },
          { key: "Feature 3", value: "Folds flat for travel" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Sony ULT WEAR", "Carrying pouch", "Quick start guide"],
  },
  {
    id: "sony-linkbuds-fit",
    slug: "sony-linkbuds-fit",
    name: "Sony LinkBuds Fit",
    brand: "Sony",
    brandGroup: "Android Pro",
    category: "Audio",
    priceCents: 17900,
    stock: 13,
    image: {
      url: "/src/assets/products/audio-2.png",
      alt: "Sony LinkBuds Fit",
    },
    description:
      "Air Fitting Supporter wings, Integrated Processor V2 noise cancelling and 8.4mm Dynamic Driver X at just 4.9g per bud.",
    tagline: "Feather-light earbuds that stay put",
    details: [
      "Ambient sound mode",
      "IPX4 rating",
      "Up to 21 hours with case",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.4,
    reviewCount: 320,
    createdAt: "2026-08-16T00:00:00.000Z",
    popularity: 320,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Sony" },
          { key: "Model", value: "Sony LinkBuds Fit" },
          { key: "Category", value: "Audio" },
          { key: "Configuration", value: "Charging case" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Ambient sound mode" },
          { key: "Feature 2", value: "IPX4 rating" },
          { key: "Feature 3", value: "Up to 21 hours with case" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: [
      "Sony LinkBuds Fit",
      "Fitting supporters (3 sizes)",
      "Quick start guide",
    ],
  },
  {
    id: "galaxy-buds3-pro",
    slug: "galaxy-buds3-pro",
    name: "Galaxy Buds3 Pro",
    brand: "Samsung",
    brandGroup: "Android Pro",
    category: "Audio",
    priceCents: 24900,
    stock: 20,
    image: { url: "/src/assets/products/audio-1.png", alt: "Galaxy Buds3 Pro" },
    description:
      "Adaptive ANC, two-way speakers with 24-bit Hi-Fi sound and a Blade Light stem that responds to pinch and swipe.",
    tagline: "Blade-light design with smart ANC",
    details: [
      "Real-time Interpreter with Galaxy AI",
      "IP57 dust and water resistance",
      "Up to 30 hours with case",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.5,
    reviewCount: 760,
    createdAt: "2026-08-06T00:00:00.000Z",
    popularity: 760,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Samsung" },
          { key: "Model", value: "Galaxy Buds3 Pro" },
          { key: "Category", value: "Audio" },
          { key: "Configuration", value: "Charging case" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Real-time Interpreter with Galaxy AI" },
          { key: "Feature 2", value: "IP57 dust and water resistance" },
          { key: "Feature 3", value: "Up to 30 hours with case" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Galaxy Buds3 Pro", "Ear tips (S, M, L)", "Quick start guide"],
  },
  {
    id: "galaxy-buds3",
    slug: "galaxy-buds3",
    name: "Galaxy Buds3",
    brand: "Samsung",
    brandGroup: "Android Pro",
    category: "Audio",
    priceCents: 17900,
    stock: 8,
    image: { url: "/src/assets/products/audio-2.png", alt: "Galaxy Buds3" },
    description:
      "Open-type design with Active Noise Cancellation, 12mm drivers and pinch controls on the stem.",
    tagline: "Open-type comfort with ANC",
    details: [
      "Galaxy AI live translate",
      "Auto Switch across Galaxy devices",
      "Up to 30 hours with case",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.4,
    reviewCount: 410,
    createdAt: "2026-08-06T00:00:00.000Z",
    popularity: 410,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Samsung" },
          { key: "Model", value: "Galaxy Buds3" },
          { key: "Category", value: "Audio" },
          { key: "Configuration", value: "Charging case" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Galaxy AI live translate" },
          { key: "Feature 2", value: "Auto Switch across Galaxy devices" },
          { key: "Feature 3", value: "Up to 30 hours with case" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Galaxy Buds3", "USB-C cable", "Quick start guide"],
  },
  {
    id: "galaxy-buds-fe",
    slug: "galaxy-buds-fe",
    name: "Galaxy Buds FE",
    brand: "Samsung",
    brandGroup: "Android Pro",
    category: "Audio",
    priceCents: 9900,
    stock: 15,
    image: { url: "/src/assets/products/audio-1.png", alt: "Galaxy Buds FE" },
    description:
      "Active Noise Cancellation, a single 12mm driver with deep bass and wing tips for a secure fit.",
    tagline: "Punchy sound, friendly price",
    details: [
      "Up to 21 hours with case",
      "Google Fast Pair",
      "Touch controls",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.4,
    reviewCount: 690,
    createdAt: "2026-03-09T00:00:00.000Z",
    popularity: 690,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Samsung" },
          { key: "Model", value: "Galaxy Buds FE" },
          { key: "Category", value: "Audio" },
          { key: "Configuration", value: "Charging case" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Up to 21 hours with case" },
          { key: "Feature 2", value: "Google Fast Pair" },
          { key: "Feature 3", value: "Touch controls" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Galaxy Buds FE", "Wing tips (2 sizes)", "Quick start guide"],
  },
  {
    id: "galaxy-buds-core",
    slug: "galaxy-buds-core",
    name: "Galaxy Buds Core",
    brand: "Samsung",
    brandGroup: "Android Pro",
    category: "Audio",
    priceCents: 5900,
    stock: 22,
    image: { url: "/src/assets/products/audio-2.png", alt: "Galaxy Buds Core" },
    description:
      "Active Noise Cancellation, wing-tip fit and up to 35 hours of listening with the case.",
    tagline: "Essential ANC earbuds for every day",
    details: [
      "IP54 rating",
      "Galaxy AI Interpreter support",
      "Fast pairing with Galaxy phones",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.3,
    reviewCount: 280,
    createdAt: "2026-09-15T00:00:00.000Z",
    popularity: 280,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Samsung" },
          { key: "Model", value: "Galaxy Buds Core" },
          { key: "Category", value: "Audio" },
          { key: "Configuration", value: "Charging case" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "IP54 rating" },
          { key: "Feature 2", value: "Galaxy AI Interpreter support" },
          { key: "Feature 3", value: "Fast pairing with Galaxy phones" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Galaxy Buds Core", "Ear tips (S, M, L)", "Quick start guide"],
  },
  {
    id: "apple-watch-ultra-2",
    slug: "apple-watch-ultra-2",
    name: "Apple Watch Ultra 2",
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Wearables",
    priceCents: 79900,
    stock: 10,
    image: {
      url: "/src/assets/products/wearable-1.png",
      alt: "Apple Watch Ultra 2",
    },
    description:
      "49mm titanium case with the brightest Apple display at 3000 nits, precision dual-frequency GPS and up to 36 hours of battery.",
    tagline: "Rugged titanium watch for every adventure",
    details: [
      "100m water resistance and dive computer",
      "Customisable Action button",
      "Black or Natural titanium",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.8,
    reviewCount: 1340,
    createdAt: "2026-06-07T00:00:00.000Z",
    popularity: 1340,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: "Apple Watch Ultra 2" },
          { key: "Category", value: "Wearables" },
          { key: "Configuration", value: "49mm titanium · cellular" },
        ],
      },
      {
        group: "Design and features",
        items: [
          {
            key: "Feature 1",
            value: "100m water resistance and dive computer",
          },
          { key: "Feature 2", value: "Customisable Action button" },
          { key: "Feature 3", value: "Black or Natural titanium" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Apple Watch Ultra 2", "Band", "Quick start guide"],
  },
  {
    id: "apple-watch-series-10",
    slug: "apple-watch-series-10",
    name: "Apple Watch Series 10 46mm",
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Wearables",
    priceCents: 42900,
    stock: 17,
    image: {
      url: "/src/assets/products/wearable-2.png",
      alt: "Apple Watch Series 10 46mm",
    },
    description:
      "46mm wide-angle OLED display, S10 chip, sleep apnoea notifications and fast charging to 80% in 30 minutes.",
    tagline: "Thinnest Apple Watch, biggest display",
    details: [
      "Depth and water temperature sensors",
      "ECG and blood oxygen",
      "Aluminium or titanium cases",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.7,
    reviewCount: 1680,
    createdAt: "2026-07-27T00:00:00.000Z",
    popularity: 1680,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: "Apple Watch Series 10 46mm" },
          { key: "Category", value: "Wearables" },
          { key: "Configuration", value: "46mm aluminium · GPS" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Depth and water temperature sensors" },
          { key: "Feature 2", value: "ECG and blood oxygen" },
          { key: "Feature 3", value: "Aluminium or titanium cases" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Apple Watch Series 10 46mm", "Band", "Quick start guide"],
  },
  {
    id: "apple-watch-series-10-42",
    slug: "apple-watch-series-10-42",
    name: "Apple Watch Series 10 42mm",
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Wearables",
    priceCents: 39900,
    stock: 24,
    image: {
      url: "/src/assets/products/wearable-1.png",
      alt: "Apple Watch Series 10 42mm",
    },
    description:
      "42mm wide-angle OLED, S10 chip, Vitals app and Double Tap in Apple's thinnest watch case yet.",
    tagline: "All the health smarts, smaller wrist",
    details: [
      "Up to 18 hours of battery",
      "Crash and fall detection",
      "Swimproof design",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.7,
    reviewCount: 920,
    createdAt: "2026-07-27T00:00:00.000Z",
    popularity: 920,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: "Apple Watch Series 10 42mm" },
          { key: "Category", value: "Wearables" },
          { key: "Configuration", value: "42mm aluminium · GPS" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Up to 18 hours of battery" },
          { key: "Feature 2", value: "Crash and fall detection" },
          { key: "Feature 3", value: "Swimproof design" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Apple Watch Series 10 42mm", "Band", "Quick start guide"],
  },
  {
    id: "apple-watch-se",
    slug: "apple-watch-se",
    name: "Apple Watch SE",
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Wearables",
    priceCents: 24900,
    stock: 12,
    image: {
      url: "/src/assets/products/wearable-2.png",
      alt: "Apple Watch SE",
    },
    description:
      "40mm Retina display, S8 chip, heart rate notifications, Crash Detection and Family Setup for kids and parents.",
    tagline: "Smart safety features for less",
    details: [
      "Fall Detection and Emergency SOS",
      "Water resistant to 50m",
      "Carbon-neutral options",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.6,
    reviewCount: 1210,
    createdAt: "2026-01-18T00:00:00.000Z",
    popularity: 1210,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: "Apple Watch SE" },
          { key: "Category", value: "Wearables" },
          { key: "Configuration", value: "40mm aluminium · GPS" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Fall Detection and Emergency SOS" },
          { key: "Feature 2", value: "Water resistant to 50m" },
          { key: "Feature 3", value: "Carbon-neutral options" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Apple Watch SE", "Band", "Quick start guide"],
  },
  {
    id: "apple-vision-pro",
    slug: "apple-vision-pro",
    name: "Apple Vision Pro",
    brand: "Apple",
    brandGroup: "Apple Eco",
    category: "Wearables",
    priceCents: 349900,
    stock: 19,
    image: {
      url: "/src/assets/products/wearable-1.png",
      alt: "Apple Vision Pro",
    },
    description:
      "Micro-OLED displays with 23 million pixels, M2 and R1 chips, eye and hand tracking, and spatial video playback.",
    tagline: "Spatial computing on your face",
    details: [
      "Light Seal and two bands included",
      "Up to 2 hours of general use",
      "Optic ID authentication",
      "Checked and tested by the Sam Gadgets lab",
    ],
    rating: 4.5,
    reviewCount: 420,
    createdAt: "2026-03-29T00:00:00.000Z",
    popularity: 420,
    badges: [],
    specGroups: [
      {
        group: "General",
        items: [
          { key: "Brand", value: "Apple" },
          { key: "Model", value: "Apple Vision Pro" },
          { key: "Category", value: "Wearables" },
          { key: "Configuration", value: "256GB storage" },
        ],
      },
      {
        group: "Design and features",
        items: [
          { key: "Feature 1", value: "Light Seal and two bands included" },
          { key: "Feature 2", value: "Up to 2 hours of general use" },
          { key: "Feature 3", value: "Optic ID authentication" },
        ],
      },
      {
        group: "Warranty",
        items: [
          { key: "Standard", value: "1-year Sam Gadgets warranty" },
          { key: "With Sam Gadgets Care", value: "Extended to 3 years" },
        ],
      },
    ],
    inTheBox: ["Apple Vision Pro", "Battery pack", "Quick start guide"],
  },
];
