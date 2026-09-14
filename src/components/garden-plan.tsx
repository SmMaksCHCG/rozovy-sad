"use client";

import { useMemo, useState } from "react";
import {
  BED,
  isBlooming,
  MONTHS,
  placements,
  plantMap,
  plants,
  type Plant,
  type PlantId,
} from "@/lib/plants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlantGlyph } from "@/components/plant-icon";
import { cn } from "@/lib/utils";

const PAD_X = 36;
const PAD_Y = 44;
const VIEW_W = BED.widthCm + PAD_X * 2;
const VIEW_H = BED.depthCm + PAD_Y * 2 + 18;

type GardenPlanProps = {
  selectedId: PlantId | null;
  onSelect: (id: PlantId | null) => void;
};

export function GardenPlan({ selectedId, onSelect }: GardenPlanProps) {
  const [month, setMonth] = useState<number | null>(null);

  const ordered = useMemo(
    () =>
      [...placements].sort((a, b) => {
        const pa = plantMap[a.plantId];
        const pb = plantMap[b.plantId];
        return pa.spread - pb.spread || a.y - b.y;
      }),
    [],
  );

  const selected = selectedId ? plantMap[selectedId] : null;

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Вид сверху · 1 клетка = 50 см
          </p>
          <h2 className="font-heading mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
            Посадочный чертёж
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Север — вверху, зритель идёт вдоль южного края. Нажмите на растение,
            чтобы увидеть сорт, шаг посадки и уход. Фильтр по месяцу показывает,
            что цветёт в выбранный срок.
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <Button
            size="sm"
            variant={month == null ? "default" : "outline"}
            onClick={() => setMonth(null)}
          >
            Весь сезон
          </Button>
          {MONTHS.map((m) => (
            <Button
              key={m.id}
              size="sm"
              variant={month === m.id ? "default" : "outline"}
              onClick={() => setMonth(m.id)}
            >
              {m.short}
            </Button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-[#e7eedc] ring-1 ring-foreground/10">
        <div className="relative">
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="block h-auto w-full"
            role="img"
            aria-label={`План клумбы ${BED.widthCm / 100} на ${BED.depthCm / 100} метра`}
          >
            <defs>
              <pattern
                id="grass"
                width="18"
                height="18"
                patternUnits="userSpaceOnUse"
              >
                <rect width="18" height="18" fill="#d7e2c4" />
                <path
                  d="M3 16c1-6 3-10 3-14M10 17c1-7 4-9 2-15M16 16c0-5 2-9 1-13"
                  stroke="#b7c89a"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                />
              </pattern>
              <pattern
                id="soil"
                width="12"
                height="12"
                patternUnits="userSpaceOnUse"
              >
                <rect width="12" height="12" fill="#6b4a32" />
                <circle cx="3" cy="4" r="0.7" fill="#5a3c28" />
                <circle cx="8" cy="9" r="0.8" fill="#7d5840" />
                <circle cx="10" cy="3" r="0.5" fill="#4a2f20" />
              </pattern>
              <pattern
                id="brick"
                width="16"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <rect width="16" height="8" fill="#c4785a" />
                <path d="M0 8h16M8 0v8" stroke="#a35c42" strokeWidth="0.8" />
              </pattern>
              <filter id="soft">
                <feDropShadow
                  dx="0"
                  dy="1.2"
                  stdDeviation="1.4"
                  floodOpacity="0.25"
                />
              </filter>
            </defs>

            <rect width={VIEW_W} height={VIEW_H} fill="url(#grass)" />

            {Array.from({ length: 10 }, (_, i) => (
              <g key={i}>
                <line
                  x1={PAD_X + i * 50}
                  y1={PAD_Y}
                  x2={PAD_X + i * 50}
                  y2={PAD_Y + BED.depthCm}
                  stroke="#ffffff"
                  strokeOpacity="0.18"
                />
              </g>
            ))}
            {Array.from({ length: 4 }, (_, i) => (
              <line
                key={i}
                x1={PAD_X}
                y1={PAD_Y + i * 50}
                x2={PAD_X + BED.widthCm}
                y2={PAD_Y + i * 50}
                stroke="#ffffff"
                strokeOpacity="0.18"
              />
            ))}

            <rect
              x={PAD_X - 8}
              y={PAD_Y - 8}
              width={BED.widthCm + 16}
              height={BED.depthCm + 16}
              rx="28"
              fill="url(#brick)"
            />
            <rect
              x={PAD_X}
              y={PAD_Y}
              width={BED.widthCm}
              height={BED.depthCm}
              rx="22"
              fill="url(#soil)"
            />

            <text
              x={VIEW_W / 2}
              y={22}
              textAnchor="middle"
              fill="#3d4a32"
              fontSize="11"
              letterSpacing="2"
            >
              СЕВЕР · ЗАДНИЙ ПЛАН
            </text>
            <text
              x={VIEW_W / 2}
              y={VIEW_H - 8}
              textAnchor="middle"
              fill="#3d4a32"
              fontSize="11"
              letterSpacing="2"
            >
              ЮГ · ДОРОЖКА ЗРИТЕЛЯ
            </text>
            <text
              x={14}
              y={VIEW_H / 2}
              fill="#3d4a32"
              fontSize="10"
              letterSpacing="1.5"
              transform={`rotate(-90 14 ${VIEW_H / 2})`}
            >
              ЗАПАД
            </text>
            <text
              x={VIEW_W - 14}
              y={VIEW_H / 2}
              fill="#3d4a32"
              fontSize="10"
              letterSpacing="1.5"
              transform={`rotate(90 ${VIEW_W - 14} ${VIEW_H / 2})`}
            >
              ВОСТОК
            </text>

            <g transform={`translate(${PAD_X + 12} ${PAD_Y + BED.depthCm + 6})`}>
              <line x1="0" y1="0" x2="50" y2="0" stroke="#3d4a32" strokeWidth="1.4" />
              <line x1="0" y1="-3" x2="0" y2="3" stroke="#3d4a32" strokeWidth="1.4" />
              <line x1="50" y1="-3" x2="50" y2="3" stroke="#3d4a32" strokeWidth="1.4" />
              <text x="25" y="12" textAnchor="middle" fill="#3d4a32" fontSize="9">
                50 см
              </text>
            </g>
          </svg>

          {ordered.map((spot) => {
            const plant = plantMap[spot.plantId];
            const blooming = isBlooming(plant, month);
            const isSelected = selectedId === plant.id;
            const dimmed =
              (selectedId != null && !isSelected) || (month != null && !blooming);
            const size = plant.spread;
            const left = ((spot.x - size / 2 + PAD_X) / VIEW_W) * 100;
            const top = ((spot.y - size / 2 + PAD_Y) / VIEW_H) * 100;
            const width = (size / VIEW_W) * 100;
            const height = (size / VIEW_H) * 100;

            return (
              <button
                key={spot.id}
                type="button"
                aria-label={`${plant.name}, ${plant.cultivar}`}
                aria-pressed={isSelected}
                onClick={() => onSelect(isSelected ? null : plant.id)}
                className={cn(
                  "absolute flex items-center justify-center rounded-full border-2 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                  isSelected
                    ? "z-20 scale-105 border-foreground shadow-lg"
                    : "border-white/50 hover:z-10 hover:scale-[1.04] hover:border-white",
                  dimmed && "opacity-30 grayscale-[0.4]",
                )}
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${width}%`,
                  height: `${height}%`,
                  background: `radial-gradient(circle at 40% 35%, ${plant.fillInner}, ${plant.fill})`,
                  boxShadow: isSelected
                    ? `0 0 0 3px ${plant.stroke}55`
                    : "0 2px 6px rgba(40,20,10,0.25)",
                }}
              >
                <span className="pointer-events-none w-[70%] max-w-12">
                  <PlantGlyph id={plant.id} />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <Legend selectedId={selectedId} onSelect={onSelect} month={month} />

      {selected ? <PlantBrief plant={selected} /> : <EmptyBrief />}
    </div>
  );
}

function Legend({
  selectedId,
  onSelect,
  month,
}: {
  selectedId: PlantId | null;
  onSelect: (id: PlantId | null) => void;
  month: number | null;
}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {plants.map((plant) => {
        const active = selectedId === plant.id;
        const blooming = isBlooming(plant, month);
        return (
          <li key={plant.id}>
            <button
              type="button"
              onClick={() => onSelect(active ? null : plant.id)}
              className={cn(
                "flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs transition-colors",
                active
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card hover:bg-muted",
                !blooming && !active && "opacity-40",
              )}
            >
              <span
                className="size-2.5 rounded-full"
                style={{ background: plant.fill }}
              />
              {plant.name}
              <span className="text-[10px] opacity-70">×{plant.count}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function EmptyBrief() {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-card/60 px-5 py-6 text-sm text-muted-foreground">
      Выберите растение на плане или в легенде — справа и ниже появится карточка
      сорта, расстояния и ухода. Без выбора виден весь миксбордер.
    </div>
  );
}

function PlantBrief({ plant }: { plant: Plant }) {
  return (
    <div className="grid gap-4 rounded-2xl bg-card p-5 ring-1 ring-foreground/10 md:grid-cols-[140px_1fr]">
      <div
        className="flex aspect-square items-center justify-center rounded-xl p-4"
        style={{
          background: `radial-gradient(circle at 40% 30%, ${plant.fillInner}, ${plant.fill})`,
        }}
      >
        <PlantGlyph id={plant.id} />
      </div>
      <div className="space-y-3">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-heading text-2xl font-semibold">{plant.name}</h3>
              {plant.isNew ? (
                <Badge className="bg-(--color-new) text-white">Новое</Badge>
              ) : null}
            </div>
            <p className="text-sm text-muted-foreground italic">{plant.latin}</p>
            <p className="text-sm">{plant.cultivar}</p>
          </div>
          <Badge variant="secondary">{plant.countLabel}</Badge>
        </div>
        <p className="text-sm leading-relaxed">{plant.role}</p>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-4">
          <Stat label="Высота" value={`${plant.height} см`} />
          <Stat label="Куст" value={`${plant.spread} см`} />
          <Stat label="Ярус" value={layerLabel[plant.layer]} />
          <Stat
            label="Свет / вода"
            value={`${sunLabel[plant.sun]} · ${waterLabel[plant.water]}`}
          />
        </dl>
        <p className="text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">Посадка. </span>
          {plant.planting}
        </p>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] tracking-wider text-muted-foreground uppercase">
        {label}
      </dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}

const layerLabel = {
  back: "задний",
  mid: "средний",
  front: "передний",
} as const;

const sunLabel = { full: "солнце", part: "ажур" } as const;
const waterLabel = {
  low: "сухо",
  medium: "умеренно",
  high: "влажно",
} as const;
