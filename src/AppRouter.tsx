import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';

import { BlogPage } from './components/blog/BlogPage';
import { BlogPostDetail } from './components/blog/BlogPostDetail';
import { BookClubPage } from './components/book-club/BookClubPage';
import { Layout } from './components/Layout';
import { ContactPage } from './components/ContactPage';
import { AuthPage } from './components/auth/AuthPage';
import { BlogAdmin } from './components/admin/BlogAdmin';
import { ProtectedRoute } from './components/admin/ProtectedRoute';
import { AuthProvider } from './hooks/useAuth';

export function AppRouter() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/contact"
            element={
              <Layout>
                <ContactPage />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <BlogPage />
              </Layout>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <Layout>
                <BlogPostDetail />
              </Layout>
            }
          />
          <Route
            path="/book-club"
            element={
              <Layout>
                <BookClubPage />
              </Layout>
            }
          />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <BlogAdmin />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}