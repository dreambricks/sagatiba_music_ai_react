import styled from "styled-components";

export const Container = styled.div`
  main,
  section {
    display: grid;
    grid-template-columns: 1fr 1280px 1fr;
  }

  main {
    .content {
      grid-column: 1/4;
      position: relative;

      .banner {
        display: block;
        width: 100%;
      }

      .invite {
        position: absolute;
        top: 0;
        width: 100%;
        max-width: 648px;
        right: 50%;
        top: 50%;
        transform: translate(50%, -50%);
      }
    }
  }

  .banner-three {
    width: 100%;

    .content {
      grid-column: 1/4;
      position: relative;

      .banner {
        display: block;
        width: 100%;
      }
    }
  }

  section.invite {
    grid-template-columns: 154px 1fr 154px;
    width: 100%;
    position: relative;
    background: #ffdd2e;

    .sun {
      position: absolute;
      right: 0;
      top: 0%;
      transform: translateY(-55%);
    }

    .content {
      grid-column: 2/3;
      position: relative;
      padding: 113px 0;
      width: 100%;
      .banner {
        display: block;
        width: 100%;
      }

      .option-check {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: auto auto;
        gap: 50px;
        margin-top: 120px;

        .button {
          background: black;
          font-size: 5rem;
          border: none;
          padding: 17px 0;
          border-radius: 41px;
          cursor: pointer;

          &.selected {
            outline: 6px solid #fff;
          }

          &:nth-child(1) {
            color: #f8e711;
            grid-column: 1 / 5;
          }

          &:nth-child(2) {
            color: #ff9900;
            grid-column: 5 / 13;
          }

          &:nth-child(3) {
            color: #0091d0;
            grid-column: 1 / 7;
          }

          &:nth-child(4) {
            color: #73bf44;
            grid-column: 7 / 13;
          }

          &:nth-child(5) {
            color: #73bf44;
            grid-column: 1 / 6;
          }

          &:nth-child(6) {
            color: #ff9900;
            grid-column: 6 / 9;
          }

          &:nth-child(7) {
            color: #0091d0;
            grid-column: 9 / 13;
          }
        }
      }
    }
  }

  .send-message {
    position: relative;

    .background {
      grid-column: 1/4;
      grid-row: 1/2;
      width: 100%;
    }

    .lemon,
    .tambor {
      position: absolute;
    }

    .lemon {
      top: -80px;
      left: 0;
    }

    .tambor {
      bottom: -130px;
      right: 0;
    }

    .content {
      width: 961px;
      margin: 0 auto;
      grid-column: 2/3;
      grid-row: 1/2;
      margin-top: 92px;

      display: flex;
      flex-direction: column;
      align-items: center;

      h1,
      h2 {
        font-size: 3.125rem;
      }

      h2 {
        font-weight: 700;
        font-family: "Gopher-Medium", "sans-serif";
      }

      h3 {
        font-weight: 200;
        font-family: "Gopher-Regular", "sans-serif";
        font-size: 2rem;
      }

      textarea {
        background: white;
        font-family: "Gopher-Regular", "sans-serif";
        padding: 95px 116px 84px;
        border: none;
        color: black;
        border-radius: 59px;
        font-size: 3rem;
        width: 100%;
        box-sizing: border-box;
        margin-top: 40px;
        height: 444px;
      }

      textarea::placeholder {
        color: rgb(165, 165, 165);
        text-align: center;
      }

      button {
        background: #f3592f;
        border-radius: 47px;
        color: black;
        border: none;
        font-size: 2.5rem;
        margin-top: 64px;
        padding: 21px 12px;
        font-family: "Gopher-Regular", "sans-serif";
        letter-spacing: 8px;
      }
    }
  }

  .generate-music {
    & > img {
      width: 100%;
      grid-column: 1/4;
      grid-row: 1/3;
    }

    .content {
      width: 961px;
      margin: 0 auto;
      grid-column: 2/3;
      grid-row: 1/3;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 410px;
      gap: 22px;

      button {
        background: #0091d0;
        color: #f8e711;
        display: flex;
        align-items: center;
        font-size: 3.125rem;
        border: none;
        gap: 5px;
        padding: 46px 52px;
        border-radius: 69px;
        cursor: pointer;
        font-family: "Farreron-DemiBold", "sans-serif";
        letter-spacing: 10px;
      }

      p {
        font-size: 3rem;
        color: white;
        font-family: "Gopher-Medium", "sans-serif";
      }
    }
  }

  @media (min-width: 768px) {
  }
`;
