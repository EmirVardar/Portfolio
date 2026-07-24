import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Layout({ children }) {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header
        style={{ background: 'linear-gradient(to bottom, var(--retro-banner-start), var(--retro-banner-end))' }}
        className="text-white"
      >
        <div className="max-w-3xl mx-auto px-4 pt-3 pb-2">
          <Link to="/" className="retro-title text-3xl italic" style={{ textShadow: '2px 2px 2px rgba(0,0,0,0.5)' }}>
            <span className="twinkle">★</span> emirvardar's blog <span className="twinkle">★</span>
          </Link>
          <div className="retro-marquee text-xs mt-1" style={{ color: '#cfe0ff' }}>
            <span>*** yazılım, projeler ve kişisel notlar *** en iyi 1024x768 çözünürlükte görüntülenir *** hoş geldiniz! ***</span>
          </div>
        </div>
        <hr className="retro-hr m-0" />
        <nav className="max-w-3xl mx-auto px-4 py-1 text-sm">
          <Link to="/" className="hover:underline" style={{ color: '#fff' }}>Ana Sayfa</Link>
          <span className="mx-2" style={{ color: '#a9c2ff' }}>|</span>
          <Link to="/cv" className="hover:underline" style={{ color: '#fff' }}>CV</Link>
          <span className="mx-2" style={{ color: '#a9c2ff' }}>|</span>
          <Link to="/blog" className="hover:underline" style={{ color: '#fff' }}>Blog</Link>
          <span className="mx-2" style={{ color: '#a9c2ff' }}>|</span>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="hover:underline cursor-pointer" style={{ color: '#fff' }}>
              Çıkış
            </button>
          ) : (
            <Link to="/admin/login" className="hover:underline" style={{ color: '#fff' }}>Giriş</Link>
          )}
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 flex-1 w-full">{children}</main>

      <footer className="text-center text-xs py-3 space-y-2" style={{ color: 'var(--retro-muted)' }}>
        <hr className="retro-hr max-w-3xl mx-auto" />
        <p>emirvardar.com &middot; 2026'dan beri yayında</p>
        <p>
          ziyaretçi sayacı: <span className="retro-counter">000042</span>
        </p>
      </footer>
    </div>
  );
}
