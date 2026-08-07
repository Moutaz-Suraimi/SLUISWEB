import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`group flex items-center gap-3 transition-opacity hover:opacity-95 ${className}`}
      aria-label="SLUISWEB Home"
    >
      {/* Official SLUISWEB Logo Image Asset */}
      <img
        src="/logo.png"
        alt="SLUISWEB"
        className="h-10 w-auto max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}