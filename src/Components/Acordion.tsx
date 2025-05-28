"use client";
import { FiPlay } from "react-icons/fi";
import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "@/Hooks/useWindows";
import { IconType } from "react-icons";
import { MdEventAvailable } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import { GiPartyFlags } from "react-icons/gi";
const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="max-h-screen py-9 ">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-[76rem] mx-auto shadow overflow-hidden">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
            />
          );
        })}
      </div>
    </section>
  );
};

interface PanelProps {
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  id: number;
  Icon: IconType;
  title: string;
  imgSrc: string;
}

const Panel = ({ open, setOpen, id, Icon, title, imgSrc }: PanelProps) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180 text-gray-700"
        >
          {title}
        </span>
        <span className=" block lg:hidden text-xl font-light">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-indigo-600 text-white grid place-items-center">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "Eventos",
    Icon: MdEventAvailable,
    imgSrc: "https://i.postimg.cc/1Rj8R0mc/Imagen4.jpg",
  },
  {
    id: 2,
    title: "Cursos",
    Icon: FiPlay,
    imgSrc: "https://i.postimg.cc/NMV2nRL4/Imagen1.jpg",
  },
  {
    id: 3,
    title: "Clases Privadas",
    Icon: IoSchoolSharp,
    imgSrc: "https://i.postimg.cc/HsF3M72b/Imagen3.jpg",
  },
  {
    id: 4,
    title: "Fiestas",
    Icon: GiPartyFlags,
    imgSrc: "https://i.postimg.cc/nz1wYczp/Imagen2.jpg",
  },
];
