export default function FinalCTA() {
  return (
    <section className="bg-[#f4f1ed] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-[#d8cbb9] rounded-[32px] px-12 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Left Text */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2d2d2d] mb-4">
              Осталось заполнить форму
            </h2>
            <p className="text-gray-700">
              Вы узнаете стоимость ремонта <br />
              и получите скидку 10 %
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">

            <input
              type="text"
              placeholder="Ваше имя"
              className="bg-white rounded-xl px-6 py-4 w-full sm:w-64 outline-none"
            />

            <input
              type="text"
              placeholder="+ 7(___)___-__-__"
              className="bg-white rounded-xl px-6 py-4 w-full sm:w-64 outline-none"
            />

            <button className="border-2 border-[#d4a437] text-[#d4a437] rounded-full px-8 py-4 font-medium hover:bg-[#d4a437] hover:text-white transition shadow-[0_10px_30px_rgba(212,164,55,0.3)]">
              Рассчитать стоимость
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}