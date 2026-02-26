import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    // Initialize on mount
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
            // Optional: update URL without jumping
            history.replaceState(null, null, `#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px"
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: "Главная", href: "#home" },
    { name: "Цены", href: "#pricing" },
    { name: "Калькулятор ремонта", href: "#calculator" },
    { name: "Примеры работ", href: "#portfolio" },
    { name: "Новости", href: "#about" },
    { name: "Отзывы", href: "#testimonials" },
  ];

  return (
    <header className="bg-[#C7A98C] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="#home" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Artistic Logo"
            className="h-10 w-auto object-contain"
          />

          <div>
            <h1 className="text-xl tracking-widest font-semibold">
              ARTISTIC
            </h1>
            <p className="text-xs opacity-80">
              Ремонт ванных комнат
            </p>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition ${activeHash === link.href ? "opacity-100 font-bold border-b-2 border-white" : "opacity-80 hover:opacity-100"}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Phone Number */}
        <div className="hidden md:block font-semibold text-lg">
          +8(950) 019 - 19 - 19
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#A6886A] py-4 border-t border-white/20">
          <nav className="flex flex-col items-center gap-4 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition ${activeHash === link.href
                    ? "opacity-100 font-bold border-b-2 border-white"
                    : "opacity-80 hover:opacity-100"
                  }`}
              >
                {link.name}
              </a>
            ))}
            <div className="font-semibold text-lg mt-4 border-t border-white/20 pt-4 w-full text-center">
              +8(950) 019 - 19 - 19
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}