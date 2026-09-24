"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { GlobalOffice } from "../../data/siteData";
import { WORLD_MAP_SPANS, WORLD_COASTLINES } from "../../data/worldMapChart";

interface InteractiveGlobeProps {
  offices: GlobalOffice[];
  activeOffice: GlobalOffice;
  onSelectOffice: (office: GlobalOffice) => void;
  className?: string;
}

export default function InteractiveGlobe({
  offices,
  activeOffice,
  onSelectOffice,
  className = "",
}: InteractiveGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Rotation states in radians
  const rotYRef = useRef<number>(-0.8); // Initial longitude rotation
  const targetRotYRef = useRef<number | null>(null);
  const tiltXRef = useRef<number>(0.26); // ~15 degrees axial tilt
  const isDraggingRef = useRef<boolean>(false);
  const lastMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const velocityRef = useRef<number>(0.003); // Auto-rotation speed

  const [hoveredOffice, setHoveredOffice] = useState<GlobalOffice | null>(null);

  // Smoothly center globe when activeOffice changes from parent
  useEffect(() => {
    if (activeOffice) {
      const targetLngRad = (activeOffice.lng * Math.PI) / 180;
      // Target rotation to bring this longitude directly to center (screen z-axis)
      let desired = -targetLngRad;
      // Normalize desired relative to current
      const current = rotYRef.current;
      const twoPi = Math.PI * 2;
      desired = current + ((((desired - current) % twoPi) + Math.PI * 3) % twoPi) - Math.PI;
      targetRotYRef.current = desired;
    }
  }, [activeOffice]);

  // Main Canvas Rendering Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let radius = 170;

    // Handle high DPI
    const resize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = Math.max(rect.height, 420);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      radius = Math.min(width * 0.42, height * 0.44, 195);
    };

    resize();
    window.addEventListener("resize", resize);

    // Precompute radian coordinates for land chart spans & coastlines
    const deg2rad = Math.PI / 180;
    const precomputedSpans = WORLD_MAP_SPANS.map(([lat, lng1, lng2]) => ({
      latRad: lat * deg2rad,
      lng1Rad: lng1 * deg2rad,
      lng2Rad: lng2 * deg2rad,
    }));

    const precomputedCoastlines = WORLD_COASTLINES.map((poly) =>
      poly.map(([lat, lng]) => ({
        latRad: lat * deg2rad,
        lngRad: lng * deg2rad,
      }))
    );

    // Precompute office radian coords
    const officeCoords = offices.map((o) => ({
      office: o,
      latRad: (o.lat * Math.PI) / 180,
      lngRad: (o.lng * Math.PI) / 180,
      isHq: o.id === "pk",
    }));

    // Pakistan HQ reference for connecting flight arcs
    const hqCoord = officeCoords.find((o) => o.isHq) || officeCoords[0];

    let pulseTime = 0;

    const render = () => {
      pulseTime += 0.04;

      // Handle rotation & smooth lerping
      if (!isDraggingRef.current) {
        if (targetRotYRef.current !== null) {
          const diff = targetRotYRef.current - rotYRef.current;
          if (Math.abs(diff) > 0.005) {
            rotYRef.current += diff * 0.06;
          } else {
            rotYRef.current = targetRotYRef.current;
            targetRotYRef.current = null;
          }
        } else {
          rotYRef.current += velocityRef.current;
        }
      }

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const rotY = rotYRef.current;
      const tiltX = tiltXRef.current;

      const cosTilt = Math.cos(tiltX);
      const sinTilt = Math.sin(tiltX);

      // Helper: 3D Spherical to 2D Screen projection
      const project = (latRad: number, lngRad: number, r = radius) => {
        const lngRot = lngRad + rotY;
        const cosLat = Math.cos(latRad);
        const sinLat = Math.sin(latRad);

        const x0 = r * cosLat * Math.sin(lngRot);
        const y0 = -r * sinLat;
        const z0 = r * cosLat * Math.cos(lngRot);

        const x = x0;
        const y = y0 * cosTilt - z0 * sinTilt;
        const z = y0 * sinTilt + z0 * cosTilt;

        return { x: cx + x, y: cy + y, z };
      };

      // 1. Outer Atmospheric Neon Halo
      const haloGrad = ctx.createRadialGradient(cx, cy, radius * 0.85, cx, cy, radius * 1.35);
      haloGrad.addColorStop(0, "rgba(0, 229, 153, 0.08)");
      haloGrad.addColorStop(0.5, "rgba(0, 112, 243, 0.04)");
      haloGrad.addColorStop(1, "transparent");
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // 2. Globe Dark Base Sphere
      const sphereGrad = ctx.createRadialGradient(
        cx - radius * 0.35,
        cy - radius * 0.35,
        radius * 0.1,
        cx,
        cy,
        radius
      );
      sphereGrad.addColorStop(0, "#081324");
      sphereGrad.addColorStop(0.7, "#050914");
      sphereGrad.addColorStop(1, "#020409");
      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // 3. Ambient Wireframe Meridians / Parallels
      ctx.strokeStyle = "rgba(0, 229, 153, 0.07)";
      ctx.lineWidth = 1;

      // Equator & Tropics
      [-30, 0, 30].forEach((latDeg) => {
        const latRad = (latDeg * Math.PI) / 180;
        ctx.beginPath();
        let first = true;
        for (let lngDeg = -180; lngDeg <= 180; lngDeg += 10) {
          const pt = project(latRad, (lngDeg * Math.PI) / 180);
          if (pt.z > 0) {
            if (first) {
              ctx.moveTo(pt.x, pt.y);
              first = false;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      });

      // 4. Draw Real-World Map Chart Continents (Solid Surface Chart + Illuminated Vector Coastlines)
      // A. Solid / Translucent Continents Surface Fill (Continuous real-world landmass spans)
      ctx.lineWidth = 1.8;
      for (let i = 0; i < precomputedSpans.length; i++) {
        const { latRad, lng1Rad, lng2Rad } = precomputedSpans[i];
        
        // Sample span points across longitude to curve accurately on the 3D sphere
        const lngSpan = lng2Rad - lng1Rad;
        const steps = Math.max(1, Math.min(8, Math.ceil((lngSpan / Math.PI) * 10)));
        const dLng = lngSpan / steps;

        let isDrawing = false;
        let avgZ = 0;
        let visibleCount = 0;

        ctx.beginPath();
        for (let s = 0; s <= steps; s++) {
          const pt = project(latRad, lng1Rad + s * dLng);
          if (pt.z > -radius * 0.05) {
            avgZ += pt.z;
            visibleCount++;
            if (!isDrawing) {
              ctx.moveTo(pt.x, pt.y);
              isDrawing = true;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            isDrawing = false;
          }
        }

        if (visibleCount > 0) {
          const depth = Math.max(0, avgZ / (visibleCount * radius));
          // Glowing cyber chart continent fill
          ctx.strokeStyle = `rgba(0, 229, 153, ${0.12 + depth * 0.28})`;
          ctx.stroke();
        }
      }

      // B. Crisp Real-World Chart Coastlines & Continent Boundaries
      ctx.lineWidth = 1.2;
      for (let c = 0; c < precomputedCoastlines.length; c++) {
        const poly = precomputedCoastlines[c];
        let isDrawing = false;

        ctx.beginPath();
        for (let p = 0; p < poly.length; p++) {
          const pt = project(poly[p].latRad, poly[p].lngRad);
          if (pt.z > 0) {
            if (!isDrawing) {
              ctx.moveTo(pt.x, pt.y);
              isDrawing = true;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            isDrawing = false;
          }
        }
        ctx.strokeStyle = "rgba(0, 229, 153, 0.75)";
        ctx.stroke();
      }

      // 5. Connecting Cyber Arcs (Flight trajectories from Pakistan to other 4 offices)
      const hqPt = project(hqCoord.latRad, hqCoord.lngRad);

      officeCoords.forEach(({ latRad, lngRad, isHq }) => {
        if (isHq) return;
        const destPt = project(latRad, lngRad);

        // Only draw arc if at least one endpoint is on or near the visible hemisphere
        if (hqPt.z > -radius * 0.3 || destPt.z > -radius * 0.3) {
          // Arc midpoint elevated into space
          const midLat = (hqCoord.latRad + latRad) / 2;
          const midLng = (hqCoord.lngRad + lngRad) / 2;
          const arcAltitude = radius * 1.22;
          const midPt = project(midLat, midLng, arcAltitude);

          // Arc path
          ctx.beginPath();
          ctx.moveTo(hqPt.x, hqPt.y);
          ctx.quadraticCurveTo(midPt.x, midPt.y, destPt.x, destPt.y);

          const arcAlpha = Math.max(0.1, Math.min(0.6, (hqPt.z + destPt.z + radius) / (2 * radius)));
          ctx.strokeStyle = `rgba(0, 229, 153, ${arcAlpha * 0.5})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // Traveling Data Light Particle along the arc
          const t = (pulseTime * 0.35) % 1;
          const px = (1 - t) * (1 - t) * hqPt.x + 2 * (1 - t) * t * midPt.x + t * t * destPt.x;
          const py = (1 - t) * (1 - t) * hqPt.y + 2 * (1 - t) * t * midPt.y + t * t * destPt.y;

          ctx.fillStyle = "#FFFFFF";
          ctx.shadowColor = "#00E599";
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      });

      // 6. Interactive Office Location Beacons
      const visibleOfficeScreenCoords: {
        office: GlobalOffice;
        x: number;
        y: number;
        z: number;
        isSelected: boolean;
      }[] = [];

      officeCoords.forEach(({ office, latRad, lngRad, isHq }) => {
        const pt = project(latRad, lngRad);
        const isSelected = activeOffice?.id === office.id;

        if (pt.z > 0) {
          visibleOfficeScreenCoords.push({
            office,
            x: pt.x,
            y: pt.y,
            z: pt.z,
            isSelected,
          });

          const depth = pt.z / radius;

          // Expanding Pulse Ring
          const waveRadius = 4 + ((pulseTime * 8) % 18);
          const waveAlpha = Math.max(0, 1 - waveRadius / 18) * depth;

          ctx.strokeStyle = isHq
            ? `rgba(0, 229, 153, ${waveAlpha})`
            : `rgba(0, 112, 243, ${waveAlpha})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, waveRadius, 0, Math.PI * 2);
          ctx.stroke();

          // Outer Beacon Glow
          ctx.fillStyle = isSelected
            ? "#00E599"
            : isHq
            ? "#00E599"
            : "#0070F3";
          ctx.shadowColor = isHq ? "#00E599" : "#0070F3";
          ctx.shadowBlur = isSelected ? 16 : 8;

          ctx.beginPath();
          ctx.arc(pt.x, pt.y, isSelected ? 5.5 : 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;

          // Inner Bright Core
          ctx.fillStyle = "#FFFFFF";
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, isSelected ? 2.5 : 1.8, 0, Math.PI * 2);
          ctx.fill();

          // Floating Country Label Pill (stays horizontal in 3D space)
          const labelText = office.country;
          ctx.font = "bold 10px monospace";
          const textWidth = ctx.measureText(labelText).width;
          const boxW = textWidth + 14;
          const boxH = 18;
          const boxX = pt.x - boxW / 2;
          const boxY = pt.y - 24;

          // Pill Background
          ctx.fillStyle = isSelected
            ? "rgba(0, 229, 153, 0.95)"
            : "rgba(5, 8, 15, 0.85)";
          ctx.strokeStyle = isSelected
            ? "#FFFFFF"
            : isHq
            ? "rgba(0, 229, 153, 0.6)"
            : "rgba(255, 255, 255, 0.2)";
          ctx.lineWidth = 1;

          // Rounded pill
          ctx.beginPath();
          ctx.roundRect(boxX, boxY, boxW, boxH, 6);
          ctx.fill();
          ctx.stroke();

          // Text
          ctx.fillStyle = isSelected ? "#05080F" : "#FFFFFF";
          ctx.fillText(labelText, boxX + 7, boxY + 12);
        }
      });

      // 7. Outer Sphere Edge Specular Rim
      const rimGrad = ctx.createRadialGradient(cx, cy, radius * 0.96, cx, cy, radius);
      rimGrad.addColorStop(0, "rgba(0, 229, 153, 0)");
      rimGrad.addColorStop(0.85, "rgba(0, 229, 153, 0.35)");
      rimGrad.addColorStop(1, "rgba(6, 182, 212, 0.7)");
      ctx.strokeStyle = rimGrad;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, [offices, activeOffice]);

  // Touch & Mouse Drag Handlers for 360 Rotation
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
    targetRotYRef.current = null;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;

    rotYRef.current += dx * 0.007;
    // Clamp axial tilt between -0.4 and +0.4 rad
    tiltXRef.current = Math.max(-0.4, Math.min(0.4, tiltXRef.current + dy * 0.004));

    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  // Click on globe to detect beacon clicks
  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const radius = Math.min(rect.width * 0.42, rect.height * 0.44, 195);
    const rotY = rotYRef.current;
    const tiltX = tiltXRef.current;

    const cosTilt = Math.cos(tiltX);
    const sinTilt = Math.sin(tiltX);

    // Check distance to visible pins
    for (const office of offices) {
      const latRad = (office.lat * Math.PI) / 180;
      const lngRad = (office.lng * Math.PI) / 180;

      const lngRot = lngRad + rotY;
      const cosLat = Math.cos(latRad);
      const sinLat = Math.sin(latRad);

      const x0 = radius * cosLat * Math.sin(lngRot);
      const y0 = -radius * sinLat;
      const z0 = radius * cosLat * Math.cos(lngRot);

      const x = cx + x0;
      const y = cy + (y0 * cosTilt - z0 * sinTilt);
      const z = y0 * sinTilt + z0 * cosTilt;

      if (z > 0) {
        const dist = Math.hypot(clickX - x, clickY - (y - 10));
        if (dist < 26) {
          onSelectOffice(office);
          break;
        }
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center select-none ${className}`}
    >
      {/* 3D Earth Canvas */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onClick={handleClick}
        className="cursor-grab active:cursor-grabbing touch-none relative z-10"
      />

      {/* Interactive Drag Hint Overlay */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center gap-2 px-3 py-1 rounded-full bg-[#05080F]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#94A3B8]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] animate-ping" />
        <span>Drag to rotate 3D Earth &bull; Click pins to inspect</span>
      </div>
    </div>
  );
}
