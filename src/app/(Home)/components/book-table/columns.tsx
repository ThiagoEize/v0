'use client';

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { createColumnHelper } from "@tanstack/react-table";
import { BookActionsDropdown } from "./actions";
import { useAuthors } from "@/lib/context/authors";

const columnHelper = createColumnHelper<any>();

export const getBookColumns = (
  setModalState: React.Dispatch<React.SetStateAction<any>>
): ColumnDef<any>[] => {
  const { authorsList } = useAuthors();

  return [
    {
      accessorKey: "title",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },
    {
      accessorKey: "author_id",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Author Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: (info) => {
        const authorId = info.getValue();
        const author = authorsList?.find((author) => author?.id === authorId);
        return author ? author.title : "Unknown Author";
      },
    },
    {
      accessorKey: "publisher",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Publisher
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },
    {
      accessorKey: "pages",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Pages
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },
    columnHelper.display({
      id: "actions",
      header: () => "Actions",
      cell: (info) => {
        const rowData = info.row.original;
        return <BookActionsDropdown rowData={rowData} setModalState={setModalState} />;
      },
    }),
  ];
};
