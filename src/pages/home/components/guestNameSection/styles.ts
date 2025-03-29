import styled from "styled-components";
import GuestNameBg from "../../../../assets/guest-name-bg.png";
import LogoImg from "../../../../assets/nome_do_sagalover.png";
import CustomButton from "../../../components/customButton";

export const Container = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-image: url(${GuestNameBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const WhiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 80%;
  background-color: white;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const OrangeText = styled.p`
  color: #f15a31;
  text-align: center;
  font-family: "Gopher-Bold";
`;

export const RegularText = styled.p`
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Logo = styled.img.attrs({ src: LogoImg })`
  width: 500px;

  @media (max-width: 768px) {
    width: 220px;
  }
`;

export const Button = styled(CustomButton)`
  width: 300px;

  @media (max-width: 768px) {
    width: 120px;
  }
`;
