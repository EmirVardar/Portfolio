import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addComment, deleteComment, deletePost, getPost } from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function PostDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const [post, setPost] = useState(null);
  const [authorName, setAuthorName] = useState('');
  const [content, setContent] = useState('');
  const [hata, setHata] = useState(null);

  const yukle = () => {
    getPost(id)
      .then((res) => setPost(res.data))
      .catch(() => setHata('Yazı bulunamadı.'));
  };

  useEffect(() => {
    yukle();
  }, [id]);

  const handleYorumEkle = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    addComment(id, authorName, content)
      .then(() => {
        setContent('');
        yukle();
      })
      .catch(() => setHata('Yorum eklenemedi.'));
  };

  const handleYorumSil = (commentId) => {
    deleteComment(commentId).then(yukle);
  };

  const handlePostSil = () => {
    deletePost(id).then(() => navigate('/blog'));
  };

  if (hata) return <p className="text-sm text-red-700">{hata}</p>;
  if (!post) return <p className="text-sm" style={{ color: 'var(--retro-muted)' }}>Yükleniyor...</p>;

  return (
    <div className="space-y-4">
      <div className="retro-post p-4">
        <div className="flex items-center justify-between">
          <h1 className="retro-post-title text-xl">{post.title}</h1>
          {isAuthenticated && (
            <button onClick={handlePostSil} className="text-xs text-red-700 hover:underline cursor-pointer">
              Postu Sil
            </button>
          )}
        </div>
        <hr className="retro-hr" />
        <p className="whitespace-pre-wrap mt-2 text-sm">{post.content}</p>

        {post.imageUrls?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {post.imageUrls.map((url) => (
              <img key={url} src={url} alt="" className="max-h-64" style={{ border: '1px solid var(--retro-border)' }} />
            ))}
          </div>
        )}

        {post.youtubeVideoId && (
          <div className="mt-3 aspect-video max-w-xl">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${post.youtubeVideoId}`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>

      <div className="retro-panel">
        <div className="retro-panel-header">☆ Yorumlar ({post.comments.length})</div>
        <div className="p-3 space-y-2">
          {post.comments.map((c) => (
            <div key={c.id} className="retro-comment p-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="retro-comment-author">{c.authorName}</span>
                {isAuthenticated && (
                  <button
                    onClick={() => handleYorumSil(c.id)}
                    className="text-xs text-red-700 hover:underline cursor-pointer"
                  >
                    Sil
                  </button>
                )}
              </div>
              <p className="whitespace-pre-wrap mt-1">{c.content}</p>
            </div>
          ))}

          <form onSubmit={handleYorumEkle} className="space-y-2 pt-2">
            <input
              type="text"
              placeholder="İsim (opsiyonel)"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="retro-input w-full px-2 py-1 text-sm"
            />
            <textarea
              placeholder="Yorumun..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="retro-input w-full px-2 py-1 text-sm"
              rows={3}
            />
            <button type="submit" className="retro-btn retro-btn-accent">
              Yorum Yap
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
