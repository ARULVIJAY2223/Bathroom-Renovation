const projects = [
  {
    title: "Ремонт санузла в стиле лофт",
    area: "4,2 м2",
    days: "15 дней",
    before: "/p1-before.jpg",
    after: "/p1-after.jpg",
    thumbs: ["/p1-1.jpg", "/p1-2.jpg", "/p1-3.jpg"],
  },
  {
    title: "Ремонт ванной комнаты и санузла",
    area: "5 м2",
    days: "20 дней",
    before: "/p2-before.jpg",
    after: "/p2-after.jpg",
    thumbs: ["/p2-1.jpg", "/p2-2.jpg", "/p2-3.jpg"],
  },
  {
    title: "Ремонт раздельного санузла",
    area: "4 м2",
    days: "15 дней",
    before: "/p3-before.jpg",
    after: "/p3-after.jpg",
    thumbs: ["/p3-1.jpg", "/p3-2.jpg", "/p3-3.jpg"],
  },
  {
    title: "Ремонт совмещенного санузла",
    area: "4 м2",
    days: "14 дней",
    before: "/p4-before.jpg",
    after: "/p4-after.jpg",
    thumbs: ["/p4-1.jpg", "/p4-2.jpg", "/p4-3.jpg"],
  },
  {
    title: "Ремонт санузла",
    area: "4,5 м2",
    days: "15 дней",
    before: "/p5-before.jpg",
    after: "/p5-after.jpg",
    thumbs: ["/p5-1.jpg", "/p5-2.jpg", "/p5-3.jpg"],
  },
  {
    title: "Ремонт ванной комнаты",
    area: "4,5 м2",
    days: "16 дней",
    before: "/p6-before.jpg",
    after: "/p6-after.jpg",
    thumbs: ["/p6-1.jpg", "/p6-2.jpg", "/p6-3.jpg"],
  },
];

export default function Portfolio() {
  return (
    <section className="bg-[#f6f3ef] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-black">
            Примеры работ
          </h2>
          <div className="border-t border-[#7a4f3a] w-40 mx-auto mt-6"></div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] p-8 shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-6">

                {/* Left Images */}
                <div>
                  <div className="relative rounded-2xl overflow-hidden mb-4">
                    <div className="grid grid-cols-2">
                      <img
                        src={project.before}
                        alt="before"
                        className="h-56 w-full object-cover"
                      />
                      <img
                        src={project.after}
                        alt="after"
                        className="h-56 w-full object-cover"
                      />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-[#d8cbb9]/90 flex justify-between px-6 py-2 text-sm">
                      <span>До</span>
                      <span>После</span>
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-3">
                    {project.thumbs.map((thumb, i) => (
                      <img
                        key={i}
                        src={thumb}
                        alt="thumb"
                        className="w-20 h-20 rounded-xl object-cover"
                      />
                    ))}
                  </div>
                </div>

                {/* Right Info */}
                <div className="flex flex-col justify-between">

                  <div>
                    <h3 className="font-serif text-xl mb-4">
                      {project.title}
                    </h3>

                    <div className="flex gap-10 text-sm text-gray-600 mb-6">
                      <div>
                        <p className="font-semibold">{project.area}</p>
                        <p>Площадь санузла</p>
                      </div>
                      <div>
                        <p className="font-semibold">{project.days}</p>
                        <p>Сроки ремонта</p>
                      </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden mb-6">
                      <img
                        src={project.after}
                        alt="video preview"
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-sm bg-black/30">
                        ▶ Смотреть видео
                      </div>
                    </div>
                  </div>

                  <button className="border-2 border-[#d4a437] text-[#d4a437] rounded-full py-3 font-medium hover:bg-[#d4a437] hover:text-white transition">
                    Подробнее
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}