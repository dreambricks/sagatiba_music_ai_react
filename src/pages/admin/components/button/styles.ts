import styled from "styled-components";

export const Button = styled.button<{ $color?: string }>`
  background-color: ${(props) =>
    props.$color === "green"
      ? "#28a745"
      : props.$color === "red"
      ? "#dc3545"
      : props.$color === "orange"
      ? "#fd7e14"
      : "#007bff"};
  color: #fff;
  padding: 10px 16px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  text-align: center;
  width: fit-content;

  &:hover {
    opacity: 0.9;
  }
`;
