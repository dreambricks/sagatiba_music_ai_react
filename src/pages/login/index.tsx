import React, { useState } from "react";
import * as Styled from "./styles";
import FormInput from "../components/formInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { resetSendEmail, signIn } from "../../service";
import { saveAccessTokenToCookie } from "../../storage";
import { useNavigate } from "react-router";
import { useSession } from "../../context/sessionContext";
import { jwtDecode } from "jwt-decode";
import { AxiosError } from "axios";
import ErrorModal from "../components/errorModal";
import { toast } from "react-toastify";
import { Container } from "../home/styles";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

interface ILoginFormValues {
  email: string;
  password: string;
}

const loginFormSchema = z.object({
  email: z.string().email("E-mail inválido").trim(),
  password: z.string().nonempty("Campo obrigatório"),
});

type ILoginFormField = z.infer<typeof loginFormSchema>;

const Login: React.FC = () => {
  const { updateUser } = useSession();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalAction, setModalAction] = useState<(() => void) | undefined>(
    undefined
  );

  const closeModal = () => {
    setModalOpen(false);
    setModalAction(undefined);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginFormField>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ILoginFormValues> = async (data) => {
    try {
      const response = await signIn(data.email, data.password);

      saveAccessTokenToCookie(response.token);

      const decodedToken = jwtDecode<{
        email: string;
        user_oid: string;
        phone: string;
        exp: number;
      }>(response.token);

      updateUser({
        email: decodedToken.email,
        userOid: decodedToken.user_oid,
        phone: decodedToken.phone,
      });
      navigate("/gerar-musica");
    } catch (err) {
      const error = err as AxiosError<{ error: string }>;

      if (error.status === 403) {
        const errorMessage = error.response?.data.error || "Erro inesperado";

        setModalMessage(
          `${errorMessage}. Você pode reenviar o link de validação para o seu e-mail.`
        );
        setModalOpen(true);
        setModalAction(() => async () => {
          try {
            closeModal();
            await resetSendEmail(data.email);

            toast.success("Link enviado com sucesso");
          } catch (error) {
            console.error("Erro ao enviar link:", error);
            toast.error("Erro ao enviar link");
          }
        });

        return;
      }

      setModalMessage("Credenciais incorretas, tente novamente.");
      setModalOpen(true);
    }
  };
  return (
    <Container>
      <Navbar />
      <Styled.Container>
        <Styled.FormContainer>
          <Styled.Title>Faça seu login</Styled.Title>

          <Styled.RecoverPassword />

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              {...register("email")}
              label="E-mail:"
              placeholder="e-mail que foi utilizado no cadastro"
              errorMessage={errors.email?.message}
              type="email"
              style={{ marginBottom: "16px" }}
            />

            <FormInput
              {...register("password")}
              label="Senha:"
              placeholder="sua senha"
              type="password"
              errorMessage={errors.password?.message}
            />

            <Styled.FormButton
              title="ENTRAR"
              type="submit"
              loading={isSubmitting}
            />
          </form>
        </Styled.FormContainer>

        <ErrorModal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          message={modalMessage}
          onActionClick={modalAction}
          actionLabel="Reenviar link"
        />
      </Styled.Container>
      <Footer />
    </Container>
  );
};

export default Login;
