"use client";

import React, { createContext, useContext, useState } from "react";
import { IAuthor } from "../types/authors";

type AuthorDataType = IAuthor | null;

interface AuthorContext {
  author: AuthorDataType;
  setAuthor: React.Dispatch<React.SetStateAction<AuthorDataType>>;
  authorsList: AuthorDataType[];
  setAuthorsList: React.Dispatch<React.SetStateAction<AuthorDataType[]>>;
}

const AuthorContext = createContext<AuthorContext | null>(null);

export const AuthorContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [author, setAuthor] = useState<AuthorDataType>(null);
  const [authorsList, setAuthorsList] = useState<AuthorDataType[]>([]);

  return (
    <AuthorContext.Provider
      value={{
        author,
        setAuthor,
        authorsList,
        setAuthorsList,
      }}
    >
      {children}
    </AuthorContext.Provider>
  );
};

export const useInfoAddClient = () => {
  const context = useContext(AuthorContext);

  if (!context) {
    throw new Error("context must be used inside the provider");
  }

  return context;
};
