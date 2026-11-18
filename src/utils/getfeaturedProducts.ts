import { PRODUCTS, type Product } from "../products";

const FEATURED_NEW_ARRIVALS_IDS = [
  "macbook-air-13",
  "iphone-16e",
  "apple-watch-series-10",
  "airpods-4",
];

const FEATURED_BEST_SELLERS_IDS = [
  "macbook-air-13",
  "iphone-16-pro-max",
  "apple-watch-ultra-2",
  "sony-wh-1000xm5",
];

function getFeaturedProductsByIds(ids: string[]): Product[] {
  return ids
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined);
}

export {
  getFeaturedProductsByIds,
  FEATURED_BEST_SELLERS_IDS,
  FEATURED_NEW_ARRIVALS_IDS,
};
