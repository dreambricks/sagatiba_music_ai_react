import styled from "styled-components";

export const Container = styled.button`
  background-color: #ff4b15;
  padding: 0.4rem;
  width: 45%;
  border-top-right-radius: 24px;
  border-bottom-left-radius: 24px;
  color: white;
  font-size: 1rem;
  border: transparent;
  cursor: pointer;
  font-family: "Gopher-Bold";
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.6rem;
    font-family: "Gopher";
  }

  &:active {
    border: 1px solid #ff4b15;
  }

  @media (min-width: 768px) {
    padding: 0.6rem;
    font-size: 1.6rem;

    span {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 1024px) {
    span {
      font-size: 2.5rem;
    }
  }
`;
