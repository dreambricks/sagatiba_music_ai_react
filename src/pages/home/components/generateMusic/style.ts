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
      position: relative;

      .gerar-musica {
        width: 60%;
        cursor: pointer;
      }

      .cristalina {
        width: 35%;
      }

      p {
        width: 100%;
        text-align: center;
        color: white;
        font-family: "Gopher-Medium", "sans-serif";
      }

      .loading {
        position: absolute;
        transform: translate(0%, 10%);
        .loading-gif {
        }

        img {
          width: 100%;
          max-width: 150px;
        }
      }
    }
  }

  @media (min-width: 460px) {
    .generate-music {
      .content {
        margin-top: 0px;

        .gerar-musica {
          cursor: pointer;
        }

        button {
          font-size: 1.5rem;
          & > img {
            width: 40px;
          }
        }
        p {
          font-size: 1.5rem;
        }

        .loading {
          img {
            width: 100%;
            max-width: 200px;
          }
        }
      }
    }
  }

  @media (min-width: 600px) {
    .generate-music {
      .content {
        margin-top: 0px;

        .gerar-musica {
          cursor: pointer;
        }

        p {
          font-size: 1.6rem;
        }

        .loading {
          img {
            width: 100%;
            max-width: 250px;
          }
        }
      }
    }
  }

  @media (min-width: 728px) {
    .generate-music {
      .content {
        .gerar-musica {
          width: 40%;
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
        .cristalina {
          width: 20%;
        }

        p {
          font-size: 1.8rem;
        }

        .loading {
          img {
            width: 100%;
            max-width: 240px;
          }
        }
      }
    }
  }

  @media (min-width: 1280px) {
    .generate-music {
      .content {
        p {
          font-size: 2rem;
        }
      }
    }
  }

  @media (min-width: 1540px) {
    .generate-music {
      .content {
        .cristalina {
          width: 15%;
        }
        .gerar-musica {
          width: 30%;
        }
        p {
          font-size: 2.5rem;
        }
      }
    }
  }
`;
