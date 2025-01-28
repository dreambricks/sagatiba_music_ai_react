import { Container } from "./styles";
import Bottle from "../../../../../assets/bottle.png";

interface WeekBtn {
  day: string;
  short: string;
  onClick: () => void;
  selected: boolean;
  isImage?: boolean;
}

export const WeekBtn = ({
  day,
  short,
  onClick,
  selected,
  isImage,
}: WeekBtn) => {
  return (
    <Container selected={selected}>
      <button onClick={onClick} className={`${isImage ? "btn-img" : ""}`}>
        {isImage ? <img src={Bottle} /> : short}
      </button>

      {isImage ? (
        <>
          <p>qualquer</p>
          <p>dia é dia</p>
        </>
      ) : (
        <p>{day}</p>
      )}
    </Container>
  );
};
