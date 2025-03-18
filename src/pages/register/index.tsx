import React from "react";
import * as Styled from "./styles";
import FormInput from "../components/formInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormCheckbox from "./components/formCheckbox";

interface IRegisterFormValues {
  email: string;
  password: string;
}

// Expressão regular para validar CPF (somente números)
const cpfRegex = /^\d{11}$/;

// Expressão regular para validar número de WhatsApp (somente números, 10 ou 11 dígitos)
const whatsappRegex = /^\d{11}$/;

const registerFormSchema = z
  .object({
    fullName: z
      .string()
      .min(5, "O nome completo deve ter pelo menos 5 caracteres")
      .max(100, "O nome completo é muito longo"),

    cpf: z
      .string()
      .regex(cpfRegex, "CPF inválido. Insira apenas números (11 dígitos)"),

    birthDate: z.string().refine((date) => {
      const birthDate = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      return age >= 18;
    }, "Você deve ter pelo menos 18 anos"),

    email: z.string().email("E-mail inválido"),

    whatsapp: z
      .string()
      .regex(
        whatsappRegex,
        "Número inválido. Insira apenas números (11 dígitos)"
      ),

    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),

    confirmPassword: z.string().nonempty("Confirme sua senha"),

    acceptTerms: z.boolean().refine((value) => value === true, {
      message: "Você precisa aceitar os termos para continuar",
    }),

    acceptPolicy: z.boolean().refine((value) => value === true, {
      message: "Você precisa a política de privacidade para continuar",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type IRegisterFormField = z.infer<typeof registerFormSchema>;

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormField>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IRegisterFormValues> = async (data) => {
    try {
      console.log(data);
      // await signIn(data.email, data.password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styled.Container>
      <Styled.SunImageContainer />

      <Styled.Title>
        Bora criar a trilha sonora do seu rolê? Faça seu cadastro
      </Styled.Title>

      <Styled.FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            {...register("fullName")}
            label="Nome completo:"
            placeholder="seu nome"
            errorMessage={errors.fullName?.message}
            style={{ marginBottom: "16px" }}
          />

          <FormInput
            {...register("cpf")}
            label="CPF:"
            placeholder="seu CPF"
            errorMessage={errors.cpf?.message}
            maxLength={11}
            style={{ marginBottom: "16px" }}
          />

          <FormInput
            {...register("birthDate")}
            label="Data de nascimento:"
            placeholder="sua data de nascimento"
            type="date"
            errorMessage={errors.birthDate?.message}
            style={{ marginBottom: "16px" }}
          />

          <FormInput
            {...register("email")}
            label="E-mail:"
            placeholder="seu melhor e-mail"
            type="email"
            errorMessage={errors.email?.message}
            style={{ marginBottom: "16px" }}
          />

          <FormInput
            {...register("whatsapp")}
            label="WhatsApp:"
            placeholder="seu número de celular"
            errorMessage={errors.whatsapp?.message}
            maxLength={11}
            style={{ marginBottom: "16px" }}
          />

          <FormInput
            {...register("password")}
            label="Senha:"
            placeholder="a senha que vc deseja usar"
            type="password"
            errorMessage={errors.password?.message}
            style={{ marginBottom: "16px" }}
          />

          <FormInput
            {...register("confirmPassword")}
            label="Confirmar senha:"
            placeholder="Confirme a senha"
            type="password"
            errorMessage={errors.confirmPassword?.message}
            style={{ marginBottom: "16px" }}
          />

          <FormCheckbox
            {...register("acceptTerms")}
            text="EU ACEITO OS TERMOS DE USO E RESPONSABILIDADE DE COMPARTILHAMENTO"
            errorMessage={errors.acceptTerms?.message}
            style={{ marginBottom: "8px", marginLeft: "18%" }}
          />

          <FormCheckbox
            {...register("acceptPolicy")}
            text="ESTOU DE ACORDO COM A POLÍTICA DE PRIVACIDADE"
            errorMessage={errors.acceptPolicy?.message}
            style={{ marginLeft: "18%" }}
          />

          <Styled.FormButton title="ENTRAR" type="submit" />
        </form>
      </Styled.FormContainer>
    </Styled.Container>
  );
};

export default Register;
