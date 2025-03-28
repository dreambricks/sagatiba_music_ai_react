import React from "react";
import * as Styled from "./styles";
import RegisterForm from "./components/registerForm";
import RegisterImage from "./components/registerImage";

const Register: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.ContentContainer>
        <RegisterImage />

        <RegisterForm />
      </Styled.ContentContainer>
    </Styled.Container>
  );
};

export default Register;
