import axios from 'axios';
import { IAuthor, ICreateAuthor, IUpdateAuthor } from '../types/authors';

const API_BASE_URL = 'http://localhost:5000/api/v1/authors';

export const fetchAuthors = async (): Promise<IAuthor[]> => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const createAuthor = async (data: ICreateAuthor): Promise<IAuthor> => {
  const response = await axios.post(API_BASE_URL, data);
  return response.data;
};

export const updateAuthor = async (id: number, data: IUpdateAuthor): Promise<IAuthor> => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, data);
  return response.data;
};