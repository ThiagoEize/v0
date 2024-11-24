'use client'

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { createColumnHelper } from "@tanstack/react-table";
import { BookActionsDropdown } from "./actions";

const columnHelper = createColumnHelper<any>();

export const getBookColumns = (setModalState: React.Dispatch<React.SetStateAction<any>>): ColumnDef<any>[] => [
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
    accessorKey: "author",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Author
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
    cell: (info) => {
      const rowData = info.row.original;
      return <BookActionsDropdown rowData={rowData} setModalState={setModalState} />;
    },
  }),
];