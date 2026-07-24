import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginRequest } from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function AdminLoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hata, setHata] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHata(null);
    loginRequest(username, password)
      .then((res) => {
        login(res.data.token);
        navigate('/blog');
      })
      .catch(() => setHata('Kullanıcı adı veya şifre yanlış.'));
  };

  return (
    <div className="max-w-sm mx-auto retro-panel">
      <div className="retro-panel-header">☆ Giriş</div>
      <form onSubmit={handleSubmit} className="p-4 space-y-3">
        {hata && <div className="text-sm text-red-700">{hata}</div>}
        <input
          type="text"
          placeholder="Kullanıcı adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="retro-input w-full px-2 py-1 text-sm"
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="retro-input w-full px-2 py-1 text-sm"
        />
        <button type="submit" className="retro-btn retro-btn-accent w-full">
          Giriş Yap
        </button>
      </form>
    </div>
  );
}
