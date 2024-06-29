"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import FormExpensive from "../forms/form-expensive";
import { useState } from "react";

export default function AddExpensive() {
  const [open, setOpen] = useState(false);

  const closeDialogClickHandler = (o: boolean) => {
    setOpen(o);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="flex justify-end container mx-auto">
        <DialogTrigger asChild>
          <div>
            <Button variant="default">Add Expensive</Button>
          </div>
        </DialogTrigger>
      </div>
      <DialogContent>
        <DialogHeader className="-mb-24">
          <DialogTitle>Add Expensive</DialogTitle>
        </DialogHeader>
        <FormExpensive onClose={closeDialogClickHandler} />
      </DialogContent>
    </Dialog>
  );
}
