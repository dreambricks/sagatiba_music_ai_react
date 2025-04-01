import { forwardRef, useState } from "react";
import { weekDays } from "../../helper";
import { WeekBtn } from "./WeekBtn";
import CustomButtom from "../../../components/customButtonNL";
import bg_dia_mobile from "../../../../assets/bg_dia_mobile.png";
import bg_datarole from "../../../../assets/bg_datarole.png";

interface WeekDayProps {
  onWeekdays: (val: string) => void;
  onFill: () => void;
}

export const WeekDay = forwardRef<HTMLDivElement, WeekDayProps>(({ onWeekdays, onFill }, ref) => {
  const [weekDaysSelected, setWeekDaysSelected] = useState<string>("");

  const addWeekDays = (day: string) => {
    setWeekDaysSelected(day);
    onWeekdays(day);
  };

  return (
    <div
      ref={ref}
      className="w-screen h-screen relative flex flex-col justify-center items-center"
    >
      {/* Background para mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center block lg:hidden"
        style={{ backgroundImage: `url(${bg_dia_mobile})` }}
      ></div>
      {/* Background para desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: `url(${bg_datarole})` }}
      ></div>

      <div className="content w-full relative z-10">
        <div className="date text-center">
          <h2 className="uppercase text-orangeCustom text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl mb-9 font-gopher">
            Já tem data <br className="lg:hidden"/> pro rolê?
          </h2>
          <p className="text-2xl mb-6 p-10 md:text-3xl font-gopher">Escolha um dos dias da semana.</p>
        </div>

        <div className="drink">
          <div className="select-days w-full flex gap-6 flex-wrap md:flex-nowrap justify-center">
            {weekDays.map((week) => (
              <WeekBtn
                day={week.day}
                short={week.short}
                key={week.day}
                onClick={() => addWeekDays(week.day)}
                selected={weekDaysSelected === week.day}
                isImage={week.isImage}
              />
            ))}
          </div>
        </div>

        <CustomButtom title="próximo" onClick={onFill} className="uppercase w-auto mx-auto block" />
      </div>
    </div>
  );
});