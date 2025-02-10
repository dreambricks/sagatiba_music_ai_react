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
    grid-column: 1/4;
    background: #ffde2f;
    width: 100%;
    font-family: "Gopher-Medium", "sans-serif";
    font-size: 1rem;
    font-weight: bold;

    display: grid;
    grid-template-columns: 35px 1fr 35px;
    justify-items: center;
    padding-bottom: 20px;

    .type {
      margin-top: 67px;
      text-align: center;
    }

    .body {
      grid-column: 2/3;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 150px;
      max-width: 340px;
      gap: 10px;

      img {
        width: 100%;
        max-width: 340px;
      }

      .SigaBtn {
        width: 60%;
        cursor: pointer;
      }

      input[type="text"] {
        border-radius: 78px;
        background: rgb(255, 255, 255);
        color: black;
        font-size: 1rem;
        padding: 17px 23px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        margin-top: 30px;
        max-width: 90%;

        &::placeholder {
          color: black;
          text-align: center;
          opacity: 60%;
        }
      }

      .move {
        max-width: 400px;
        text-align: center;
      }
    }

    .terms,
    .terms-policy {
      width: 100%;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      gap: 5px;
      align-items: center;
      font-size: 0.65rem;

      p {
        text-decoration: underline;
        cursor: pointer;
        flex-shrink: 4;
      }

      input[type="checkbox"] {
        appearance: none;
        min-width: 20px;
        min-height: 20px;
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

    .terms-policy {
      margin-top: -5px;
    }
  }

  @media (min-width: 600px) {
    .content {
      grid-template-columns: 120px 1fr 120px;
      padding-bottom: 20px;
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
        width: 60%;
        max-width: unset;
        gap: 40px;

        .sagalover-name {
          font-size: 1.3rem;
        }

        .type {
          font-size: 1.3rem;
        }

        .move {
          font-size: 1.3rem;
          max-width: 80%;
        }

        .terms,
        .terms-policy {
          font-size: 0.8rem;
        }

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
        width: auto;
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

        .terms,
        .terms-policy {
          font-size: 1.31rem;
        }
      }
    }
  }
`;

export const ModalStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 800px;

  .info {
    background: white;
    max-width: 800px;
    border-radius: 50px;
    padding: 40px 30px 20px;
    height: 500px;

    .info-holder {
      overflow: auto;
      height: 100%;

      &::-webkit-scrollbar {
        width: 5px;
        height: 10px; /* Define a altura da scrollbar */
      }

      &::-webkit-scrollbar-track {
        background: #979797;
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background: #000000;
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #000000;
        border-radius: 10px;
      }
    }

    p {
      text-align: justify;
      margin-right: 20px;
      font-size: 1rem;
    }
  }

  button {
    background: #75b947;
    border: none;
    color: black;
    font-family: "Gopher-Bold", "sans-serif";
    padding: 10px 0;
    text-transform: uppercase;
    margin-top: 30px;
    max-width: 406px;
    width: 80%;
    cursor: pointer;
    border-radius: 21px;
  }

  @media (min-width: 768px) {
    .info {
      border-radius: 110px;
      padding: 80px 60px 40px;

      .info-holder {
        p {
        }
      }
    }

    button {
      background: #75b947;
      padding: 20px 0;
      max-width: 956px;
      font-size: 2rem;
    }
  }

  @media (min-width: 1920px) {
    .info {
      max-width: 1283px;
      height: 2000px;
      overflow: hidden;

      .info-holder {
        button {
          padding: 40px 0;
          border-radius: 41px;
        }
        p {
        }
      }
    }
  }
`;
