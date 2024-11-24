'use client'

import { Button } from "@/components/ui/button";
import { fetchBooks } from "@/lib/api/books";
import { bookColumns } from "./components/bookColumns";
import { DataTable } from "@/components/ui/DataTable";
import { usePaginatedQuery } from "@/hooks/usePaginatedQuery";
import { IBook } from "@/lib/types/books";
import Spinner from "@/components/ui/spinner";

export default function Home() {
  const {
    data: books,
    isLoading,
    refetch,
  } = usePaginatedQuery<IBook[]>({
    queryKey: ["products"],
    fetch: () => {
      return fetchBooks();
    },
  });
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button variant="destructive">Teste2</Button>
      {isLoading ?
        <Spinner size="large" color="border-blue-500" />
        :
        <DataTable columns={bookColumns} data={books || []} />
      }

    </div>
  );
}
