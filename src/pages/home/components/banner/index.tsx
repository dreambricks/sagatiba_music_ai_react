import BannerOne from "../../../../assets/banner-one.png";
import Invite from "../../../../assets/invite.png";

export const Banner = () => {
  return (
    <main>
    <div className="content">
      <img src={BannerOne} alt="banner" className="banner" />

      <img src={Invite} alt="banner" className="invite" />
    </div>
  </main>
  );
};