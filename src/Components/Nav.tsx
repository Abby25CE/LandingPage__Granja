"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useAnimate, motion, AnimationScope } from "framer-motion";
import { FiMenu, FiArrowUpRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const NavWeb = ({ children }: { children: React.ReactNode }) => {
  return <GlassNavigation> {children}</GlassNavigation>;
};

const GlassNavigation = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = ({ offsetX, offsetY, target }: MouseEvent) => {
    // @ts-ignore
    const isNavElement = [...target.classList].includes("glass-nav");
  };

  useEffect(() => {
    navRef.current?.addEventListener("mousemove", handleMouseMove);

    return () =>
      navRef.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="pt-16">
      <nav
        ref={navRef}
        className="glass-nav fixed left-0 right-0 top-0 z-10 mx-auto overflow-hidden border-[1px] border-white/10 bg-gradient-to-br from-black/20 to-black/5 backdrop-blur"
      >
        <div className="glass-nav flex items-center justify-between px-2 py-3">
          <Links />

          <Logo />
        </div>

        <MobileMenu menuOpen={menuOpen} />
      </nav>
      {children}
    </main>
  );
};

const Logo = () => (
  <button className=" relative left-0 top-[50%] z-10 text-4xl font-black text-white mix-blend-overlay md:absolute md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%]">
    <a href="/">logo.</a>
  </button>
);

const Links = () => (
  <div className="hidden items-center gap-2 md:flex">
    <GlassLink text="Instalaciones" href="/instalaciones" />
    <GlassLink text="Contacto" href="/Contacto" />
    <GlassLink text="Eventos" href="/Eventos" />
    <GlassLink text="Moviliario" href="/Eventos" />
  </div>
);

const GlassLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <a
      href={href}
      className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
        {text}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
};

const TextLink = ({ text }: { text: string }) => {
  return (
    <a href="#" className="text-white/90 transition-colors hover:text-white">
      {text}
    </a>
  );
};

const MobileMenu = ({ menuOpen }: { menuOpen: boolean }) => {
  const [ref, { height }] = useMeasure();
  return (
    <motion.div
      initial={false}
      animate={{
        height: menuOpen ? height : "0px",
      }}
      className="block overflow-hidden md:hidden"
    >
      <div ref={ref} className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center gap-4">
          <TextLink text="Products" />
          <TextLink text="History" />
          <TextLink text="Contact" />
        </div>
      </div>
    </motion.div>
  );
};

export default NavWeb;
