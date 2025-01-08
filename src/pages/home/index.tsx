import { Container } from "./styles";
import BannerOne from "../../assets/banner-one.png";
import Invite from "../../assets/invite.png";
import BannerTwo from "../../assets/banner-two.png";
import Sagalover from "../../assets/nome_do_sagalover.png";
import Balde from "../../assets/balde_background.png";

import WantInvite from "../../assets/quero_convidar.png";

import Sun from "../../assets/sol_lua.png";
import SunMountain from "../../assets/sol-montanha.png";
import GoingToDrink from "../../assets/vai_beber_qual_dia.png";
import Lemon from "../../assets/sagatiba_image_components/LIMAO.png";
import YellowBk from "../../assets/yellow-bk.png";
import MusicBackground from "../../assets/gerar_musica_background.png";
import MusicIcon from "../../assets/music-icon.png";

import { tagOptions, weekDays } from "./helper";
import { WeekBtn } from "./components/WeekBtn";

export const Home = () => {
  return (
    <Container>
      <main>
        <div className="content">
          <img src={BannerOne} alt="banner" className="banner" />

          <img src={Invite} alt="banner" className="invite" />
        </div>
      </main>

      <section className="banner-two">
        <div className="content">
          <img src={BannerTwo} alt="" className="banner" />

          <div className="sagalover">
            <img src={Sagalover} alt="" />

            <input type="text" name="username" placeholder="@sagatiba" />
          </div>
        </div>
      </section>

      <section className="banner-three">
        <div className="content">
          <img src={Balde} alt="" className="banner" />
        </div>
      </section>

      <section className="invite">
        <img src={Sun} alt="" className="sun" />

        <div className="content">
          <img src={WantInvite} alt="" />

          <div className="option-check">
            {tagOptions.map(({ option, tagClass }) => (
              <button className={`button ${tagClass}`} key={option}>
                {option}{" "}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="week-days">
        <img src={SunMountain} alt="" />

        <div className="content">
          <div className="drink">
            <img src={GoingToDrink} alt="" />

            <div className="select-days">
              {weekDays.map((week) => (
                <WeekBtn day={week.day} short={week.short} key={week.day} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="send-message">
        <img src={YellowBk} alt="" className="background" />
        <img src={Lemon} alt="" className="lemon" />

        <div className="content">
          <h1>MANDE SEU</h1>
          <h2>RECADO AQUI :)</h2>

          <textarea name="message" id=""></textarea>

          <button>ENVIAR</button>
        </div>
      </section>

      <section className="generate-music">
        <img src={MusicBackground} alt="" />

        <div className="content">
          <button>
            GERAR MÚSICA
            <img src={MusicIcon} alt="" />
          </button>
        </div>
      </section>
    </Container>
  );
};
