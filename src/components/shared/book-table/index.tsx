'use client';

import { DataTable } from '@/components/shared/data-table';
import { IBook } from '@/lib/types/books';
import { useEffect, useState } from 'react';
import { getBookColumns } from './columns';
import EditBookDialog from './dialogs/edit';
import CreateBookDialog from './dialogs/add';
import DetailsBookDialog from './dialogs/show';
import DeleteBookDialog from './dialogs/delete';
import { Button } from '@/components/ui/button';

export type ModalType = "delete" | "edit" | "create" | "view";

export interface IBookState {
  type: ModalType | null;
  isOpen: boolean;
  data?: IBook;
}

interface BookTableProps {
  books: IBook[];
  refetchBooks: () => void;
}

export default function BookTable({
  books,
  refetchBooks,
}: BookTableProps) {
  const [modalState, setModalState] = useState<IBookState>({
    type: null,
    isOpen: false,
    data: undefined,
  });

  const columns = getBookColumns(setModalState);

  const handleCloseModal = () => {
    setModalState({ type: null, isOpen: false, data: undefined });
  };

  function handleAddBook(): void {
    setModalState({ type: 'create', isOpen: true, data: undefined });
  }

  useEffect(() => {
    console.log('modalState', modalState);
  }, [modalState.type]);

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button onClick={handleAddBook}>Add book</Button>
      </div>
      <DataTable columns={columns} data={books} />
      {modalState.type === "edit" && (
        <EditBookDialog
          isOpen={modalState.isOpen}
          onClose={handleCloseModal}
          book={modalState.data}
          refetch={refetchBooks}
        />
      )}
      {modalState.type === "create" && (
        <CreateBookDialog
          isOpen={modalState.isOpen}
          onClose={handleCloseModal}
          refetch={refetchBooks}
        />
      )}
      {modalState.type === "view" && (
        <DetailsBookDialog
          isOpen={modalState.isOpen}
          onClose={handleCloseModal}
          book={modalState.data}
        />
      )}
      {modalState.type === "delete" && (
        <DeleteBookDialog
          isOpen={modalState.isOpen}
          onClose={handleCloseModal}
          book={modalState.data}
          refetch={refetchBooks}
        />
      )}
    </div>
  );
}
