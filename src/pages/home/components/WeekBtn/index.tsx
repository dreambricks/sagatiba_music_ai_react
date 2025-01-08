import { Container } from "./styles";

interface WeekBtn {
  day: string;
  short: string;
}

export const WeekBtn = ({ day, short }: WeekBtn) => {
  return (
    <Container>
      <button>{short}</button>

      <p>{day}</p>
    </Container>
  );
};
