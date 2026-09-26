import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Works from './pages/Works';
import WhyPage from './pages/WhyPage';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hizmetler/:slug" element={<ServiceDetail />} />
            <Route path="/calismalar" element={<Works />} />
            <Route path="/neden-emir" element={<WhyPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
