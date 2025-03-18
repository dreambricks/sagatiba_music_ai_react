export const applyCPFMask = (value: string): string => {
  // Remove todos os caracteres que não são números
  const numericValue = value.replace(/\D/g, "");

  // Aplica a máscara de CPF (999.999.999-99)
  const maskedValue = numericValue
    .slice(0, 11) // Limita o CPF a 11 dígitos
    .replace(/(\d{3})(\d)/, "$1.$2") // Adiciona o primeiro ponto
    .replace(/(\d{3})(\d)/, "$1.$2") // Adiciona o segundo ponto
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Adiciona o traço

  return maskedValue;
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
