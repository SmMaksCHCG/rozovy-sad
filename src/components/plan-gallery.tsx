import Image from "next/image";

export function PlanGallery() {
  return (
    <section className="space-y-4">
      <div>
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Визуализация
        </p>
        <h2 className="font-heading mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
          Как клумба выглядит сверху
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Акварельный эскиз посадки: пионы — два крупных розовых пятна, флокс
          слева сзади, гладиолусы справа, сухой бордюр из лаванды, гвоздики и
          виолы по южному краю.
        </p>
      </div>
      <figure className="overflow-hidden rounded-3xl ring-1 ring-foreground/10">
        <Image
          src="/flower-bed-plan.jpg"
          alt="Вид сверху: акварельный план посадки миксбордера Розовый сад"
          width={1600}
          height={900}
          className="h-auto w-full"
        />
      </figure>
    </section>
  );
}
