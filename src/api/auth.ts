import axios from "axios";

export const sendSignupData = async (data: { name: string; email: string; password: string }) => {
  const response = await axios.post("https://api.example.com/signup", data);
  return response.data;
};

export const sendLoginData = async (data: { email: string; password: string }) => {
  const response = await axios.post("https://api.example.com/login", data);
  return response.data;
};