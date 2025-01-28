import { Container } from "./styles";

import { Banner } from "./components/banner";
import { InviteOptions } from "./components/invite_options";
import { SendMessage } from "./components/sendMessage";
import { GenerateMusic } from "./components/generateMusic";
import { Sagalovers } from "./components/destination";
import { WeekDay } from "./components/weekday/indedx";
import { Phone } from "./components/phone";
import { Stickers } from "./components/stickers";

export const Home = () => {
  return (
    <Container>
      {/* <main>
        <div className="content">
          <img src={BannerOne} alt="banner" className="banner" />

          <img src={Invite} alt="banner" className="invite" />
        </div>
      </main> */}
      <Banner />

      <Sagalovers />

      <InviteOptions />

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

      <WeekDay />

      <SendMessage />

      <Phone />

      {/* <section className="generate-music">
        <img src={MusicBackground} alt="" />

        <div className="content">
          <button>
            GERAR MÚSICA
            <img src={MusicIcon} alt="" />
          </button>
        </div>
      </section> */}
      <GenerateMusic />

      <Stickers />
    </Container>
  );
};
