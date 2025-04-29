import React from "react";
import * as Styled from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import FormInput from "../../components/formInput";

interface ILoginFormValues {
  email: string;
  password: string;
}

const loginFormSchema = z.object({
  email: z.string().email("E-mail inválido").trim(),
  password: z.string().nonempty("Campo obrigatório"),
});

type ILoginFormField = z.infer<typeof loginFormSchema>;

const LoginAdmin: React.FC = () => {
  const navigate = useNavigate();

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
      //   const response = await signIn(data.email, data.password);
      //   const decodedToken = jwtDecode<{
      //     email: string;
      //     user_oid: string;
      //     phone: string;
      //     exp: number;
      //   }>(response.token);
      //   updateUser({
      //     email: decodedToken.email,
      //     userOid: decodedToken.user_oid,
      //     phone: decodedToken.phone,
      //   });
      //   navigate("/gerar-musica");
    } catch (err) {
      const error = err as AxiosError<{ error: string }>;
      console.log(error);
    }
  };
  return (
    <Styled.Container>
      <Styled.FormContainer>
        <Styled.Title>ÁREA ADMINISTRATIVA</Styled.Title>

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
    </Styled.Container>
  );
};

export default LoginAdmin;
