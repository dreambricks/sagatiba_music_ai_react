import React from "react";
import * as Styled from "./styles";
import RegisterForm from "./components/registerForm";
import RegisterImage from "./components/registerImage";
import { Container } from "../home/styles";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

const Register: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Styled.Container>
        <Styled.ContentContainer>
          <RegisterImage />

          <RegisterForm />
        </Styled.ContentContainer>
      </Styled.Container>
      <Footer />
    </Container>
  );
};

export default Register;
