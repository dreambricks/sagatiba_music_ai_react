import { ChangeEvent, useRef } from "react";
import * as Styled from "./Styles";

type IInputDate = {
  day: string;
  month: string;
  year: string;
};

type Props = {
  date: IInputDate;
  onDateChange: React.Dispatch<
    React.SetStateAction<{
      day: string;
      month: string;
      year: string;
    }>
  >;
};

export const BirthDateInput: React.FC<Props> = ({ date, onDateChange }) => {
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: "day" | "month" | "year"
  ) => {
    const value = e.target.value.replace(/\D/g, "");

    if (
      field === "day" &&
      (value === "" || (parseInt(value) > 0 && parseInt(value) <= 31))
    ) {
      onDateChange((prev) => ({ ...prev, day: value }));
      if (value.length === 2) monthRef.current?.focus();
    }

    if (
      field === "month" &&
      (value === "" || (parseInt(value) >= 0 && parseInt(value) <= 12))
    ) {
      onDateChange((prev) => ({ ...prev, month: value }));
      if (value.length === 2) yearRef.current?.focus();
    }

    if (field === "year" && (value === "" || value.length <= 4)) {
      onDateChange((prev) => ({ ...prev, year: value }));
    }
  };

  return (
    <Styled.InputContainer>
      <Styled.Input
        type="text"
        maxLength={2}
        placeholder="DD"
        value={date.day}
        onChange={(e) => handleChange(e, "day")}
      />

      <Styled.Input
        ref={monthRef}
        type="text"
        maxLength={2}
        placeholder="MM"
        value={date.month}
        onChange={(e) => handleChange(e, "month")}
      />

      <Styled.Input
        ref={yearRef}
        type="text"
        maxLength={4}
        placeholder="AAAA"
        value={date.year}
        onChange={(e) => handleChange(e, "year")}
      />
    </Styled.InputContainer>
  );
};

export default BirthDateInput;
