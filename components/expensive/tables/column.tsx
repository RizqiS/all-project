"use client";

import React, { useContext } from "react";
import { ColumnDef, Row } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { ExpensiveData } from "@/types/expensive/data.types";
import { ExpensiveCtx } from "@/context/expensive";

export const column: ColumnDef<ExpensiveData>[] = [
  {
    accessorKey: "no",
    header: () => <div className="text-left text-lg font-semibold text-black">No.</div>,
    cell: ({ row }) => {
      return <div className="text-left font-medium">{row.index + 1}</div>;
    },
  },
  {
    accessorKey: "title",
    header: () => <div className="text-left text-lg font-semibold text-black">Title</div>,
  },

  {
    accessorKey: "amount",
    header: () => <div className="text-left text-lg font-semibold text-black">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },

  {
    accessorKey: "date",
    header: () => <div className="text-left text-lg font-semibold text-black">Date</div>,
    cell: ({ row }) => {
      const formatedDate = row.getValue("date") as string;
      const date1 = new Date(formatedDate).toISOString().substring(0, 10);

      return <div>{date1}</div>;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => <DropMenuAction data={row} />,
  },
];

function DropMenuAction({ data }: { data: Row<ExpensiveData> }) {
  const { setOpen, setIdExpensive, setIsOpenEdit } = useContext(ExpensiveCtx);

  const deleteClickHandler = () => {
    setIdExpensive(data.original.id);
    setOpen(true);
  };

  const editClickHandler = () => {
    setIdExpensive(data.original.id);
    setIsOpenEdit(true);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-max">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={deleteClickHandler} className="text-md cursor-pointer">
          Delete customer
        </DropdownMenuItem>
        <DropdownMenuItem onClick={editClickHandler} className="text-md cursor-pointer">
          Edit customer
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
