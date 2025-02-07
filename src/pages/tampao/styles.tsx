import styled from "styled-components";

export const Container = styled.section`
  overflow: hidden;
  width: 100%;

  .top {
    height: 80px;
    position: relative;
    background: #f05a30;
    width: 100%;

    img {
      width: 100%;
      right: 0%;
      top: -20px;
      position: absolute;
      max-width: 400px;
    }
  }

  .content {
    background: #ffde2f;
    width: 100%;
    font-family: "Gopher-Medium", "sans-serif";
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    justify-items: center;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    height: 100vh;


    .type {
      margin-top: 80px;
      font-size: 1.4rem;
    }

    .body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;

      img {
        width: 80%;
        max-width: 600px;
      }
    }
  }


  @media (min-width: 600px) {
    .top {
        img {
            max-width: 600px;
        }
    }
    .content {
        font-size: 1rem;
        .type {
            margin-top: 100px;
            font-size: 2rem;
        }
        .body {
            margin-top: 100px;
            img {
                width: 80%;
                max-width: 600px;
            }
        }
    }
  }

  @media (min-width: 1024px) {
    .top {
        img {
            max-width: 700px;
        }
    }
    .content {
        .type {
            margin-top: 100px;
            font-size: 2.5rem;
        }
        .body {
            margin-top: 100px;
            img {
                width: 90%;
                max-width: 700px;
            }
        }
    }
  }


`;
