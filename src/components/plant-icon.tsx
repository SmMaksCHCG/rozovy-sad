import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { PlantId } from "@/lib/plants";

const iconClass = "h-full w-full";

export function PlantGlyph({
  id,
  className,
}: {
  id: PlantId;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn(iconClass, className)}
      aria-hidden
    >
      {glyphs[id]}
    </svg>
  );
}

const glyphs: Record<PlantId, ReactNode> = {
  peony: (
    <>
      <circle cx="32" cy="34" r="18" fill="#f4c4d2" />
      <circle cx="32" cy="34" r="12" fill="#e89bb0" />
      <circle cx="32" cy="34" r="5" fill="#c45c78" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <ellipse
            key={deg}
            cx={32 + Math.cos(rad) * 14}
            cy={34 + Math.sin(rad) * 14}
            rx="7"
            ry="10"
            fill="#f7d0dc"
            opacity="0.9"
            transform={`rotate(${deg} ${32 + Math.cos(rad) * 14} ${34 + Math.sin(rad) * 14})`}
          />
        );
      })}
      <circle cx="32" cy="34" r="6" fill="#f4e6ea" />
      <circle cx="32" cy="34" r="2.5" fill="#a84466" />
    </>
  ),
  lily: (
    <>
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse
          key={deg}
          cx="32"
          cy="20"
          rx="6"
          ry="16"
          fill="#f7d5e0"
          stroke="#c45c7a"
          strokeWidth="0.6"
          transform={`rotate(${deg} 32 34)`}
        />
      ))}
      <circle cx="32" cy="34" r="4" fill="#f0d36b" />
      <path d="M32 34 L32 18" stroke="#c45c7a" strokeWidth="0.8" />
    </>
  ),
  phlox: (
    <>
      {[
        [32, 22],
        [22, 30],
        [42, 30],
        [24, 42],
        [40, 42],
        [32, 34],
      ].map(([cx, cy], i) => (
        <g key={i}>
          {[0, 72, 144, 216, 288].map((deg) => (
            <circle
              key={deg}
              cx={cx + Math.cos((deg * Math.PI) / 180) * 5}
              cy={cy + Math.sin((deg * Math.PI) / 180) * 5}
              r="3.2"
              fill="#f4a0b5"
            />
          ))}
          <circle cx={cx} cy={cy} r="2.4" fill="#9c3354" />
        </g>
      ))}
    </>
  ),
  lavender: (
    <>
      <rect x="30" y="38" width="4" height="18" rx="1" fill="#6f8a62" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <ellipse
          key={i}
          cx={32 + (i % 2 === 0 ? -3.5 : 3.5)}
          cy={16 + i * 3.2}
          rx="4"
          ry="5.5"
          fill={i < 3 ? "#9a8bc8" : "#7b6cb0"}
        />
      ))}
      <ellipse cx="32" cy="14" rx="4.5" ry="6" fill="#b7add8" />
    </>
  ),
  gladiolus: (
    <>
      <rect x="30.5" y="10" width="3" height="46" rx="1" fill="#6f8a62" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <ellipse
          key={i}
          cx={32 + (i % 2 === 0 ? -6 : 6)}
          cy={14 + i * 5}
          rx="6"
          ry="4.5"
          fill={i % 2 === 0 ? "#e07070" : "#f0a090"}
        />
      ))}
    </>
  ),
  pansy: (
    <>
      <ellipse cx="32" cy="28" rx="10" ry="12" fill="#6e52a6" />
      <ellipse cx="20" cy="34" rx="9" ry="10" fill="#5a4294" />
      <ellipse cx="44" cy="34" rx="9" ry="10" fill="#5a4294" />
      <ellipse cx="24" cy="44" rx="8" ry="7" fill="#f4efe4" />
      <ellipse cx="40" cy="44" rx="8" ry="7" fill="#f4efe4" />
      <circle cx="32" cy="38" r="5" fill="#e7d56a" />
      <circle cx="32" cy="38" r="2" fill="#2a1c12" />
    </>
  ),
  dianthus: (
    <>
      {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((deg) => (
        <ellipse
          key={deg}
          cx="32"
          cy="22"
          rx="5"
          ry="13"
          fill="#f0b8c0"
          stroke="#a34454"
          strokeWidth="0.4"
          transform={`rotate(${deg} 32 36)`}
        />
      ))}
      <circle cx="32" cy="36" r="4" fill="#d96c7c" />
    </>
  ),
  salvia: (
    <>
      <rect x="30.5" y="14" width="3" height="40" rx="1" fill="#4a6a42" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <rect
          key={i}
          x={32 + (i % 2 === 0 ? -7 : 2)}
          y={12 + i * 3.4}
          width="5"
          height="8"
          rx="2"
          fill={i < 4 ? "#8a7bc0" : "#4e3f92"}
        />
      ))}
    </>
  ),
  echinacea: (
    <>
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <ellipse
          key={deg}
          cx="32"
          cy="18"
          rx="4"
          ry="14"
          fill="#c25674"
          transform={`rotate(${deg} 32 34)`}
        />
      ))}
      <ellipse cx="32" cy="34" rx="8" ry="7" fill="#c9a06a" />
      <ellipse cx="32" cy="32" rx="5" ry="4" fill="#6b4420" />
    </>
  ),
  nepeta: (
    <>
      {[
        [20, 36],
        [32, 28],
        [44, 36],
        [26, 46],
        [38, 46],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <rect x={cx - 1} y={cy} width="2" height="10" fill="#6f8a62" />
          {[0, 1, 2, 3].map((j) => (
            <circle
              key={j}
              cx={cx + (j % 2 === 0 ? -3 : 3)}
              cy={cy - 2 - j * 3}
              r="3"
              fill="#7d91c2"
              opacity="0.9"
            />
          ))}
        </g>
      ))}
    </>
  ),
};
