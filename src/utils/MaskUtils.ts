export const applyCPFMask = (value: string): string => {
  // Remove todos os caracteres que não são números
  const numericValue = value.replace(/\D/g, "").slice(0, 11); // Limita a 11 dígitos

  // Aplica a máscara dinamicamente conforme o usuário digita
  if (numericValue.length <= 3) {
    return numericValue;
  }

  if (numericValue.length <= 6) {
    return `${numericValue.slice(0, 3)}.${numericValue.slice(3)}`;
  }

  if (numericValue.length <= 9) {
    return `${numericValue.slice(0, 3)}.${numericValue.slice(
      3,
      6
    )}.${numericValue.slice(6)}`;
  }

  return `${numericValue.slice(0, 3)}.${numericValue.slice(
    3,
    6
  )}.${numericValue.slice(6, 9)}-${numericValue.slice(9)}`;
};

export const applyPhoneMask = (value: string): string => {
  // Remove todos os caracteres que não são números
  const numericValue = value.replace(/\D/g, "");

  // Aplica a máscara de celular ((99) 99999-9999)
  const maskedValue = numericValue
    .slice(0, 11) // Limita o número a 11 dígitos
    .replace(/(\d{2})(\d)/, "($1) $2") // Adiciona os parênteses e o espaço
    .replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona o traço

  return maskedValue;
};

export const applyDateMask = (value: string): string => {
  // Remove todos os caracteres que não são números
  const numericValue = value.replace(/\D/g, "");

  // Aplica a máscara de data (dd/mm/yyyy)
  const maskedValue = numericValue
    .slice(0, 8) // Limita a data a 8 dígitos (ddmmyyyy)
    .replace(/(\d{2})(\d)/, "$1/$2") // Adiciona a primeira barra
    .replace(/(\d{2})(\d)/, "$1/$2"); // Adiciona a segunda barra

  return maskedValue;
};

export const applyNumberOnly = (value: string) => {
  return value.replace(/\D/g, "");
};
