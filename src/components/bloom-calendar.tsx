import { MONTHS, plants } from "@/lib/plants";

export function BloomCalendar() {
  return (
    <section id="calendar" className="space-y-6">
      <div>
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Календарь
        </p>
        <h2 className="font-heading mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
          Цветение без дыр
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Анютины глазки открывают апрель, пионы держат май–июнь, лилии и
          лаванда — середину лета, флокс с гладиолусами и эхинацеей — август.
          Котовник и шалфей стягивают весь сезон в одну лиловую нить.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl bg-card ring-1 ring-foreground/10">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="px-4 py-3 font-medium">Растение</th>
              {MONTHS.map((month) => (
                <th
                  key={month.id}
                  className="w-[12%] px-1 py-3 text-center text-xs font-medium"
                >
                  {month.short}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {plants.map((plant) => (
              <tr key={plant.id} className="border-b last:border-0">
                <th className="px-4 py-2.5 text-left font-medium">
                  <span className="flex items-center gap-2">
                    <span
                      className="size-2.5 rounded-full"
                      style={{ background: plant.fill }}
                    />
                    {plant.name}
                  </span>
                </th>
                {MONTHS.map((month) => {
                  const on = plant.bloom.includes(month.id);
                  return (
                    <td key={month.id} className="px-1 py-2.5">
                      <div
                        className="h-7 rounded-md"
                        style={{
                          background: on ? plant.fill : "transparent",
                          opacity: on ? 1 : 0.08,
                          boxShadow: on
                            ? `inset 0 0 0 1px ${plant.stroke}44`
                            : undefined,
                        }}
                        title={on ? `${plant.name}: ${month.full}` : undefined}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
