import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: #0090d0;

  .footer-upper {
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    a {
      white-space: nowrap;
      text-decoration: none;
      color: white;
      transition: color 0.4s ease;
    }
    a:hover {
      color: rgb(255, 255, 255, 0.7);
    }
    img {
      width: 150px;
    }
  }

  .footer-lower {
    width: 100%;
    background-color: #fff;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .footer-lower-content {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      .links {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        gap: 5px;
        margin: 0;
        padding: 0;
        li {
          display: flex;
          align-items: center;
          &:not(:last-child)::after {
            content: "•";
            margin: 0 5px;
            color: #ff4b15;
          }
        }
      }
      span {
        font-size: 12px;
        color: #ff4b15;
      }
      a {
        text-decoration: none;
        flex-wrap: wrap;

        span {
          white-space: nowrap;
          font-size: 12px;
          color: #ff4b15;
        }
      }
      p {
        font-size: 12px;
        color: #ff4b15;
      }
    }
  }

  @media (max-width: 850px) {
    height: 550px;

    .footer-upper {
      flex-direction: column;
      justify-content: center;
      gap: 70px;
      height: 250px;
      img {
        width: 120px;
      }
    }

    .footer-lower {
      flex-direction: column;
      height: 300px;
      justify-content: center;

      .footer-lower-content {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        .links {
          flex-wrap: nowrap;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          li::after {
            display: none;
          }
        }
        a {
          text-align: center;
          p {
            margin: 0 auto;
            text-align: center;
            width: 80%;
          }
        }
      }
    }
  }
`;
