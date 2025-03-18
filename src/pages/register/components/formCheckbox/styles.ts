import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  display: flex;
  width: 20px;
  height: 20px;
  appearance: none;
  border: 2px solid white;
  border-radius: 4px;
  cursor: pointer;
  background-color: white;
  justify-content: center;
  align-items: center;

  &:checked::after {
    content: "✔";
    color: black;
    font-size: 12px;
    position: absolute;
  }
`;

export const Text = styled.p`
  display: flex;
  flex: 1;
  color: black;
  text-decoration: underline;
  font-family: "Gopher-Bold";

  @media (max-width: 1024px) {
    font-size: 10px;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 2px;
  text-align: start;

  @media (max-width: 1024px) {
    font-size: 10px;
  }
`;

export const CheckBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
