import { Link } from "react-router";

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`font-black md:text-3xl tracking-wider ${className}`}>
      <Link to="/">
        <span className="font-tech">
          <span className="text-primary">SAM</span>
          <span></span>
          <span className="text-foreground">GADGETS</span>
        </span>
      </Link>
    </div>
  );
}

export { Logo };
