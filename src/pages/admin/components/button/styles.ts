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
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  &:hover {
    opacity: 0.9;
  }
`;

export const ChildrenRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
