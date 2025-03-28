import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  width: 20%;
  font-size: 18px;
  text-align: end;
  font-family: "Gopher-Bold";

  @media (max-width: 1024px) {
    font-size: 12px;
    width: 100%;
    text-align: start;
  }
`;

export const Input = styled.input`
  background-color: #f9f5ed;
  border: none;
  color: black;
  border-radius: 40px;
  padding: 16px;
  font-size: 18px;
  width: 100%;

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
    font-size: 12px;
    padding: 8px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 8px;
    flex-direction: column;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 2px;
  text-align: start;
  margin-left: 19%;

  @media (max-width: 1024px) {
    margin-left: 0;
    font-size: 10px;
  }
`;
