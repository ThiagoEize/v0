'use client'

import { DataTable } from "@/components/ui/DataTable";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react"

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "status",
    // header: "Status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "email",
    // header: "Email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
]

const data = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f",
    amount: 200,
    status: "pending",
    email: "te@gmail.com",
  },
  {
    id: "728ed52f",
    amount: 300,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f",
    amount: 400,
    status: "pending",
    email: "te@gmail.com",
  },
  {
    id: "728ed52f",
    amount: 500,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f",
    amount: 600,
    status: "pending",
    email: "te@gmail.com",
  },
  {
    id: "728ed52f",
    amount: 700,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f",
    amount: 800,
    status: "pending",
    email: "te@gmail.com",
  },
  {
    id: "728ed52f",
    amount: 900,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f",
    amount: 1000,
    status: "pending",
    email: "te@gmail.com",
  },
  {
    id: "728ed52f",
    amount: 1100,
    status: "pending",
    email: "m@example.com",
  },
]


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button variant="destructive">Teste</Button>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
