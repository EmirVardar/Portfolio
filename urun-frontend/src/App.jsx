import { useEffect, useState } from 'react';
import { getUrunler, urunEkle, urunSil } from './services/api';

function App() {
  const [urunler, setUrunler] = useState([]);
  const [ad, setAd] = useState('');
  const [fiyat, setFiyat] = useState('');
  const [yukleniyor, setYukleniyor] = useState(true);
  const [hata, setHata] = useState(null);

  const urunleriGetir = () => {
    setYukleniyor(true);
    getUrunler()
      .then(res => {
        setUrunler(res.data);
        setHata(null);
      })
      .catch(err => {
        console.error(err);
        setHata('Ürünler yüklenemedi. Backend çalışıyor mu?');
      })
      .finally(() => setYukleniyor(false));
  };

  useEffect(() => {
    urunleriGetir();
  }, []);

  const handleEkle = (e) => {
    e.preventDefault();
    if (!ad || !fiyat) return;

    urunEkle({ ad, fiyat: parseFloat(fiyat) })
      .then(() => {
        setAd('');
        setFiyat('');
        urunleriGetir();
      })
      .catch(err => {
        console.error(err);
        setHata('Ürün eklenemedi.');
      });
  };

  const handleSil = (id) => {
    urunSil(id)
      .then(() => urunleriGetir())
      .catch(err => {
        console.error(err);
        setHata('Ürün silinemedi.');
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Ürün Yönetimi</h1>

        {hata && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {hata}
          </div>
        )}

        <form onSubmit={handleEkle} className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Ürün adı"
            value={ad}
            onChange={(e) => setAd(e.target.value)}
            className="flex-1 border rounded px-3 py-2"
          />
          <input
            type="number"
            step="0.01"
            placeholder="Fiyat"
            value={fiyat}
            onChange={(e) => setFiyat(e.target.value)}
            className="w-32 border rounded px-3 py-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Ekle
          </button>
        </form>

        {yukleniyor ? (
          <p className="text-gray-500">Yükleniyor...</p>
        ) : urunler.length === 0 ? (
          <p className="text-gray-500">Henüz ürün yok.</p>
        ) : (
          <ul className="divide-y">
            {urunler.map((urun) => (
              <li key={urun.id} className="flex justify-between items-center py-3">
                <div>
                  <p className="font-medium text-gray-800">{urun.ad}</p>
                  <p className="text-gray-500 text-sm">{urun.fiyat} ₺</p>
                </div>
                <button
                  onClick={() => handleSil(urun.id)}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Sil
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;