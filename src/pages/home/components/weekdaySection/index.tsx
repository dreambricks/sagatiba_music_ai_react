import { forwardRef } from "react";
import { weekDays } from "../../helper";
import { WeekBtn } from "./WeekBtn";
import * as Styled from "./styles";

interface WeekDayProps {
  selectedDay: string;
  onDaySelected: (day: string) => void;
  onNextPress: () => void;
}

export const WeekDaySection = forwardRef<HTMLDivElement, WeekDayProps>(
  ({ selectedDay, onDaySelected, onNextPress }, ref) => {
    const handleDayClick = (day: string) => {
      onDaySelected(day);
    };

    return (
      <Styled.Container ref={ref}>
        <Styled.Title>Já tem data pro rolê?</Styled.Title>

        <p>Escolha um dos dias da semana.</p>

        <Styled.WeekDaysContainer>
          {weekDays.map((weekDay) => (
            <WeekBtn
              key={weekDay.day}
              weekday={weekDay}
              selected={selectedDay === weekDay.day}
              onClick={() => handleDayClick(weekDay.day)}
            />
          ))}
        </Styled.WeekDaysContainer>

        <Styled.NextButton title="PRÓXIMO >" onClick={onNextPress} />
      </Styled.Container>
    );
  }
);
