import axios from 'axios';
import { ISubject, ICreateSubject, IUpdateSubject } from '../types/subjects';

const API_BASE_URL = 'http://localhost:5000/api/v1/books/subjects';

export const fetchSubjects = async (): Promise<ISubject[]> => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const createSubject = async (data: ICreateSubject): Promise<ISubject> => {
  const response = await axios.post(API_BASE_URL, data);
  return response.data;
};

export const updateSubject = async (id: number, data: IUpdateSubject): Promise<ISubject> => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, data);
  return response.data;
};