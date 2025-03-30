import { forwardRef, useState } from "react";
import { tagOptions } from "../../../../pages/home/helper";
import * as Styled from "./styles";

interface InviteOptionsProps {
  onInvite: (id: string) => void;
  onFill: () => void;
}

export const InviteOptions = forwardRef<HTMLDivElement, InviteOptionsProps>(
  ({ onInvite, onFill }, ref) => {
    const [inviteFor, setInviteFor] = useState("");

    const addInviteFor = (id: string) => {
      setInviteFor(id);
      onInvite(id);
    };

    return (
      <Styled.Container ref={ref}>
        <Styled.ImageContainer>
          <Styled.LeftImage />
        </Styled.ImageContainer>

        <Styled.OptionsContainer>
          <Styled.Title>
            Conta pra gente:
            <br />
            qual o convite do rolê?
          </Styled.Title>

          <Styled.ChooseDayText>
            Escolha uma das alternativas abaixo.
          </Styled.ChooseDayText>

          <div className="option-check">
            {tagOptions.map(({ option, tagClass }) => (
              <button
                className={`button ${tagClass} ${
                  inviteFor === option ? "selected" : ""
                }`}
                key={option}
                onClick={() => addInviteFor(option)}
              >
                {option}{" "}
              </button>
            ))}
          </div>

          <Styled.NextButton title="PRÓXIMO" onClick={onFill} />
          {/* <NextButton title="PRÓXIMO" onClick={onFill} /> */}
        </Styled.OptionsContainer>
      </Styled.Container>
    );
  }
);
