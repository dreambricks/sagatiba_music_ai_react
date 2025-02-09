import styled from "styled-components";

export const Container = styled.section`
  background: #f79327;
  grid-template-columns: 35px 1fr 35px !important;

  .content {
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Gopher-Medium", "sans-serif";
    padding: 50px 0;

    .phone {
      font-size: 1.5rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      .button-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        margin-top: 40px;
        .SigaBtn {
          width: 60%;
          cursor: pointer;
        }
      }

      .button {
        background: rgb(255, 255, 255);
        font-family: "Gopher-Medium", "sans-serif";
        border-radius: 20px;
        display: flex;
        gap: 10px;
        align-items: center;
        padding: 15px 20px;
        overflow: hidden;
        max-width: 250px;

        input {
          background: transparent;
          font-family: "Gopher-Medium", "sans-serif";

          border: none;
          outline: none;
          font-size: 24px;
          width: 170px;
          color: black;
        }

        & img {
          width: 20px;
        }
      }

      p:last-child {
        display: none;
      }
    }

    .loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-top: 10px;
      position: relative;
      .loading-gif {
        position: absolute;
        inset: 0;
      }

      img {
        width: 100%;
        max-width: 400px;
      }
    }

    .music-message {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.5rem;
      margin-top: 20px;

      p {
        text-align: center;
      }

      span {
        color: rgb(255, 255, 255);
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 768px) {
    .content {
      .phone {
        font-size: 1.7rem;

        button {
          padding: 20px 30px;
          font-size: 1.7rem;

          & img {
            width: 40px;
          }
        }
      }

      .loading {
        img {
          max-width: 350px;
        }
      }

      .music-message {
        font-size: 1.7rem;

        p {
          text-align: center;
        }

        span {
          font-size: 1.3rem;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    height: unset;
    padding: 100px 0;

    grid-template-columns: 100px 1fr 100px !important;
    .content {
      flex-direction: row;
      align-items: center;
      gap: 30px;
      .phone {
        font-size: 1.3rem;
        text-align: left;
        align-items: flex-start;

        .button-container {
          align-items: flex-start;
          button {
            padding: 10px 15px;
            font-size: 1rem;
            border-radius: 50px;
            gap: 10px;

            & img {
              width: 20px;
            }
          }
        }

        p:last-child {
          display: block;
          margin-top: 10px;
          font-size: 0.8rem;
        }
      }

      .loading {
        img {
          max-width: 350px;
        }
      }

      .music-message {
        font-size: 1.3rem;
        align-items: flex-start;

        p {
          text-align: left;
        }

        span {
          font-size: 0.9rem;
          margin-top: 30px;
        }
      }
    }
  }

  @media (min-width: 1280px) {
    grid-template-columns: 131px 1fr 131px !important;
    .content {
      flex-direction: row;
      align-items: center;
      gap: 30px;
      .phone {
        font-size: 2.5rem;

        button {
          padding: 10px 25px;
          font-size: 1.6rem;

          & img {
            width: 40px;
          }
        }

        p:last-child {
          font-size: 1.8rem;
        }
      }

      .loading {
        img {
          max-width: 350px;
        }
      }

      .music-message {
        font-size: 2.3rem;

        p {
          text-align: left;
        }

        span {
          font-size: 1.7rem;
        }
      }
    }
  }

  @media (min-width: 1280px) {
    .content {
      gap: 30px;
      .phone {
        font-size: 3.4375rem;

        .button {
          padding: 20px 15px;
          padding-left: 30px;
          font-size: 1.6rem;
          /* margin-top: 56px; */
          border-radius: 50px;
          gap: 10px;

          & img {
            width: 40px;
          }

          input {
            background: transparent;
            border: none;
            outline: none;
            font-size: 28px;
            width: 200px;
          }
        }

        p:last-child {
          font-size: 2rem;
          margin-top: 50px;
        }
      }

      .loading {
        img {
          max-width: 560px;
        }
      }

      .music-message {
        font-size: 2.6875rem;

        p {
          text-align: left;
        }

        span {
          font-size: 1.93rem;
        }
      }
    }
  }
`;
