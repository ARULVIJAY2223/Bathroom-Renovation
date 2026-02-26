import { useState } from "react";

export default function Calculator() {
  const [bathType, setBathType] = useState("combined");

  return (
    <section className="bg-[#f6f3ef] py-24 text-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl">
            Рассчитайте стоимость ремонта
          </h2>
          <div className="border-t border-[#7a4f3a] w-40 mx-auto mt-6"></div>
        </div>

        {/* Top Row */}
        <div className="flex flex-wrap items-center gap-10 mb-12">

          {/* Bath Type */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full">
            <p className="text-black whitespace-nowrap">Тип санузла:</p>

            {["combined", "separate", "bathroom"].map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="bathType"
                  value={type}
                  checked={bathType === type}
                  onChange={() => setBathType(type)}
                  className="accent-[#d4a437]"
                />
                <span>
                  {type === "combined"
                    ? "Совмещённый"
                    : type === "separate"
                      ? "Раздельный"
                      : "Ванная комната"}
                </span>
              </label>
            ))}
          </div>

          {/* Area */}
          <div className="flex items-center gap-4">
            <p className="text-black">Площадь:</p>
            <input
              type="text"
              placeholder="12 м2"
              className="bg-[#d8cbb9] text-black px-4 py-2 rounded-lg w-28"
            />
          </div>
        </div>

        {/* Materials Row */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">

          {["Материал отделки стен", "Материал отделки пола", "Материал отделки потолка"].map((label, i) => (
            <div key={i}>
              <p className="text-black mb-3">{label}:</p>
              <select className="w-full bg-[#d8cbb9] text-black px-4 py-3 rounded-lg">
                <option>Выберите</option>
                <option>Плитка</option>
                <option>Краска</option>
                <option>Панели</option>
              </select>
            </div>
          ))}

        </div>

        {/* Additional Services */}
        <div>
          <p className="text-black mb-6">Дополнительные услуги:</p>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Подвесной унитаз (инсталляция)",
              "Душевая кабина",
              "Гигиенический душ (биде)",
              "Конструкция из ГКЛ (ниши/полки)",
              "Теплый пол",
              'Люк "невидимка" под плитку',
              "Водонагреватель",
            ].map((service, index) => (
              <label key={index} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#d4a437]"
                />
                <span>{service}</span>
              </label>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}