import { forwardRef } from "react";
import { tagOptions } from "../../helper";
import * as Styled from "./styles";

interface InviteOptionsProps {
  value: string;
  onInviteSelected: (id: string) => void;
  handleNextPress: () => void;
}

export const InviteOptionsSection = forwardRef<
  HTMLDivElement,
  InviteOptionsProps
>(({ value, onInviteSelected, handleNextPress }, ref) => {
  const handleSelectInviteFor = (id: string) => {
    onInviteSelected(id);
  };

  return (
    <Styled.Container ref={ref}>
      <Styled.ImageContainer>
        <Styled.LeftImage />
      </Styled.ImageContainer>

      <Styled.RightContainer>
        <Styled.RightContentContainer>
          <Styled.Title>
            Conta pra gente:
            <br />
            qual o convite do rolê?
          </Styled.Title>

          <Styled.ChooseDayText>
            Escolha uma das alternativas abaixo.
          </Styled.ChooseDayText>

          <Styled.OptionsContainer>
            {tagOptions.map((item) => (
              <Styled.OptionButton
                key={item.id}
                selected={value === item.option}
                selectedColor={item.color}
                onClick={() => handleSelectInviteFor(item.option)}
              >
                {item.option}
              </Styled.OptionButton>
            ))}
          </Styled.OptionsContainer>

          <Styled.NextButton title="PRÓXIMO" onClick={handleNextPress} />
        </Styled.RightContentContainer>
      </Styled.RightContainer>
    </Styled.Container>
  );
});
