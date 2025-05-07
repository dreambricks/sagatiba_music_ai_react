import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import * as Styled from "./styles";
import Spinner from "../../../components/spinner";

type Props = PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: "blue" | "green" | "red" | "orange";
    asLink?: boolean;
    href?: string;
    download?: boolean;
    isLoading?: boolean;
    as?: keyof JSX.IntrinsicElements;
    [key: string]: unknown;
  };

const Button: React.FC<Props> = ({
  color = "blue",
  asLink = false,
  href,
  download,
  children,
  isLoading = false,
  onClick,
  ...rest
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isLoading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  if (asLink && href) {
    return (
      <Styled.Button
        as="a"
        href={href}
        $color={color}
        download={download}
        aria-disabled={isLoading}
        style={{ pointerEvents: isLoading ? "none" : undefined }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(rest as any)}
      >
        <Styled.ChildrenRow>
          {children}
          {isLoading && <Spinner />}
        </Styled.ChildrenRow>
      </Styled.Button>
    );
  }

  return (
    <Styled.Button
      type="button"
      $color={color}
      disabled={isLoading}
      onClick={handleClick}
      {...rest}
    >
      <Styled.ChildrenRow>
        {children}
        {isLoading && <Spinner />}
      </Styled.ChildrenRow>
    </Styled.Button>
  );
};

export default Button;
