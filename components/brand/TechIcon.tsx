"use client";

import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function TechIcon({ name, className = "", size = 28 }: TechIconProps) {
  const norm = name.toLowerCase().trim();

  // 1. FRONTEND
  if (norm.includes("react") && !norm.includes("native")) {
    return (
      <svg width={size} height={size} viewBox="0 0 115 100" fill="none" className={className}>
        <ellipse cx="57.5" cy="50" rx="10" ry="10" fill="#61DAFB" />
        <ellipse cx="57.5" cy="50" rx="45" ry="17" stroke="#61DAFB" strokeWidth="6" />
        <ellipse cx="57.5" cy="50" rx="45" ry="17" stroke="#61DAFB" strokeWidth="6" transform="rotate(60 57.5 50)" />
        <ellipse cx="57.5" cy="50" rx="45" ry="17" stroke="#61DAFB" strokeWidth="6" transform="rotate(120 57.5 50)" />
      </svg>
    );
  }

  if (norm.includes("next")) {
    return (
      <svg width={size} height={size} viewBox="0 0 180 180" fill="none" className={className}>
        <mask id="nextMask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <circle cx="90" cy="90" r="88" fill="black" stroke="#333" strokeWidth="4" />
        <path d="M149.508 157.438L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="url(#nextGrad)" />
        <rect x="115" y="54" width="12" height="72" fill="url(#nextGrad2)" />
        <defs>
          <linearGradient id="nextGrad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nextGrad2" x1="121" y1="54" x2="121" y2="104" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (norm.includes("angular")) {
    return (
      <svg width={size} height={size} viewBox="0 0 250 250" fill="none" className={className}>
        <polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 203.9,186.3 218.1,63.2" fill="#DD0031" />
        <polygon points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 203.9,186.3 218.1,63.2" fill="#C3002F" />
        <path d="M125,52.1L66.8,182.6H88.7L100.4,153.7H149.4L161.1,182.6H183L125,52.1ZM142.4,136.6H107.5L125,94.2L142.4,136.6Z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm.includes("vue")) {
    return (
      <svg width={size} height={size} viewBox="0 0 261 226" fill="none" className={className}>
        <path d="M161.096.001l-30.225 52.35L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#42B883" />
        <path d="M161.096.001l-30.225 52.35L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#35495E" />
      </svg>
    );
  }

  if (norm.includes("typescript")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className}>
        <rect width="128" height="128" rx="20" fill="#3178C6" />
        <path d="M72.5 73.8c0 1.2.4 2.2 1.3 2.9 1 .7 2.3 1.1 4.1 1.1 2 0 3.7-.4 5.1-1.3 1.4-.9 2.5-2 3.3-3.4l11.4 7c-1.8 3.1-4.4 5.5-7.8 7.3-3.4 1.8-7.5 2.7-12.2 2.7-4.8 0-9.1-1-12.8-2.9-3.7-1.9-6.6-4.6-8.7-8.1-2.1-3.5-3.2-7.5-3.2-12 0-4.6 1.1-8.7 3.3-12.2 2.2-3.5 5.3-6.2 9.2-8 3.9-1.8 8.4-2.8 13.5-2.8 4.6 0 8.7.8 12.1 2.5 3.4 1.7 6.1 4 8 7 1.9 3 2.9 6.5 3.1 10.5H88.4c-.2-2.1-.9-3.8-2.3-5-1.3-1.2-3-1.8-5.1-1.8-2 0-3.6.5-4.8 1.6-1.2 1.1-1.8 2.6-1.8 4.5 0 1.6.5 2.9 1.6 3.8 1.1.9 2.7 1.6 4.9 2.2l5.7 1.6c4.6 1.3 8.1 3.2 10.4 5.7 2.3 2.5 3.5 5.8 3.5 9.9 0 4.3-1.2 7.9-3.5 10.8-2.3 2.9-5.7 5-10.1 6.3-4.4 1.3-9.5 2-15.3 2-5.4 0-10.1-.9-14-2.6-4-1.8-7.1-4.2-9.4-7.4-2.3-3.1-3.6-6.9-3.8-11.2h13.8zM24 45.4h42.7V57H49.1v40.3H35.8V57H24V45.4z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm.includes("html") || norm.includes("css")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className}>
        <path d="M19 116.5l-11-98.3h112l-11 98.2-45 12.6-45-12.5z" fill="#E34F26" />
        <path d="M64 117.8l36.2-10.1 9-80.7H64v90.8z" fill="#EF652A" />
        <path d="M64 53.6H46.7l-1.2-13.4H64V27.5H31.5l3.5 40.2H64V53.6zm0 33.7l-.1.1-15.4-4.2-.9-11.1H34.4l1.9 21.6 27.7 7.7V87.3z" fill="#EBEBEB" />
        <path d="M64 53.6h17.3l-1.6 17.9-15.7 4.2v14.1l27.7-7.7 2.3-25.9.3-2.6H64v14zM64 27.5v12.7h33.8l.9-10.1.2-2.6H64z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm.includes("tailwind")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#06B6D4" />
      </svg>
    );
  }

  if (norm.includes("api")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#00E599" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
        <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
        <path d="M12 10v4M10 12h4" />
      </svg>
    );
  }

  // 2. BACKEND
  if (norm.includes("node")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2L2 7.7v11.6L12 25l10-5.7V7.7L12 2z" fill="#5FA04E" />
        <path d="M12 4.4l7.9 4.6v9L12 22.5 4.1 18V9L12 4.4z" fill="#333333" />
        <path d="M12 7l5.2 3v6L12 19l-5.2-3v-6L12 7z" fill="#5FA04E" />
      </svg>
    );
  }

  if (norm.includes("python")) {
    return (
      <svg width={size} height={size} viewBox="0 0 110 110" fill="none" className={className}>
        <path d="M54.2 2C27.5 2 29.2 13.5 29.2 13.5l.1 11.9h25.4v3.6H19.2S2 27.2 2 54.3c0 27.1 15 26.2 15 26.2h8.9V68.3s-.5-14.8 14.6-14.8h25.2s14.1.2 14.1-13.8V15.7S81.9 2 54.2 2zm-14 8.2a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8z" fill="#3776AB" />
        <path d="M55.8 108c26.7 0 25-11.5 25-11.5l-.1-11.9H55.3V81h35.5s17.2 1.8 17.2-25.3c0-27.1-15-26.2-15-26.2h-8.9v12.2s.5 14.8-14.6 14.8H44.3s-14.1-.2-14.1 13.8v24.1s-2.1 13.6 25.6 13.6zm14-8.2a4.4 4.4 0 1 1 0-8.8 4.4 4.4 0 0 1 0 8.8z" fill="#FFD43B" />
      </svg>
    );
  }

  if (norm.includes("nest")) {
    return (
      <svg width={size} height={size} viewBox="0 0 256 256" fill="none" className={className}>
        <path d="M228.6 62.4c-8.9-8.9-20.9-14-33.5-14.4-14-.5-27.5 5.5-36.9 16.3-9.4-10.8-22.9-16.8-36.9-16.3-12.6.4-24.6 5.5-33.5 14.4-19 19-20.2 49.6-3.7 70.1l74.1 91.5 74.1-91.5c16.5-20.5 15.3-51.1-3.7-70.1z" fill="#E0234E" />
      </svg>
    );
  }

  if (norm.includes("php")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className}>
        <ellipse cx="64" cy="64" rx="60" ry="34" fill="#777BB4" />
        <text x="64" y="74" textAnchor="middle" fill="white" fontSize="32" fontWeight="bold" fontFamily="sans-serif">PHP</text>
      </svg>
    );
  }

  if (norm.includes("laravel")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M8.2 3.6l7.6 4.4-3.8 2.2-7.6-4.4L8.2 3.6zM3.4 9.1l7.6 4.4v8.8L3.4 17.9V9.1zm17.2 0v8.8l-7.6 4.4v-8.8l7.6-4.4z" fill="#FF2D20" />
      </svg>
    );
  }

  if (norm.includes("django")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className}>
        <rect width="128" height="128" rx="24" fill="#092E20" />
        <path d="M60.5 24h16.2v46.7c-4.7 1-8.5 1.5-12.8 1.5-14.6 0-23.7-7.6-23.7-22.5 0-14.7 9.8-24.2 24.3-24.2 5.1 0 8.6.8 11.2 2.3V40c-2.3-1.1-4.9-1.6-7.8-1.6-7.7 0-12.8 5.4-12.8 14 0 8.2 4.7 13.3 12.1 13.3 2.7 0 4.7-.3 6.3-.9V24z" fill="#44B78B" />
        <path d="M83.2 38.6H99v48.8c-4.8 1.3-10.4 2.1-15.8 2.1-16.7 0-26.6-8.5-26.6-23.7 0-15.6 10.9-25.2 26.6-25.2v12.7c-8 0-13 4.9-13 13.2 0 7.8 4.7 12.5 13 12.5 2.8 0 5.4-.4 6.8-.9V38.6z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm.includes("flask")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M10 2v7.31L4.15 20.3a1 1 0 0 0 .85 1.7h14a1 1 0 0 0 .85-1.7L14 9.31V2" />
        <path d="M8.5 2h7" />
        <path d="M7 16h10" />
      </svg>
    );
  }

  if (norm.includes("graphql")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#E10098" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="12 2 21 7.5 21 16.5 12 22 3 16.5 3 7.5 12 2" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="3" y1="7.5" x2="21" y2="16.5" />
        <line x1="3" y1="16.5" x2="21" y2="7.5" />
        <circle cx="12" cy="2" r="1.5" fill="#E10098" />
        <circle cx="21" cy="7.5" r="1.5" fill="#E10098" />
        <circle cx="21" cy="16.5" r="1.5" fill="#E10098" />
        <circle cx="12" cy="22" r="1.5" fill="#E10098" />
        <circle cx="3" cy="16.5" r="1.5" fill="#E10098" />
        <circle cx="3" cy="7.5" r="1.5" fill="#E10098" />
      </svg>
    );
  }

  // 3. CMS
  if (norm.includes("wordpress")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="10" stroke="#21759B" strokeWidth="2" fill="#21759B" fillOpacity="0.1" />
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18.2a8.2 8.2 0 0 1-5.1-1.8l4.4-12.7 2.4 6.8 1.4-4 2 5.8a8.2 8.2 0 0 1-5.1 5.9z" fill="#21759B" />
      </svg>
    );
  }

  if (norm.includes("shopify")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M18.6 4.3l-2.4-.7c-.2 0-.4 0-.5.2l-1.2 2.5H12c-.5-1.5-1.6-2.5-3.3-2.5-2.2 0-3.3 1.8-3.4 3.7l-2.6.8c-.5.2-.7.6-.7 1.1l1.8 13.2c.1.7.7 1.2 1.4 1.2h12.5c.7 0 1.3-.5 1.4-1.2l2.3-13.6c.1-.6-.2-1.2-.7-1.4z" fill="#7AB55C" />
        <path d="M14.5 6.3h-4.2c.2-1.2.9-2.1 2.1-2.1 1.2 0 1.9.9 2.1 2.1z" fill="#FFFFFF" opacity="0.6" />
      </svg>
    );
  }

  if (norm.includes("webflow")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M18.8 6.5C17.1 6.5 15.6 7.4 14.8 8.9L12 14.3 9.2 8.9C8.4 7.4 6.9 6.5 5.2 6.5H2v11h4.2V12l2.7 5.5h4.2l2.7-5.5v5.5H20V6.5h-1.2z" fill="#4353FF" />
      </svg>
    );
  }

  if (norm.includes("framer")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M4 2h16v7h-8l8 7H4v-7h8L4 2zm0 14h8l-8 7v-7z" fill="#0055FF" />
      </svg>
    );
  }

  if (norm.includes("wix")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#0C6EFC" fillOpacity="0.2" />
        <text x="12" y="16" textAnchor="middle" fill="#0C6EFC" fontSize="10" fontWeight="bold" fontFamily="sans-serif">WIX</text>
      </svg>
    );
  }

  if (norm.includes("drupal")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2C7.5 7.5 6 11 6 14.5A6 6 0 0 0 12 20.5a6 6 0 0 0 6-6C18 11 16.5 7.5 12 2zm0 15a2.5 2.5 0 0 1-2.5-2.5c0-1.8 1.4-3.5 2.5-5 1.1 1.5 2.5 3.2 2.5 5A2.5 2.5 0 0 1 12 17z" fill="#0678BE" />
      </svg>
    );
  }

  // 4. MOBILE & CROSS PLATFORM
  if (norm.includes("flutter")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M14.3 2.5L3.8 13l3.2 3.2L17.5 5.7h-3.2z" fill="#54C5F8" />
        <path d="M14.3 10.7L8.7 16.3l3.2 3.2 2.4-2.4 5.9 5.9h4.8l-8.3-8.3 4.2-4h-6.6z" fill="#02569B" />
        <path d="M11.9 19.5l2.4-2.4 2.5 2.4-2.4 2.4-2.5-2.4z" fill="#01579B" />
      </svg>
    );
  }

  if (norm.includes("react native")) {
    return (
      <svg width={size} height={size} viewBox="0 0 115 100" fill="none" className={className}>
        <ellipse cx="57.5" cy="50" rx="9" ry="9" fill="#61DAFB" />
        <ellipse cx="57.5" cy="50" rx="42" ry="15" stroke="#61DAFB" strokeWidth="5" />
        <ellipse cx="57.5" cy="50" rx="42" ry="15" stroke="#61DAFB" strokeWidth="5" transform="rotate(60 57.5 50)" />
        <ellipse cx="57.5" cy="50" rx="42" ry="15" stroke="#61DAFB" strokeWidth="5" transform="rotate(120 57.5 50)" />
      </svg>
    );
  }

  if (norm.includes("kotlin")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M22 2H2v20h20L12 12l10-10z" fill="#7F52FF" />
        <path d="M12 12L2 22h10l10-10H12z" fill="#C757BC" />
        <path d="M2 2l10 10L2 22V2z" fill="#0095D5" />
      </svg>
    );
  }

  if (norm.includes("swift")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M21.5 16.5c-.3.5-.8 1.1-1.3 1.6-2.5 2.4-6.3 3.1-9.7 1.8 4.2-1.7 6.6-5.1 6.8-9.4C14.7 13 11 14.5 7.8 14c2.5-1.4 4.5-3.5 5.5-6.2C10.7 9.2 8.1 9.9 5.8 9.3 8.3 7.3 11.6 6 15.1 6c.9 0 1.8.1 2.6.4C14.9 3.5 10.9 2.5 6.9 3.6 4.8 4.2 3 5.4 1.7 7 4.1 6.8 6.6 7.4 8.7 8.7 6 9.4 3.7 11.2 2.3 13.8c-.3.5-.5 1.1-.7 1.7 1.5-.7 3.2-1 4.9-.8-3.4 3.1-4.7 7.8-3.2 12.1 3.5 2.2 7.7 2.7 11.7 1.4 4.4-1.4 7.8-4.8 9.1-9.3.2-.8.3-1.6.4-2.4z" fill="#F05138" />
      </svg>
    );
  }

  if (norm.includes("java") && !norm.includes("script")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#ED8B00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M6 14h10a4 4 0 0 0 4-4v0a4 4 0 0 0-4-4H6v8z" />
        <path d="M6 14a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h10" />
        <path d="M10 2v4M14 2v4" />
        <path d="M2 18h18" />
      </svg>
    );
  }

  if (norm.includes("android")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M6 14v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4H6zm11-6.8l1.4-1.4a.7.7 0 0 0-1-1L16 6.2A7 7 0 0 0 12 5a7 7 0 0 0-4 1.2L6.6 4.8a.7.7 0 0 0-1 1L7 7.2A7 7 0 0 0 5 12h14a7 7 0 0 0-2-4.8zM9 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#3DDC84" />
      </svg>
    );
  }

  if (norm.includes("electron") || norm.includes("capacitor")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#00E599" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="3" fill="#00E599" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)" />
      </svg>
    );
  }

  // 5. AI & DATA & CLOUD
  if (norm.includes("tensorflow")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 3.3l6 3.3-6 3.4-6-3.4 6-3.3zm-6 5.8l5 2.8v5.5l-5-2.8v-5.5zm12 5.5l-5 2.8v-5.5l5-2.8v5.5z" fill="#FF6F00" />
      </svg>
    );
  }

  if (norm.includes("pytorch")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M13 2.5a.7.7 0 0 1 .9.3l1.8 3.6a.7.7 0 0 1-.3.9l-3.6 1.8a.7.7 0 0 1-.9-.3L9.1 5.2a.7.7 0 0 1 .3-.9l3.6-1.8z" fill="#EE4C2C" />
        <path d="M12 7a7 7 0 1 0 7 7c0-2-1-3.8-2.3-5l-1.4 1.4A5 5 0 1 1 12 9V7z" fill="#EE4C2C" />
      </svg>
    );
  }

  if (norm.includes("openai")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10A37F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2a4.5 4.5 0 0 0-4.4 3.5A4.5 4.5 0 0 0 4.2 9a4.5 4.5 0 0 0 .8 5.5A4.5 4.5 0 0 0 6.6 19a4.5 4.5 0 0 0 5.4 2 4.5 4.5 0 0 0 4.4-3.5A4.5 4.5 0 0 0 19.8 14a4.5 4.5 0 0 0-.8-5.5A4.5 4.5 0 0 0 16.4 4a4.5 4.5 0 0 0-4.4-2z" />
        <path d="M12 7v5l4 2.5" />
      </svg>
    );
  }

  if (norm.includes("hugging")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="10" fill="#FFD21E" />
        <circle cx="9" cy="10" r="1.5" fill="#333" />
        <circle cx="15" cy="10" r="1.5" fill="#333" />
        <path d="M8 14c1.5 2 6.5 2 8 0" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 13c1.5-1 3 0 3 2s-1.5 3-3 2M21 13c-1.5-1-3 0-3 2s1.5 3 3 2" stroke="#FF9D00" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (norm.includes("figma")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M8 2h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#F24E1E" />
        <path d="M12 2h4a2.5 2.5 0 0 1 0 5h-4V2z" fill="#FF7262" />
        <path d="M12 7H8a2.5 2.5 0 0 0 0 5h4V7z" fill="#A259FF" />
        <path d="M12 7h4a2.5 2.5 0 0 1 0 5h-4V7z" fill="#1ABCFE" />
        <path d="M8 12h4v4.5A2.5 2.5 0 0 1 9.5 19 2.5 2.5 0 0 1 8 16.5V12z" fill="#0ACF83" />
        <circle cx="14.5" cy="14.5" r="2.5" fill="#1ABCFE" />
      </svg>
    );
  }

  if (norm.includes("docker")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M22 12.5c-.5-.4-1.6-.4-2.2 0-.3.2-.5.5-.6.8-.7-.2-1.8 0-2.3.8-2-.3-3.6.9-4.3 2.4H3.5C2 16.5 1 15 1 13.5c0-1.5 1.5-2.5 3-2.5h1V9h3v2h2V9h3v2h2V9h3v3.5h4zM8 7h3v2H8V7zm4 0h3v2h-3V7z" fill="#2496ED" />
        <path d="M2 17c1 3.5 4.5 5 10 5s9-1.5 11-5c-2.5.5-6 .5-10-1-4 1.5-8.5 1.5-11 1z" fill="#2496ED" />
      </svg>
    );
  }

  if (norm.includes("kubernetes")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 3l6.5 3.7v7.5L12 19.9l-6.5-3.7V8.7L12 5z" fill="#326CE5" />
        <circle cx="12" cy="12" r="3" fill="#326CE5" />
      </svg>
    );
  }

  if (norm.includes("aws")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M6.5 10c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5v4H9v-4c0-.3-.2-.5-.5-.5s-.5.2-.5.5v4H6.5v-4zm6 0c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5v4H15v-4c0-.3-.2-.5-.5-.5s-.5.2-.5.5v4h-2.5v-4z" fill="#FFFFFF" />
        <path d="M3 17.5c6 3 12 3 18 0" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
        <path d="M19 16l2 1.5-1.5 2" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (norm.includes("google") || norm.includes("gcp")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4" />
      </svg>
    );
  }

  if (norm.includes("azure")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M13.2 2.5L4.5 16.7h5.2l3.5-6.2 3.6 8.5H3L1.5 21.5h16.8l4.2-7.2-9.3-11.8z" fill="#0078D4" />
      </svg>
    );
  }

  if (norm.includes("mongo")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2C12 2 6 7.5 6 13.5A6 6 0 0 0 12 22a6 6 0 0 0 6-8.5C18 7.5 12 2 12 2zm0 18v-8c-2 1-3 2.5-3 4a3 3 0 0 0 3 4z" fill="#47A248" />
      </svg>
    );
  }

  if (norm.includes("postgres")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.5 4.5 8.2V17c0-2 1.5-3.5 3.5-3.5h8c2 0 3.5 1.5 3.5 3.5v3.2C20.2 18.5 22 15.5 22 12c0-5.5-4.5-10-10-10z" fill="#4169E1" />
        <circle cx="8.5" cy="10.5" r="1.5" fill="#FFFFFF" />
        <circle cx="15.5" cy="10.5" r="1.5" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm.includes("sql") || norm.includes("database")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#00E599" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }

  if (norm.includes("redis")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 8L2 15l10 5 10-5-10-5z" fill="#DC382D" />
      </svg>
    );
  }

  if (norm.includes("firebase")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M4 17.5L6.8 3.2a.8.8 0 0 1 1.5-.1l2.4 4.5-6.7 9.9zm15.5-2.2l-2.2-12a.8.8 0 0 0-1.4-.4L3.6 18.8 12 23l7.5-7.7z" fill="#FFCA28" />
        <path d="M13.7 9.5l-2.4-4.5a.8.8 0 0 0-1.5.1L3.6 18.8 12 23l1.7-13.5z" fill="#FFA000" />
      </svg>
    );
  }

  if (norm.includes("supabase")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M13.5 2.5L3.5 14.5h8l-2 7 11-12h-8.5l1.5-7z" fill="#3ECF8E" />
      </svg>
    );
  }

  if (norm.includes("git") || norm.includes("jenkins") || norm.includes("ci/cd")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#2088FF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
        <line x1="6" y1="9" x2="6" y2="15" />
      </svg>
    );
  }

  // Default Cyber Node Icon
  return (
    <div className={`flex items-center justify-center rounded-lg bg-[#00E599]/10 text-[#00E599] font-mono text-xs ${className}`} style={{ width: size, height: size }}>
      &lt;/&gt;
    </div>
  );
}
