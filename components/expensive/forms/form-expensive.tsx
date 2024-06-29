"use client";
import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDataExpensive } from "@/types/expensive/form.types";
import { ExpensiveUserSchema } from "@/lib/zod";
import { Button } from "../../ui/button";
import { useToast } from "@/components/ui/use-toast";
import { post, patch, withSwrPatch } from "@/lib/fetch";

import FieldExpensive from "./field-expensive";
import { useRouter } from "next/navigation";
import { ExpensiveData } from "@/types/expensive/data.types";

import useSWR from "swr";

type Props = {
  onClose(close: boolean): void;
  expensiveData?: ExpensiveData;
};

export default function FormExpensive({ onClose, expensiveData: expensive }: Props) {
  const { toast } = useToast();
  const router = useRouter();
  // const { mutate } = useSWR(`api/expensive/${expensive?.id}`, withSwrPatch);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataExpensive>({
    resolver: zodResolver(ExpensiveUserSchema),
  });

  const onSubmit = async (data: FormDataExpensive) => {
    if (expensive) {
      await patch({ data, url: `/api/expensive`, id: expensive.id });
    } else {
      await post(data, "/api/expensive");
    }

    const date = Date.now();
    onClose(false);
    toast({
      title: "success",
      description: expensive ? "update data " : "adding data " + new Date(date).toLocaleDateString(),
      duration: 2000,
    });

    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto container max-w-2xl mt-12">
      <div className="flex flex-col gap-4">
        <FieldExpensive
          type="text"
          name="title"
          defaultValue={expensive?.title}
          placeholder="Title"
          register={register}
          error={errors.title}
        />
        <FieldExpensive
          type="number"
          name="amount"
          defaultValue={expensive?.amount.toString()}
          placeholder="Amount"
          register={register}
          error={errors.amount}
          valueAsNumber
        />
        <FieldExpensive
          type="date"
          name="date"
          defaultValue={expensive ? new Date(expensive?.date!).toISOString().substring(0, 10) : ""}
          placeholder="Date"
          register={register}
          error={errors.date}
        />
        <Button className="mt-4" aria-describedby="formsubmitbutotn">
          {expensive ? "Update" : "Add"}
        </Button>
      </div>
    </form>
  );
}
