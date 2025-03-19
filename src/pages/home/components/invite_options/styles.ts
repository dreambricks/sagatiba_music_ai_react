import styled from "styled-components";

export const InviteForContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 35px 1fr 35px !important;
  overflow: hidden;
  position: relative;
  width: 100%;
  background: #ffdd2e;

  .content {
    grid-column: 1/4;
    position: relative;

    .banner {
      display: block;
      width: 100%;
    }
  }

  .invite {
    grid-column: 2/3;
    .sun {
      width: 35%;
      right: 0%;
      position: absolute;
      transform: translate(0%, -35%);
    }

    .content {
      grid-column: 2/3;
      position: relative;
      padding: 50px 0;
      width: 100%;

      .nextBtn {
        display: flex;
        justify-content: center;
        margin-top: 50px;
      }

      .option-check {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: auto auto;
        gap: 10px;
        margin-top: 80px;

        .button {
          background: black;
          font-size: 1.1rem;
          border: none;
          padding: 10px 0;
          border-radius: 20px;
          cursor: pointer;

          &.selected {
            outline: 3px solid #fff;
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
            grid-column: 1 / 7;
          }

          &:nth-child(6) {
            color: #ff9900;
            grid-column: 7 / 10;
          }

          &:nth-child(7) {
            color: #0091d0;
            grid-column: 10 / 13;
          }
        }
      }

      .texts {
        font-family: "Gopher-Medium", "sans-serif";
        display: flex;
        flex-direction: column;
        gap: 30px;

        .invite_options_text_blue {
          font-size: 1rem;
          color: #0091d0;
        }

        .invite_options_text_black {
          font-size: 1rem;
          color: #000;
        }
      }
    }
  }

  @media (min-width: 600px) {
    grid-template-columns: 120px 1fr 120px;
    .invite {
      .content {
        .option-check {
          .button {
            font-size: 1.6rem;
          }
        }

        .texts {
          .invite_options_text_black,
          .invite_options_text_blue {
            font-size: 1.2rem;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .invite {
      .sun {
        width: 30%;
      }
      .content {
        .option-check {
          .button {
            font-size: 1.6rem;
          }
        }

        .texts {
          .invite_options_text_black,
          .invite_options_text_blue {
            font-size: 1.4rem;
          }
        }
      }
    }
  }

  @media (min-width: 1024px) {
    .invite {
      .sun {
        width: 28%;
      }
      .content {
        padding: 120px 0;
        .option-check {
          margin-top: 120px;
          .button {
            font-size: 1.8rem;
          }
        }

        .texts {
          gap: 20px;

          .invite_options_text_black,
          .invite_options_text_blue {
            font-size: 1.6rem;
          }
        }
      }
    }
  }

  @media (min-width: 1280px) {
    .invite {
      .content {
        padding: 130px 0;
        .option-check {
          gap: 50px;
          margin-top: 120px;
          .button {
            background: black;
            font-size: 4rem;
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

        .texts {
          gap: 20px;

          .invite_options_text_black,
          .invite_options_text_blue {
            font-size: 2rem;
          }
        }
      }
    }
  }
`;
