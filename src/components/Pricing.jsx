const pricingData = [
  {
    title: "Отделка стен",
    items: [
      ["Шпатлевка стен", "от 200р. кв.м"],
      ["Облицовка стен мозаикой", "от 800р. кв.м"],
      ["Укладка плитки на стены", "от 450р. кв.м"],
      ["Декоративная штукатурка", "от 400р. кв.м"],
      ["Покраска стен", "от 200р. кв.м"],
      ["Штукатурка стен", "от 300р. кв.м"],
    ],
  },
  {
    title: "Штукатурка стен",
    items: [
      ["Утепление пола", "от 300р. кв.м"],
      ["Укладка керамогранита", "от 550р. кв.м"],
      ["Облицовка природным камнем", "от 900р. кв.м"],
      ["Укладка плитки на пол", "от 450р. кв.м"],
      ["Стяжка пола", "от 350р. кв.м"],
      ["Гидроизоляция пола", "от 180р. кв.м"],
    ],
  },
  {
    title: "Отделка потолка",
    items: [
      ["Окрашивание потолка", "от 180р. кв.м"],
      ["Натяжной потолок", "от 250р. кв.м"],
      ["Реечный потолок", "от 300р. кв.м"],
      ["Реечный протокол", "от 360р. кв.м"],
      ["Шпатлевка потолка", "от 230р. кв.м"],
      ["Штукатурка потолка", "от 500р. кв.м"],
      ["Шумоизоляция потолка", "от 300р. кв.м"],
    ],
  },
  {
    title: "Сантехника/электрика",
    items: [
      ["Установка смесителя", "от 500р."],
      ["Установка раковины", "от 1000р."],
      ["Установка полотенцесушителя", "от 1000р."],
      ["Установка унитаза", "от 1200р."],
      ["Установка ванны", "от 1500р."],
      ["Установка душевой кабины", "от 3000р."],
      ["Установка стиральной машины", "от 700р."],
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-[#f6f3ef] py-24 text-black relative overflow-hidden">
      
      {/* Big Ruble Symbol Background */}
      <div className="absolute left-0 -top-0.5 text-[400px] text-[rgba(126,58,58,0.73)] opacity-15 select-none pointer-events-none">
        ₽
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl">
            Цены на услуги по ремонту ванной комнаты
          </h2>
          <div className="border-t border-[#7a2d2d] w-84 mx-auto mt-6"></div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16">

          {pricingData.map((category, index) => (
            <div key={index}>
              <h3 className="font-serif text-2xl mb-6 border-b border-[#7a2d2d] pb-2">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between border-b border-[#7a2d2d] pb-2 text-sm"
                  >
                    <span>{item[0]}</span>
                    <span className="text-black">{item[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}