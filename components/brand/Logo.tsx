"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withLink?: boolean;
}

export default function Logo({ className = "", size = "md", withLink = true }: LogoProps) {
  const sizeMap = {
    sm: { height: 28, width: 181 },
    md: { height: 38, width: 246 },
    lg: { height: 48, width: 311 },
  };

  const { height, width } = sizeMap[size];

  const content = (
    <div className={`inline-flex items-center group cursor-pointer select-none transition-transform duration-300 hover:scale-[1.02] ${className}`}>
      <Image
        src="/firnas_brand_logo.png"
        alt="FIRNAS.TECH"
        width={width}
        height={height}
        className="h-auto object-contain max-h-[48px] rounded-sm"
        priority
      />
    </div>
  );

  if (withLink) {
    return <Link href="/" className="inline-flex items-center">{content}</Link>;
  }

  return content;
}

