import { useState, useEffect, forwardRef } from "react";
import Sagalover from "../../../../assets/nome_do_sagalover.png";
import BgSagalover from "../../../../assets/bg_sagalover.png";
import CustomButton from "../../../components/customButtonNL";
import CustomInput from "../../../components/customInputNL";

interface SagaloverProps {
  changeIg: (val: string) => void;
  onFill: () => void;
}

export const Sagalovers = forwardRef<HTMLDivElement, SagaloverProps>(
  ({ changeIg, onFill }, ref) => {
    const [username, setUsername] = useState("");
    const [hasFilled, setHasFilled] = useState(false);

    useEffect(() => {
      if (!hasFilled && username.trim() !== "") {
        setHasFilled(true);
      }
    }, [username, hasFilled]);

    return (
      <div 
        className="min-h-screen w-full flex flex-col justify-center items-center" 
        style={{
          backgroundImage: `url(${BgSagalover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="top">
        </div>

        <div className="content">
          <div className="body w-full max-w-md p-4 flex flex-col items-center gap-4 xl:scale-md:scale-105 lg:scale-110 xl:scale-125" ref={ref}>
            <p className="sagalover-name text-orangeCustom text-center font-gopher">Primeiro, o nome do</p>
            <img src={Sagalover} alt="" />
            <p className="type text-orangeCustom text-center font-gopher ">
              Digite abaixo o nome da pessoa <br></br>
              que você quer convidar
            </p>

            <CustomInput
  as="input"
  name="username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  placeholder="Nome do convidado"
/>

            <p className="move text-center">
              Mas, pra Seguir na Saga, tem que ter responsa, hein? Só
              compartilhe o convite com maiores de 18 anos.
            </p>

            <CustomButton title="próximo" onClick={onFill} className="uppercase w-auto self-center"/>

          </div>
        </div>
      </div>
    );
  }
);