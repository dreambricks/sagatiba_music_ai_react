import React from "react";
import * as Styled from "./styles";
import FormInput from "../components/formInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "../../service";
import { toast } from "react-toastify";
import { saveAccessTokenToCookie } from "../../storage";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
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

      navigate("/gerar-musica");
    } catch {
      toast.error("Credencias incorretas, tente novamente");
    }
  };

  return (
    <Styled.Container>
      <Styled.SunImage />

      <Styled.Title>Faça seu login</Styled.Title>

      <Styled.FormContainer>
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

          <Styled.FormButton title="ENTRAR" type="submit" />
        </form>
      </Styled.FormContainer>
    </Styled.Container>
  );
};

export default Login;
