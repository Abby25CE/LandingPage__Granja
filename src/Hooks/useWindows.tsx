import { useEffect, useState } from "react";

interface SizeProps {
  width: number | undefined;
  height: number | undefined;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<SizeProps>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    // Llamada inicial para establecer el tamaño al cargar el componente
    handleResize();

    // Limpieza del evento al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
