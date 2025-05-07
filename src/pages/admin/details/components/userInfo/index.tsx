import React from "react";
import * as Styled from "./styles";
import Card from "../../../components/card";
import { applyCPFMask, applyPhoneMask } from "../../../../../utils/MaskUtils";

export type IUserInfo = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
};

type Props = {
  userInfo: IUserInfo | null;
};

const UserInfo: React.FC<Props> = ({ userInfo }) => {
  return (
    <Card>
      <h2>Informações do Usuário</h2>

      <Styled.InfoGrid>
        <Styled.InfoItem>
          <Styled.Label>Nome</Styled.Label>

          <p>{userInfo?.name ?? "-"}</p>
        </Styled.InfoItem>

        <Styled.InfoItem>
          <Styled.Label>E-mail</Styled.Label>

          <p>{userInfo?.email ?? "-"}</p>
        </Styled.InfoItem>

        <Styled.InfoItem>
          <Styled.Label>CPF</Styled.Label>

          <p>{userInfo?.cpf ? applyCPFMask(userInfo.cpf) : "-"}</p>
        </Styled.InfoItem>

        <Styled.InfoItem>
          <Styled.Label>Telefone</Styled.Label>

          <p>{userInfo?.phone ? applyPhoneMask(userInfo.phone) : "-"}</p>
        </Styled.InfoItem>
      </Styled.InfoGrid>
    </Card>
  );
};

export default UserInfo;
