import { useState } from "react";
import SunMountain from "../../../../assets/montanha_sol_separate.png";
import { weekDays } from "../../helper";
import { WeekBtn } from "./WeekBtn";
import { Container } from "./styles";

export const WeekDay = () => {
  const [weekDaysSelected, setWeekDaysSelected] = useState<string>();

  const addWeekDays = (day: string) => {
    setWeekDaysSelected(day);
  };
  return (
    <Container>
      <img src={SunMountain} alt="" className="background" />

      <div className="content">
        <div className="date">
          <h2>Já tem data pro rolê?</h2>
          <p>Escolha um dos dias da semana.</p>
        </div>

        <div className="drink">
          <div className="select-days">
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
      </div>
    </Container>
  );
};
