import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 32px;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: "Gopher-Bold";
  color: black;
  margin-bottom: 120px;
  color: #f15a31;

  @media (max-width: 1024px) {
    margin-bottom: 32px;
    font-size: 24px;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
`;

interface ButtonProps {
  $color: "blue" | "green";
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $color }) =>
    $color === "blue" ? "#007bff" : "#28a745"};
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 16px;

  &:hover {
    background-color: ${({ $color }) =>
      $color === "blue" ? "#0056b3" : "#218838"};
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  text-align: start;

  @media (max-width: 1024px) {
    font-size: 10px;
  }
`;
