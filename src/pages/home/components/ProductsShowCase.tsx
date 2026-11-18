import { ProductCard } from "../../../components/ProductCard";
import {
  FEATURED_BEST_SELLERS_IDS,
  FEATURED_NEW_ARRIVALS_IDS,
  getFeaturedProductsByIds,
} from "../../../utils/getfeaturedProducts";
import { Button } from "../../../components/Button";

function ProductsShowCase() {
  return (
    <section className="lg:space-y-32 mx-6 md:mx-8 xl:mx-32 py-8 md:py-16 lg:py-24">
      <div>
        <div>
          <div className="text-center mb-10 lg:mb-20">
            <h1 className="text-3xl md:text-5xl font-tech tracking-wide">
              Sam Gadgets New Shining Devices
            </h1>

            <p className="text-lg md:text-xl mt-4">
              Be among the first to explore the latest devices, new releases and
              additions to our collection.
            </p>

            <Button to="/products" className="uppercase mt-5">
              Check them out
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {getFeaturedProductsByIds(FEATURED_NEW_ARRIVALS_IDS).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      <div>
        <div className="text-center mb-10 lg:mb-20">
          <h1 className="text-3xl md:text-5xl font-tech tracking-wide">
            Customer Favourites
          </h1>

          <p className="text-lg md:text-xl mt-4">
            Discover the devices customers love, from everyday essentials to
            standout technology worth having.
          </p>

          <Button to="/products" className="uppercase mt-5">
            Explore them
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {getFeaturedProductsByIds(FEATURED_BEST_SELLERS_IDS).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { ProductsShowCase };
