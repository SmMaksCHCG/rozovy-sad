"use client";

import { plants, type PlantId } from "@/lib/plants";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlantGlyph } from "@/components/plant-icon";
import { cn } from "@/lib/utils";

export function PlantCatalog({
  selectedId,
  onSelect,
}: {
  selectedId: PlantId | null;
  onSelect: (id: PlantId) => void;
}) {
  return (
    <section id="plants" className="space-y-6">
      <div>
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Ассортимент
        </p>
        <h2 className="font-heading mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
          Десять видов, пятьдесят одно растение
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Семь видов из задания плюс три новых, подобранных под ту же гамму и
          чтобы клумба не пустела после пионов. Карточка подсвечивается, если
          вид выбран на плане.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {plants.map((plant) => {
          const active = selectedId === plant.id;
          return (
            <button
              key={plant.id}
              type="button"
              onClick={() => onSelect(plant.id)}
              className="text-left"
            >
              <Card
                className={cn(
                  "h-full transition-shadow hover:shadow-md",
                  active && "ring-2 ring-foreground",
                )}
              >
                <CardHeader className="flex-row items-start gap-3">
                  <div
                    className="size-14 shrink-0 rounded-xl p-2"
                    style={{
                      background: `radial-gradient(circle at 40% 30%, ${plant.fillInner}, ${plant.fill})`,
                    }}
                  >
                    <PlantGlyph id={plant.id} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="font-heading text-xl">
                        {plant.name}
                      </CardTitle>
                      {plant.isNew ? (
                        <Badge className="bg-(--color-new) text-white">Новое</Badge>
                      ) : null}
                    </div>
                    <p className="truncate text-xs text-muted-foreground italic">
                      {plant.latin}
                    </p>
                    <p className="text-xs">{plant.cultivar}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {plant.role}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {plant.height} см · {plant.countLabel} ·{" "}
                    {monthName(plant.bloom[0])}
                    {plant.bloom.length > 1
                      ? `–${monthName(plant.bloom[plant.bloom.length - 1])}`
                      : ""}
                  </p>
                </CardContent>
              </Card>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function monthName(id: number) {
  const names = ["", "", "", "", "апр", "май", "июн", "июл", "авг", "сен", "окт"];
  return names[id] ?? "";
}
