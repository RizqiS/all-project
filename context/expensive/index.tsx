"use client";
import { createContext, useState } from "react";

type CtxTypeExpensive = {
  isopen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenEdit: boolean;
  setIsOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
  idExpensive: string;
  setIdExpensive: React.Dispatch<React.SetStateAction<string>>;
};

export const ExpensiveCtx = createContext<CtxTypeExpensive>({
  isopen: false,
  idExpensive: "",
  isOpenEdit: false,
  setIsOpenEdit: () => {},
  setOpen: () => {},
  setIdExpensive: () => {},
});

export default function ExpensiveProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [idExpensive, setIdExpensive] = useState("");
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const values = {
    isopen: open,
    idExpensive,
    isOpenEdit,
    setIsOpenEdit,
    setOpen,
    setIdExpensive,
  };

  return <ExpensiveCtx.Provider value={values}>{children}</ExpensiveCtx.Provider>;
}
