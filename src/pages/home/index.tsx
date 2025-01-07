import { Container } from "./styles";
import BannerOne from "../../assets/banner-one.png";
import Invite from "../../assets/invite.png";
import BannerTwo from "../../assets/banner-two.png";
import Sagalover from "../../assets/nome_do_sagalover.png";
import Balde from "../../assets/balde_background.png";

import WantInvite from "../../assets/quero_convidar.png";

import Sun from "../../assets/sol_lua.png";
import { tagOptions } from "./helper";

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
    </Container>
  );
};
