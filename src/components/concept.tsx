import { palette } from "@/lib/plants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Concept() {
  return (
    <section id="concept" className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Замысел
        </p>
        <h2 className="font-heading mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
          Три яруса, одна розово-лиловая гамма
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Клумба собрана как классический миксбордер: высокие вертикали сзади,
          два пиона как якоря по центру, сухой ароматный бордюр спереди. К
          заданному набору — пионы, лилии, флокс, лаванда, гладиолусы, анютины
          глазки и низкая гвоздика — добавлены три вида, без которых розовый
          сад «проваливается» в июле, когда пионы уже отцвели.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Шалфей «Caradonna»</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Тёмно-фиолетовые свечи между пионами. Цветёт с июня по сентябрь,
            стрижётся на вторую волну и закрывает паузу после майских шапок.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Эхинацея «Magnus»</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Правое крыло рядом с гладиолусами. Держит форму, когда клубнелуковицы
            выкопаны, и кормит опылителей до осени.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Котовник «Walker&apos;s Low»</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Голубая дымка у ног пионов — приём английских садов. Маскирует
            желтеющую листву и рифмуется с лавандой по засухоустойчивости.
          </CardContent>
        </Card>
      </div>

      <div>
        <p className="mb-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Палитра цветков
        </p>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
          {palette.map((swatch) => (
            <li key={swatch.hex} className="space-y-2">
              <div
                className="h-16 rounded-xl ring-1 ring-foreground/10"
                style={{ background: swatch.hex }}
              />
              <p className="text-xs leading-tight">{swatch.name}</p>
              <p className="font-mono text-[10px] text-muted-foreground">
                {swatch.hex}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
