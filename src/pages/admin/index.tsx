import React, { useState } from "react";
import * as Styled from "./styles";
import { Input } from "../components/formInput/styles";
import { applyCPFMask } from "../../utils/MaskUtils";
import { validateCpfDigits } from "../../utils/ValidatorUtils";

const Admin: React.FC = () => {
  const [cpf, setCpf] = useState("");
  const [cpfError, setCpfError] = useState("");
  const [lyrics, setLyrics] = useState("");

  const handleChangeCpf = (value: string) => {
    const maskedValue = applyCPFMask(value);
    setCpf(maskedValue);
    setCpfError("");
  };

  const handleSearchUser = () => {
    if (!validateCpfDigits(cpf)) {
      setCpfError("Informe um CPF válido");
      return;
    }
  };

  const handleSearchMusic = () => {
    if (!lyrics) return;
  };

  return (
    <Styled.Container>
      <Styled.Title>ÁREA ADMINISTRATIVA</Styled.Title>

      <Styled.Card>
        <h2>Buscar Usuário</h2>

        <Styled.Label>CPF</Styled.Label>

        <Input
          placeholder="Digite o CPF (somente números)"
          value={cpf}
          onChange={(e) => handleChangeCpf(e.target.value)}
          maxLength={14}
        />

        {cpfError && <Styled.ErrorMessage>{cpfError}</Styled.ErrorMessage>}

        <Styled.Button $color="blue" onClick={handleSearchUser}>
          Buscar Usuário
        </Styled.Button>
      </Styled.Card>

      <Styled.Card>
        <h2>Buscar Música</h2>

        <Styled.Label>Trecho da Letra</Styled.Label>

        <Input
          placeholder="Digite um trecho da música"
          value={lyrics}
          onChange={(e) => setLyrics(e.target.value)}
        />

        <Styled.Button $color="green" onClick={handleSearchMusic}>
          Buscar Música
        </Styled.Button>
      </Styled.Card>
    </Styled.Container>
  );
};

export default Admin;
