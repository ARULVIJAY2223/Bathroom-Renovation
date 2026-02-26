export default function Hero() {
  return (
    <section className="relative h-[600px] w-full">

      {/* Background Image */}
      <img
        src="/hero.png"
        alt="Bathroom"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">

        <p className="uppercase tracking-[4px] md:tracking-[6px] text-xs md:text-sm mb-4 opacity-80">
          Artistic
        </p>

        <h1 className="text-4xl md:text-6xl font-serif tracking-wide mb-6">
          ARTISTIC
        </h1>

        <p className="max-w-2xl text-base md:text-lg opacity-90 px-4">
          Европейский и дизайнерский ремонт для вашей ванной
        </p>

      </div>
    </section>
  );
}