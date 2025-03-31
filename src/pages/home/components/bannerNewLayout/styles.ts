import styled from "styled-components";
import MobileBanner from "../../../../assets/mobile/mobile_banner_background.png";
import DesktopBanner from "../../../../assets/banner-one.png";
import CustomButton from "../../../components/customButton";

export const Container = styled.section`
  overflow: hidden;
  display: grid;
  width: 100%;
  grid-template-columns: 35px 1fr 35px !important;

  .content {
    grid-column: 1/4;
    position: relative;

    .banner {
      display: block;
      width: 100%;
      content: url(${MobileBanner});

      @media (min-width: 768px) {
        content: url(${DesktopBanner});
      }
    }

    .invite {
      position: absolute;
      top: 0;
      width: 56%;
      max-width: 648px;
      right: 50%;
      top: 55%;
      transform: translate(50%, -50%);
      img {
        width: 100%;
      }
    }

    .texts-container {
      position: absolute;
      right: 50%;
      top: 18%;
      transform: translate(50%, -50%);
      display: flex;
      flex-direction: column;
      gap: 16px;
      text-align: center;
      width: 75%;

      h1 {
        letter-spacing: 0.1rem;
        font-size: 1.5rem;
        font-weight: bold;
        color: #f6dc45;
        font-family: "Gopher-Bold";
      }

      p {
        font-size: 0.9rem;
        color: #ffffff;
      }

      span {
        color: #f6dc45;
        font-weight: bold;
      }
    }
  }

  @media (min-width: 450px) {
    .content {
      .texts-container {
        gap: 20px;
        h1 {
          font-size: 1.8rem;
        }
        p {
          font-size: 1rem;
        }
      }
    }
  }

  @media (min-width: 600px) {
    .content {
      .texts-container {
        gap: 24px;
        h1 {
          font-size: 2.5rem;
        }
        p {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .content {
      .texts-container {
        position: absolute;
        left: -12%;
        top: 45%;
        transform: translate(50%, -50%);
        display: flex;
        flex-direction: column;
        gap: 40px;
        text-align: left;
        width: 28%;

        h1 {
          font-size: 1.5rem;
          font-weight: bold;
          color: #f6dc45;
          font-family: "Gopher-Bold";
        }

        p {
          font-size: 1rem;
          color: #ffffff;
        }

        span {
          color: #f6dc45;
          font-weight: bold;
        }
      }

      .invite {
        position: absolute;
        top: 0;
        width: 33%;
        max-width: 648px;
        right: 50%;
        top: 51%;
        transform: translate(50%, -50%);
      }
    }
  }

  @media (min-width: 1024px) {
    .content {
      .texts-container {
        gap: 60px;
        h1 {
          font-size: 2rem;
        }

        p {
          font-size: 1.2rem;
        }
      }
    }
  }

  @media (min-width: 1280px) {
    .content {
      .texts-container {
        gap: 80px;
        top: 45%;
        h1 {
          font-size: 2.6rem;
        }

        p {
          width: 80%;
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export const CreateButton = styled(CustomButton)`
  padding: 8px;
  font-size: 16px;

  @media (min-width: 768px) {
    padding: 10px;
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    padding: 20px;
    font-size: 24px;
  }
`;

export const LogoutButton = styled(CustomButton)`
  position: absolute;
  right: 10%;
  top: 10%;
  width: 10%;
  transform: translate(50%, -50%);
  padding: 8px;
  font-size: 16px;
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 12%;
    padding: 8px;
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    display: block;
    width: 12%;
    max-width: 140px;
    padding: 8px;
    font-size: 16px;
  }
`;
