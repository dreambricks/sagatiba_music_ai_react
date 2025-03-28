import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 100vh;
  min-height: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;
