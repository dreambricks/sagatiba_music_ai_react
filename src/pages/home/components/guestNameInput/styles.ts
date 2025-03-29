import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  @media (max-width: 1366px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: #f9f5ed;
  border: none;
  color: black;
  border-radius: 100px;
  padding: 40px 25px;
  font-size: 18px;
  text-align: center;

  &::placeholder {
    color: #a4a3a2;
  }

  &:focus {
    outline: none;
  }

  /* Sobrescreve o estilo do autofill do navegador */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #f9f5ed inset !important; /* Cor de fundo */
    -webkit-text-fill-color: #000 !important; /* Cor do texto */
  }

  /* Para Firefox */
  &:-moz-autofill,
  &:-moz-autofill:hover,
  &:-moz-autofill:focus,
  &:-moz-autofill:active {
    background-color: #f9f5ed !important;
    color: #000 !important;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    padding: 32px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 24px;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 2px;
  margin-left: 8px;

  @media (max-width: 1024px) {
    font-size: 10px;
  }
`;
