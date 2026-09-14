import { plants, totalPlants } from "@/lib/plants";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const kind: Record<string, string> = {
  peony: "Корневище, многолетник",
  lily: "Луковица, многолетник",
  phlox: "Корневище, многолетник",
  lavender: "Полукустарник",
  gladiolus: "Клубнелуковица, на зиму выкопать",
  pansy: "Двулетник / рассада",
  dianthus: "Подушка, многолетник",
  salvia: "Многолетник",
  echinacea: "Многолетник",
  nepeta: "Многолетник",
};

export function ShoppingList() {
  return (
    <section id="list" className="space-y-6">
      <div>
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Спецификация
        </p>
        <h2 className="font-heading mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
          Что купить
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {totalPlants} посадочных единиц на {plants.length} видов. Гладиолусы
          и анютины глазки — сезонный блок, остальное живёт на клумбе годами.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl bg-card ring-1 ring-foreground/10">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Вид</TableHead>
              <TableHead>Сорт</TableHead>
              <TableHead>Кол-во</TableHead>
              <TableHead>Материал</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plants.map((plant) => (
              <TableRow key={plant.id}>
                <TableCell className="font-medium">
                  {plant.name}
                  {plant.isNew ? (
                    <span className="ml-2 text-xs text-muted-foreground">
                      новое
                    </span>
                  ) : null}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {plant.cultivar}
                </TableCell>
                <TableCell>{plant.countLabel}</TableCell>
                <TableCell className="text-muted-foreground">
                  {kind[plant.id]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
