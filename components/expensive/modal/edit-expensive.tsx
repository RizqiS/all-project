"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import FormExpensive from "../forms/form-expensive";
import { useContext, useEffect, useId, useState } from "react";
import { ExpensiveCtx } from "@/context/expensive";
import useSWR from "swr";
import { getExpensive } from "@/lib/fetch";
import { ExpensiveData } from "@/types/expensive/data.types";
import { tree } from "next/dist/build/templates/app-page";
import Loading from "../loading";

export default function EditExpensive() {
  const id = useId();
  const { isOpenEdit, setIsOpenEdit, idExpensive } = useContext(ExpensiveCtx);

  const { data: expensive, isLoading } = useSWR(`edit/${idExpensive}`, () =>
    getExpensive(idExpensive, "api/expensive")
  );

  const closeDialogClickHandler = (o: boolean) => {
    setIsOpenEdit(o);
  };

  return (
    <div id={id}>
      <Dialog open={isOpenEdit} onOpenChange={setIsOpenEdit}>
        <DialogContent id={id} aria-describedby="dialog-expensive" className={`${!isOpenEdit && "hidden"}`}>
          <DialogHeader className="-mb-24" aria-describedby="dialog-expensive">
            <DialogTitle aria-describedby="dialog-expensive">Edit Expensive</DialogTitle>
          </DialogHeader>
          {isLoading && <Loading />}
          {expensive && expensive.data && (
            <FormExpensive onClose={closeDialogClickHandler} expensiveData={expensive.data} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
