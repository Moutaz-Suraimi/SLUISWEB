import { useEffect, useState, useRef } from "react";

export function ThreeScene() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      // Gentle interactive 3D tilt calculation
      setRotate({
        x: (mouseY / (rect.height / 2)) * -6,
        y: (mouseX / (rect.width / 2)) * 6,
      });
    };

    const handleMouseLeave = () => {
      setRotate({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full aspect-square max-w-[520px] mx-auto relative select-none flex items-center justify-center perspective-[1000px] group"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 via-cyan-400/20 to-transparent blur-3xl pointer-events-none transform group-hover:scale-110 transition-transform duration-700" />
      
      {/* Outer Cyan Neon Glow Ring */}
      <div className="absolute bottom-6 h-12 w-3/4 rounded-full bg-cyan-400/30 blur-xl pointer-events-none animate-pulse" />

      {/* Main Interactive 3D Card Artwork */}
      <div
        className="relative w-full h-full transition-transform duration-300 ease-out transform-gpu flex items-center justify-center"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(-8px)`,
        }}
      >
        <img
          src="/hero-3d-artwork.png"
          alt="SLUISWEB 3D Hero Artwork"
          className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(37,99,235,0.25)] transition-all duration-500 animate-float"
        />
      </div>
    </div>
  );
}
