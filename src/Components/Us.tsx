"use client";

import { FaSwimmingPool } from "react-icons/fa";

const Us = () => {
  return (
    <>
      <main className="w-full h-[75vh] grid grid-cols-2 text-black py-9">
        <div className="flex flex-col justify-center items-center">
          <FaSwimmingPool className="w-20 h-20" />
          <div className=" text-center font-bold justify-center items-center">
            Finca espinosa
          </div>
        </div>

        <div className="flex flex-col gap-3 text-left justify-center items-start mr-10 ">
          <h1>
            ¡Celebra tus momentos más especiales en un lugar lleno de calidez y
            naturaleza! 🌿✨
          </h1>
          <h2 className="text-justify">
            Finca Espinoza te invita a realizar tu evento familiar en un espacio
            acogedor, rodeado de tranquilidad y con todas las comodidades para
            que disfrutes al máximo junto a tus seres queridos. 🎉 Ideal para
            cumpleaños, reuniones familiares, aniversarios y más. 🏡 Ambiente
            familiar, amplio jardín, zona de alberca y área de juegos. 📍
            Ubicada en un entorno natural y accesible.
          </h2>
          <h3>
            ¡Haz de tu celebración un recuerdo inolvidable en Finca Espinoza!
          </h3>
          <h3> Reserva ya tu fecha y vive una experiencia única.</h3>
          📞 Contáctanos para más información y disponibilidad. 💬 ¡Te esperamos
          con los brazos abiertos!
        </div>
      </main>
    </>
  );
};
export default Us;
