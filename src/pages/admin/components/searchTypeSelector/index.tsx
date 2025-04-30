import React from "react";
import * as Styled from "./styles";

type Props = {
  value: "user" | "lyrics";
  onTypeChange: (type: "user" | "lyrics") => void;
};

const SearchTypeSelector: React.FC<Props> = ({ value, onTypeChange }) => {
  return (
    <div style={{ marginTop: "16px", marginBottom: "24px" }}>
      <Styled.RadioGroup>
        <label>
          <Styled.RadioInput
            type="radio"
            name="searchType"
            value="usuario"
            checked={value === "user"}
            onChange={() => {
              onTypeChange("user");
            }}
          />
          Buscar Usuário
        </label>

        <label>
          <Styled.RadioInput
            type="radio"
            name="searchType"
            value="musica"
            checked={value === "lyrics"}
            onChange={() => {
              onTypeChange("lyrics");
            }}
          />
          Buscar Música
        </label>
      </Styled.RadioGroup>
    </div>
  );
};

export default SearchTypeSelector;
