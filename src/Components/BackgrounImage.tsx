"use client";
import AssetImage from "/public/Imagen5.jpg";
import Image from "next/image";
import React from "react";

export const BackgroundImage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src={AssetImage}
        alt="Imagen de fondo de la finca"
        fill
        className="object-cover"
        priority
      />

      {/* Contenido centrado sobre la imagen */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 bg-black/50 text-white ">
        <h1 className="text-4xl font-bold mb-4">
          Nuestro jardín de eventos goza de la mejor ubicación y hambiente{" "}
          <br /> en La Piedad.
        </h1>
        <p className="max-w-3xl text-xl">
          La ubicación del Jardín de Eventos Finca Espinoza es mas que conocido,
          ya que se encuentra en Ciudad del Sol, un lugar tranquilo y aislado
          donde no batallaras en encontrarlo. Además, cuenta con un hambiente
          extraordinario, lo cual proporciona una agradable sensación de paz y
          tranquilidad.
        </p>
      </div>
    </div>
  );
};

export default BackgroundImage;
