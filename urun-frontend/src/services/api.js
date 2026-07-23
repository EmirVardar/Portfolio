import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const getUrunler = () => api.get('/urunler');
export const urunEkle = (urun) => api.post('/urunler', urun);
export const urunSil = (id) => api.delete(`/urunler/${id}`);

export default api;