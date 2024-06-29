import { FormDataExpensive } from "@/types/expensive/form.types";

const baseUrl = process.env.NEXT_PUBLIC_BASEURL as string;
export const urlJikan = process.env.NEXT_PUBLIC_JIKAN as string;

export async function post(data: FormDataExpensive, url: string, query?: string) {
  try {
    const res = await fetch(`${baseUrl}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-cache",
    });
    return res.json();
  } catch (error) {
    throw new Error("failed to post data");
  }
}

export async function patch(config: { data: FormDataExpensive; url: string; id: string; query?: string }) {
  const { data, id, url } = config;
  try {
    const res = await fetch(`${baseUrl}${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-cache",
    });
    return res.json();
  } catch (error) {
    throw new Error("failed to post data");
  }
}

export async function deletes(id: string, url: string) {
  try {
    const res = await fetch(`${baseUrl}/${url}/${id}`, {
      method: "DELETE",
    });
    return res.json();
  } catch (error) {
    throw new Error("failed to delete data");
  }
}

export async function getExpensive(id: string, url: string) {
  try {
    const res = await fetch(`${baseUrl}/${url}/${id}`, { cache: "no-store" });
    return res.json();
  } catch (error) {
    throw new Error("failed to delete data");
  }
}

interface PutRequestArgs {
  requestBody: FormDataExpensive;
  queryParams: {
    id: string;
  };
}
export async function withSwrPatch(url: string, { data }: { data: PutRequestArgs }) {
  const res = await fetch(`${baseUrl}/${url}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  return res.json();
}

export async function getJikanAnime(url: string, query?: string) {
  const res = await fetch(`${url}?${query}`, { cache: "no-store", next: { tags: ["jikan"] } });
  return res.json();
}

export async function waited() {
  await new Promise((resolve) => setTimeout(() => resolve("success"), 5000));
  return "hi there";
}
