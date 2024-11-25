'use client';

import { DataTable } from '@/components/shared/data-table';
import { IAuthor } from '@/lib/types/authors';
import { AuthorColumns } from './columns';
interface AuthorTableProps {
  authors: IAuthor[];
}

export default function AuthorTable({
  authors
}: AuthorTableProps) {
  const columns = AuthorColumns();

  return (
    <div>
      <DataTable columns={columns} data={authors} />
    </div>
  );
}
