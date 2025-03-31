import { forwardRef } from "react";
import * as Styled from "./style";

interface SendMessageProps {
  value: string;
  onMessageChange: (message: string) => void;
  onGenerateMusic: () => void;
}

export const SendMessageSection = forwardRef<HTMLDivElement, SendMessageProps>(
  ({ value, onMessageChange, onGenerateMusic }, ref) => {
    return (
      <Styled.Container ref={ref}>
        <Styled.LeftContainer>
          <Styled.Title>
            Preparado para criar o<br /> convite mais afinado do rolê?
          </Styled.Title>

          <Styled.Subtitle>
            Escreva a mensagem do convite e deixe
            <br />
            a inteligência artificial transformar sua ideia
            <br />
            em uma música inspirada na voz das donas
            <br />
            da cachaça
          </Styled.Subtitle>

          <Styled.TextArea
            name="message"
            value={value}
            placeholder="mande seu recado aqui"
            onChange={(e) => onMessageChange(e.target.value)}
            maxLength={150}
          />

          <Styled.GenerateButton
            title="GERAR MÚSICA >"
            onClick={onGenerateMusic}
          />
        </Styled.LeftContainer>

        <Styled.RightContainer></Styled.RightContainer>
      </Styled.Container>
    );
  }
);
