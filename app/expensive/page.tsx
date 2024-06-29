import React from "react";
import DataTable from "@/components/expensive/tables/data-table";
import AddExpensive from "@/components/expensive/modal/add-expensive";
import ExpensiveProvider from "@/context/expensive";
import DeleteExpensiveModal from "@/components/expensive/modal/delete-expensive";
import EditExpensive from "@/components/expensive/modal/edit-expensive";

import { column } from "@/components/expensive/tables/column";
import type { Metadata } from "next";
import { ExpensiveData } from "@/types/expensive/data.types";

export const metadata: Metadata = {
  title: "Expensive",
  description: "simple expensive app",
};

async function getData(): Promise<ExpensiveData[]> {
  const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  const res = await fetch(`${baseURL}/api/expensive`, { cache: "no-store" });
  const resJson = await res.json();
  return resJson;
}

export default async function ExpensivePage() {
  const data = await getData();
  return (
    <>
      <section className="mt-12">
        <ExpensiveProvider>
          <AddExpensive />
          <EditExpensive />
          <DeleteExpensiveModal />
          <DataTable columns={column} data={data} />
        </ExpensiveProvider>
      </section>
    </>
  );
}
