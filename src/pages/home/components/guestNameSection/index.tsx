import { forwardRef } from "react";
import * as Styled from "./styles";
import GuestNameInput from "../guestNameInput";

export type IGuestNameInputData = {
  value: string;
  errorMessage: string;
};

type Props = {
  guestNameInputData: IGuestNameInputData;
  onChangeGuestName: (value: string) => void;
  onNextClick: () => void;
};

const GuestNameSection = forwardRef<HTMLDivElement, Props>(
  ({ guestNameInputData, onChangeGuestName, onNextClick }, ref) => {
    return (
      <Styled.Container ref={ref}>
        <Styled.WhiteContainer>
          <div>
            <Styled.OrangeText>Primeiro, o nome do</Styled.OrangeText>

            <Styled.Logo alt="Logomarca Sagalover" />

            <Styled.OrangeText style={{ marginTop: "16px" }}>
              Digite abaixo o nome da pessoa <br /> que você quer convidar
            </Styled.OrangeText>
          </div>

          <GuestNameInput
            placeholder="nome do convidado"
            value={guestNameInputData.value}
            errorMessage={guestNameInputData.errorMessage}
            onChange={onChangeGuestName}
          />

          <Styled.RegularText>
            Mas, pra Seguir na Saga, tem que ter response, hein? <br /> Só
            compartilhe o convite com maiores de 18 anos
          </Styled.RegularText>

          <Styled.Button title="PRÓXIMO >" onClick={onNextClick} />
        </Styled.WhiteContainer>
      </Styled.Container>
    );
  }
);

export default GuestNameSection;
