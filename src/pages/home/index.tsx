import { Container } from "./styles";
import { WeekDaySection } from "./components/weekdaySection";
// import { Phone } from "./components/phone";
import { InviteOptionsSection } from "./components/inviteOptionsSection";
import { SendMessageSection } from "./components/sendMessageSection";
import { useRef, useState } from "react";
import { generate, generateMusicLyric } from "../../service";
import { toast } from "react-toastify";
import {
  saveLyrics,
  saveLyricsId,
  savePhone,
  savePhoneToCookie,
  saveTaskId,
} from "../../storage";
import { useNavigate } from "react-router";
import { useSession } from "../../context/sessionContext";
import GuestNameSection, {
  IGuestNameInputData,
} from "./components/guestNameSection";
import MainSection from "./components/mainSection";
import { AxiosError } from "axios";
// import { Stickers } from "./components/stickers";

export const Home = () => {
  const navigate = useNavigate();
  const { user } = useSession();

  const [loadingLyrics, setLoadingLyrics] = useState(false);
  const [guestNameInputData, setGuestNameInputData] =
    useState<IGuestNameInputData>({
      value: "",
      errorMessage: "",
    });
  const [inviteFor, setInviteFor] = useState("");
  const [day, setDay] = useState("");
  const [message, setMessage] = useState("");

  // const ig = useRef("");
  // const invite = useRef("");
  // const day = useRef("");
  // const message = useRef("");
  const phone = useRef("");

  const guestNameSectionRef = useRef<HTMLDivElement | null>(null);
  // const sectionSagalovers = useRef<HTMLDivElement | null>(null);
  const inviteOptionsSectionRef = useRef<HTMLDivElement | null>(null);
  const sectionWeekDay = useRef<HTMLDivElement | null>(null);
  const sectionSendMessage = useRef<HTMLDivElement | null>(null);
  // const sectionGenerateMusic = useRef<HTMLDivElement | null>(null);
  // const sectionPhone = useRef<HTMLDivElement | null>(null);

  // const changeIg = (value: string) => (ig.current = value);
  // const onInvite = (value: string) => (invite.current = value);
  // const onWeekdays = (value: string) => (day.current = value);
  // const onAddMessage = (value: string) => (message.current = value);
  const addPhone = (value: string) => (phone.current = value);

  const scrollToSection = (
    targetRef: React.MutableRefObject<HTMLElement | null>
  ) => {
    if (!targetRef.current) return;
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleChangeGuestName = (value: string) => {
    let errorMessage = "";

    if (!value) {
      errorMessage = "Informe o nome do convidado";
    }

    setGuestNameInputData({
      value,
      errorMessage,
    });
  };

  const validateForm = () => {
    // const fields = [
    //   // { ref: ig, name: "Usuário" },
    //   // { ref: invite, name: "Convite" },
    //   // { ref: day, name: "Dia" },
    //   // { ref: message, name: "Mensagem" },
    // ];

    // for (const field of fields) {
    //   if (!field.ref.current || field.ref.current.trim() === "") {
    //     toast.error(`O campo ${field.name} é obrigatório!`);
    //     return false;
    //   }
    // }

    return true;
  };

  const formatPhone = (phone: string) => {
    return phone.replace(/[\s-]/g, "");
  };

  const generateMusic = async () => {
    try {
      setLoadingLyrics(true);

      if (!validateForm()) {
        setLoadingLyrics(false);
        return;
      }

      const form = new FormData();
      form.append("destination", guestNameInputData.value);
      form.append("invite_options", inviteFor);
      form.append("weekdays", day);
      form.append("message", message);
      const formattedPhone = formatPhone(phone.current);
      form.append("phone", formattedPhone);
      form.append("user_oid", user?.userOid ?? "");
      addPhone(user?.phone ?? "11999999999");

      const response = await generateMusicLyric(form);

      savePhone(phone.current);
      savePhoneToCookie(phone.current);
      saveLyrics(response.lyrics);
      saveLyricsId(response.lyrics_oid);

      await generateId();
      window.scrollTo(0, 0);
      navigate("/letras");
    } catch (err) {
      const error = err as AxiosError<{ error: string }>;
      console.log(error);

      switch (error.status) {
        case 403: {
          toast.error(error.response?.data.error);
          return;
        }
        case 429: {
          toast.error(
            "Você atingiu o limite de geração de músicas. Tente novamente mais tarde!"
          );
          return;
        }
        default: {
          toast.error("Erro inesperado. Tente novamente mais tarde!");
        }
      }
    } finally {
      setLoadingLyrics(false);
    }
  };

  const generateId = async () => {
    try {
      const response = await generate();
      console.log(response);

      if (response.status === "Sua tarefa foi enfileirada") {
        saveTaskId(response.task_id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const scrollToSection = (
  //   sectionRef: React.RefObject<HTMLDivElement>,
  //   offset: number = 0,
  //   duration: number = 1000
  // ) => {
  //   if (sectionRef.current) {
  //     const startPosition = window.scrollY;

  //     const element = sectionRef.current;
  //     const elementTop = element.getBoundingClientRect().top + window.scrollY;
  //     const elementHeight = element.offsetHeight;
  //     const viewportHeight = window.innerHeight;

  //     // Centraliza o elemento no meio da tela
  //     const targetPosition =
  //       elementTop - viewportHeight / 2 + elementHeight / 2 + offset;

  //     const distance = targetPosition - startPosition;
  //     const startTime = performance.now();

  //     const easeInOutQuad = (t: number) => {
  //       return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  //     };

  //     const scrollAnimation = (currentTime: number) => {
  //       const timeElapsed = currentTime - startTime;
  //       const progress = Math.min(timeElapsed / duration, 1);
  //       const ease = easeInOutQuad(progress);
  //       const scrollStep = startPosition + distance * ease;
  //       window.scrollTo(0, scrollStep);

  //       if (progress < 1) {
  //         requestAnimationFrame(scrollAnimation);
  //       }
  //     };

  //     requestAnimationFrame(scrollAnimation);
  //   }
  // };

  if (!user) {
    return <MainSection />;
  }

  return (
    <Container>
      {/* <Banner
        sectionId="banner"
        ref={sectionBanner}
        onCreateMusic={() => {
          if (sectionSagalovers.current) scrollToSection(sectionSagalovers);
        }}
      /> */}

      {/* <Sagalovers
        changeIg={changeIg}
        ref={sectionSagalovers}
        onFill={() => {
          if (inviteOptions.current) scrollToSection(inviteOptions, 0);
        }}
      /> */}

      <MainSection
        onGenerateMusic={() => {
          scrollToSection(guestNameSectionRef);
        }}
      />

      <GuestNameSection
        ref={guestNameSectionRef}
        guestNameInputData={guestNameInputData}
        onChangeGuestName={handleChangeGuestName}
      />

      <InviteOptionsSection
        ref={inviteOptionsSectionRef}
        value={inviteFor}
        onInviteSelected={setInviteFor}
        handleNextPress={() => {
          scrollToSection(sectionWeekDay);
        }}
      />

      <WeekDaySection
        ref={sectionWeekDay}
        selectedDay={day}
        onDaySelected={setDay}
        onNextPress={() => {
          scrollToSection(sectionSendMessage);
        }}
      />

      <SendMessageSection
        ref={sectionSendMessage}
        value={message}
        onMessageChange={setMessage}
        onGenerateMusic={() => {}}
      />

      {/* <Phone
        ref={sectionPhone}
        addPhone={addPhone}
        loading={loadingLyrics}
        onFill={() => {
          if (sectionGenerateMusic.current)
            scrollToSection(sectionGenerateMusic, 0);
        }}
      /> */}

      {/* <GenerateMusic
        ref={sectionGenerateMusic}
        loading={loadingLyrics}
        generateMusic={generateMusic}
        onFill={() => {
          scrollToSection(sectionPhone);
        }}
      /> */}

      {/* <Stickers /> */}
    </Container>
  );
};
