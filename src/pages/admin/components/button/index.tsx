import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import * as Styled from "./styles";

type Props = PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: "blue" | "green" | "red" | "orange";
    asLink?: boolean;
    href?: string;
    download?: boolean;
  };

const Button: React.FC<Props> = ({
  color = "blue",
  asLink = false,
  href,
  download,
  children,
  ...rest
}) => {
  if (asLink && href) {
    return (
      <Styled.Button
        as="a"
        href={href}
        $color={color}
        download={download}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(rest as any)}
      >
        {children}
      </Styled.Button>
    );
  }

  return (
    <Styled.Button type="button" $color={color} {...rest}>
      {children}
    </Styled.Button>
  );
};

export default Button;
