import JSEncrypt from "jsencrypt";

const PUBLIC_KEY = `-----BEGIN RSA PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCfOesvSFFhz0kp
OfEFbrJEulpioOgAEgBbtdoQ7nAv1V6dBimNXaLt3zSmsTh/EmUnAZ39PTNL7Ks+
rDsXBSMPGNX5ibaxU3G/Lho8ECmh1+LsUj71t4UwCS4U9EXL6EhUvxLHRFP747q7
1X3+CH6+mdMgUl4P56DAp2JYTvhKXExHScjnjZSKA1pPy4Kux8QmeW+Q6+/C7zDN
9j4CmaBcnbA9trExTDK/JIj08XeI5JZ6P+5UHpXSs54Z2lTI/hcdG2n1y6x8aaT+
DOkhaLW7T2AejsFHr42nQ41+Q86avGpNUIBBh+y5v40Xe8m5lHYVekjuU8d6+Ivb
2t455nlZAgMBAAECggEAD6VES8rCXGcJhv3aMLDLiYn6KajVQx8sXoFETSzwucfb
L84UNSoslqJmbQlgRh7g8O/taJ3OiuOq1qdbzbZD107sb5mtlEe2bJUIyjrDAdPR
yMDdeOLbOSNzHhH77b5ZpSIlTo6TO160JugiejIMKjRj6iV4d/2dmRtEGZig4xrT
iEPeyadjHdkTCneuD0spgeMy5kCoX8keEDkRrbYBW3V3lNFq4jiukScVqJfy0+j9
DS1JZ8ub6L2YstDY1D/H6GefkT3a9NQhT7b9WWvdbv7BTA+eETMl5UBPCsZ6k4L+
4WYglPvE+6Vzpa+8Mm4Uqpmuglnz0fRQtwG9x6GyFQKBgQDY92JgLhDwpa9fG9l7
LEhpiTUESjJxQtLkioygF/hNNFnMXrGuSVX/PVRAKHSek0hhk9FPcTC0UGRuF6J+
G/1VjljVcJ0U7RmewAU7Rso0pMJGJCeydOSVaPYxaOzxnp16YfvtGjRxMPThTOTN
IDCOZLXjGEb+TA51yMQDpYMLKwKBgQC730CxjxAVDD8P4TdMhehPuEju1FuZAv/o
FX3r72L9C7dA5YNBEY+vX2adEA7VH0d+Q/V7Q5HWJu94SnSLD4PAUWLJzwcEHOy9
pSbzDHYvxWFLbPnSuSSpzo9WyvPt09dJHFVAWw7egRoZsPyMbzbBHZyqlQIIRqRU
8FAv4EW7iwKBgB0GIuvY3b1DfM1NTW+TwfAUQbpcLplGJi4adqtn6Xhye1zCgiRd
fRqS2rVmdAtOio07F/H3o1tLsdOkZ8FU/zO1wh5zXSASg63f5BNE6gHW1IJLjd/q
kTWHf/+mGKRN4qUffHMAYWmO8gM9pRHnr3cs88P4WG7mP7zz6XzPZFNXAoGAHk5p
VTtK0Npk4d7m2MVRMGr9+OjwzcIaHgo5gfHf+goFycY8Yia/Ev9Ewllwyxh8o/W6
h+PihrVJNBJusnASRNfcI8nty9AOsJkPq217M0GX7F7r/f4319ymas3ag6cEt5qG
dhc6UtJor3RJiS33mzd3qlzXMxaSM9GAXfjDxvkCgYA5N9MhRXGnTKq1J3gGvDng
cCbBBOdbeBpN3VJzFzLRHOAUeSgLwO1h3Sc6B8s61YpHg7tOGpRnwxAPIiqPb6eu
tA8BfUwzLLx0GhhtQUdXpqsulykOPyAH72Duq4a6fMcYVxV9V8GzXZi2Ej0TsNJm
z3C7Xk1Hn3p6U9IeYCXRmw==
-----END RSA PRIVATE KEY-----`;

export const encryptText = (text: string): string => {
  const encryptor = new JSEncrypt();

  encryptor.setPublicKey(PUBLIC_KEY);

  const encrypted = encryptor.encrypt(text);

  if (!encrypted) return text;

  return encrypted;
};

export const decryptText = (text: string): string => {
  const encryptor = new JSEncrypt();

  encryptor.setPublicKey(PUBLIC_KEY);

  const decrypted = encryptor.decrypt(text);

  if (!decrypted) return text;

  return decrypted;
};
