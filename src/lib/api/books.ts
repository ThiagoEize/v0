import axios from 'axios';
import { IBook, ICreateBook, IUpdateBook } from '../types/books';

const API_BASE_URL = 'http://localhost:5000/api/v1/books';

export const fetchBooks = async (page = 1, pageSize = 10): Promise<IBook[]> => {
  const response = await axios.get(API_BASE_URL, { params: { page, page_size: pageSize } });
  return response.data;
};

export const fetchBooksByAuthor = async (authorSlug: string): Promise<IBook[]> => {
  const response = await axios.get(`${API_BASE_URL}/author/${authorSlug}`);
  return response.data;
};

export const fetchBooksBySubject = async (): Promise<string[]> => {
  const response = await axios.get(`${API_BASE_URL}/subjects`);
  return response.data;
};

export const fetchBooksBySubjectSlug = async (subjectSlug: string): Promise<IBook[]> => {
  const response = await axios.get(`${API_BASE_URL}/subjects/${subjectSlug}`);
  return response.data;
};

export const createBook = async (data: ICreateBook): Promise<IBook> => {
  const response = await axios.post(API_BASE_URL, data);
  return response.data;
};

export const updateBook = async (id: number, data: IUpdateBook): Promise<IBook> => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, data);
  return response.data;
};