import { useState } from "react";
import Balde from "../../../../assets/balde_background.png";
import Sun from "../../../../assets/sol_lua.png";
import { tagOptions } from "../../../../pages/home/helper";
import { Container } from "../../styles";
import { InviteForContainer } from "./style";


export const InviteOptions = () => {

  const [inviteFor, setInviteFor] = useState<number>();

  const addInviteFor = (id: number) => setInviteFor(id);


    return (
        <Container>
         <InviteForContainer> 
        <section className="banner-three">
          <div className="content">
            <img src={Balde} alt="" className="banner" />
          </div>
        </section>

      <section className="invite">
        <img src={Sun} alt="" className="sun" />

        <div className="content">
          {/* <img src={WantInvite} alt="" /> */}

          <div className="invite_options_text_blue">
            <h2>Conta pra gente:</h2>
            <h2>qual o convite  do rolê?</h2>
          </div>

          <div className="invite_options_text_black">
            <h2>Escolha uma das</h2>
            <h2>alternativas abaixo.</h2>
          </div>

          <div className="option-check">
            {tagOptions.map(({ option, tagClass, id }) => (
              <button
                className={`button ${tagClass} ${
                  inviteFor === id ? "selected" : ""
                }`}
                key={option}
                onClick={() => addInviteFor(id)}
              >
                {option}{" "}
              </button>
            ))}
          </div>
        </div>
      </section>

      </InviteForContainer>
      </Container>
    );
  };