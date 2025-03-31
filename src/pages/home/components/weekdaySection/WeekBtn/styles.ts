import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 20%;
  }
`;

export const Button = styled.button<{
  color: string;
  selected: boolean;
}>`
  display: flex;
  background-color: ${(props) => props.color ?? "white"};
  border: ${(props) => (props.selected ? "2px solid black" : "none")};
  padding: 0px 24px;
  font-size: 2rem;
  font-family: "Gopher-Bold";
  color: black;
  text-transform: uppercase;
  border-radius: 24px;
  cursor: pointer;
  height: 165px;
  aspect-ratio: 0.85;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1400px) {
    height: 110px;
  }

  @media (max-width: 1024px) {
    height: 90px;
  }

  @media (max-width: 900px) {
    height: 80px;
  }

  @media (max-width: 768px) {
    aspect-ratio: 0.8;
    border-radius: 20px;
    font-size: 1.2rem;
  }
`;

export const Description = styled.p`
  margin-top: 16px;
  text-align: center;
  text-transform: uppercase;
  font-family: "Gopher-Bold";

  @media (max-width: 768px) {
    font-size: 12px;
    font-family: "Gopher-Regular";
  }
`;

export const Image = styled.img`
  display: flex;
  align-self: flex-end;
  height: 95%;
`;
