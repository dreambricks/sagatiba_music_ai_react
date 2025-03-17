import React from "react";
import FormInput, { IFormInputProps } from "../formInput";
import { Control, useController } from "react-hook-form";

type Props = IFormInputProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
};

const ControlledInput: React.FC<Props> = ({ control, name, ...rest }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return <FormInput name={name} {...field} />;
};

export default ControlledInput;
