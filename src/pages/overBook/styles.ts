import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffdd2e;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 80%;
    font-family: "Gopher-Bold", "sans-serif";

    h1 {
      text-align: center;
      font-size: 2rem;
    }

    img {
      margin-top: 2rem;
      width: 65%;
      max-width: 400px;
    }
  }
  @media (min-width: 768px) {
    .content {
      h1 {
        font-size: 3rem;
      }
    }
  }
`;
