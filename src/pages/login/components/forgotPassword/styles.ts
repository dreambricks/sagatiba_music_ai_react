import styled from "styled-components";

export const Container = styled.div`
  font-size: 14px;
  color: black;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    font-size: 10px;
  }
`;

export const BoldLink = styled.a`
  font-family: "Gopher-Bold";
  text-decoration: underline;
  cursor: pointer;
  color: black;
`;
