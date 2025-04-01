import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 400px;
  aspect-ratio: 0.7;
  border: 2px solid #f15a31;
  border-radius: 24px;
  overflow: hidden;

  @media (max-width: 1440px) {
    height: 350px;
  }

  @media (max-width: 768px) {
    height: 220px;
    aspect-ratio: 0.65;
  }
`;
