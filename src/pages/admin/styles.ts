import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: 32px;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: "Gopher-Bold";
  color: black;
  margin-bottom: 32px;
  color: #f15a31;

  @media (max-width: 1024px) {
    margin-bottom: 16px;
    font-size: 24px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  text-align: start;

  @media (max-width: 1024px) {
    font-size: 10px;
  }
`;
