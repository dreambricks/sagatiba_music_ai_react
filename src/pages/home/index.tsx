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
import { saveLyrics, savePhone, savePhoneToCookie } from "../../storage";
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

  const sectionBanner = useRef<HTMLDivElement | null>(null);
  const sectionSagalovers = useRef<HTMLDivElement | null>(null);
  const inviteOptions = useRef<HTMLDivElement | null>(null);
  const sectionWeekDay = useRef<HTMLDivElement | null>(null);
  const sectionSendMessage = useRef<HTMLDivElement | null>(null);
  const sectionGenerateMusic = useRef<HTMLDivElement | null>(null);
  const sectionPhone = useRef<HTMLDivElement | null>(null);

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

  const validateForm2 = () => {
    const fields = [
      { ref: ig, name: "Usuário" },
      { ref: acceptTerm, name: "Termo de responsabilidade", isCheckbox: true },
      { ref: acceptPolicy, name: "Política de privacidade", isCheckbox: true },
      { ref: invite, name: "Convite" },
      { ref: day, name: "Dia" },
      { ref: message, name: "Mensagem" },
      { ref: phone, name: "Telefone" },
    ];

    for (const field of fields) {
      if (field.isCheckbox) {
        if (!field.ref.current) {
          throw new Error(`Campo obrigatório: ${field.name}`);
        }
      } else {
        if (!field.ref.current?.trim()) {
          throw new Error(`Campo obrigatório: ${field.name}`);
        }
      }
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

      validateForm2();
      validateForm();

      const response = await generateMusicLyric(form);

      savePhone(phone.current);
      savePhoneToCookie(phone.current);

      saveLyrics(response.lyrics);

      navigate("/letras");
    } catch (error: any) {
      if (error.status === 403) {
        toast.error(
          "Aparentemente, sua mensagem contém palavras de baixo calão, conteúdo religioso ou político. Por favor, reformule seu recado."
        );

        return;
      }

      if (error.message) {
        toast.error(error.message);
        return;
      }
    } finally {
      setLoadingLyrics(false);
    }
  };

  // const scrollToSection = (
  //   sectionRef: React.RefObject<HTMLDivElement>,
  //   offset: number = 0
  // ) => {
  //   if (sectionRef.current) {
  //     const top =
  //       sectionRef.current.getBoundingClientRect().top +
  //       window.scrollY +
  //       offset;
  //     window.scrollTo({ top, behavior: "smooth" });
  //   }
  // };

  const scrollToSection = (
    sectionRef: React.RefObject<HTMLDivElement>,
    offset: number = 0,
    duration: number = 1000 // Tempo total em milissegundos
  ) => {
    if (sectionRef.current) {
      const startPosition = window.scrollY;
      const targetPosition =
        sectionRef.current.getBoundingClientRect().top +
        window.scrollY +
        offset;
      const distance = targetPosition - startPosition;
      const startTime = performance.now();

      const easeInOutQuad = (t: number) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };

      const scrollAnimation = (currentTime: number) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutQuad(progress);
        const scrollStep = startPosition + distance * ease;
        window.scrollTo(0, scrollStep);

        if (progress < 1) {
          requestAnimationFrame(scrollAnimation);
        }
      };

      requestAnimationFrame(scrollAnimation);
    }
  };

  return (
    <Container>
      <Banner
        sectionId="banner"
        ref={sectionBanner}
        onButtonClick={() => {
          if (sectionSagalovers.current)
            scrollToSection(sectionSagalovers, 200);
        }}
      />

      <Sagalovers
        changeIg={changeIg}
        onAacceptTerm={onAacceptTerm}
        onAcceptPolicy={onAcceptPolicy}
        ref={sectionSagalovers}
        onFill={() => {
          if (inviteOptions.current) scrollToSection(inviteOptions, 0);
        }}
      />

      <InviteOptions
        ref={inviteOptions}
        onInvite={onInvite}
        onFill={() => {
          if (sectionWeekDay.current) scrollToSection(sectionWeekDay, 0);
        }}
      />

      <WeekDay
        ref={sectionWeekDay}
        onWeekdays={onWeekdays}
        onFill={() => {
          if (sectionSendMessage.current)
            scrollToSection(sectionSendMessage, 0);
        }}
      />

      <SendMessage
        ref={sectionSendMessage}
        onAddMessage={onAddMessage}
        onFill={() => {
          if (sectionPhone.current) scrollToSection(sectionPhone, -150);
        }}
      />

      <GenerateMusic
        ref={sectionGenerateMusic}
        generateMusic={generateMusic}
        onFill={() => {
          if (sectionPhone.current) scrollToSection(sectionPhone, -150);
        }}
      />

      <Phone
        ref={sectionPhone}
        addPhone={addPhone}
        loading={loadingLyrics}
        onFill={() => {
          if (sectionGenerateMusic.current)
            scrollToSection(sectionGenerateMusic, 0);
        }}
      />

      <Stickers />
    </Container>
  );
};
