import styled from "styled-components";
import Spinner from "../spinner";

export const Container = styled.button`
  background-color: #ff4b15;
  padding: 16px 32px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  color: white;
  font-size: 16px;
  border: transparent;
  cursor: pointer;
  font-family: "Gopher-Bold";

  &:active {
    border: 1px solid #ff4b15;
  }

  @media (max-width: 1024px) {
    padding: 8px 16px;
    font-size: 12px;
  }
`;

export const TextRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const ButtonSpinner = styled(Spinner)`
  height: 12px;
  width: 12px;
`;
