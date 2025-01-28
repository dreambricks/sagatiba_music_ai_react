import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background: #f79327;

  grid-template-columns: 35px 1fr 35px !important;
  padding: 50px 0;

  .content {
    grid-column: 2/3;
    margin-top: 80px;

    p {
      font-family: "Gopher-Medium", "sans-serif";
      font-size: 1.5rem;
      text-align: center;
    }

    .stickers {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      gap: 10px;

      margin-top: 50px;

      img {
        width: 80px;
      }
    }
  }

  @media (min-width: 1280px) {
    grid-template-columns: 130px 1fr 130px !important;

    .content {
      margin-top: 30px;

      p {
        font-size: 2.5rem;
        text-align: center;
      }

      .stickers {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 50px;

        img {
          width: 80px;
        }
      }
    }
  }

  @media (min-width: 1920px) {
    .content {
      margin-top: 30px;

      .stickers {
        img {
          width: 163px;
        }
      }

      p {
        font-size: 3.375rem;
      }
    }
  }
`;
