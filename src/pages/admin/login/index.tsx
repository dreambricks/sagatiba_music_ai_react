import React from "react";
import * as Styled from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import FormInput from "../../components/formInput";
import { loginAdmin } from "../../../service/adminService";
import { useSession } from "../../../context/sessionContext";
import { toast } from "react-toastify";
import { updateAdminSession } from "../../../storage";

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
  const { setIsAdmin } = useSession();

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
      await loginAdmin(data.email, data.password);
      updateAdminSession(true);
      setIsAdmin(true);
      navigate("/admin");
    } catch (err) {
      const error = err as AxiosError<{ error: string }>;
      console.log(error);
      toast.error("Login inválido, tente novamente");
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
            placeholder="Insira o e-mail"
            errorMessage={errors.email?.message}
            type="email"
            style={{ marginBottom: "16px" }}
          />

          <FormInput
            {...register("password")}
            label="Senha:"
            placeholder="Insira a senha"
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
