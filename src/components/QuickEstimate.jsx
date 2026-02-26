export default function QuickEstimate() {
  return (
    <section className="bg-[#f4f1ed] py-34">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16 max-w-4xl">
          <h2 className="font-serif text-4xl md:text-5xl text-[#2d2d2d] leading-tight">
            Рассчитайте стоимость ремонта санузла быстро
            и легко со скидкой{" "}
            <span className="text-[#d4a437]">5 000 рублей</span>
          </h2>

          <div className="border-t border-[#7a4f3a] opacity-40 mt-6 w-2/3"></div>
        </div>

        {/* Card */}
        <div className="bg-[#d8cbb9] rounded-[32px] overflow-hidden flex flex-col md:flex-row">

          {/* Left Image */}
          <div className="md:w-1/2">
            <img
              src="/bathroom-form.png"
              alt="Bathroom"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Form */}
          <div className="md:w-1/2 p-12">

            {/* Area */}
            <div className="mb-6">
              <label className="block text-sm mb-2 text-[#2d2d2d]">
                Площадь санузла
              </label>
              <input
                type="text"
                placeholder="м2"
                className="w-full bg-white rounded-xl px-5 py-4 outline-none"
              />
            </div>

            {/* Name */}
            <div className="mb-6">
              <label className="block text-sm mb-2 text-[#2d2d2d]">
                Имя
              </label>
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full bg-white rounded-xl px-5 py-4 outline-none"
              />
            </div>

            {/* Phone */}
            <div className="mb-8">
              <label className="block text-sm mb-2 text-[#2d2d2d]">
                Телефон
              </label>
              <input
                type="text"
                placeholder="+7(___)___-__-__"
                className="w-full bg-white rounded-xl px-5 py-4 outline-none"
              />
            </div>

            {/* Button */}
            <button className="w-full border-2 border-[#d4a437] text-[#d4a437] rounded-full py-4 text-lg font-medium hover:bg-[#d4a437] hover:text-white transition-all duration-300 shadow-[0_10px_30px_rgba(212,164,55,0.3)]">
              Рассчитать стоимость
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}