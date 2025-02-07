import { Link } from "react-router-dom";

export default function HeroAbout() {
  return (
    <section
      id="hero-about"
      className="section-padding-x pt-24 pb-8 md:pb-0 lg:pt-16 bg-[url('/img/backgrounds/persawahan.png')] bg-cover bg-center bg-no-repeat relative text-light-base"
    >
      <div className="absolute from-transparent to-dark-base/80 bg-gradient-to-b z-10 inset-0"></div>
      <div className="container max-w-screen-xl relative z-20">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <h1 className="title-font-size font-bold mb-2">
              <span className="text-pink-600">Bersatu kita</span> bangun masa
              depan
            </h1>
            <p className="text-gray-200 mb-4">
              Masa depan bangsa ini ada di tangan generasi penerus. Mari kita
              pastikan setiap anak Indonesia mendapatkan haknya untuk tumbuh
              sehat dan cerdas. Bersama, kita cegah stunting dan tingkatkan
              literasi gizi demi masa depan Indonesia yang gemilang.
            </p>
            <Link
              to="/daftar"
              className="bg-green-base text-light-base py-2 px-4 rounded-md"
            >
              Gabung Sekarang
            </Link>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 hidden md:block">
            <img
              src="/img/random/kids-plane.png"
              alt="Tentang Kami"
              className="w-full md:max-w-sm lg:max-w-lg ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
