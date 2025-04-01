import { Container } from "./styles";
import { WeekDaySection } from "./components/weekdaySection";
import { InviteOptionsSection } from "./components/inviteOptionsSection";
import { SendMessageSection } from "./components/sendMessageSection";
import { useRef, useState } from "react";
import { generate, generateMusicLyric } from "../../service";
import { toast } from "react-toastify";
import { saveLyrics, saveLyricsId, saveTaskId } from "../../storage";
import { useNavigate } from "react-router";
import { useSession } from "../../context/sessionContext";
import GuestNameSection, {
  IGuestNameInputData,
} from "./components/guestNameSection";
import MainSection from "./components/mainSection";
import { AxiosError } from "axios";
import { z } from "zod";

const nonEmptyStringSchema = z.string().nonempty();

const musicFormSchema = z.object({
  guestName: nonEmptyStringSchema,
  inviteFor: nonEmptyStringSchema,
  day: nonEmptyStringSchema,
  message: nonEmptyStringSchema,
});

type IMusicFormSchema = z.infer<typeof musicFormSchema>;

const errorFieldNames = {
  guestName: "Usuário",
  inviteFor: "Convite",
  day: "Dia",
  message: "Mensagem",
} as const;

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

  const guestNameSectionRef = useRef<HTMLDivElement | null>(null);
  const inviteOptionsSectionRef = useRef<HTMLDivElement | null>(null);
  const sectionWeekDayRef = useRef<HTMLDivElement | null>(null);
  const sectionSendMessageRef = useRef<HTMLDivElement | null>(null);

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
    const { error, success } = musicFormSchema.safeParse({
      guestName: guestNameInputData.value,
      inviteFor: inviteFor,
      day: day,
      message: message,
    });

    if (error) {
      const fieldKey = error.errors[0].path[0] as keyof IMusicFormSchema;
      toast.error(`O campo ${errorFieldNames[fieldKey]} é obrigatório`);
    }

    return success;
  };

  const generateMusic = async () => {
    if (!validateForm()) return;

    try {
      setLoadingLyrics(true);

      const form = new FormData();
      form.append("destination", guestNameInputData.value);
      form.append("invite_options", inviteFor);
      form.append("weekdays", day);
      form.append("message", message);
      form.append("phone", user?.phone ?? "11999999999");
      form.append("user_oid", user?.userOid ?? "");

      const response = await generateMusicLyric(form);

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
      const response = await generate(user?.phone ?? "11999999999");
      console.log(response);

      if (response.status === "Sua tarefa foi enfileirada") {
        saveTaskId(response.task_id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const scrollToSection = (
    sectionRef: React.RefObject<HTMLDivElement>,
    offset: number = 0,
    duration: number = 1000
  ) => {
    if (sectionRef.current) {
      const startPosition = window.scrollY;

      const element = sectionRef.current;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const elementHeight = element.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Centraliza o elemento no meio da tela
      const targetPosition =
        elementTop - viewportHeight / 2 + elementHeight / 2 + offset;

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

  if (!user) {
    return <MainSection />;
  }

  return (
    <Container>
      {/* <Navbar /> */}

      <MainSection
        onGenerateMusic={() => {
          scrollToSection(guestNameSectionRef);
        }}
      />

      <GuestNameSection
        ref={guestNameSectionRef}
        guestNameInputData={guestNameInputData}
        onChangeGuestName={handleChangeGuestName}
        onNextClick={() => scrollToSection(inviteOptionsSectionRef)}
      />

      <InviteOptionsSection
        ref={inviteOptionsSectionRef}
        value={inviteFor}
        onInviteSelected={setInviteFor}
        handleNextPress={() => {
          scrollToSection(sectionWeekDayRef);
        }}
      />

      <WeekDaySection
        ref={sectionWeekDayRef}
        selectedDay={day}
        onDaySelected={setDay}
        onNextPress={() => {
          scrollToSection(sectionSendMessageRef);
        }}
      />

      <SendMessageSection
        ref={sectionSendMessageRef}
        value={message}
        isLoading={loadingLyrics}
        onMessageChange={setMessage}
        onGenerateMusic={generateMusic}
      />

      {/* <Stickers /> */}
    </Container>
  );
};
