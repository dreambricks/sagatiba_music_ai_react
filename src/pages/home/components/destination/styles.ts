import styled from "styled-components";

export const Container = styled.section`
  overflow: hidden;
  width: 100%;
  grid-template-columns: 35px 1fr 35px !important;

  .top {
    height: 80px;
    position: relative;
    background: #f05a30;
    width: 100%;
    grid-column: 1/4;

    img {
      width: 90%;
      right: 0%;
      position: absolute;
      max-width: 410px;
    }
  }

  .content {
    height: calc(100vh - 80px);
    grid-column: 1/4;
    background: #ffde2f;
    width: 100%;
    font-family: "Gopher-Medium", "sans-serif";
    font-size: 1rem;
    font-weight: bold;

    display: grid;
    grid-template-columns: 35px 1fr 35px;
    justify-items: center;

    .type {
      margin-top: 67px;
    }

    .body {
      grid-column: 2/3;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 120px;
      max-width: 340px;

      img {
        width: 100%;
        max-width: 340px;
      }

      input[type="text"] {
        border-radius: 78px;
        background: #f3592f;
        color: white;
        font-size: 1rem;
        padding: 17px 23px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        margin-top: 30px;
        max-width: 90%;

        &::placeholder {
          color: white;
          text-align: center;
        }
      }

      .move {
        margin-top: 30px;
        max-width: 400px;
      }
    }

    .terms {
      margin-top: 50px;
      display: flex;
      gap: 5px;
      align-items: center;
      font-size: 0.65rem;

      p {
        text-decoration: underline;
      }

      input[type="checkbox"] {
        appearance: none;
        width: 20px;
        height: 20px;
        background-color: white;
        border: 2px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
        position: relative;

        &:checked {
          &::after {
            content: "✔"; /* Ícone de check */
            color: black; /* Cor do ícone */
            font-size: 16px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%); /* Centraliza o ícone */
          }
        }
      }
    }
  }

  @media (min-width: 600px) {
    .content {
      grid-template-columns: 120px 1fr 120px;
    }
  }

  @media (min-width: 768px) {
    .content .body {
      max-width: 400px;
      img {
        max-width: 540px;
      }
    }
  }

  @media (min-width: 1024px) {
    overflow: initial;

    .top {
      img {
        top: -20px;
        position: absolute;
        max-width: 500px;
      }
    }

    .content {
      .body {
        margin-top: 250px;
        max-width: 550px;

        .type,
        .move,
        input[type="text"] {
          margin-top: 0;
        }

        input[type="text"] {
          text-align: center;
        }

        .terms {
          margin-top: 20px;
        }
      }
    }
  }

  @media (min-width: 1280px) {
    .top {
      img {
        max-width: 630px;
      }
    }

    .content {
      grid-template-columns: 1fr 1220px 1fr;

      .body {
        width: auto;
        max-width: unset;

        img {
          width: 690px;
          max-width: unset;
        }
      }
    }
  }

  @media (min-width: 1920px) {
    .top {
      height: 222px;

      img {
        max-width: 961px;
      }
    }

    .content {
      height: auto;
      padding-bottom: 30px;

      .body {
        margin-top: 300px;

        .sagalover-name {
          font-size: 2.6875rem;
        }

        input[type="text"] {
          max-width: 864px;
          font-size: 3.68rem;
        }

        img {
          width: 989px;
        }

        .type {
          max-width: 57%;
          text-align: center;
          font-size: 2.75rem;
        }

        .move {
          max-width: 80%;
          text-align: center;
          font-size: 2.25rem;
        }

        .terms {
          font-size: 1.31rem;
        }
      }
    }
  }
`;
