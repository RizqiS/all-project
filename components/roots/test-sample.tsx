import React, { Suspense } from "react";
import { waited } from "@/lib/fetch";
import useSWR from "swr";
export default async function TestSample() {
  const data = await waited();

  return (
    <>
      <h1>{data as string}</h1>
    </>
  );
}
