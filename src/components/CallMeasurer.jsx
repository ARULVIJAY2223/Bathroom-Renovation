export default function CallMeasurer() {
  return (
    <section className="bg-[#f4f1ed] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-[#d8cbb9] rounded-[32px] px-12 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Left Side */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2d2d2d] mb-6">
              Вызвать замерщика бесплатно
            </h2>

            <div className="flex items-center gap-4 text-[#5c1a1a] text-xl font-semibold">
              <span className="text-3xl">📞</span>
              <span>+8(950) 019 - 19 - 19</span>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">

            <input
              type="text"
              placeholder="Ваш номер телефона"
              className="bg-white rounded-xl px-6 py-4 w-full sm:w-72 outline-none"
            />

            <button className="border-2 border-[#d4a437] text-[#d4a437] rounded-full px-8 py-2 font-medium hover:bg-[#d4a437] hover:text-white transition shadow-[0_10px_30px_rgba(212,164,55,0.3)]">
              Вызвать замерщика
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}