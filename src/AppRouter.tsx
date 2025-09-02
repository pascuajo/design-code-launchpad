import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';

import { BlogPage } from './components/blog/BlogPage';
import { BlogPostDetail } from './components/blog/BlogPostDetail';
import { BookClubPage } from './components/book-club/BookClubPage';
import { Layout } from './components/Layout';

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
            path="/blog"
            element={
              <Layout
                title="Blog - Clearmont Strategic Product Consulting"
                description="Insights on product management, digital transformation, and strategic leadership from 15+ years of experience in FinTech, PropTech, and enterprise SaaS."
                keywords="product management blog, digital transformation insights, strategic leadership, FinTech consulting, PropTech innovation, enterprise SaaS strategy"
                url="https://clearmontconsulting.com/blog"
              >
                <BlogPage />
              </Layout>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <Layout
                title="Blog Post - Clearmont Strategic Product Consulting"
                description="Strategic insights on product management, digital transformation, and business innovation from industry expert Joe Pascual."
                keywords="product management, digital transformation, business strategy, innovation insights"
                url="https://clearmontconsulting.com/blog"
              >
                <BlogPostDetail />
              </Layout>
            }
          />
          <Route
            path="/book-club"
            element={
              <Layout
                title="Book Club - Clearmont Strategic Product Consulting"
                description="Curated reading list for strategic leaders and product managers. Books on business strategy, innovation, and digital transformation."
                keywords="business books, product management books, strategic leadership reading, innovation books, digital transformation literature"
                url="https://clearmontconsulting.com/book-club"
              >
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