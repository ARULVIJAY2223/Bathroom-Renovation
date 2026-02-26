const works = [
  { title: "Ремонт санузлов под ключ", img: "/work1.jpg" },
  { title: "Закупка и доставка товаров", img: "/work2.jpg" },
  { title: "Демонтажные работы", img: "/work3.jpg" },
  { title: "Разводка электропроводки", img: "/work4.jpg" },
  { title: "Укладки плитки на стены и пол", img: "/work5.png" },
  { title: "Разводка труб", img: "/work6.png" },
  { title: "Отделка стен", img: "/work7.jpg" },
  { title: "Выравнивание полов", img: "/work8.jpg" },
  { title: "Отделка потолка", img: "/work9.jpg" },
  { title: "Дизайн проект", img: "/work10.jpg" },
  { title: "Установка бытовой техники", img: "/work11.jpg" },
  { title: "Установка сантехники", img: "/work12.jpg" },
];

export default function WorkTypes() {
  return (
    <section className="bg-[#f4f1ed] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-36">
          <h2 className="font-serif text-4xl md:text-5xl text-black">
            Виды работ
          </h2>
          <div className="border-t border-[#7a4f3a] w-32 mx-auto mt-6"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {works.map((work, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Center Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#d8cbb9]/90 px-6 py-3 rounded-md text-center">
                  <p className="text-sm md:text-base font-medium text-[#2d2d2d]">
                    {work.title}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}