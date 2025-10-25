
export async function sendSignupData(values) {
  const response = await fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  if (!response.ok) throw new Error("Signup failed");
  return await response.json();
}

export async function sendLoginData(values) {
  const response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  if (!response.ok) throw new Error("Login failed");
  return await response.json();
}


/*import axios from "axios";

export const sendSignupData = async (data: { name: string; email: string; password: string }) => {
  const response = await axios.post("https://api.example.com/signup", data);
  return response.data;
};

export const sendLoginData = async (data: { email: string; password: string }) => {
  const response = await axios.post("https://api.example.com/login", data);
  return response.data;
};
