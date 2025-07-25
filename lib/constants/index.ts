export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Men",
        href: "/products/men",
        children: [
          { label: "Shoes", href: "/products/men/shoes" },
          { label: "Shirts", href: "/products/men/shirts" },
          { label: "Pants", href: "/products/men/pants" },
          { label: "Outerwear", href: "/products/men/outerwear" },
          { label: "Activewear", href: "/products/men/activewear" },
          { label: "Underwear & Socks", href: "/products/men/underwear-socks" },
          { label: "Accessories", href: "/products/men/accessories" },
        ],
      },
      {
        label: "Women",
        href: "/products/women",
        children: [
          { label: "Shoes", href: "/products/women/shoes" },
          { label: "Dresses", href: "/products/women/dresses" },
          { label: "Tops", href: "/products/women/tops" },
          { label: "Pants", href: "/products/women/pants" },
          { label: "Skirts", href: "/products/women/skirts" },
          { label: "Outerwear", href: "/products/women/outerwear" },
          { label: "Activewear", href: "/products/women/activewear" },
          { label: "Lingerie", href: "/products/women/lingerie" },
          { label: "Accessories", href: "/products/women/accessories" },
        ],
      },
      {
        label: "Kids",
        href: "/products/kids",
        children: [
          {
            label: "Boys",
            href: "/products/kids/boys",
            children: [
              { label: "Shoes", href: "/products/kids/boys/shoes" },
              { label: "Tops", href: "/products/kids/boys/tops" },
              { label: "Pants", href: "/products/kids/boys/pants" },
              { label: "Outerwear", href: "/products/kids/boys/outerwear" },
            ],
          },
          {
            label: "Girls",
            href: "/products/kids/girls",
            children: [
              { label: "Shoes", href: "/products/kids/girls/shoes" },
              { label: "Dresses", href: "/products/kids/girls/dresses" },
              { label: "Tops", href: "/products/kids/girls/tops" },
              { label: "Pants", href: "/products/kids/girls/pants" },
              { label: "Outerwear", href: "/products/kids/girls/outerwear" },
            ],
          },
        ],
      },
      {
        label: "Unisex",
        href: "/products/unisex",
        children: [
          { label: "Shoes", href: "/products/unisex/shoes" },
          {
            label: "Hoodies & Sweatshirts",
            href: "/products/unisex/hoodies-sweatshirts",
          },
          { label: "T-Shirts", href: "/products/unisex/t-shirts" },
          { label: "Accessories", href: "/products/unisex/accessories" },
        ],
      },
      {
        label: "Sale",
        href: "/products/sale",
        children: [
          { label: "Men's Sale", href: "/products/sale/men" },
          { label: "Women's Sale", href: "/products/sale/women" },
          { label: "Kids' Sale", href: "/products/sale/kids" },
        ],
      },
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
  },
];

export const CUSTOMER_SERVICE_LINKS = [
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Shipping & Returns",
    href: "/shipping",
  },
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms",
  },
];
