import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const fetchUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const signup = async (
  userName,
  email,
  password,
  passwordConfirmation
) => {
  const response = await api.post("/signup", {
    userName,
    email,
    password,
    password_confirmation: passwordConfirmation,
  });
  return response.data;
};
