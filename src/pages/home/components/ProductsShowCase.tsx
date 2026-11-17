import { ProductCard } from "../../../components/ProductCard";
import {
  FEATURED_BEST_SELLERS_IDS,
  FEATURED_NEW_ARRIVALS_IDS,
  getFeaturedProductsByIds,
} from "../../../utils/getfeaturedProducts";

function ProductsShowCase() {
  return (
    <section className="mx-6 md:mx-8 xl:mx-32 py-8 md:py-16 lg:py-24">
      <div className="grid lg:grid-cols-4 gap-3">
        {getFeaturedProductsByIds(FEATURED_NEW_ARRIVALS_IDS).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="grid lg:grid-cols-4 gap-3">
        {getFeaturedProductsByIds(FEATURED_BEST_SELLERS_IDS).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

export { ProductsShowCase };
