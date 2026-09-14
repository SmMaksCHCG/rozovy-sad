import { plants, yearCare } from "@/lib/plants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sunLabel = { full: "Полное солнце", part: "Солнце / лёгкая тень" };
const waterLabel = {
  low: "Скудный полив",
  medium: "Умеренный полив",
  high: "Регулярно влажно",
};

export function CareGuide() {
  return (
    <section id="care" className="space-y-8">
      <div>
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Агротехника
        </p>
        <h2 className="font-heading mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
          Две почвы на одной клумбе
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Задний и средний ярус — плодородный суглинок для пионов и флокса.
          Передний край намеренно беднее и суше: в лунки лаванды, гвоздики,
          шалфея и котовника добавляют песок и мелкий гравий, чтобы не гнили
          корневые шейки.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {plants.map((plant) => (
          <Card key={plant.id} size="sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span
                  className="size-2.5 rounded-full"
                  style={{ background: plant.fill }}
                />
                {plant.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>
                <span className="text-foreground">{sunLabel[plant.sun]}</span>
                {" · "}
                {waterLabel[plant.water]}
              </p>
              <p>{plant.soil}</p>
              <p>{plant.care}</p>
              <p>
                <span className="text-foreground">Соседи. </span>
                {plant.companions}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h3 className="font-heading mb-4 text-2xl font-semibold">
          Календарь работ
        </h3>
        <ol className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {yearCare.map((block) => (
            <li
              key={block.season}
              className="rounded-2xl bg-card p-4 ring-1 ring-foreground/10"
            >
              <p className="font-heading text-lg font-medium">{block.season}</p>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
