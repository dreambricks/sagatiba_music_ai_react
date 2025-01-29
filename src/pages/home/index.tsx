import { Container } from "./styles";
import { Sagalovers } from "./components/destination";
import { WeekDay } from "./components/weekday/indedx";
import { Phone } from "./components/phone";
import { Stickers } from "./components/stickers";
import { Banner } from "./components/banner";
import { InviteOptions } from "./components/invite_options";

export const Home = () => {
  return (
    <Container>

      <Banner />

      <Sagalovers />

      <InviteOptions />

      <WeekDay />

      {/* <SendMessage /> */}

      {/* <GenerateMusic /> */}

      <Phone />

      <Stickers />
    </Container>
  );
};
