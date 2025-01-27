import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const signup = (userData) => api.post("/signup", userData);
export const login = (credentials) => api.post("/login", credentials);
export const fetchPosts = () => api.get("/posts");
// export const fetchProfile = (userId) => api.get(`/profile/${userId}`);
export const fetchPostById = (postId) => api.get(`/posts/${postId}`);
