export type IUserJson = {
  message: string;
  token: string;
};

export type IRegisterUserBody = {
  email: string;
  password_hash: string;
  user_info_hash: string;
  phone: string;
};
