import React from "react";
import * as Styled from "./styles";
import FormInput from "../components/formInput";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface IResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}

const resetPasswordFormSchema = z
  .object({
    password: z.string().nonempty("Campo obrigatório"),
    confirmPassword: z.string().nonempty("Campo obrigatório"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

const ResetPasswordScreen: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetPasswordFormValues>({
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(resetPasswordFormSchema),
  });

  const onSubmit: SubmitHandler<IResetPasswordFormValues> = async (data) => {
    try {
      console.log(data);
      // TODO - Implementar lógica
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styled.Container>
      <Styled.SunImage />

      <Styled.Title>Recuperação de senha</Styled.Title>

      <Styled.FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            {...register("password")}
            label="Nova senha"
            placeholder="sua nova senha"
            errorMessage={errors.password?.message}
            type="password"
            style={{ marginBottom: 16 }}
          />

          <FormInput
            {...register("confirmPassword")}
            label="Confirmar senha"
            placeholder="Digite novamente sua nova senha"
            errorMessage={errors.confirmPassword?.message}
            type="password"
          />

          <Styled.FormButton type="submit" title="REDEFINIR SENHA" />
        </form>
      </Styled.FormContainer>
    </Styled.Container>
  );
};

export default ResetPasswordScreen;
