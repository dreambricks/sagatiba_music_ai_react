import React from "react";
import * as Styled from "./styles";
import FormInput from "../components/formInput";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPassword } from "../../service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

interface IRecoverPasswordFormValues {
  email: string;
}

const recoverPasswordFormSchema = z.object({
  email: z.string().email("E-mail inválido").trim(),
});

const RecoverPasswordScreen: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IRecoverPasswordFormValues>({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(recoverPasswordFormSchema),
  });

  const onSubmit: SubmitHandler<IRecoverPasswordFormValues> = async (data) => {
    try {
      await forgotPassword(data.email);
      toast.success("E-mail de recuperação de senha enviado com sucesso!");
      navigate("/login");
    } catch {
      toast.error("Falha ao recuperar senha, tente novamente!");
    }
  };

  return (
    <Styled.Container>
      <Styled.SunImage />

      <Styled.Title>Recuperação de senha</Styled.Title>

      <Styled.FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            {...register("email")}
            label="e-mail"
            placeholder="e-mail utilizado no cadastro"
            errorMessage={errors.email?.message}
            type="email"
          />

          <Styled.FormButton
            type="submit"
            title="RECUPERAR SENHA"
            loading={isSubmitting}
          />
        </form>
      </Styled.FormContainer>
    </Styled.Container>
  );
};

export default RecoverPasswordScreen;
