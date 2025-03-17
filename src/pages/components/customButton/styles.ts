import styled from "styled-components";

export const Container = styled.button`
  background-color: #ff4b15;
  padding: 20px;
  width: 100%;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  color: white;
  font-size: 24px;
  border: transparent;
  cursor: pointer;
  font-family: "Gopher-Bold";

  &:active {
    border: 1px solid #ff4b15;
  }
`;
