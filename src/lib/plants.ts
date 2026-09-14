export type Layer = "back" | "mid" | "front";
export type Water = "low" | "medium" | "high";
export type Sun = "full" | "part";

export type PlantId =
  | "peony"
  | "lily"
  | "phlox"
  | "lavender"
  | "gladiolus"
  | "pansy"
  | "dianthus"
  | "salvia"
  | "echinacea"
  | "nepeta";

export type Placement = {
  id: string;
  plantId: PlantId;
  x: number;
  y: number;
};

export type Plant = {
  id: PlantId;
  name: string;
  latin: string;
  cultivar: string;
  role: string;
  isNew: boolean;
  count: number;
  countLabel: string;
  height: number;
  spread: number;
  layer: Layer;
  sun: Sun;
  water: Water;
  bloom: number[];
  colors: string[];
  fill: string;
  fillInner: string;
  stroke: string;
  soil: string;
  planting: string;
  care: string;
  companions: string;
  afterBloom: string;
};

export const BED = {
  widthCm: 480,
  depthCm: 180,
  areaM2: 8.6,
  name: "Розовый сад",
  orientation: "Юг",
  style: "Английский миксбордер",
} as const;

export const MONTHS = [
  { id: 4, short: "Апр", full: "Апрель" },
  { id: 5, short: "Май", full: "Май" },
  { id: 6, short: "Июн", full: "Июнь" },
  { id: 7, short: "Июл", full: "Июль" },
  { id: 8, short: "Авг", full: "Август" },
  { id: 9, short: "Сен", full: "Сентябрь" },
  { id: 10, short: "Окт", full: "Октябрь" },
] as const;

export const plants: Plant[] = [
  {
    id: "peony",
    name: "Пион",
    latin: "Paeonia lactiflora",
    cultivar: "Sarah Bernhardt и Festiva Maxima",
    role: "Два якорных куста — крупные розовые и бело-малиновые шапки в центре композиции",
    isNew: false,
    count: 2,
    countLabel: "2 куста",
    height: 90,
    spread: 80,
    layer: "mid",
    sun: "full",
    water: "medium",
    bloom: [5, 6],
    colors: ["#f4b6c8", "#f7e6ea"],
    fill: "#e89bb0",
    fillInner: "#f7d0dc",
    stroke: "#b85c78",
    soil: "Глубокая, плодородная, нейтральная, без застоя воды. Не любит частых пересадок.",
    planting: "Сажают осенью, почки на глубине 3–5 см. Между кустами 90 см, до края клумбы не меньше 50 см.",
    care: "Весной подкормка золой и комплексным удобрением. После цветения срезать только отцветшие головки, листву не трогать до сентября.",
    companions: "У ног пионов — котовник и шалфей: они закрывают желтеющую листву в июле.",
    afterBloom: "Форма куста остаётся, цвет берут шалфей, лилии и флоксы.",
  },
  {
    id: "lily",
    name: "Лилия",
    latin: "Lilium OT-hybrid",
    cultivar: "Star Gazer и Casa Blanca",
    role: "Три вертикальных акцента между пионами: аромат и звёздчатый силуэт",
    isNew: false,
    count: 3,
    countLabel: "3 луковицы",
    height: 110,
    spread: 30,
    layer: "mid",
    sun: "full",
    water: "medium",
    bloom: [6, 7],
    colors: ["#f2c1d0", "#ffffff"],
    fill: "#f0a8be",
    fillInner: "#fff6f8",
    stroke: "#c45c7a",
    soil: "Рыхлая, дренированная, с песком в лунке. Донце луковицы не должно стоять в воде.",
    planting: "Глубина 15–18 см, между луковицами 30–35 см. Сажают в сентябре или апреле.",
    care: "Подвязка к тонкому колышку. После цветения стебель оставляют, пока не пожелтеет — питание луковицы.",
    companions: "Спереди прикрыты лавандой, сзади поддержаны флоксом и гладиолусами.",
    afterBloom: "Семенные коробочки срезают, стебель остаётся до осени.",
  },
  {
    id: "phlox",
    name: "Флокс",
    latin: "Phlox paniculata",
    cultivar: "Bright Eyes",
    role: "Задний план слева: облако розовых шапок с малиновым глазком",
    isNew: false,
    count: 5,
    countLabel: "5 кустов",
    height: 95,
    spread: 45,
    layer: "back",
    sun: "full",
    water: "high",
    bloom: [7, 8, 9],
    colors: ["#e56b8a", "#f7c3d0"],
    fill: "#d85a7a",
    fillInner: "#f4a0b5",
    stroke: "#9c3354",
    soil: "Влажная, питательная, мульчированная. Не выносит пересыхания в жару.",
    planting: "Группа из пяти кустов с шагом 35–40 см образует сплошное пятно на заднем плане.",
    care: "Весной прореживать стебли до 6–8 сильных. Летом обильный полив под корень, не по листьям — профилактика мучнистой росы.",
    companions: "Рядом гладиолусы и эхинацея: разная фактура соцветий на одной высоте.",
    afterBloom: "Отцветшие метёлки срезают — часто даёт вторую волну в сентябре.",
  },
  {
    id: "lavender",
    name: "Лаванда",
    latin: "Lavandula angustifolia",
    cultivar: "Hidcote",
    role: "Передний ярус по центру: серебристая листва и фиолетовые свечи",
    isNew: false,
    count: 5,
    countLabel: "5 кустов",
    height: 45,
    spread: 40,
    layer: "front",
    sun: "full",
    water: "low",
    bloom: [6, 7, 8],
    colors: ["#7a6bb5", "#c5bddc"],
    fill: "#7b6cb0",
    fillInner: "#b7add8",
    stroke: "#4d427c",
    soil: "Беднее и суше, чем у пионов: в лунку добавляют песок и мелкий гравий. Нейтральная или слабощелочная.",
    planting: "Пять кустов дугой перед лилиями, шаг 35 см. Корневую шейку не заглублять.",
    care: "Стрижка сразу после цветения на треть — куст остаётся плотным. На зиму в холодном климате лёгкое укрытие лапником.",
    companions: "Рядом котовник и гвоздика: общий сухой, солнечный характер переднего края.",
    afterBloom: "Серебристые подушки держат форму до снега.",
  },
  {
    id: "gladiolus",
    name: "Гладиолус",
    latin: "Gladiolus × hortulanus",
    cultivar: "лососево-малиновая смесь",
    role: "Задний план справа: вертикальные мечи, пик в июле–августе",
    isNew: false,
    count: 9,
    countLabel: "9 клубнелуковиц",
    height: 120,
    spread: 18,
    layer: "back",
    sun: "full",
    water: "medium",
    bloom: [7, 8],
    colors: ["#e07070", "#f3b09a"],
    fill: "#d45b5b",
    fillInner: "#f0a090",
    stroke: "#9a3333",
    soil: "Рыхлая, прогретая, без свежего навоза. Клубнелуковица любит тепло.",
    planting: "Высадка в мае на глубину 10–12 см, группа из девяти штук с шагом 15 см — «дрожащий» вертикальный массив.",
    care: "Подвязка к бамбуку. После первых заморозков выкопать, просушить, хранить при +6…+8 °C.",
    companions: "Флокс слева смягчает жёсткий силуэт гладиолусов облаком шапок.",
    afterBloom: "Стебли срезают, место до осени закрывает эхинацея.",
  },
  {
    id: "pansy",
    name: "Анютины глазки",
    latin: "Viola × wittrockiana",
    cultivar: "Matrix, смесь крем / фиалка / золото",
    role: "Живой бордюр по самому краю: цветут первыми и закрывают сезон",
    isNew: false,
    count: 12,
    countLabel: "12 растений",
    height: 18,
    spread: 18,
    layer: "front",
    sun: "part",
    water: "medium",
    bloom: [4, 5, 6, 9, 10],
    colors: ["#6b4ea3", "#f2d56b", "#f4efe4"],
    fill: "#6e52a6",
    fillInner: "#e7d56a",
    stroke: "#3f2d6d",
    soil: "Рыхлая садовая земля с компостом. Не переносят жару в полном пекле — край клумбы чуть притенён пионами.",
    planting: "Двенадцать штук вдоль южного края с шагом 18–20 см. Высадка рассады в апреле или под зиму в сентябре.",
    care: "Регулярно снимать отцветшее — кустики не уходят в семена и цветут дольше. В июльский зной можно заменить на свежую рассаду к осени.",
    companions: "Гвоздика и котовник держат линию бордюра, когда виола выгорает в жару.",
    afterBloom: "Летний перерыв; осенняя волна с сентября.",
  },
  {
    id: "dianthus",
    name: "Низкая гвоздика",
    latin: "Dianthus plumarius",
    cultivar: "Pink Jewel",
    role: "Низкая кружевная подушка слева спереди: сизый лист и коралловые цветки",
    isNew: false,
    count: 6,
    countLabel: "6 кустиков",
    height: 22,
    spread: 28,
    layer: "front",
    sun: "full",
    water: "low",
    bloom: [5, 6, 7],
    colors: ["#e57a8a", "#d9e0d4"],
    fill: "#d96c7c",
    fillInner: "#f0b8c0",
    stroke: "#a34454",
    soil: "Лёгкая, известкованная, хорошо дренированная. Не выносит сырости у корневой шейки.",
    planting: "Шесть кустиков полукругом у западного угла, шаг 25 см. Шейку не заглублять.",
    care: "Стрижка после первой волны даёт повторное цветение. Зимует с лёгким укрытием в бесснежные зимы.",
    companions: "Рядом анютины глазки и котовник — три разные фактуры одного низкого яруса.",
    afterBloom: "Сизая вечнозелёная подушка остаётся декоративной.",
  },
  {
    id: "salvia",
    name: "Шалфей дубравный",
    latin: "Salvia nemorosa",
    cultivar: "Caradonna",
    role: "Новое. Фиолетовые свечи в среднем ярусе — мост между пионами и лилиями",
    isNew: true,
    count: 3,
    countLabel: "3 куста",
    height: 55,
    spread: 40,
    layer: "mid",
    sun: "full",
    water: "low",
    bloom: [6, 7, 8, 9],
    colors: ["#4b3d8f", "#8d7cc4"],
    fill: "#4e3f92",
    fillInner: "#8a7bc0",
    stroke: "#2f2760",
    soil: "Обычная садовая, скорее сухая, чем мокрая. Отлично живёт в той же зоне, что лаванда.",
    planting: "Три куста между пионами, шаг 40 см. Весенняя или осенняя посадка.",
    care: "После первой волны срезать на треть — в августе снова покрывается свечами. Не разваливается, не требует подвязки.",
    companions: "Классическая пара к пиону и котовнику: закрывает паузу после майского пика.",
    afterBloom: "Тёмные стебли и листва держат графику до октября.",
  },
  {
    id: "echinacea",
    name: "Эхинацея пурпурная",
    latin: "Echinacea purpurea",
    cultivar: "Magnus",
    role: "Новое. Правый средний план: ромашки с конусом, цветут когда пионы уже спят",
    isNew: true,
    count: 3,
    countLabel: "3 куста",
    height: 80,
    spread: 40,
    layer: "mid",
    sun: "full",
    water: "low",
    bloom: [7, 8, 9],
    colors: ["#c45b7a", "#e8c9a8"],
    fill: "#c25674",
    fillInner: "#e3b7c4",
    stroke: "#8a3350",
    soil: "Бедноватая, дренированная. На жирной земле жирует листвой и хуже цветёт.",
    planting: "Три куста у восточного края, шаг 40 см, ближе к гладиолусам.",
    care: "Не срезать все корзинки: часть оставить щеглам на осень. Весной прошлогодние стебли убрать.",
    companions: "Гладиолусы дают вертикаль, эхинацея — устойчивую «ромашку» на том же правом крыле.",
    afterBloom: "Сухие шишки декоративны до зимы.",
  },
  {
    id: "nepeta",
    name: "Котовник Фассена",
    latin: "Nepeta × faassenii",
    cultivar: "Walker's Low",
    role: "Новое. Голубая дымка у подножия пионов — couvre-sol всего переднего яруса",
    isNew: true,
    count: 3,
    countLabel: "3 куста",
    height: 40,
    spread: 50,
    layer: "front",
    sun: "full",
    water: "low",
    bloom: [5, 6, 7, 8, 9],
    colors: ["#7f93c4", "#c5d0e6"],
    fill: "#7d91c2",
    fillInner: "#b7c4e0",
    stroke: "#4a5c88",
    soil: "Любая дренированная. Засухоустойчив, не конкурирует агрессивно с пионами.",
    planting: "Три куста: у западного пиона, в центре перед лавандой и у восточного края. Шаг 50 см.",
    care: "Стрижка после июня омолаживает куст и даёт вторую волну. Зимует без укрытия в средней полосе.",
    companions: "С пионами — проверенная пара английских садов: котовник маскирует ноги куста.",
    afterBloom: "Серо-зелёная подушка остаётся плотной.",
  },
];

export const placements: Placement[] = [
  { id: "phlox-1", plantId: "phlox", x: 75, y: 38 },
  { id: "phlox-2", plantId: "phlox", x: 115, y: 28 },
  { id: "phlox-3", plantId: "phlox", x: 155, y: 40 },
  { id: "phlox-4", plantId: "phlox", x: 95, y: 55 },
  { id: "phlox-5", plantId: "phlox", x: 140, y: 52 },

  { id: "glad-1", plantId: "gladiolus", x: 275, y: 26 },
  { id: "glad-2", plantId: "gladiolus", x: 300, y: 22 },
  { id: "glad-3", plantId: "gladiolus", x: 325, y: 28 },
  { id: "glad-4", plantId: "gladiolus", x: 350, y: 24 },
  { id: "glad-5", plantId: "gladiolus", x: 375, y: 30 },
  { id: "glad-6", plantId: "gladiolus", x: 400, y: 25 },
  { id: "glad-7", plantId: "gladiolus", x: 290, y: 44 },
  { id: "glad-8", plantId: "gladiolus", x: 330, y: 48 },
  { id: "glad-9", plantId: "gladiolus", x: 365, y: 42 },

  { id: "lily-1", plantId: "lily", x: 195, y: 68 },
  { id: "lily-2", plantId: "lily", x: 250, y: 62 },
  { id: "lily-3", plantId: "lily", x: 305, y: 70 },

  { id: "ech-1", plantId: "echinacea", x: 418, y: 78 },
  { id: "ech-2", plantId: "echinacea", x: 452, y: 96 },
  { id: "ech-3", plantId: "echinacea", x: 402, y: 108 },

  { id: "peony-1", plantId: "peony", x: 118, y: 100 },
  { id: "peony-2", plantId: "peony", x: 348, y: 102 },

  { id: "salvia-1", plantId: "salvia", x: 198, y: 112 },
  { id: "salvia-2", plantId: "salvia", x: 246, y: 118 },
  { id: "salvia-3", plantId: "salvia", x: 292, y: 110 },

  { id: "nepeta-1", plantId: "nepeta", x: 52, y: 128 },
  { id: "nepeta-2", plantId: "nepeta", x: 178, y: 138 },
  { id: "nepeta-3", plantId: "nepeta", x: 422, y: 132 },

  { id: "lav-1", plantId: "lavender", x: 220, y: 142 },
  { id: "lav-2", plantId: "lavender", x: 258, y: 138 },
  { id: "lav-3", plantId: "lavender", x: 296, y: 144 },
  { id: "lav-4", plantId: "lavender", x: 238, y: 162 },
  { id: "lav-5", plantId: "lavender", x: 278, y: 160 },

  { id: "dian-1", plantId: "dianthus", x: 48, y: 155 },
  { id: "dian-2", plantId: "dianthus", x: 88, y: 162 },
  { id: "dian-3", plantId: "dianthus", x: 125, y: 152 },
  { id: "dian-4", plantId: "dianthus", x: 158, y: 165 },
  { id: "dian-5", plantId: "dianthus", x: 28, y: 138 },
  { id: "dian-6", plantId: "dianthus", x: 68, y: 145 },

  { id: "pansy-1", plantId: "pansy", x: 198, y: 170 },
  { id: "pansy-2", plantId: "pansy", x: 228, y: 172 },
  { id: "pansy-3", plantId: "pansy", x: 258, y: 168 },
  { id: "pansy-4", plantId: "pansy", x: 288, y: 172 },
  { id: "pansy-5", plantId: "pansy", x: 318, y: 166 },
  { id: "pansy-6", plantId: "pansy", x: 348, y: 170 },
  { id: "pansy-7", plantId: "pansy", x: 378, y: 162 },
  { id: "pansy-8", plantId: "pansy", x: 408, y: 168 },
  { id: "pansy-9", plantId: "pansy", x: 442, y: 158 },
  { id: "pansy-10", plantId: "pansy", x: 72, y: 172 },
  { id: "pansy-11", plantId: "pansy", x: 112, y: 175 },
  { id: "pansy-12", plantId: "pansy", x: 152, y: 172 },
];

export const plantMap = Object.fromEntries(plants.map((p) => [p.id, p])) as Record<
  PlantId,
  Plant
>;

export const palette = [
  { name: "Пионовый розовый", hex: "#e89bb0" },
  { name: "Кремовый", hex: "#f4efe4" },
  { name: "Флоксовый малиновый", hex: "#d85a7a" },
  { name: "Лавандовый", hex: "#7b6cb0" },
  { name: "Шалфейный", hex: "#4e3f92" },
  { name: "Котовник", hex: "#7d91c2" },
  { name: "Лосось гладиолуса", hex: "#d45b5b" },
  { name: "Шалфейный лист", hex: "#6f8a62" },
];

export const yearCare = [
  {
    season: "Апрель",
    items: [
      "Высадка рассады анютиных глазок по южному краю",
      "Снять зимнее укрытие с лаванды и гвоздики",
      "Подкормка пионов золой, мульча компостом",
    ],
  },
  {
    season: "Май",
    items: [
      "Посадка клубнелуковиц гладиолусов, когда почва прогреется",
      "Прореживание стеблей флокса",
      "Пионы в бутонах: полив без попадания на листья",
    ],
  },
  {
    season: "Июнь",
    items: [
      "Пик пионов и гвоздики — срезать увядшие цветки",
      "Подвязка лилий и гладиолусов",
      "Первая стрижка котовника после волны",
    ],
  },
  {
    season: "Июль",
    items: [
      "Обильный полив флокса под корень",
      "Срезка шалфея на треть после первой волны",
      "Мульча, чтобы закрыть ноги пионов",
    ],
  },
  {
    season: "Август",
    items: [
      "Пик гладиолусов, флокса и эхинацеи",
      "Стрижка лаванды сразу после цветения",
      "Не поливать лаванду, гвоздику и шалфей вровень с флоксом",
    ],
  },
  {
    season: "Сентябрь — октябрь",
    items: [
      "Выкопать гладиолусы после первых заморозков",
      "Посадка новых луковиц лилий и деление при необходимости",
      "Осенняя рассада виолы, обрезка эхинацеи частично оставить",
    ],
  },
];

export function isBlooming(plant: Plant, month: number | null) {
  if (month == null) return true;
  return plant.bloom.includes(month);
}

export const totalPlants = plants.reduce((sum, plant) => sum + plant.count, 0);
