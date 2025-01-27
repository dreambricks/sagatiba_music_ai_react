import { Container } from "./styles";
import BannerTwo from "../../assets/banner-two.png";
import Sagalover from "../../assets/nome_do_sagalover.png";
import SunMountain from "../../assets/sol-montanha.png";
import GoingToDrink from "../../assets/vai_beber_qual_dia.png";
import { weekDays } from "./helper";
import { WeekBtn } from "./components/WeekBtn";
import { useState } from "react";
import { Banner } from "./components/banner";
import { InviteOptions } from "./components/invite_options";
import { SendMessage } from "./components/sendMessage";
import { GenerateMusic } from "./components/generateMusic";

export const Home = () => {
  // const [inviteFor, setInviteFor] = useState<number>();
  const [weekDaysSelected, setWeekDaysSelected] = useState<string>();

  const addWeekDays = (day: string) => {
    setWeekDaysSelected(day);
  };

  // const addInviteFor = (id: number) => setInviteFor(id);

  return (
    <Container>
      {/* <main>
        <div className="content">
          <img src={BannerOne} alt="banner" className="banner" />

          <img src={Invite} alt="banner" className="invite" />
        </div>
      </main> */}
      <Banner/>

      <section className="banner-two">
        <div className="content">
          <img src={BannerTwo} alt="" className="banner" />

          <div className="sagalover">
            <img src={Sagalover} alt="" />

            <input type="text" name="username" placeholder="@sagatiba" />
          </div>
        </div>
      </section>

      <InviteOptions/>

      <section className="week-days">
        <img src={SunMountain} alt="" />

        <div className="content">
          <div className="drink">
            <img src={GoingToDrink} alt="" />

            <div className="select-days">
              {weekDays.map((week) => (
                <WeekBtn
                  day={week.day}
                  short={week.short}
                  key={week.day}
                  onClick={() => addWeekDays(week.day)}
                  selected={weekDaysSelected === week.day}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="send-message">
        <img src={YellowBk} alt="" className="background" />
        <img src={Lemon} alt="" className="lemon" />

        <div className="content">
          <h1>MANDE SEU</h1>
          <h2>RECADO AQUI :)</h2>

          <textarea name="message" id=""></textarea>

          <button>ENVIAR</button>
        </div>
      </section> */}

      <SendMessage/>

      {/* <section className="generate-music">
        <img src={MusicBackground} alt="" />

        <div className="content">
          <button>
            GERAR MÚSICA
            <img src={MusicIcon} alt="" />
          </button>
        </div>
      </section> */}
      <GenerateMusic/>
    </Container>
  );
};
