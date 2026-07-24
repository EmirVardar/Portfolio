import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BlogListPage from './pages/BlogListPage';
import PostDetailPage from './pages/PostDetailPage';
import NewPostPage from './pages/NewPostPage';
import AdminLoginPage from './pages/AdminLoginPage';
import CvPage from './pages/CvPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cv" element={<CvPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/new" element={<NewPostPage />} />
            <Route path="/blog/:id" element={<PostDetailPage />} />
            <Route path="/admin/login" element={<AdminLoginPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
