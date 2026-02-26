import { useState } from "react";

const testimonials = [
  {
    name: "От Марии Романовны",
    img: "/review1.jpg",
  },
  {
    name: "От Николая Петровича",
    img: "/review2.jpg",
  },
  {
    name: "От Нины Семеновны",
    img: "/review3.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(1);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-[#f6f3ef]  py-24 text-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl">
            Отзывы
          </h2>
          <div className="border-t border-[#7a2d2d] w-40 mx-auto mt-6"></div>
        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center gap-10">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="text-[#7a2d2d] text-3xl absolute left-0"
          >
            ‹
          </button>

          {/* Cards */}
          <div className="flex gap-10 overflow-hidden">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === current
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-50 hidden md:block"
                }`}
              >
                <div className="rounded-3xl overflow-hidden w-80 shadow-xl">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-72 w-full object-cover"
                  />
                  <div className="bg-[#d8cbb9] text-[#2d2d2d] text-center py-6 text-lg">
                    {item.name}
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="text-[#7a2d2d] text-3xl absolute right-0"
          >
            ›
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-6 rounded-full cursor-pointer ${
                index === current
                  ? "bg-[#d4a437]"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}