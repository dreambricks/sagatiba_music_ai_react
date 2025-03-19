import styled from "styled-components";

export const Container = styled.button`
  background-color: #ff4b15;
  padding: 0.4rem;
  width: 60%;
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
    padding: 1rem;
    width: 60%;
    font-size: 2rem;

    span {
      font-size: 2rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 0.8rem;
    span {
      font-size: 2.5rem;
    }
  }
`;
