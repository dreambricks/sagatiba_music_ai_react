import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    background: #fbef00;
    padding: 90px 75px;
    color: black;
    text-transform: uppercase;
    font-size: 5rem;
    border: none;
    margin-bottom: 30px;
    border-radius: 57px;
    cursor: pointer;
  }

  p {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
