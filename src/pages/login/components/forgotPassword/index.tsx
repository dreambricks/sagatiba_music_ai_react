import React, { CSSProperties } from "react";
import * as Styled from "./styles";
import { useNavigate } from "react-router";

type Props = {
  className?: string;
  style?: CSSProperties;
};

const ForgotPassword: React.FC<Props> = ({ className, style }) => {
  const navigate = useNavigate();

  const handleRecoverPassword = () => {
    navigate("/recover-password");
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
