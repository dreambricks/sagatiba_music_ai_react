import styled from "styled-components";

export const Container = styled.section`
  background: #0091d0;
  width: 100%;
  grid-template-columns: 35px 1fr 35px !important;
  width: 100%;
  overflow: hidden;
  position: relative;

  .background {
    width: 150%;
    object-fit: cover;
    position: absolute;
    bottom: -150px;
    object-position: -100px;
  }

  .date {
    font-family: "Gopher-Medium", "sans-serif";
    text-align: center;

    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 2rem;
      color: white;
    }
  }

  .content {
    grid-column: 2/3;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 0;

    .drink {
      display: flex;
      width: 100%;
      justify-content: center;

      .select-days {
        display: grid;
        grid-template-columns: repeat(4, 70px);
        grid-template-rows: auto auto;
        justify-content: space-between;

        margin-top: 59px;
      }
    }
  }

  @media (min-width: 620px) {
    .background {
      bottom: -350px;
    }
    .content {
      justify-content: flex-start;
      margin-top: 30px;

      .drink {
        .select-days {
          gap: 15px;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    .background {
      bottom: -250px;
      max-width: 1000px;
    }

    .date {
      h2 {
        font-size: 5rem;
      }

      p {
        font-size: 2rem;
        color: white;
      }
    }

    .content {
      justify-content: flex-start;
      margin-top: 50px;

      .drink {
        justify-content: space-evenly;
        .select-days {
          gap: 15px;
          display: flex;
          width: 100%;
        }
      }
    }
  }

  @media (min-width: 1280px) {
    .background {
      bottom: -250px;
      max-width: 1000px;
    }
    .date {
      h2 {
        font-size: 6rem;
      }
      p {
        font-size: 2.9rem;
        color: white;
      }
    }

    .content {
      .drink {
        justify-content: flex-start;
        .select-days {
          width: 100%;
          grid-template-columns: repeat(8, 1fr);
        }
      }
    }
  }

  @media (min-width: 1920px) {
    .background {
      bottom: -420px;
      max-width: 1300px;
    }
    .date {
      h2 {
        font-size: 9rem;
      }
      p {
        font-size: 4rem;
        color: white;
      }
    }

    .content {
      .drink {
        justify-content: flex-start;
        .select-days {
          width: 100%;
          grid-template-columns: repeat(8, 1fr);
        }
      }
    }
  }
`;
