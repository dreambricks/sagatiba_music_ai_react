import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr 35px !important;
  height: 100%;
  background: #ffdd2e;

  .content {
    grid-column: 2/3;
    padding: 100px 0 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 1.3rem;
      font-family: "Gopher-Bold", "sans-serif";
    }

    .description {
      margin-top: 40px;
      text-align: center;
    }

    .players {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;

      .container-player {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;

        .socials {
          img {
            cursor: pointer;
            width: 2.5rem;
          }
        }
      }
    }

    .container-info {
      margin-top: 50px;

      .download-img {
        border-radius: 40px;
        overflow: hidden;
        display: none;

        img {
          width: 100%;
          max-width: 490px;
        }
      }

      .lyrics {
        margin-top: 40px;
        background: #32c034;
        border-radius: 40px;
        height: 320px;
        padding: 25px 10px 25px 30px;

        .lyrics-holder {
          height: 100%;
          overflow: auto;

          pre {
            font-family: "Gopher-Medium", "sans-serif";
            white-space: pre-line;
            user-select: text;
          }

          &::-webkit-scrollbar {
            width: 5px;
          }

          &::-webkit-scrollbar-track {
            background: #129d14;
          }

          &::-webkit-scrollbar-thumb {
            background: #ffdd2e;
            border-radius: 10px;
          }

          &::-webkit-scrollbar-thumb:hover {
            background: #ffdd2e;
            border-radius: 10px;
          }
        }
      }
    }

    .share {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-top: 40px;
      font-family: "Gopher-Bold", "sans-serif";
      font-size: 1.5rem;
    }

    .advise {
      margin-top: 40px;
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 560px 1fr !important;

    .content {
      .description {
        max-width: 560px;
        text-align: center;
      }

      .players {
        .container-player {
          .socials {
            display: flex;
            gap: 10px;
            img {
              width: 4rem;
            }
          }
        }
      }

      .container-info {
        margin-top: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 500px;
        gap: 20px;
        width: 100%;

        .download-img {
          grid-column: 1/2;
          grid-row: 1/2;
          display: block;

          img {
            width: 100%;
            max-width: unset;
            height: 100%;
            display: block;
            object-fit: cover;
          }
        }

        .lyrics {
          grid-column: 2/3;

          margin-top: 0;
          flex-grow: 1;
          height: initial;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 960px 1fr !important;

    .content {
      .description {
        max-width: 560px;
        text-align: center;
      }

      .container-info {
        grid-template-rows: 900px;
      }
    }
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 960px 1fr !important;

    .content {
      .description {
        max-width: 560px;
        text-align: center;
      }

      .lyrics {
        border-radius: 113px;
        padding: 85px 99px 21px 161px;

        .lyrics-holder {
          font-size: 1.8rem;
        }
      }
    }
  }

  @media (min-width: 1920px) {
    grid-template-columns: 1fr 1626px 1fr !important;

    .content {
      h1 {
        font-size: 4.5rem;
        text-align: center;
      }

      .description {
        font-size: 2.56rem;
        max-width: 968px;
      }

      /* button {
        font-size: 4rem;
        padding: 33px 40px 29px;
        border-radius: 41px;
      } */

      .container-info {
        gap: 2px;
        height: 1059px;
        grid-template-rows: 1059px;

        .download-img {
          max-width: 697px;
        }

        .lyrics {
          border-radius: 80px;
          padding: 61px 19px 50px 82px;

          .lyrics-holder {
            height: 100%;
            font-size: 1.8rem;

            pre {
              margin-right: 100px;
              text-align: justify;
            }

            &::-webkit-scrollbar {
              width: 15px;
            }

            &::-webkit-scrollbar-thumb {
              border-radius: 115px;
            }

            &::-webkit-scrollbar-thumb:hover {
              border-radius: 115px;
            }
          }
        }
      }

      .share {
        gap: 30px;
        font-size: 6.25rem;
        .socials {
        }
      }
      .advise {
        font-size: 2.5625rem;
      }
    }
  }
`;
