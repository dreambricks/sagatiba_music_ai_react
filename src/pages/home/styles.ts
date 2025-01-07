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

  .invite {
    grid-template-columns: 154px 1fr 154px;
    width: 100%;
    position: relative;
    background: #73bf44;

    .sun {
      position: absolute;
      right: 0;
      top: 0%;
      transform: translateY(-50%);
    }

    .content {
      grid-column: 2/3;
      position: relative;
      width: 100%;
      .banner {
        display: block;
        width: 100%;
      }

      .option-check {
        display: flex;

        .button {
          background: black;
          font-size: 5.43rem;
          border: none;

          .yellow {
            color: #f8e711;
          }
          .orange {
            color: #ff9900;
          }
          .blue {
            color: #0091d0;
          }
          .green {
            color: #73bf44;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
  }
`;
