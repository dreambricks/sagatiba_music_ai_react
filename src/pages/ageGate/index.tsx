import React, { useState } from "react";
import SagatibaLogo from "../../assets/sagatiba_logo.svg";
import AgeGateText from "../../assets/age-gate-text.svg";
import * as Styled from "././styles";
import Checkbox from "./components/checkbox";
import BirthDateInput from "./components/birthDateInput";
import { saveRememberMeToCookie } from "../../storage";
import CustomButton from "../components/customButton";
import { useNavigate } from "react-router";
import { useSession } from "../../context/sessionContext";

const AgeGate: React.FC = () => {
  const navigate = useNavigate();
  const { setAgeVerified } = useSession();

  const [remember, setRemember] = useState(false);
  const [date, setDate] = useState({ day: "", month: "", year: "" });

  const validateAge = (): boolean => {
    const { day, month, year } = date;
    if (!day || !month || !year || year.length < 4) return false;

    const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
    const today = new Date();

    // Calcula a idade
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Ajusta a idade se ainda não fez aniversário este ano
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age >= 18;
  };

  const handleSigIn = async () => {
    const isDateValid = validateAge();

    if (!isDateValid) return;

    saveRememberMeToCookie(remember);
    setAgeVerified(true);

    navigate("/login");
  };

  return (
    <Styled.Container>
      <Styled.WhiteContainer>
        <Styled.ContentContainer>
          <Styled.SagatibaLogo
            src={SagatibaLogo}
            alt="Logo Sagatiba"
            height="100px"
          />

          <Styled.AgeTextImg
            src={AgeGateText}
            alt="Você precisar ter 18 anos ou mais para entrar"
          />

          <BirthDateInput date={date} onDateChange={setDate} />

          <Checkbox
            text="Lembre-me"
            value={remember}
            onClick={setRemember}
            style={{ marginTop: "24px", marginBottom: "24px" }}
          />

          <CustomButton onClick={handleSigIn} title="ENTRAR" />
        </Styled.ContentContainer>
      </Styled.WhiteContainer>
    </Styled.Container>
  );
};

export default AgeGate;
