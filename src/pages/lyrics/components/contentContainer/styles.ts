import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 50vh;
  aspect-ratio: 0.7;
  border: 2px solid #f15a31;
  border-radius: 24px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 45vh;
    aspect-ratio: 0.55;
    max-width: 45%;
  }
`;
