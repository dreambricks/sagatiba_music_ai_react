import styled from "styled-components";

export const Container = styled.section`
  overflow: hidden;
  width: 100%;

  .top {
    height: 80px;
    position: relative;
    background: #f05a30;
    width: 100%;

    img {
      width: 100%;
      right: 0%;
      top: -20px;
      position: absolute;
      max-width: 400px;
    }
  }

  .content {
    background: #ffde2f;
    width: 100%;
    font-family: "Gopher-Medium", "sans-serif";
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 100vh;

    .error-card {
      background: #fff;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      text-align: center;
      max-width: 400px;
      width: 90%;
      z-index: 2;
    }

    .type {
      margin-top: 10px;
      font-size: 1.4rem;
    }

    .body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;

      p {
        font-size: 1.4rem;
        color: #333;
      }
    }
  }

  @media (min-width: 600px) {
    .top {
      img {
        max-width: 600px;
      }
    }
    .content {
      font-size: 1rem;
      .type {
        font-size: 2rem;
      }
      .error-card {
        max-width: 500px;
      }
    }
  }

  @media (min-width: 1024px) {
    .top {
      img {
        max-width: 700px;
      }
    }
    .content {
      .type {
        font-size: 2.5rem;
      }
      .error-card {
        max-width: 600px;
      }
    }
  }
`;
