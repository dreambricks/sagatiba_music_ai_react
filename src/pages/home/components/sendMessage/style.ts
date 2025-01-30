import styled from "styled-components";
import MobileYellowBk from "../../../../assets/mobile/recado_background.png";
import YellowBK from "../../../../assets/yellow_bk.png";

export const Container = styled.div`
  grid-template-columns: 35px 1fr 35px !important;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: grid;

  .banner {
    grid-column: 1/4;
    width: 100%;
    object-fit: contain;

    content: url(${MobileYellowBk});

    @media (min-width: 768px) {
      content: url(${YellowBK});
    }
  }

  .lemon {
    position: absolute;
    top: -35px;
    left: 0;
    width: 40%;
  }

  .content {
    grid-column: 2/3;
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40%;

    .text-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1,
      h2 {
        font-size: 1.1rem;
      }

      h2 {
        font-weight: 700;
        font-family: "Gopher-Medium", "sans-serif";
      }

      h3 {
        font-weight: 200;
        font-family: "Gopher-Regular", "sans-serif";
        font-size: 0.7rem;
      }

      textarea {
        background: white;
        font-family: "Gopher-Regular", "sans-serif";
        padding: 20px 50px 100px;
        border: none;
        color: black;
        border-radius: 30px;
        font-size: 0.9rem;
        width: 100%;
        box-sizing: border-box;
        margin-top: 20px;
        height: 50%;
        overflow-y: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }

      textarea::-webkit-scrollbar {
        display: none;
      }

      textarea::placeholder {
        color: rgb(165, 165, 165);
        text-align: center;
      }
    }
  }

  @media (min-width: 424px) {
    .content {
      .text-content {
        h1,
        h2 {
          font-size: 1.2rem;
        }
        h3 {
          font-size: 1rem;
        }
        textarea {
          padding: 30px 50px 120px;
          font-size: 1rem;
        }
      }
    }
  }

  @media (min-width: 600px) {
    grid-template-columns: 120px 1fr 120px;

    .content {
      .text-content {
        h1,
        h2 {
          font-size: 1.4rem;
        }
        h3 {
          font-size: 1.2rem;
        }
        textarea {
          padding: 30px 50px 150px;
          font-size: 1.2rem;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .lemon {
      position: absolute;
      top: -35px;
      left: 0;
      width: 25%;
    }

    .content {
      margin-top: 5%;
      .text-content {
        h1,
        h2 {
          font-size: 1.5rem;
        }
        h3 {
          font-size: 1.3rem;
        }
        textarea {
          width: 55%;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    .content {
      margin-top: 8%;
      .text-content {
        h1,
        h2 {
          font-size: 1.7rem;
        }
        h3 {
          font-size: 1.5rem;
        }
        textarea {
          padding: 30px 50px 200px;
          width: 55%;
        }
      }
    }
  }

  @media (min-width: 1360px) {
    .content {
      .text-content {
        h1,
        h2 {
          font-size: 1.8rem;
        }
        h3 {
          font-size: 1.6rem;
        }
        textarea {
          padding: 30px 50px 250px;
          width: 55%;
          font-size: 1.6rem;
        }
      }
    }
  }

  @media (min-width: 1520px) {
    .content {
      .text-content {
        h1,
        h2 {
          font-size: 2.5rem;
        }
        h3 {
          font-size: 1.8rem;
        }
        textarea {
          margin-top: 60px;
          padding: 50px 50px 330px;
          width: 55%;
          font-size: 2.3rem;
        }
      }
    }
  }
`;
