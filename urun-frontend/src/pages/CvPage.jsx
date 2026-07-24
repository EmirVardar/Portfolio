export default function CvPage() {
  return (
    <div className="retro-panel max-w-3xl mx-auto">
      <div className="retro-panel-header flex items-center justify-between">
        <span>
          <span className="twinkle">★</span> Özgeçmiş <span className="twinkle">★</span>
        </span>
        <a href="/cv.pdf" download className="retro-btn retro-btn-gold">
          ⬇ PDF İndir
        </a>
      </div>
      <div className="p-4">
        <iframe
          src="/cv.pdf"
          title="Emir Vardar CV"
          className="w-full"
          style={{ height: '80vh', border: '2px solid var(--retro-border)', background: '#fff' }}
        />
        <p className="text-xs text-center mt-3" style={{ color: 'var(--retro-muted)' }}>
          PDF görüntülenmiyorsa yukarıdaki "PDF İndir" butonunu kullanabilirsin.
        </p>
      </div>
    </div>
  );
}
