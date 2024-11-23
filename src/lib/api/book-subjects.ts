import axios from 'axios';
import { IBookSubject, ICreateBookSubject, IUpdateBookSubject } from '../types/book-subjects';

const API_BASE_URL = 'http://localhost:5000/api/v1/book-subjects';

export const fetchBookSubjects = async (): Promise<IBookSubject[]> => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const createBookSubject = async (data: ICreateBookSubject): Promise<IBookSubject> => {
  const response = await axios.post(API_BASE_URL, data);
  return response.data;
};

export const updateBookSubject = async (id: number, data: IUpdateBookSubject): Promise<IBookSubject> => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, data);
  return response.data;
};