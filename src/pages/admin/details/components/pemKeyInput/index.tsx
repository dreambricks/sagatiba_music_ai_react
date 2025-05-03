import React from "react";
import Button from "../../../components/button";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PemKeyInput: React.FC<Props> = ({ onChange }) => {
  return (
    <div style={{ marginBottom: "16px" }}>
      <Button as="label" htmlFor="privateKeyUpload">
        Upload da chave privada (.pem)
      </Button>

      <input
        type="file"
        id="privateKeyUpload"
        accept=".pem"
        style={{ display: "none" }}
        onChange={onChange}
      />
    </div>
  );
};

export default PemKeyInput;
