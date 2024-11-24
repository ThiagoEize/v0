'use client';

import { fetchBooks } from '@/lib/api/books';
import { DataTable } from '@/components/shared/data-table';
import { usePaginatedQuery } from '@/hooks/usePaginatedQuery';
import { IBook } from '@/lib/types/books';
import Spinner from '@/components/ui/spinner';
import { useEffect, useState } from 'react';
import { getBookColumns } from './columns';
import EditBookDialog from './dialogs/edit';
import CreateBookDialog from './dialogs/add';
import { Button } from '@/components/ui/button';
import DetailsBookDialog from './dialogs/show';
import DeleteBookDialog from './dialogs/delete';

export type ModalType = "delete" | "edit" | "create" | "view"

export interface IBookState {
  type: ModalType | null;
  isOpen: boolean;
  data?: IBook;
}

export default function BookTable() {
  const {
    data: books,
    isLoading,
    refetch,
  } = usePaginatedQuery<IBook[]>({
    queryKey: ['books-home'],
    fetch: () => {
      return fetchBooks();
    },
  });

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
        <Button onClick={() => handleAddBook()}>Add book</Button>
      </div>
      {isLoading ?
        <Spinner size="large" color="border-blue-500" />
        :
        <DataTable columns={columns} data={books || []} />
      }
      {modalState.type === "edit" && (
        <EditBookDialog
          isOpen={modalState.isOpen}
          onClose={handleCloseModal}
          book={modalState.data}
          refetch={refetch}
        />
      )}
      {modalState.type === "create" && (
        <CreateBookDialog
          isOpen={modalState.isOpen}
          onClose={handleCloseModal}
          refetch={refetch}
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
          refetch={refetch}
        />
      )}
    </div>
  );
}
