import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormFieldProps } from "@/types/expensive/form.types";
import React from "react";

export default function FieldExpensive({
  error,
  name,
  defaultValue,
  placeholder,
  register,
  type,
  valueAsNumber,
}: FormFieldProps) {
  return (
    <>
      <Label id={name} className="capitalize">
        {name}
      </Label>
      <Input
        type={type}
        defaultValue={defaultValue || ""}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
        className={`ring-1 ring-slate-700 ${type === "date" ? "w-max" : "w-full"}`}
      />
      {error && <span className="text-red-700">{error.message}</span>}
    </>
  );
}
