import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../services/api';

export default function HomePage() {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((res) => setRecentPosts(Array.isArray(res.data) ? res.data.slice(0, 3) : []))
      .catch(() => setRecentPosts([]));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-1 space-y-4">
        <div className="retro-panel overflow-hidden">
          <div
            className="w-full h-32 flex items-center justify-center text-white text-4xl retro-title italic"
            style={{ background: 'linear-gradient(to bottom, var(--retro-banner-start), var(--retro-banner-end))' }}
          >
            EV
          </div>
          <div className="p-3 space-y-2">
            <h1 className="text-lg font-bold retro-title">Emir Vardar</h1>
            <p className="text-sm" style={{ color: 'var(--retro-muted)' }}>
              Backend Yazılım Geliştirici
            </p>
            <Link to="/cv" className="retro-btn retro-btn-gold w-full text-center block">
              📄 CV'mi Görüntüle
            </Link>
          </div>
        </div>

        <div className="retro-panel">
          <div className="retro-panel-header">☆ Hakkımda</div>
          <div className="p-3 text-sm space-y-1">
            <p>Yazılım geliştiriyorum, öğrendiklerimi ve projelerimi burada paylaşıyorum.</p>
          </div>
        </div>

        <div className="retro-panel">
          <div className="retro-panel-header">☆ İletişim</div>
          <div className="p-3 text-sm space-y-1">
            <p>emirvardar.com</p>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 space-y-4">
        <div className="retro-panel">
          <div className="retro-panel-header flex items-center justify-between">
            <span>☆ Son Yazılar</span>
            <Link to="/blog" className="font-normal hover:underline" style={{ color: '#fff' }}>
              tümünü gör &raquo;
            </Link>
          </div>
          <div className="p-3 space-y-3">
            {recentPosts.length === 0 ? (
              <p className="text-sm" style={{ color: 'var(--retro-muted)' }}>
                Henüz yazı yok.
              </p>
            ) : (
              recentPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="block border-b last:border-0 pb-2 last:pb-0"
                  style={{ borderColor: 'var(--retro-border-light)', borderBottomStyle: 'dashed' }}
                >
                  <p className="retro-title font-bold text-base" style={{ color: 'var(--retro-banner-start)' }}>
                    {post.title}
                  </p>
                  <p className="text-sm text-gray-700 line-clamp-2">{post.content}</p>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
