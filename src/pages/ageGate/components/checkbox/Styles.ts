import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  display: flex;
  width: 20px;
  height: 20px;
  appearance: none;
  border: 2px solid #f05b30;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f05b30;
  justify-content: center;
  align-items: center;

  &:checked::after {
    content: "✔";
    color: white;
    font-size: 12px;
    position: absolute;
  }
`;

export const Text = styled.p`
  color: #c3c3c3;
`;
