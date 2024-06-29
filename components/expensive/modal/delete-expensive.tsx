"use client";
import { ExpensiveCtx } from "@/context/expensive";
import React, { useContext } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deletes } from "@/lib/fetch";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

export default function ExpensiveDeleteModal() {
  const { isopen, setOpen, setIdExpensive: setIdDelete, idExpensive: idDelete } = useContext(ExpensiveCtx);
  const router = useRouter();

  const deleteClickHandler = async () => {
    await deletes(idDelete, "api/expensive");

    const date = Date.now();
    toast({
      title: "delete",
      description: "success deleted " + new Date(date).toLocaleDateString(),
      duration: 2000,
    });

    setOpen(false);
    setIdDelete("");
    router.refresh();
  };

  return (
    <>
      {isopen && (
        <AlertDialog open={isopen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure you want to delete?</AlertDialogTitle>
              <AlertDialogDescription>
                This data will be permanently lost if you delete it, are you still sure you want to delete this data?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={deleteClickHandler}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
}
