'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { IBook } from '@/lib/types/books';
import { updateBook } from '@/lib/api/books';

const editBookSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  publisher: z.string().optional(),
  synopsis: z.string().optional(),
});

interface EditBookFormProps {
  book: IBook;
  onSuccess: () => void;
}

export default function EditBookForm({ book, onSuccess }: EditBookFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof editBookSchema>>({
    resolver: zodResolver(editBookSchema),
    defaultValues: book,
  });

  useEffect(() => {
    if (book) {
      setValue('title', book.title || '');
      setValue('publisher', book.publisher || '');
      setValue('synopsis', book.synopsis || '');
    }
  }, [book, setValue]);

  const onSubmit = async (data: z.infer<typeof editBookSchema>) => {
    try {
      await updateBook(book.id, data);
      toast({ title: 'Success', description: 'Book updated successfully.' });
      onSuccess();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update book.',
        variant: 'destructive',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <Input id="title" {...register('title')} />
        {errors.title && (
          <p className="text-red-500">{errors.title.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="publisher"
          className="block text-sm font-medium text-gray-700"
        >
          Publisher
        </label>
        <Input id="publisher" {...register('publisher')} />
        {errors.publisher && (
          <p className="text-red-500">{errors.publisher.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="synopsis"
          className="block text-sm font-medium text-gray-700"
        >
          Synopsis
        </label>
        <Input id="synopsis" {...register('synopsis')} />
        {errors.synopsis && (
          <p className="text-red-500">{errors.synopsis.message}</p>
        )}
      </div>
      <Button type="submit">Save Changes</Button>
    </form>
  );
}
