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
  blocked: boolean;
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

          <Styled.ValueText>{userInfo?.name ?? "-"}</Styled.ValueText>
        </Styled.InfoItem>

        <Styled.InfoItem>
          <Styled.Label>E-mail</Styled.Label>

          <Styled.ValueText>{userInfo?.email ?? "-"}</Styled.ValueText>
        </Styled.InfoItem>

        <Styled.InfoItem>
          <Styled.Label>CPF</Styled.Label>

          <Styled.ValueText>
            {userInfo?.cpf ? applyCPFMask(userInfo.cpf) : "-"}
          </Styled.ValueText>
        </Styled.InfoItem>

        <Styled.InfoItem>
          <Styled.Label>Telefone</Styled.Label>

          <Styled.ValueText>
            {userInfo?.phone ? applyPhoneMask(userInfo.phone) : "-"}
          </Styled.ValueText>
        </Styled.InfoItem>
      </Styled.InfoGrid>
    </Card>
  );
};

export default UserInfo;
