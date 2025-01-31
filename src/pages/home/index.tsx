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
import { generateMusicLyric } from "../../service";
import { toast } from "react-toastify";
import { saveLyrics } from "../../storage";
import { useNavigate } from "react-router";

export const Home = () => {
  const [loadingLyrics, setLoadingLyrics] = useState(false);

  const navigate = useNavigate();

  const ig = useRef("");
  const acceptTerm = useRef<boolean>(false);
  const acceptPolicy = useRef<boolean>(false);
  const invite = useRef("");
  const day = useRef("");
  const message = useRef("");
  const phone = useRef("");

  const changeIg = (value: string) => (ig.current = value);
  const onAacceptTerm = (value: boolean) => (acceptTerm.current = value);
  const onAcceptPolicy = (value: boolean) => (acceptPolicy.current = value);
  const onInvite = (value: string) => (invite.current = value);
  const onWeekdays = (value: string) => (day.current = value);
  const onAddMessage = (value: string) => (message.current = value);
  const addPhone = (value: string) => (phone.current = value);

  const validateForm = () => {
    if (
      !ig.current.trim() ||
      !invite.current.trim() ||
      !day.current.trim() ||
      !message.current.trim() ||
      !phone.current.trim() ||
      !acceptTerm.current ||
      !acceptPolicy.current
    ) {
      throw new Error("Verifique se preencheu os campos corretamente");
    }
  };

  const formatPhone = (phone: string) => {
    return phone.replace(/[\s-]/g, "");
  };

  const generateMusic = async () => {
    try {
      setLoadingLyrics(true);
      const form = new FormData();

      form.append("destination", ig.current);
      form.append("invite_options", invite.current);
      form.append("weekdays", day.current);
      form.append("message", message.current);
      const formattedPhone = formatPhone(phone.current);
      form.append("phone", formattedPhone);
      validateForm();

      const response = await generateMusicLyric(form);

      saveLyrics(response.lyrics);

      navigate("/letras");
    } catch (error: any) {
      toast.error(error.message);

      console.log({ error });
    } finally {
      setLoadingLyrics(false);
    }
  };

  return (
    <Container>
      <Banner />

      <Sagalovers
        changeIg={changeIg}
        onAacceptTerm={onAacceptTerm}
        onAcceptPolicy={onAcceptPolicy}
      />

      <InviteOptions onInvite={onInvite} />

      <WeekDay onWeekdays={onWeekdays} />

      <SendMessage onAddMessage={onAddMessage} />

      <GenerateMusic generateMusic={generateMusic} />

      <Phone addPhone={addPhone} loading={loadingLyrics} />

      <Stickers />

      {/* <Lyrics /> */}
    </Container>
  );
};
