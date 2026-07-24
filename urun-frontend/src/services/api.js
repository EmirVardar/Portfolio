import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (username, password) =>
  api.post('/auth/login', { username, password });

export const getPosts = () => api.get('/posts');
export const getPost = (id) => api.get(`/posts/${id}`);

export const createPost = ({ title, content, youtubeUrl, images }) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  if (youtubeUrl) formData.append('youtubeUrl', youtubeUrl);
  images.forEach((file) => formData.append('images', file));
  return api.post('/posts', formData);
};

export const deletePost = (id) => api.delete(`/posts/${id}`);

export const getComments = (postId) => api.get(`/posts/${postId}/comments`);
export const addComment = (postId, authorName, content) =>
  api.post(`/posts/${postId}/comments`, { authorName, content });
export const deleteComment = (id) => api.delete(`/comments/${id}`);

export default api;
