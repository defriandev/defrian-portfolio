import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  target?: string;
  rel?: string;
  download?: boolean | string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  icon,
  iconPosition = "left",
  fullWidth = false,
  target,
  rel,
  download,
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer active:scale-[0.98] will-change-transform";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm shadow-blue-500/10 hover:shadow-md hover:shadow-blue-500/20",
    secondary:
      "bg-slate-100 text-slate-800 hover:bg-slate-200 active:bg-slate-300 border border-slate-200/60 hover:border-slate-300",
    outline:
      "bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 shadow-xs hover:shadow-sm",
    ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5 font-medium",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3 gap-2.5",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], widthClass, className);

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//");
    return (
      <Link
        href={href}
        className={combinedClasses}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
        download={download}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

