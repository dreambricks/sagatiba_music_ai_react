import React, { PropsWithChildren } from "react";
import { Container } from "./styles";

type Props = PropsWithChildren & {
  className?: string;
};

export const ContentContainer: React.FC<Props> = ({ className, children }) => {
  return <Container className={className}>{children}</Container>;
};
