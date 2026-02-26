import { FaWhatsapp, FaVk, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f4f1ed] py-20 text-[#2d2d2d]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Logo Column */}
        <div>
          <h2 className="font-serif text-2xl mb-2">ARTISTIC</h2>
          <p className="text-gray-600">
            Ремонт ванных комнат
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-6">ГЛАВНАЯ</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="hover:text-black cursor-pointer">Ремонт ванной комнаты</li>
            <li className="hover:text-black cursor-pointer">Наши услуги</li>
            <li className="hover:text-black cursor-pointer">Фото работ</li>
            <li className="hover:text-black cursor-pointer">Видео работ</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-6">ПОМОЩЬ</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="hover:text-black cursor-pointer">Цены</li>
            <li className="hover:text-black cursor-pointer">Бесплатный замер</li>
            <li className="hover:text-black cursor-pointer">Контакты</li>
          </ul>
        </div>

        {/* Address + Social */}
        <div>
          <h3 className="font-semibold mb-6">НАШ АДРЕС</h3>
          <p className="text-gray-600 mb-2">
            Ремонт санузлов в Санкт-Петербурге
          </p>
          <p className="text-gray-600 mb-6">
            08.00 - 20.00 Без выходных
          </p>

          <h4 className="font-semibold mb-4">МЫ В СОЦСЕТЯХ</h4>

          <div className="flex gap-6 text-2xl text-gray-500">

            <div className="flex gap-6 text-3xl text-gray-400">

            <FaWhatsapp className="hover:text-black cursor-pointer transition" />
            <FaVk className="hover:text-black cursor-pointer transition" />
            <FaFacebookF className="hover:text-black cursor-pointer transition" />
            <FaInstagram className="hover:text-black cursor-pointer transition" />

            </div>
        </div>

      </div>
      </div>
    </footer>
  );
}