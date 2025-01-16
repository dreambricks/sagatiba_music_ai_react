import { Container } from "./styles";

interface WeekBtn {
  day: string;
  short: string;
  onClick: () => void;
  selected: boolean;
}

export const WeekBtn = ({ day, short, onClick, selected }: WeekBtn) => {
  console.log(selected);
  return (
    <Container selected={selected}>
      <button onClick={onClick}>{short}</button>

      <p>{day}</p>
    </Container>
  );
};
