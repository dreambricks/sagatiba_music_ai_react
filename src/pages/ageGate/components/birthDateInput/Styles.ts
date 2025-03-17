import styled from "styled-components";

export const Input = styled.input`
  width: 120px;
  aspect-ratio: 1.7;
  text-align: center;
  border: 2px solid #f15b30;
  border-radius: 5px;
  margin: 5px;
  outline: none;
  transition: 0.2s;
  background-color: transparent;
  color: black;
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 24px;
    width: 80px;
    aspect-ratio: 1.7;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
