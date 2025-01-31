import { Container } from "./styles";
import { Sagalovers } from "./components/destination";
import { WeekDay } from "./components/weekday/indedx";
import { Phone } from "./components/phone";
import { Stickers } from "./components/stickers";
import { Banner } from "./components/banner";
import { InviteOptions } from "./components/invite_options";
import { SendMessage } from "./components/sendMessage";
import { GenerateMusic } from "./components/generateMusic";
import { useRef, useState } from "react";
import { Lyrics } from "./components/lyrics";

export const Home = () => {
  const ig = useRef("");
  const acceptTerm = useRef(false);
  const acceptPolicy = useRef(false);
  const invite = useRef("");
  const day = useRef("");
  const message = useRef("");

  return (
    <Container>
      <Banner />

      <Sagalovers />

      <InviteOptions />

      <WeekDay />

      <SendMessage />

      <GenerateMusic />

      <Phone />

      <Stickers />

      <Lyrics />
    </Container>
  );
};
