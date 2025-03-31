import * as Styled from "./styles";
import Bottle from "../../../../../assets/bottle.png";
import { IWeekDay } from "../../../helper";

type WeekBtnProps = {
  weekday: IWeekDay;
  selected: boolean;
  onClick: () => void;
};

export const WeekBtn: React.FC<WeekBtnProps> = ({
  weekday,
  selected,
  onClick,
}: WeekBtnProps) => {
  const isWeekendDay = ["Domingo", "Sábado"].includes(weekday.day);

  const description = weekday.isImage
    ? ["qualquer", <br key="br" />, "dia é dia"]
    : weekday.day;

  const getColor = () => {
    if (isWeekendDay) return "#f3592f";

    if (weekday.isImage) return "#FFDD2E";

    return "white";
  };

  return (
    <Styled.Container>
      <Styled.Button color={getColor()} selected={selected} onClick={onClick}>
        {weekday.isImage ? <Styled.Image src={Bottle} /> : weekday.short}
      </Styled.Button>

      <Styled.Description>{description}</Styled.Description>
    </Styled.Container>
  );
};
