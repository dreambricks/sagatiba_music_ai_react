import React, { CSSProperties } from "react";
import * as Styled from "./styles";

type Props = {
  className?: string;
  style?: CSSProperties;
};

const ForgotPassword: React.FC<Props> = ({ className, style }) => {
  const handleRecoverPassword = () => {
    alert("Redirecionando para recuperação de senha...");
  };

  return (
    <Styled.Container className={className} style={style}>
      Esqueceu a senha?{" "}
      <Styled.BoldLink onClick={handleRecoverPassword}>
        Recuperar senha.
      </Styled.BoldLink>
    </Styled.Container>
  );
};

export default ForgotPassword;
