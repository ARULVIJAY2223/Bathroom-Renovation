export default function About() {
  return (
    <section className="bg-[#f6f3ef] py-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Card */}
        <div className="bg-[#ede9e3] rounded-[32px] px-6 py-10 md:px-12 md:py-16">

          {/* Top Label */}
          <p className="text-sm tracking-[3px] text-[#7a4f3a] uppercase mb-6">
            Почему выбирают нас
          </p>

          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-5xl text-[#2d2d2d] leading-tight max-w-5xl">
            Мы работаем только в Санкт-Петербурге. Благодаря этому
            поддерживаем качество и не распыляемся
          </h2>

          {/* Divider */}
          <div className="border-t border-[#7a4f3a] opacity-40 my-10"></div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* Item 1 */}
            <div>
              <h3 className="font-serif text-2xl mb-2 text-[#2d2d2d]">
                Гарантия
              </h3>
              <p className="text-gray-700">
                Реальная гарантия <br />
                <span className="font-semibold">60 месяцев</span>
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <h3 className="font-serif text-2xl mb-2 text-[#2d2d2d]">
                Выгода
              </h3>
              <p className="text-gray-700">
                Ремонт ванной <br />
                <span className="font-semibold">от 27 000 руб.</span>
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <h3 className="font-serif text-2xl mb-2 text-[#2d2d2d]">
                Скорость
              </h3>
              <p className="text-gray-700">
                Ванна под ключ <br />
                <span className="font-semibold">за 12 дней</span>
              </p>
            </div>

            {/* Item 4 */}
            <div>
              <h3 className="font-serif text-2xl mb-2 text-[#2d2d2d]">
                Опыт
              </h3>
              <p className="text-gray-700">
                Успешно трудимся <br />
                начиная с <span className="font-semibold">2007 года</span>
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-10">
            <button className="flex items-center gap-3 text-[#d4a437] font-medium text-lg hover:gap-5 transition-all">
              Оставить заявку
              <span className="text-2xl">→</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}