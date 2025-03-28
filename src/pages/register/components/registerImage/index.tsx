import React from "react";
import RegisterImg from "../../../../assets/eliza_guerra_sagatiba.png";
import * as Styled from "./styles";

const RegisterImage: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Image src={RegisterImg} />
    </Styled.Container>
  );
};

export default RegisterImage;
