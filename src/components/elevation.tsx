import { plants } from "@/lib/plants";

const MAX_H = 120;

export function Elevation() {
  const sorted = [...plants].sort((a, b) => b.height - a.height);

  return (
    <section id="elevation" className="space-y-6">
      <div>
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Профиль
        </p>
        <h2 className="font-heading mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
          Высоты ярусов
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Сзади 95–120 см (гладиолус, флокс, лилия), в середине пионы и эхинацея,
          спереди подушки 18–45 см. Зритель с южной дорожки видит все три
          плана, ничего не перекрывает соседей целиком.
        </p>
      </div>

      <div className="rounded-2xl bg-card px-4 py-6 ring-1 ring-foreground/10 md:px-8">
        <div className="flex h-56 items-end gap-2 sm:gap-3">
          {sorted.map((plant) => (
            <div
              key={plant.id}
              className="flex min-w-0 flex-1 flex-col items-center gap-2"
            >
              <div
                className="w-full max-w-16 rounded-t-full"
                style={{
                  height: `${(plant.height / MAX_H) * 100}%`,
                  background: `linear-gradient(180deg, ${plant.fillInner}, ${plant.fill})`,
                }}
                title={`${plant.name}: ${plant.height} см`}
              />
              <p className="w-full truncate text-center text-[10px] sm:text-xs">
                {plant.name}
              </p>
              <p className="text-[10px] text-muted-foreground">{plant.height}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Высота в сантиметрах, вид с юга
        </p>
      </div>
    </section>
  );
}
