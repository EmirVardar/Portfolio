import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function NewPostPage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [images, setImages] = useState([]);
  const [hata, setHata] = useState(null);
  const [gonderiliyor, setGonderiliyor] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) navigate('/admin/login');
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setGonderiliyor(true);
    setHata(null);
    createPost({ title, content, youtubeUrl, images })
      .then((res) => navigate(`/blog/${res.data.id}`))
      .catch(() => setHata('Post oluşturulamadı.'))
      .finally(() => setGonderiliyor(false));
  };

  return (
    <div className="retro-panel max-w-xl mx-auto">
      <div className="retro-panel-header">☆ Yeni Post</div>
      <form onSubmit={handleSubmit} className="p-4 space-y-3">
        {hata && <div className="text-sm text-red-700">{hata}</div>}
        <input
          type="text"
          placeholder="Başlık"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="retro-input w-full px-2 py-1 text-sm"
        />
        <textarea
          placeholder="Metin"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="retro-input w-full px-2 py-1 text-sm"
        />
        <input
          type="url"
          placeholder="YouTube linki (opsiyonel)"
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
          className="retro-input w-full px-2 py-1 text-sm"
        />
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setImages(Array.from(e.target.files))}
          className="w-full text-sm"
        />
        <button type="submit" disabled={gonderiliyor} className="retro-btn retro-btn-accent disabled:opacity-60">
          {gonderiliyor ? 'Gönderiliyor...' : 'Yayınla'}
        </button>
      </form>
    </div>
  );
}
