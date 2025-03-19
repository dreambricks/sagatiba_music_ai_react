import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import FormInput from "../components/formInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  applyCPFMask,
  applyDateMask,
  applyPhoneMask,
} from "../../utils/MaskUtils";
import { registerUser } from "../../service";
import { useNavigate } from "react-router";
import { useSession } from "../../context/sessionContext";
import { ModalInfo } from "../home/components/destination/Modal";
import { validateCpfDigits } from "../../utils/ValidatorUtils";

// Expressão regular para validar número de WhatsApp
const whatsappRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

const registerFormSchema = z
  .object({
    fullName: z
      .string()
      .min(5, "Informe o nome completo")
      .max(100, "O nome completo é muito longo"),

    cpf: z.string().refine((value) => {
      return validateCpfDigits(value);
    }, "Informe um CPF válido"),

    birthDate: z.string().refine((date) => {
      // Converte a data do formato dd/mm/yyyy para yyyy-mm-dd
      const [day, month, year] = date.split("/");
      const formattedDate = `${year}-${month}-${day}`;

      // Cria um objeto Date com o formato yyyy-mm-dd
      const birthDate = new Date(formattedDate);

      // Verifica se a data é válida
      if (isNaN(birthDate.getTime())) {
        return false; // Data inválida
      }

      // Calcula a idade
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();

      // Ajusta a idade caso o aniversário ainda não tenha ocorrido este ano
      const hasBirthdayOccurred =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
          today.getDate() >= birthDate.getDate());

      return hasBirthdayOccurred ? age >= 18 : age - 1 >= 18;
    }, "Você deve ter pelo menos 18 anos"),

    email: z.string().email("E-mail inválido"),

    whatsapp: z.string().regex(whatsappRegex, "Informe um número válido"),

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

export type IRegisterFormField = z.infer<typeof registerFormSchema>;

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { setAgeVerified } = useSession();

  const [showTerms, setShowTerms] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  const toggleModal = (modal: "policy" | "terms", value: boolean) => {
    if (modal === "policy") {
      setShowPolicy(value);
    } else {
      setShowTerms(value);
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IRegisterFormField>({
    defaultValues: {
      email: "",
      fullName: "",
      cpf: "",
      whatsapp: "",
      birthDate: "",
      password: "",
      confirmPassword: "",
      acceptPolicy: false,
      acceptTerms: false,
    },
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
  });

  const cpfValue = watch("cpf");
  const phoneValue = watch("whatsapp");
  const birthDateValue = watch("birthDate");

  useEffect(() => {
    setValue("cpf", applyCPFMask(cpfValue));
  }, [cpfValue]);

  useEffect(() => {
    setValue("whatsapp", applyPhoneMask(phoneValue));
  }, [phoneValue]);

  useEffect(() => {
    setValue("birthDate", applyDateMask(birthDateValue));
  }, [birthDateValue]);

  const onSubmit: SubmitHandler<IRegisterFormField> = async (data) => {
    try {
      await registerUser(data);

      setAgeVerified(true);

      navigate("/login");
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
        <Styled.RegisteredButton />

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
            maxLength={14}
            style={{ marginBottom: "16px" }}
          />

          <FormInput
            {...register("birthDate")}
            label="Data de nascimento:"
            placeholder="sua data de nascimento"
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
            maxLength={15}
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

          <Styled.CheckBox
            {...register("acceptTerms")}
            text="EU ACEITO OS TERMOS DE USO E RESPONSABILIDADE DE COMPARTILHAMENTO"
            errorMessage={errors.acceptTerms?.message}
            onTextClick={() => toggleModal("terms", true)}
            style={{ marginBottom: "8px" }}
          />

          <Styled.CheckBox
            {...register("acceptPolicy")}
            text="ESTOU DE ACORDO COM A POLÍTICA DE PRIVACIDADE"
            onTextClick={() => toggleModal("policy", true)}
            errorMessage={errors.acceptPolicy?.message}
          />

          <Styled.FormButton
            title="CADASTRAR"
            type="submit"
            loading={isSubmitting}
          />
        </form>
      </Styled.FormContainer>

      {showTerms && (
        <ModalInfo
          isOpen={showTerms}
          onClose={() => toggleModal("terms", false)}
          onAccept={() => {
            setValue("acceptTerms", true, { shouldValidate: true });
            toggleModal("terms", false);
          }}
        />
      )}

      {showPolicy && (
        <ModalInfo
          isOpen={showPolicy}
          onClose={() => toggleModal("policy", false)}
          onAccept={() => {
            setValue("acceptPolicy", true, { shouldValidate: true });
            toggleModal("policy", false);
          }}
        />
      )}
    </Styled.Container>
  );
};

export default Register;
