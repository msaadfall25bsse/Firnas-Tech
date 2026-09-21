import React from "react";

interface BadgeProps {
  variant?: "emerald" | "blue" | "cyan" | "neutral";
  size?: "sm" | "md";
  dot?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  variant = "emerald",
  size = "md",
  dot = false,
  children,
  className = "",
}: BadgeProps) {
  const variantStyles = {
    emerald: "bg-[#00E599]/10 text-[#00E599] border-[#00E599]/25",
    blue: "bg-[#0070F3]/10 text-[#00A3FF] border-[#0070F3]/25",
    cyan: "bg-[#06B6D4]/10 text-[#22D3EE] border-[#06B6D4]/25",
    neutral: "bg-white/[0.05] text-[#94A3B8] border-white/10",
  };

  const dotColors = {
    emerald: "bg-[#00E599]",
    blue: "bg-[#0070F3]",
    cyan: "bg-[#06B6D4]",
    neutral: "bg-[#94A3B8]",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wider",
    md: "text-xs px-3.5 py-1 tracking-wider",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border backdrop-blur-md uppercase ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors[variant]}`}
          />
          <span
            className={`relative inline-flex rounded-full h-1.5 w-1.5 ${dotColors[variant]}`}
          />
        </span>
      )}
      {children}
    </span>
  );
}
