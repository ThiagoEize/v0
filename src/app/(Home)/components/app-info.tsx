'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export const AppInfo: React.FC = () => {
  const router = useRouter();

  const navigateToBooks = () => {
    router.push('/books');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        Welcome to <span className="text-blue-500">BookFinder</span>
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-6">
        Discover your next favorite book with <span className="text-blue-500 font-semibold">BookFinder</span>.
        Whether you're searching for the latest bestsellers, timeless classics, or niche genres, we offer an
        extensive collection to satisfy every reader's taste. Start your journey into the world of literature today!
      </p>
      <Button onClick={navigateToBooks} className="w-auto px-6">
        See Our Books
      </Button>
    </div>
  );
};
