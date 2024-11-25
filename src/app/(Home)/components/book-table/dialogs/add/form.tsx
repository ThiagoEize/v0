'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
// import { toast } from '@/hooks/use-toast';
import { createBook } from '@/lib/api/books';

const addBookSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  publisher: z.string().optional(),
  synopsis: z.string().optional(),
});

interface CreateBookFormProps {
  onSuccess: () => void;
}

export default function AddBookForm({ onSuccess }: CreateBookFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof addBookSchema>>({
    resolver: zodResolver(addBookSchema),
  });

  const onSubmit = async (data: z.infer<typeof addBookSchema>) => {
    try {
      await createBook({ ...data, author_id: 1 });
      // toast({ title: 'Success', description: 'Book added successfully.' });
      onSuccess();
    } catch (error) {
      // toast({ title: 'Error', description: 'Failed to add book.', variant: 'destructive' });
      console.error('Error adding book', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <Input id="title" {...register('title')} />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>
      <div>
        <label htmlFor="publisher" className="block text-sm font-medium text-gray-700">Publisher</label>
        <Input id="publisher" {...register('publisher')} />
        {errors.publisher && <p className="text-red-500">{errors.publisher.message}</p>}
      </div>
      <div>
        <label htmlFor="synopsis" className="block text-sm font-medium text-gray-700">Synopsis</label>
        <Input id="synopsis" {...register('synopsis')} />
        {errors.synopsis && <p className="text-red-500">{errors.synopsis.message}</p>}
      </div>
      <Button type="submit">Add Book</Button>
    </form>
  );
}
