import type { ComponentProps } from "react";
import { Link } from "react-router";

type BaseProps = {
  variant?: "primary" | "outline";
  callToAction?: boolean;
};

type ButtonAsButton = BaseProps & ComponentProps<"button"> & { to?: undefined };
type ButtonAsLink = BaseProps & ComponentProps<typeof Link>;
type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants = {
  primary:
    "bg-primary text-on-primary transition-transform duration-300 hover:scale-105",
  outline: "border border-outline-variant transition-colors hover:text-primary",
};

function getClasses(
  variant: "primary" | "outline",
  callToAction: boolean,
  className: string,
) {
  return `inline-flex items-center justify-center rounded-2xl px-6 py-2 font-tech text-sm ${callToAction ? "lg:text-lg" : ""} cursor-pointer disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${className}`;
}

function Button(props: ButtonProps) {
  if (props.to !== undefined) {
    const {
      variant = "primary",
      callToAction = false,
      className = "",
      children,
      ...rest
    } = props;
    return (
      <Link className={getClasses(variant, callToAction, className)} {...rest}>
        {children}
      </Link>
    );
  }

  const {
    variant = "primary",
    callToAction = false,
    className = "",
    children,
    ...rest
  } = props;
  return (
    <button className={getClasses(variant, callToAction, className)} {...rest}>
      {children}
    </button>
  );
}

export { Button };
