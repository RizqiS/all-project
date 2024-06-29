import ContentSearch from "@/components/anime/search/search-content";

import { notFound } from "next/navigation";
import React from "react";

type Props = { searchParams: { [key: string]: string } };

export default function SearchPage({ searchParams }: Props) {
  const { keyword } = searchParams;

  if (!keyword) {
    return notFound();
  }

  return (
    <section className="container mx-auto mt-12">
      <ContentSearch keyword={keyword} />
    </section>
  );
}
