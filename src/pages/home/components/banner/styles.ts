import styled from "styled-components";
import MobileBanner from "../../../../assets/mobile/mobile_banner_background.png";
import DesktopBanner from "../../../../assets/banner-one.png";

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
      top: 51%;
      transform: translate(50%, -50%);
    }
  }

  @media (min-width: 600px) {
    .content {
      grid-template-columns: 120px 1fr 120px;
    }
  }

  @media (min-width: 768px) {
    .content {
      .invite {
        position: absolute;
        top: 0;
        width: 35%;
        max-width: 648px;
        right: 50%;
        top: 51%;
        transform: translate(50%, -50%);
      }
    }
  }
`;
