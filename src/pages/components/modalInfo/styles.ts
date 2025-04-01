import styled from "styled-components";

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
