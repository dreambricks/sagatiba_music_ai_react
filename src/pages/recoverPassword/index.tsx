import React from "react";
import * as Styled from "./styles";
import FormInput from "../components/formInput";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface IRecoverPasswordFormValues {
  email: string;
}

const recoverPasswordFormSchema = z.object({
  email: z.string().email("E-mail inválido").trim(),
});

const RecoverPasswordScreen: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRecoverPasswordFormValues>({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(recoverPasswordFormSchema),
  });

  const onSubmit: SubmitHandler<IRecoverPasswordFormValues> = async (data) => {
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
            {...register("email")}
            label="e-mail"
            placeholder="e-mail utilizado no cadastro"
            errorMessage={errors.email?.message}
            type="email"
          />

          <Styled.FormButton type="submit" title="RECUPERAR SENHA" />
        </form>
      </Styled.FormContainer>
    </Styled.Container>
  );
};

export default RecoverPasswordScreen;
