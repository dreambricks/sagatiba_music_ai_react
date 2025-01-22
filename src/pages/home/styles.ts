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

  .banner-two {
    width: 100%;
    margin-top: -40px;
    position: relative;
    z-index: 2;

    .content {
      grid-column: 1/4;
      position: relative;

      .banner {
        display: block;
        width: 100%;
      }

      .sagalover {
        position: absolute;
        width: 100%;
        max-width: 880px;
        right: 50%;
        bottom: 132px;
        transform: translateX(50%);
        display: flex;
        flex-direction: column;
        gap: 70px;
      }

      input {
        border-radius: 78px;
        background: #f3592f;
        color: white;
        font-size: 4rem;
        padding: 17px 113px;
        width: 100%;
        max-width: 864px;
        box-sizing: border-box;
        border: none;
        height: 155px;

        &::placeholder {
          color: white;
        }
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
    background: #73bf44;

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
          font-size: 5.43rem;
          border: none;
          padding: 17px 0;
          border-radius: 41px;
          cursor: pointer;
          opacity: 50%;

          &.selected {
            opacity: 100%;
          }

          &.yellow {
            color: #f8e711;
            grid-column: 1/5;
          }
          &.orange {
            color: #ff9900;
            grid-column: 5/13;
          }
          &.blue {
            color: #0091d0;
            grid-column: 1/8;
          }
          &.green {
            color: #73bf44;
            grid-column: 8/13;
          }
        }
      }
    }
  }

  section.week-days {
    grid-template-columns: 149px 1fr 149px;

    width: 100%;
    & > img {
      width: 100%;
      grid-column: 1/4;
    }

    .content {
      grid-column: 1/4;
      grid-row: 1/2;
      position: relative;
      width: 100%;

      display: grid;
      grid-template-columns: 149px 1fr 149px;

      .drink {
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 0;
        top: 240px;
        width: 100%;
        grid-column: 2/3;

        img {
          width: 100%;
          max-width: 863px;
        }

        .select-days {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-top: 125px;
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

      margin-top: 92px;

      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        margin-top: 452px;
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
    }
  }

  @media (min-width: 768px) {
  }
`;
