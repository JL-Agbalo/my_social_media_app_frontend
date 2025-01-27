import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const fetchUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const signup = async (
  username,
  email,
  password,
  passwordConfirmation
) => {
  const response = await api.post("/signup", {
    user: {
      username,
      email,
      password,
      password_confirmation: passwordConfirmation,
    },
  });
  console.log("response.data", response.data);
  return response.data;
};
