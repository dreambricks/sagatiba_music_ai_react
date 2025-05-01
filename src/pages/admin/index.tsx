import React, { useState } from "react";
import * as Styled from "./styles";
import { Input } from "../components/formInput/styles";
import { applyCPFMask } from "../../utils/MaskUtils";
import { validateCpfDigits } from "../../utils/ValidatorUtils";
import TableHeaderCell from "./components/tableHeaderCell";
import Table from "./components/table";
import TableRow from "./components/tableRow";
import TableCell from "./components/tableCell";
import Button from "./components/button";
import SearchTypeSelector from "./components/searchTypeSelector";
import Card from "./components/card";
import { fetchMusicByLyrics, fetchUserByCpf } from "../../service/adminService";

type IMusicSearchResponse = {
  id: string;
  email: string;
  lyrics: string;
};

const dummyResults: IMusicSearchResponse[] = [
  {
    id: "1",
    email: "usuario1@email.com",
    lyrics:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies augue sit amet enim mattis pharetra. Etiam tempor arcu urna, nec fermentum purus tempor nec. Nulla dapibus id urna sed efficitur",
  },
  {
    id: "2",
    email: "usuario2@email.com",
    lyrics:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies augue sit amet enim mattis pharetra. Etiam tempor arcu urna, nec fermentum purus tempor nec. Nulla dapibus id urna sed efficitur",
  },
  {
    id: "3",
    email: "usuario3@email.com",
    lyrics:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies augue sit amet enim mattis pharetra. Etiam tempor arcu urna, nec fermentum purus tempor nec. Nulla dapibus id urna sed efficitur",
  },
];

const Admin: React.FC = () => {
  const [cpf, setCpf] = useState("");
  const [cpfError, setCpfError] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [results, setResults] = useState<IMusicSearchResponse[]>([]);
  const [searchType, setSearchType] = useState<"user" | "lyrics">("user");

  const handleChangeCpf = (value: string) => {
    const maskedValue = applyCPFMask(value);
    setCpf(maskedValue);
    setCpfError("");
  };

  const handleSearchUser = async () => {
    if (!validateCpfDigits(cpf)) {
      setCpfError("Informe um CPF válido");
      return;
    }

    try {
      const response = await fetchUserByCpf(cpf);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchMusic = async () => {
    if (!lyrics) return;

    setResults(dummyResults);
    try {
      const response = await fetchMusicByLyrics(lyrics);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styled.Container>
      <Styled.Title>ÁREA ADMINISTRATIVA</Styled.Title>

      <SearchTypeSelector value={searchType} onTypeChange={setSearchType} />

      {searchType === "user" && (
        <Card>
          <h2>Buscar Usuário</h2>

          <Styled.Label>CPF</Styled.Label>

          <Input
            placeholder="Digite o CPF (somente números)"
            value={cpf}
            onChange={(e) => handleChangeCpf(e.target.value)}
            maxLength={14}
          />

          {cpfError && <Styled.ErrorMessage>{cpfError}</Styled.ErrorMessage>}

          <Button onClick={handleSearchUser} style={{ marginTop: "16px" }}>
            Buscar Usuário
          </Button>
        </Card>
      )}

      {searchType === "lyrics" && (
        <Card>
          <h2>Buscar Música</h2>

          <Styled.Label>Trecho da Letra</Styled.Label>

          <Input
            placeholder="Digite um trecho da música"
            value={lyrics}
            onChange={(e) => setLyrics(e.target.value)}
          />

          <Button
            color="green"
            onClick={handleSearchMusic}
            style={{ marginTop: "16px" }}
          >
            Buscar Música
          </Button>
        </Card>
      )}

      {searchType === "lyrics" && results.length > 0 && (
        <Card>
          <h3>Resultados da Busca</h3>

          <Table>
            <thead style={{ backgroundColor: "#f2f2f2" }}>
              <TableRow>
                <TableHeaderCell>E-mail</TableHeaderCell>

                <TableHeaderCell>Trecho da Letra</TableHeaderCell>

                <TableHeaderCell>Ações</TableHeaderCell>
              </TableRow>
            </thead>

            <tbody>
              {results.map((result) => (
                <TableRow key={result.id}>
                  <TableCell>{result.email}</TableCell>

                  <TableCell>{result.lyrics}</TableCell>

                  <TableCell>
                    <Button onClick={() => console.log(`/musica/${result.id}`)}>
                      Ver Detalhes
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </Card>
      )}
    </Styled.Container>
  );
};

export default Admin;
