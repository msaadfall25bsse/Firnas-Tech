"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary-emerald" | "secondary-blue" | "glass-outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary-emerald",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs rounded-lg gap-1.5",
    md: "px-6 py-3 text-sm rounded-xl gap-2",
    lg: "px-8 py-4 text-base rounded-xl gap-2.5 font-semibold",
  };

  const variantClasses = {
    "primary-emerald":
      "bg-[#00E599] text-[#05080F] font-semibold hover:bg-[#00FCA8] hover:shadow-[0_0_30px_-5px_rgba(0,229,153,0.5)] active:scale-[0.98]",
    "secondary-blue":
      "bg-[#0070F3] text-white font-semibold hover:bg-[#1A82FF] hover:shadow-[0_0_30px_-5px_rgba(0,112,243,0.5)] active:scale-[0.98]",
    "glass-outline":
      "bg-white/[0.04] text-white border border-white/15 backdrop-blur-md hover:bg-white/[0.08] hover:border-[#00E599]/50 hover:text-[#00E599] active:scale-[0.98]",
    ghost:
      "text-[#94A3B8] hover:text-white hover:bg-white/[0.05] active:scale-[0.98]",
  };

  const baseStyles =
    "inline-flex items-center justify-center transition-all duration-300 select-none cursor-pointer tracking-wide";

  const fullClassName = `${baseStyles} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${fullClassName} group`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`${fullClassName} group`} {...props}>
      {content}
    </button>
  );
}
