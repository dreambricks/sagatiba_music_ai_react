import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  flex: 0.2;
  font-size: 24px;
  text-align: end;
  font-family: "Gopher-Bold";

  @media (max-width: 1024px) {
    font-size: 14px;
    flex: 0.3;
  }
`;

export const Input = styled.input`
  flex: 1;
  background-color: white;
  border: none;
  color: black;
  border-radius: 40px;
  padding: 16px;
  font-size: 24px;

  &::placeholder {
    color: #ffde2e;
  }

  &:focus {
    outline: none;
  }

  /* Estilos específicos para input de data */
  &[type="date"] {
    &::-webkit-datetime-edit {
      color: #ffde2e; /* Amarelo para o placeholder */
    }

    /* Cor do valor (texto digitado/selecionado) */
    &::-webkit-datetime-edit-text,
    &::-webkit-datetime-edit-year-field,
    &::-webkit-datetime-edit-month-field,
    &::-webkit-datetime-edit-day-field {
      color: #000;
    }
  }

  /* Sobrescreve o estilo do autofill do navegador */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important; /* Cor de fundo */
    -webkit-text-fill-color: #000 !important; /* Cor do texto */
  }

  /* Para Firefox */
  &:-moz-autofill,
  &:-moz-autofill:hover,
  &:-moz-autofill:focus,
  &:-moz-autofill:active {
    background-color: white !important;
    color: #000 !important;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
    flex: 0.7;
    padding: 8px 16px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  align-items: center;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 2px;
  text-align: start;
  margin-left: 18%;

  @media (max-width: 1024px) {
    margin-left: 30%;
    font-size: 10px;
  }
`;
