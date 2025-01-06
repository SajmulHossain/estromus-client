import axios from "axios";

export const customAxios = axios.create({
  baseURL: "https://ph-assignment-10-server-gray.vercel.app",
});

const useCustomAxios = () => {
  return customAxios;
};

export default useCustomAxios;