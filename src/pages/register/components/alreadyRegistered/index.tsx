import React from "react";
import * as Styled from "./styles";
import { useNavigate } from "react-router";

type Props = {
  className?: string;
};

const AlreadyRegistered: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Styled.Container className={className}>
      JÁ TEM CADASTRO?{" "}
      <Styled.BoldLink onClick={handleLogin}>FAÇA O LOGIN</Styled.BoldLink>
    </Styled.Container>
  );
};

export default AlreadyRegistered;
