"use client";

import { useState } from "react";
import type { PlantId } from "@/lib/plants";
import { BloomCalendar } from "@/components/bloom-calendar";
import { CareGuide } from "@/components/care-guide";
import { Concept } from "@/components/concept";
import { Elevation } from "@/components/elevation";
import { GardenPlan } from "@/components/garden-plan";
import { Hero } from "@/components/hero";
import { PlantCatalog } from "@/components/plant-catalog";
import { ShoppingList } from "@/components/shopping-list";
import { PlanGallery } from "@/components/plan-gallery";

const nav = [
  { href: "#concept", label: "Замысел" },
  { href: "#plan", label: "Чертёж" },
  { href: "#plants", label: "Растения" },
  { href: "#calendar", label: "Цветение" },
  { href: "#care", label: "Уход" },
  { href: "#list", label: "Спецификация" },
];

export function GardenApp() {
  const [selectedId, setSelectedId] = useState<PlantId | null>(null);

  return (
    <div className="min-h-full">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-[color-mix(in_oklch,var(--background)_88%,transparent)] backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a href="#top" className="font-heading text-lg font-semibold">
            Розовый сад
          </a>
          <nav className="-mx-4 flex items-center gap-1 overflow-x-auto px-4 md:mx-0 md:overflow-visible md:px-0">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main
        id="top"
        className="mx-auto flex max-w-6xl flex-col gap-20 px-4 py-8 md:px-6 md:py-12"
      >
        <Hero />
        <Concept />
        <PlanGallery />
        <section id="plan">
          <GardenPlan selectedId={selectedId} onSelect={setSelectedId} />
        </section>
        <Elevation />
        <PlantCatalog
          selectedId={selectedId}
          onSelect={(id) => {
            setSelectedId(id);
            document
              .getElementById("plan")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        />
        <BloomCalendar />
        <CareGuide />
        <ShoppingList />
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        Миксбордер «Розовый сад» · 4,8 × 1,8 м · непрерывное цветение
        апрель–октябрь
      </footer>
    </div>
  );
}
