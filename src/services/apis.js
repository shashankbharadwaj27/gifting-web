import axios from "axios";

const BASE_CATEGORY_URL = 'http://localhost:8080/api/categories';
const HERO_PRODUCTS_URL = 'http://localhost:8080/api/heroproducts';

export const saveCategory = async (category) => {
  const response = await axios.post(`${BASE_CATEGORY_URL}/save`, category);
  return response.data;
};

export const getAllCategories = async () => {
  const response = await axios.get(`${BASE_CATEGORY_URL}/all`);
  console.log(response.data)
  return response.data;
};

export const getCategoryById = async (id) => {
  const response = await axios.get(`${BASE_CATEGORY_URL}/${id}`);
  return response.data;
};

export const updateCategory = async (id, category) => {
  const response = await axios.put(`${BASE_CATEGORY_URL}/update/${id}`, category);
  return response.data;
};

export const deleteCategory = async (id) => {
  const response = await axios.delete(`${BASE_CATEGORY_URL}/delete/${id}`, { responseType: 'text' });
  return response.data;
};

export const getAllHeroproducts = async () => {
  const response = await axios.get(HERO_PRODUCTS_URL);
  return response.data;
};
