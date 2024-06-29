import { FieldError, UseFormRegister } from "react-hook-form";

export type FormDataExpensive = {
  title: string;
  amount: number;
  date: string;
};

export type FormFieldProps = {
  type: string;
  defaultValue?: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormDataExpensive>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames = "title" | "amount" | "date";
