"use client";

import { BED, totalPlants } from "@/lib/plants";
import { asset } from "@/lib/asset";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#2a241c] text-[#f4efe4]">
      <img
        src={asset("/flower-bed-hero.jpg")}
        alt="Миксбордер Розовый сад в пике июльского цветения: пионы, лилии, флоксы, лаванда и гладиолусы"
        width={1600}
        height={900}
        className="h-[min(72vh,640px)] w-full object-cover object-center opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2a241c] via-[#2a241c]/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 space-y-4 p-6 md:p-10">
        <p className="text-xs tracking-[0.28em] text-[#e8d5b5] uppercase">
          Дизайн-проект клумбы · {BED.style}
        </p>
        <h1 className="font-heading max-w-3xl text-4xl leading-[1.05] font-semibold md:text-6xl">
          {BED.name}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-[#f4efe4]/85 md:text-base">
          Непрерывное цветение с апреля по октябрь: два куста пиона держат май,
          лилии и шалфей подхватывают июнь, флоксы с гладиолусами закрывают
          лето, эхинацея и виола дотягивают до первых заморозков.
        </p>
        <dl className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <Meta label="Размер" value={`${BED.widthCm / 100} × ${BED.depthCm / 100} м`} />
          <Meta label="Площадь" value={`${BED.areaM2} м²`} />
          <Meta label="Ориентация" value={`лицевая сторона на ${BED.orientation.toLowerCase()}`} />
          <Meta label="Позиций" value={`${totalPlants} растений`} />
        </dl>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] tracking-[0.18em] text-[#e8d5b5] uppercase">
        {label}
      </dt>
      <dd>{value}</dd>
    </div>
  );
}
