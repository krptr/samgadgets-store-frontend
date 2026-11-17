import type { Product } from "../products";
import { Link } from "react-router";
import { StarRating } from "../components/StarRating";
import { Button } from "./Button";
import { LuPlus } from "react-icons/lu";
import { formatPrice } from "../utils/formatPrice";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      className="relative flex flex-col items-center justify-center gap-6 group bg-primary/15 
    py-4 rounded-tl-4xl rounded-br-4xl rounded-tr-[4rem] rounded-bl-[4rem] focus-within:ring-2 focus-within:ring-primary"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] opacity-80">
          <span>{product.brand}</span>
          <span className="size-0.5 rounded-full inline-block bg-on-surface" />
          <span>{product.category}</span>
        </div>

        <h3 className="font-bold font-sans uppercase text-lg leading-tight mt-2">
          <Link
            to="/products"
            className="after:content-[''] after:absolute after:inset-0 focus:outline-none"
          >
            {product.name}
          </Link>
        </h3>

        <span
          className="font-sans mt-1 line-clamp-1 text-xs opacity-80"
          title={product.tagline}
        >
          {product.tagline}
        </span>
      </div>

      <div className="relative shrink-0 size-50 rounded-full bg-primary/35 flex items-center justify-center overflow-hidden">
        <img
          src={product.image.url}
          alt={product.image.alt}
          className="object-contain drop-shadow-2xl scale-130 transition-transform duration-500 ease-out group-hover:scale-135"
        />
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-primary text-on-primary text-sm font-bold tabular-nums">
          {formatPrice(product.priceCents)}
        </div>
      </div>

      <div className="flex gap-3 items-center justify-center">
        <StarRating rating={product.rating} />
        <span className="text-sm opacity-80">{product.rating}</span>
      </div>

      {/* relative z-10 lifts these buttons above the stretched link overlay */}
      <div className="relative z-10 flex items-center justify-center gap-3">
        <Button to="/f" className="uppercase font-sans font-bold">
          Shop now
        </Button>
        <Button
          variant="outline"
          className="rounded-full p-2"
          aria-label={`Add ${product.name} to cart`}
        >
          <LuPlus />
        </Button>
      </div>
    </article>
  );
}

export { ProductCard };
