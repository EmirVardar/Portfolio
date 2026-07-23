import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const getUrunler = () => api.get('/urunler');
export const urunEkle = (urun) => api.post('/urunler', urun);
export const urunSil = (id) => api.delete(`/urunler/${id}`);

export default api;