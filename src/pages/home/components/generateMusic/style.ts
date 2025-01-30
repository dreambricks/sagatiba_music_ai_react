import styled from "styled-components";
import DesktopBanner from "../../../../assets/gerar_musica_background.png";
import MobileBanner from "../../../../assets/mobile/gerar_musica.png";

export const Container = styled.div`
  section {
    display: grid;
    grid-template-columns: 35px 1fr 35px !important;
  }

  .generate-music {
    & > img {
      content: url(${MobileBanner});
      @media (min-width: 768px) {
        content: url(${DesktopBanner});
      }
      width: 100%;
      grid-column: 1/4;
      grid-row: 1/3;
    }

    .content {
      width: 100%;
      margin: 0 auto;
      grid-column: 2/3;
      grid-row: 1/3;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 10%;
      gap: 15px;

      button {
        background: #0091d0;
        color: #f8e711;
        display: flex;
        align-items: center;
        font-size: 1rem;
        border: none;
        gap: 10px;
        padding: 20px 32px;
        border-radius: 30px;
        cursor: pointer;
        font-family: "Farreron-DemiBold", "sans-serif";
        letter-spacing: 2px;
        & > img {
          width: 30px;
        }
      }

      p {
        font-size: 1rem;
        color: white;
        font-family: "Gopher-Medium", "sans-serif";
      }
    }
  }

  @media (min-width: 600px) {
    .generate-music {
      .content {
        margin-top: 0px;

        button {
          font-size: 1.5rem;
          & > img {
            width: 40px;
          }
        }
        p {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media (min-width: 728px) {
    .generate-music {
      .content {
        button {
          font-size: 1.6rem;
          & > img {
            width: 44px;
          }
        }
        p {
          font-size: 1.6rem;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    .generate-music {
      .content {
        button {
          font-size: 1.8rem;
          & > img {
            width: 50px;
          }
        }
        p {
          font-size: 1.8rem;
        }
      }
    }
  }

  @media (min-width: 1280px) {
    .generate-music {
      .content {
        button {
          font-size: 2rem;
          & > img {
            width: 55px;
          }
        }
        p {
          font-size: 2rem;
        }
      }
    }
  }

  @media (min-width: 1540px) {
    .generate-music {
      .content {
        button {
          padding: 30px 52px;

          font-size: 2.5rem;
          & > img {
            width: 55px;
          }
        }
        p {
          font-size: 2.5rem;
        }
      }
    }
  }
`;
