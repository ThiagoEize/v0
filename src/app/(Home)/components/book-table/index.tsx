'use client'

import { Button } from "@/components/ui/button";
import { fetchBooks } from "@/lib/api/books";
import { DataTable } from "@/components/shared/DataTable";
import { usePaginatedQuery } from "@/hooks/usePaginatedQuery";
import { IBook } from "@/lib/types/books";
import Spinner from "@/components/ui/spinner";
import { useEffect, useState } from "react";
import { getBookColumns } from "./columns";
import { IBookState } from "./actions";

export default function BookTable() {
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

  const [modalState, setModalState] = useState<IBookState>({ type: null, isOpen: false, data: undefined });
  const columns = getBookColumns(setModalState);

  useEffect(() => {
    console.log("modalState", modalState);
  }, [modalState]);

  return (
    <div>
      {isLoading ?
        <Spinner size="large" color="border-blue-500" />
        :
        <DataTable columns={columns} data={books || []} />
      }
    </div>
  );
}
