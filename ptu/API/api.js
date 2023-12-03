import axios from "axios";

export const remove = async (id) =>
  await axios.delete("http://localhost:3001/product/" + id);

export const create = async (data) =>
  await axios.post("http://localhost:3001/product", data);

export const getData = async () => {
  return  axios.get("http://localhost:3001/customer");
};

export const read = async (id) => {
  return await axios.get("http://localhost:2000/product/" + id);
};

export const update = async (id, data) => {
  return await axios.put("http://localhost:2000/product/" + id, data);
};