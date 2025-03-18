import styled from "styled-components";

export const Container = styled.div`
  main,
  section {
    display: grid;
    grid-template-columns: 1fr 1280px 1fr;
  }

  .top {
    display: flex;
    background-color: #f05a30;
    width: 100%;

    img {
      margin-left: auto;
      margin-top: -120px;
      z-index: 1;

      @media (max-width: 1024px) {
        max-width: 50%;
        margin-top: -60px;
      }

      @media (max-width: 768px) {
        max-width: 70%;
        margin-top: -20px;
      }
    }
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

  @media (min-width: 768px) {
  }
`;

export const ButtonSiga = styled.button`
  background-color: #ff5722;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-image: url("/path-to-your-image.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    background-color: #e64a19;
  }

  &:active {
    transform: scale(0.98);
  }
`;
