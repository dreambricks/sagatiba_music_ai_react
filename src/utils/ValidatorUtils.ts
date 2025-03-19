export const validateCpfDigits = (text: string): boolean => {
  const cpf = text.replace(/[^\d]+/g, "");

  if (cpf.length !== 11) {
    return false;
  }

  if (/^(\d)\1+$/.test(cpf)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i += 1) {
    sum += parseInt(cpf.charAt(i), 10) * (10 - i);
  }

  let remainder = sum % 11;
  const digit1 = remainder < 2 ? 0 : 11 - remainder;

  if (parseInt(cpf.charAt(9), 10) !== digit1) {
    return false;
  }

  sum = 0;
  for (let i = 0; i < 10; i += 1) {
    sum += parseInt(cpf.charAt(i), 10) * (11 - i);
  }

  remainder = sum % 11;
  const digit2 = remainder < 2 ? 0 : 11 - remainder;

  if (parseInt(cpf.charAt(10), 10) !== digit2) {
    return false;
  }

  return true;
};
