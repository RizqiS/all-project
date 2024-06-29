import { FormDataExpensive } from "@/types/expensive/form.types";
import { z, ZodType } from "zod";

export const ExpensiveUserSchema: ZodType<FormDataExpensive> = z.object({
  title: z.string().min(1, "title is required"),
  amount: z.number({ message: "number is required" }).min(1, "number can't not be less than 0"),
  date: z.string().min(1, "date is required"),
});
