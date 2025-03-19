import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid transparent;
  border-top: 2px solid #f3f3f3;
  border-radius: 50%;
  animation: spin 2s linear infinite;

  height: 12px;
  width: 12px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
