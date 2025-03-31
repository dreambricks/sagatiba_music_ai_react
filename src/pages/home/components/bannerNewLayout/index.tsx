import React, { useState, useEffect } from "react";
import { useSession } from "../../../../context/sessionContext";
import { useNavigate } from "react-router";
import { motion, useMotionValue, useTransform } from "framer-motion";
import ImagemCentral from "../../../../assets/imagem_central.png";
import Sol from "../../../../assets/sol.png";
import Estrela from "../../../../assets/estrela.png";
import Tambor from "../../../../assets/tambor.png";
import Violao from "../../../../assets/violao.png";
import Caipirinha from "../../../../assets/caipirinha.png";
import Sombra from "../../../../assets/sombra.png";
import CustomButtonNL from "../../../components/customButtonNL";

interface SectionProps {
  sectionId: string;
  onCreateMusic: () => void;
}

const BannerNewLayout = ({ sectionId, onCreateMusic }: SectionProps) => {
  const navigate = useNavigate();
  const { user, updateUser } = useSession();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogoff = () => {
    updateUser(null);
  };

  const handleCreateMusic = () => {
    if (!user) {
      navigate("/register");
      return;
    }
    onCreateMusic();
  };

  return (
    <div
      id={sectionId}
      className="
        bg-begeCustom 
        text-center 
        py-10 
        px-4 
        flex 
        flex-col 
        justify-center 
        items-center
      "
    >
      {user && (
        <div className="absolute top-4 right-4 z-50">
          <CustomButtonNL
            title="logoff"
            onClick={handleLogoff}
            className="!bg-white !text-orangeCustom !border !border-orangeCustom !px-4 !py-1  md:!text-sm rounded-0"
          />
        </div>
      )}

      <div
        className="
          flex 
          flex-col 
          lg:flex-row 
          items-center 
          justify-center 
          w-full 
          h-screen 
          mt-[0px]
        "
      >
        {/* Título desktop esquerda */}
        <div className="hidden lg:flex min-w-[200px] justify-end">
          <h1
            className="
              font-gopher 
              font-bold 
              font-extrabold
              text-6xl 
              xl:text-7xl 
              text-orangeCustom 
              text-right 
              lg:mt-[200px] 
              xl:mt-[150px] xl:mr-[100px]
              mr-4 
              z-[45]
            "
          >
            ma.I.A.ra
          </h1>
        </div>

        {/* Bloco central com imagem, parágrafo e botão */}
        <div
          className="
            flex 
            flex-col 
            items-center 
            justify-center 
            gap-4 
            lg:gap-2
          "
        >
          {/* Títulos mobile */}
          <div
            className="
              flex 
              flex-col 
              lg:hidden 
              items-center 
              justify-center 
              mt-[-60px] 
              mb-[-8px]
            "
          >
            <h1
              className="
                font-gopher 
                font-bold 
                font-extrabold
                text-6xl 
                text-orangeCustom 
                text-center 
                leading-none 
                z-[45] 
                mb-[-6px]
              "
            >
              ma.I.A.ra
            </h1>
            <h1
              className="
                font-gopher 
                font-bold 
                font-extrabold
                text-6xl 
                text-orangeCustom 
                text-center 
                leading-none 
                z-[45] 
                mt-[-6px]
              "
            >
              mar.A.I.sa
            </h1>
          </div>

          {/* Imagem com efeito Tilt */}
          <div className="relative w-[180px] sm:w-[208px] md:w-[240px] xl:w-[320px] h-auto z-50">
            <img
              src={Sombra}
              alt="Sombra"
              className="absolute top-1/2 left-1/2 max-w-screen-2xl h-auto transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-50"
            />
            <motion.div
              className="mt-5"
              style={{
                perspective: 1000,
              }}
              whileHover={{ scale: 1.01 }}
            >
              <motion.img
                src={ImagemCentral}
                alt="Imagem Central"
                style={{
                  rotateX: useMotionValue(0),
                  rotateY: useMotionValue(0),
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = ((y - centerY) / centerY) * -10;
                  const rotateY = ((x - centerX) / centerX) * 10;
                  e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
                }}
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          {/* Parágrafo */}
          <p
            className="
              w-[320px] 
              text-gray-800 
              text-center 
              break-words 
              font-gopher 
              font-bold 
              text-[15px] 
              uppercase
            "
          >
            Criamos uma inteligência artificial pra você curtir o rolê com
            música boa e cachaça. Bora seguir na saga?
          </p>

          {/* Botões */}
          <div className="flex justify-center uppercase">
            <CustomButtonNL title="crie sua música" onClick={handleCreateMusic} className="uppercase"/>
          </div>
        </div>

        {/* Título desktop direita */}
        <div className="hidden lg:flex min-w-[200px] justify-start">
          <h1
            className="
              font-gopher 
              font-bold 
              font-extrabold
              text-6xl 
              xl:text-7xl 
              text-orangeCustom 
              text-left 
              lg:mt-[200px] 
              xl:mt-[150px] xl:ml-[100px]
              ml-4 
              z-[45]
            "
          >
            mar.A.I.sa
          </h1>
        </div>
      </div>

      <div
        className="
          absolute 
          top-1/2 
          left-1/2 
          transform 
          -translate-x-1/2 
          -translate-y-1/2 
          pointer-events-none 
          z-10 
          flex 
          items-center 
          justify-center 
          w-full 
          h-full
        "
      >
        <motion.div
          initial={{ y:40, x: 200, rotate: -50 , opacity: 0 }}
          animate={{ y:0, x: 0, rotate: 0,   scale: 1  , opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.8 }}
          className="
            absolute 
            ml-[-240px] 
            mt-[-200px] 
            md:ml-[-300px] 
            md:mt-[-280px] 
            xl:ml-[-450px]
            z-0
          "
        >
          <img
            src={Sol}
            alt="Sol"
            className="
              scale-[0.4] 
              md:scale-[0.5] 
              lg:scale-[0.6] 
              2xl:scale-[0.8]
            "
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.1, 1] }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="absolute"
        >
          <img
            src={Tambor}
            alt="Tambor"
            className="
              scale-[0.4] 
              md:scale-[0.5] 
              lg:scale-[0.6] 
              2xl:scale-[0.7] 
              z-0 
              ml-[160px] 
              mt-[-200px] 
              xl:mt-[-300px]
              md:ml-[280px] 
              md:mt-[-220px] 
              xl:ml-[400px]
            "
          />
        </motion.div>
        <motion.div
          initial={{ y: 40, rotate: -35, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0,   scale: 1, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.8 }}
          className="absolute"
        >
          <img
            src={Estrela}
            alt="Estrela"
            className="
              scale-[0.4] 
              md:scale-[0.5] 
              lg:scale-[0.6] 
              2xl:scale-[0.7] 
              z-0 
              ml-0 
              mt-[-325px] 
              sm:mt-[-350px] 
              md:mt-[-360px] 
              lg:mt-[-390px] 
              xl:mt-[-460px]
              2xl:mt-[-470px] z-[45]"
          />
        </motion.div>
        <motion.div
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 0 , opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
          className="
            absolute 
            ml-[200px]
            sm:ml-[250px] 
            md:ml-[350px] 
            lg:ml-[400px]
            xl:ml-[450px]
            2xl:ml-[500px]
            mt-[-50px] 
            md:mt-[-60px] 
            xl:mt-[-50px]
            z-0 
            origin-bottom
          "
        >
            <img
              src={Violao}
              alt="Violão"
              className="w-auto max-w-[280px]"
            />
        </motion.div>
        <motion.div
          initial={{ x: 120 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="
            z-0
            ml-[-200px]
            md:ml-[-330px]
            xl:ml-[-390px]
          "
        >
          <img
            src={Caipirinha}
            alt="Caipirinha"
            className="
              scale-[0.4] 
              md:scale-[0.5] 
              lg:scale-[0.6]  
              2xl:scale-[0.7]
            "
          />
        </motion.div>
      </div>

      <div
        className="
          fixed 
          bottom-4 
          right-4 
          bg-black 
          text-white 
          px-3 
          py-1 
          text-sm 
          rounded 
          z-50
        "
      >
        {`Breakpoint: ${
          screenWidth >= 1536
            ? "2xl"
            : screenWidth >= 1280
            ? "xl"
            : screenWidth >= 1024
            ? "lg"
            : screenWidth >= 768
            ? "md"
            : "sm"
        } (${screenWidth}px x ${screenHeight}px)`}
      </div>
    </div>
  );
};

export default BannerNewLayout;
