import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, deletePost } from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function BlogListPage() {
  const { isAuthenticated } = useAuth();
  const [posts, setPosts] = useState([]);
  const [yukleniyor, setYukleniyor] = useState(true);

  const yukle = () => {
    setYukleniyor(true);
    getPosts()
      .then((res) => setPosts(Array.isArray(res.data) ? res.data : []))
      .finally(() => setYukleniyor(false));
  };

  useEffect(() => {
    yukle();
  }, []);

  const handleSil = (id) => {
    deletePost(id).then(yukle);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl retro-title font-bold" style={{ color: 'var(--retro-banner-start)' }}>
          Blog Arşivi
        </h1>
        {isAuthenticated && (
          <Link to="/blog/new" className="retro-btn retro-btn-accent">
            + Yeni Post
          </Link>
        )}
      </div>
      <hr className="retro-hr" />

      {yukleniyor ? (
        <p className="text-sm" style={{ color: 'var(--retro-muted)' }}>
          Yükleniyor...
        </p>
      ) : posts.length === 0 ? (
        <p className="text-sm" style={{ color: 'var(--retro-muted)' }}>
          Henüz yazı yok.
        </p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="retro-post p-3 flex gap-3">
            {post.coverImageUrl && (
              <img
                src={post.coverImageUrl}
                alt=""
                className="w-20 h-20 object-cover flex-shrink-0"
                style={{ border: '1px solid var(--retro-border)' }}
              />
            )}
            <div className="flex-1 min-w-0">
              <Link to={`/blog/${post.id}`} className="retro-post-title hover:underline text-lg">
                {post.title}
              </Link>
              <p className="text-sm line-clamp-2 mt-1">{post.content}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs" style={{ color: 'var(--retro-muted)' }}>
                  {post.commentCount} yorum
                </span>
                {isAuthenticated && (
                  <button
                    onClick={() => handleSil(post.id)}
                    className="text-xs text-red-700 hover:underline cursor-pointer"
                  >
                    Sil
                  </button>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
