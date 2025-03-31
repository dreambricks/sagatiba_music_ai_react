import { forwardRef, useState } from "react";
import Balde from "../../../../assets/balde_background.png";
import { tagOptions } from "../../../../pages/home/helper";
import CustomButtonNL from "../../../components/customButtonNL";

interface InviteOptionsProps {
  onInvite: (id: string) => void;
  onFill: () => void;
}

export const InviteOptions = forwardRef<HTMLDivElement, InviteOptionsProps>(
  ({ onInvite, onFill }, ref) => {
    const [inviteFor, setInviteFor] = useState("");

    const addInviteFor = (id: string) => {
      setInviteFor(id);
      onInvite(id);
    };

    return (
      <div
        ref={ref}
        // Força a largura e altura da tela, e define o layout como flex-row
        className="w-screen h-screen flex flex-row  md:w-full overflow-hidden m-0 p-0 bg-gray-600"
      >
        {/* DIREITA: Imagem de fundo */}
        <div
          className="hidden lg:block w-1/2 h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Balde})` }}
        />
        {/* ESQUERDA: Lado do formulário */}
        <div className="w-full lg:w-1/2 h-full bg-begeCustom flex flex-col justify-center items-center p-8 text-center sm:scale-110  md:scale-170 lg:scale-110 xl:scale-125 mb:40 ">


          <div className="flex flex-wrap gap-2 justify-center mb-6 w-[340px] xl:scale-md:scale-105 lg:scale-110 xl:scale-125">

          <div className="w-full mb-6 text-left">
            <div className="text-orangeCustom font-gopher text-xl font-semibold mb-2 w-full  pl-6 pr-6">
              Conta pra gente:
              <br />
              qual o convite do rolê?
            </div>
          </div>

          <div className="mb-4 text-left w-full pl-6 pr-6">
            <h2 className="text-black text-lg !text-left font-gopher">Escolha uma das</h2>
            <h2 className="text-black text-lg !text-left font-gopher">alternativas abaixo.</h2>
          </div>
          <div></div>
            {tagOptions.map((obj, index) => {
              // Defina as larguras desejadas para cada botão, conforme a ordem desejada
              const widthMapping = {
                0: "w-[45%]", // bar 
                1: "w-[45%]", // role em casa
                2: "w-[55%]", // happy
                3: "w-[35%]", // sextou
                4: "w-[35%]", // festa
                5: "w-[55%]", // aniversario
                6: "w-[92%]", // role
              };
              const widthClass = widthMapping[index] || "w-auto";
              return (
                <button
                  key={obj.option}
                  onClick={() => {
                    setInviteFor(obj.option);
                    onInvite(obj.option);
                  }}
                  className={`px-6 py-2 ${widthClass} bg-white rounded-full text-[#6B6B6B] font-semibold text-base shadow hover:bg-yellow-300 focus:bg-yellow-300 ${
                    inviteFor === obj.option ? "bg-yellow-300" : ""
                  }`}
                >
                  {obj.option}
                </button>
              );
            })}
            <div className="w-full text-right mt-5  pl-6 pr-6">
            <CustomButtonNL title="PRÓXIMO" onClick={onFill} />
          </div>
          </div>
          
        </div>
      </div>
    );
  }
);
